const parseTranscript = (rawText) => {
  if (!rawText) {
    return "<em>No transcript available</em>";
  }

  return rawText
    .replace(/{{.*[tT]ext:.*}}/, "")
    .trim()
    .replaceAll(/\<\<(.*?)\>\>/g, "<code>$1</code>")
    .replaceAll(/\[\[(.*?)\]\]/g, "<strong>$1</strong>")
    .replaceAll(/\(\((.*?)\)\)/g, "<em>$1</em>")
    .split("\n\n")
    .map((p) => `<p>${p.replaceAll("\n", "<br>")}</p>`)
    .join("");
};

export { parseTranscript };
