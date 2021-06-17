const parseTranscript = (rawText) => {
  if (!rawText) {
    return "<em>No transcript available</em>";
  }

  return (
    rawText
      // remove the alt-text transcript, as it's handled separately
      .replace(/{{[^{]*?([aA]lt|[tT]itle)\ ?([tT]ext)*:[^}]*?}}/, "")
      .trim()

      // escape angle brackets
      .replaceAll(/(?<!\<)\<(?!\<)/g, "&lt;")
      .replaceAll(/(?<!\>)\>(?!\>)/g, "&gt;")

      .replaceAll(/\<\<([\w\W]*?)\>\>/g, "<code>$1</code>")
      .replaceAll(/\[\[([\w\W]*?)\]\]/g, "<strong>$1</strong>")
      .replaceAll(/\(\(([\w\W]*?)\)\)/g, "<em>$1</em>")
      .replaceAll(/\{\{([\w\W]*?)\}\}/g, "<em><strong>$1</strong></em>")

      //split into paragraphs
      .split("\n\n")
      // replace single newlines with breaks
      .map((p) => `<p>${p.replaceAll("\n", "<br>")}</p>`)
      .join("")
  );
};

export { parseTranscript };
