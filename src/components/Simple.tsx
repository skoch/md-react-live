import React from 'react';
import CommonMark from 'commonmark';
import { Link } from 'react-router-dom';
import ReactRenderer, { CodeBlockProps } from 'commonmark-react-renderer';

import { Card } from './Card';
import { Header } from './Header';
import { LiveEdit } from './LiveEdit';

import { useMarkdown } from '../utils/useMarkdown';

import markdown from '../content/Simple.md';

const Simple = (): JSX.Element | null => {
  const { contents } = useMarkdown(markdown);
  if (!contents) return null;

  const renderers = {
    CodeBlock: (props: CodeBlockProps) => {
      // console.log('language', props.language);
      // console.log('codeinfo', props.codeinfo);
      // console.log('literal:\n', props.literal);

      const { literal } = props;

      const scope = { Header, Card };

      return literal ? <LiveEdit defaultCode={literal} scope={scope} /> : null;
    },
  };

  const parser = new CommonMark.Parser();
  const renderer = new ReactRenderer({ renderers });

  const parsed = parser.parse(contents);
  const rendered = renderer.render(parsed);

  return (
    <main>
      <nav>
        <Link to="complex">Complex Example</Link>
      </nav>
      <h1>Simple Example</h1>
      {rendered}
    </main>
  );
};
export default Simple;
