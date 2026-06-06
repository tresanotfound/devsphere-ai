export const summarizeNote = (
  note
) => {

  const lines =
    note
      .split("\n")
      .filter(
        (line) =>
          line.trim() !== ""
      );

  const keyPoints =
    lines
      .slice(0, 5)
      .map(
        (line) =>
          `• ${line}`
      )
      .join("\n");

  return `
📋 Summary

This note contains ${
    lines.length
  } important points.

🔑 Key Points

${keyPoints}

⚡ Action Items

• Review requirements
• Complete pending tasks
• Schedule follow-up

📅 Status

Ready for execution.
`;
};