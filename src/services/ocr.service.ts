// services/ocr.service.ts

function extractPlateFromText(
  text: string
): string | null {
  const cleaned = text
    .toUpperCase()
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const patterns = [
    /\b[A-Z]{3}\s?\d{4}\b/, // ABC 1234
    /\b[A-Z]{2}\s?\d{5}\b/, // AB 12345
    /\b[A-Z]{2}\s?\d{4}\b/, // AB 1234
    /\b[A-Z]{3}\s?\d{3}\b/, // ABC 123
    /\b[A-Z]{2,3}[- ]?\d{3,5}\b/,
  ];

  for (const pattern of patterns) {
    const match = cleaned.match(pattern);

    if (match) {
      return match[0].replace(
        /[^A-Z0-9]/g,
        ""
      );
    }
  }

  return null;
}

export async function recognizePlate(
  file: File
) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "https://api.ocr.space/parse/image",
    {
      method: "POST",
      headers: {
        apikey:
          import.meta.env.VITE_OCR_API_KEY,
      },
      body: formData,
    }
  );

  const data = await response.json();

  const text =
    data.ParsedResults?.[0]?.ParsedText ?? "";

  const plate =
    extractPlateFromText(text);

  return {
    plate: plate ?? "",
    debug: text,
  };
}