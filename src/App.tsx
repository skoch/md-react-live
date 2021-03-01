import './App.css';

import { useEffect, useState } from 'react';
import CommonMark from 'commonmark';
import ReactRenderer, { CodeBlockProps } from "commonmark-react-renderer";

import { Header } from './Header';
import { LiveEdit } from './LiveEdit';

import markdown from './Simple.md';
// import markdown from './HeaderDemo.md';

function App() {
  const [contents, setContents] = useState<string | null>('' || null);

  useEffect(() => {
    fetch(markdown)
      .then((response) => response.text())
      .then(text => {
        setContents(text);
      });
  }, []);

  const renderers = {
    CodeBlock: (props: CodeBlockProps) => {
      console.log('language', props.language);
      console.log('codeinfo', props.codeinfo);
      console.log('literal:\n', props.literal);

      const scope = { Header };

      return props.literal ? <LiveEdit code={props.literal} scope={scope} /> : null;
    },
  };

  if (!contents) return null;

  const parser = new CommonMark.Parser();
  const renderer = new ReactRenderer({ renderers });
  const parsed = parser.parse(contents);
  // console.log('parsed', parsed);
  const result = renderer.render(parsed);
  // console.log('result', result);

  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;
