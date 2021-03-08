import { useEffect, useState } from 'react';

export const useMarkdown = (filePath: string) => {
  const [contents, setContents] = useState<string | null>('' || null);

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then(text => {
        setContents(text);
      });
  }, [filePath]);

  return {
    contents,
  };
};
