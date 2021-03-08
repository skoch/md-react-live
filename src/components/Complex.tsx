import * as React from 'react';
import { Link } from 'react-router-dom';
import CommonMark from 'commonmark';
import ReactRenderer, { CodeBlockProps } from 'commonmark-react-renderer';

import * as HeaderModule from './Header';
import { LiveEdit } from '../LiveEdit';
import { useMarkdown } from '../utils/useMarkdown';

import markdown from '../content/Complex-full.md';

const modules: { [packageName: string]: any } = {
  react: React,
  '../components/Header': HeaderModule,
};

export function require(moduleName: string): any {
  return modules[moduleName];
}
const Complex = (): JSX.Element | null => {
  const { contents } = useMarkdown(markdown);
  if (!contents) return null;

  const renderers = {
    CodeBlock: (props: CodeBlockProps) => {
      const { literal } = props;
      // console.log('language', props.language);
      // console.log('codeinfo', props.codeinfo);
      // console.log('literal:\n', props.literal);

      return literal ? (
        <div
          style={{
            padding: '10px 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <LiveEdit defaultCode={literal} scope={{ require }} />
        </div>
      ) : null;
    },
  };

  const parser = new CommonMark.Parser();
  const renderer = new ReactRenderer({ renderers });

  const parsed = parser.parse(contents);
  const rendered = renderer.render(parsed);

  return (
    <main>
      <nav>
        <Link to="simple">Simple Example</Link>
      </nav>
      <h1>Complex Example</h1>
      {rendered}
    </main>
  );
};
export default Complex;
