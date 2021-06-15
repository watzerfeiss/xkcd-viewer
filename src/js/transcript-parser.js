const parseTranscript = (rawText) => {
  const paragraphs = rawText
    .replace(/{{.*}}/, "")
    .trim()
    .split("\n\n");
  return paragraphs
    .map((p) => {
      p = p
        .replaceAll(/\<\<(.*)\>\>/g, "<code>$1</code>")
        .replaceAll(/\[\[(.*)\]\]/g, "<strong>$1</strong>")
        .replaceAll(/\(\((.*)\)\)/g, "<em>$1</em>")
        .replaceAll("\n", "<br>");
      return `<p>${p}</p>`;
    })
    .join("");
};

export { parseTranscript };
