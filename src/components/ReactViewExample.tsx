// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import { useView, Compiler, Editor, Error } from 'react-view';
// import presetTypescript from '@babel/preset-typescript';

// export default (): JSX.Element => {
//   const params = useView({
//     initialCode: `() => {
//       const text: string = "Typed";
//       return <h2>{text}</h2>;
//     }`,
//     scope: {},
//     onUpdate: console.log,
//   });

//   return (
//     <>
//       <Compiler {...params.compilerProps} presets={[presetTypescript]} />
//       <Editor {...params.editorProps} language="tsx" />
//       <Error {...params.errorProps} />
//     </>
//   );
// };
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Link } from 'react-router-dom';
import CommonMark from 'commonmark';
import ReactRenderer, { CodeBlockProps } from 'commonmark-react-renderer';

import * as HeaderModule from './Header';
import { useMarkdown } from '../utils/useMarkdown';

import markdown from '../content/Complex-full.md';
import { ReactView } from './ReactView';

const modules: { [packageName: string]: any } = {
  react: React,
  '../components/Header': HeaderModule,
};

function moduleResolver(moduleName: string): any {
  return modules[moduleName];
}
const ReactViewExample = (): JSX.Element | null => {
  const { contents } = useMarkdown(markdown);
  if (!contents) return null;

  const renderers = {
    CodeBlock: (props: CodeBlockProps) => {
      const { literal } = props;
      // console.log('language', props.language);
      // console.log('codeinfo', props.codeinfo);
      console.log('literal:\n', literal);

      return literal ? (
        <div
          style={{
            padding: '0 0 50px',
            borderBottom: '5px solid #bababa',
            marginBottom: '50px',
          }}
        >
          <ReactView
            defaultCode={literal}
            scope={{ require: moduleResolver }}
          />
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
      <h1>ReactView Example</h1>
      {rendered}
    </main>
  );
};
export default ReactViewExample;
