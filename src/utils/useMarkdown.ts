import { useEffect, useState } from 'react';

export interface MarkdownProps {
  contents: string | null;
}

export const useMarkdown = (filePath: string): MarkdownProps => {
  const [contents, setContents] = useState<string | null>('' || null);

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(text => {
        setContents(text);
      });
  }, [filePath]);

  return {
    contents,
  };
};
