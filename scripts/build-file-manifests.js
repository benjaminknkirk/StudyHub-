#!/usr/bin/env node
/* Rebuild files/<course-id>/index.json from whatever is in that folder.
   Adding a library file is: drop it in the folder, then run this script.
   A GitHub Action runs it on pushes that touch files/.

   Dates already recorded for a path are kept when the file size is unchanged,
   so a fresh checkout does not rewrite the manifest. */
"use strict";

var fs = require("fs");
var path = require("path");

var root = path.join(__dirname, "..");
var filesRoot = path.join(root, "files");

var MIME = {
  pdf: "application/pdf",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  txt: "text/plain",
  md: "text/markdown",
  csv: "text/csv",
  json: "application/json",
  zip: "application/zip",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};

function courseIds() {
  var src = fs.readFileSync(path.join(root, "courses", "registry.js"), "utf8");
  var ids = [];
  var re = /"([^"]+)"/g;
  var m;
  while ((m = re.exec(src))) ids.push(m[1]);
  return ids;
}

function walk(dir, base, out) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(function (name) {
    if (name === "index.json" || name.charAt(0) === ".") return;
    var abs = path.join(dir, name);
    var rel = base ? base + "/" + name : name;
    var st = fs.statSync(abs);
    if (st.isDirectory()) walk(abs, rel, out);
    else if (st.isFile()) out.push({ abs: abs, rel: rel, size: st.size, mtime: st.mtime.toISOString() });
  });
}

function previousByPath(file) {
  var map = {};
  if (!fs.existsSync(file)) return map;
  try {
    var data = JSON.parse(fs.readFileSync(file, "utf8"));
    (data.files || []).forEach(function (entry) { if (entry && entry.path) map[entry.path] = entry; });
  } catch (e) { /* rewrite a broken manifest */ }
  return map;
}

function buildOne(id) {
  var dir = path.join(filesRoot, id);
  fs.mkdirSync(dir, { recursive: true });
  var found = [];
  walk(dir, "", found);
  found.sort(function (a, b) { return a.rel < b.rel ? -1 : a.rel > b.rel ? 1 : 0; });
  var manifestPath = path.join(dir, "index.json");
  var prev = previousByPath(manifestPath);
  var files = found.map(function (item) {
    var ext = path.extname(item.rel).replace(/^\./, "").toLowerCase();
    var folder = path.posix.dirname(item.rel);
    if (folder === ".") folder = "";
    var prior = prev[item.rel];
    var date = prior && prior.size === item.size && prior.date ? prior.date : item.mtime;
    return {
      name: path.posix.basename(item.rel),
      path: item.rel,
      folder: folder,
      ext: ext,
      mime: MIME[ext] || "application/octet-stream",
      size: item.size,
      date: date
    };
  });
  var body = JSON.stringify({ courseId: id, files: files }, null, 2) + "\n";
  if (fs.existsSync(manifestPath) && fs.readFileSync(manifestPath, "utf8") === body) return false;
  fs.writeFileSync(manifestPath, body);
  return true;
}

var ids = courseIds();
if (!ids.length) {
  console.error("No course ids found in courses/registry.js");
  process.exit(1);
}
var changed = [];
ids.forEach(function (id) {
  if (id.indexOf("/") >= 0 || id.indexOf("..") >= 0) return;
  if (buildOne(id)) changed.push(id);
});
if (changed.length) console.log("Updated manifests: " + changed.join(", "));
else console.log("Manifests already match the files on disk.");
