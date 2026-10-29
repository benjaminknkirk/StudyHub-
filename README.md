# StudyHub

Personal study site. Plain HTML and JavaScript, no build step for the pages, served by GitHub Pages from `main`.

## File library

Each course has a library on its page and at `#/course/<course-id>/files`. Files live in the repo under `files/<course-id>/`. Subfolders are listed as groups.

**This repository is public.** Anything in `files/` can be downloaded by anyone who can open the site. Do not add private notes, graded work you cannot share, or material you do not have the rights to publish.

To add a file:

1. Drop it in `files/<course-id>/`, or in a subfolder such as `files/<course-id>/lectures/`.
2. Run `node scripts/build-file-manifests.js`.
3. Commit the file and the updated `files/<course-id>/index.json`.

A GitHub Action runs that script on pushes that touch `files/`, and commits the manifest if it changed. The site does not preload library files. A file is saved for offline use after you download or preview it.

See `COURSES-FORMAT.md` for the manifest fields.