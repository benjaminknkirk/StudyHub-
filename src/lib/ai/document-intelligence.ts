export type ExtractedPage = {
  page: number;
  text: string;
};

export type DocumentExtraction = {
  filename: string;
  mimeType: string;
  pageCount: number;
  fullText: string;
  pages: ExtractedPage[];
  limitations: string[];
};

/** Extract text from PDF buffers; fall back gracefully when parsing fails. */
export async function extractDocument(
  buffer: Buffer,
  filename: string,
  mimeType: string,
): Promise<DocumentExtraction> {
  const limitations: string[] = [];
  const lower = filename.toLowerCase();

  if (
    mimeType.includes("pdf") ||
    lower.endsWith(".pdf") ||
    mimeType === "application/octet-stream"
  ) {
    try {
      const { PDFParse } = await import("pdf-parse");
      const parser = new PDFParse({ data: buffer });
      const result = await parser.getText();
      await parser.destroy();
      const fullText = result.text?.trim() || "";
      const pageCount = result.total || estimatePages(fullText);
      const pages = splitIntoPages(fullText, pageCount);
      if (!fullText) {
        limitations.push(
          "PDF contained little extractable text (may be image-only slides).",
        );
      }
      return {
        filename,
        mimeType: mimeType || "application/pdf",
        pageCount,
        fullText,
        pages,
        limitations,
      };
    } catch {
      limitations.push("PDF parser failed; using raw text fallback.");
    }
  }

  if (
    lower.endsWith(".pptx") ||
    mimeType.includes("presentation")
  ) {
    limitations.push(
      "PowerPoint binary parsing is limited in MVP — paste-exported notes or PDF preferred. Attempting UTF-8 text scan.",
    );
  }

  const fullText = buffer.toString("utf8").replace(/\u0000/g, "").trim();
  const pages = splitIntoPages(fullText || filename, Math.max(1, estimatePages(fullText)));
  if (!fullText) {
    limitations.push("Could not extract textual content from this file.");
  }
  return {
    filename,
    mimeType,
    pageCount: pages.length,
    fullText: fullText || `[Unreadable file: ${filename}]`,
    pages,
    limitations,
  };
}

function estimatePages(text: string): number {
  if (!text) return 1;
  const markers = text.match(/slide\s+\d+/gi);
  if (markers && markers.length > 1) return markers.length;
  return Math.max(1, Math.ceil(text.length / 1800));
}

function splitIntoPages(text: string, pageCount: number): ExtractedPage[] {
  if (!text) return [{ page: 1, text: "" }];
  const bySlide = text.split(/(?=Slide\s+\d+)/i).filter(Boolean);
  if (bySlide.length > 1) {
    return bySlide.map((chunk, i) => ({
      page: i + 1,
      text: chunk.trim(),
    }));
  }
  const size = Math.ceil(text.length / pageCount);
  const pages: ExtractedPage[] = [];
  for (let i = 0; i < pageCount; i += 1) {
    pages.push({
      page: i + 1,
      text: text.slice(i * size, (i + 1) * size).trim(),
    });
  }
  return pages.filter((p) => p.text.length > 0).length
    ? pages
    : [{ page: 1, text }];
}
