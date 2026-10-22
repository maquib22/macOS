import { useEffect, useState } from "react"
import MacWindow from "./MacWindow"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Note({ onClose }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadNote() {
      try {
        const response = await fetch("/note.txt", { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Unable to load note (${response.status}).`);
        }
        setContent(await response.text());
      } catch (loadError) {
        if (!(loadError instanceof Error && loadError.name === "AbortError")) {
          setError(
            loadError instanceof Error ? loadError.message : "Unable to load note.",
          );
        }
      }
    }

    loadNote();
    return () => controller.abort();
  }, []);

  return (
    <MacWindow onClose={onClose} title="Notes">
      <div className="note-window">
        {error ? (
          <p role="alert">{error}</p>
        ) : content === null ? (
          <p>Loading note…</p>
        ) : (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {content}
          </SyntaxHighlighter>
        )}
      </div>
    </MacWindow>
  );
}

export default Note;