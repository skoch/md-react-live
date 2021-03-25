/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Link } from 'react-router-dom';
import CommonMark from 'commonmark';
import ReactRenderer, { CodeBlockProps } from 'commonmark-react-renderer';

import * as HeaderModule from './Header';
import * as CardModule from './Card';

import { LiveEdit } from './LiveEdit';
import { useMarkdown } from '../utils/useMarkdown';

import markdown from '../content/Complex-full.md';

const modules: { [packageName: string]: any } = {
  react: React,
  '../components/Card': CardModule,
  '../components/Header': HeaderModule,
};

export function moduleResolver(moduleName: string): any {
  return modules[moduleName];
}

const Complex = (): JSX.Element | null => {
  const { contents } = useMarkdown(markdown);
  if (!contents) return null;

  const renderers = {
    CodeBlock: (props: CodeBlockProps) => {
      const { literal } = props;

      return literal ? (
        <div>
          <LiveEdit defaultCode={literal} scope={{ require: moduleResolver }} />
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
        <h3>
          <Link to="/">React Live with TypeScript</Link>
        </h3>
        <Link to="simple">
          <button type="button">Simple Example</button>
        </Link>
      </nav>
      <h1>Complex Example</h1>
      {rendered}
    </main>
  );
};
export default Complex;
