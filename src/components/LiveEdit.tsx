import React, { useState } from 'react';
import { LiveError, LiveEditor, LivePreview, LiveProvider } from 'react-live';
import { JsxEmit, ModuleKind, ScriptTarget, transpileModule } from 'typescript';
import theme from 'prism-react-renderer/themes/vsDark';
// eslint-disable-next-line max-len
import { insertReturnKeywordTransformer } from '../utils/insert-return-keyword-transformer';

export interface LiveEditProps {
  defaultCode: string;
  scope: any;
}

export const LiveEdit: React.FC<LiveEditProps> = ({ defaultCode, scope }) => {
  const [code, setCode] = useState(defaultCode);
  const [transpiledIsOpen, setTranspiledIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(true);

  const transformCode = (snippet: string) => {
    const tCode = transpileModule(snippet, {
      compilerOptions: {
        // enables dependency injection in component constructors
        experimentalDecorators: true,
        // enables dependency injection in component constructors
        emitDecoratorMetadata: true,
        allowSyntheticDefaultImports: true,
        downlevelIteration: true,
        esModuleInterop: true,
        isolatedModules: false,
        jsx: JsxEmit.React,
        module: ModuleKind.CommonJS,
        target: ScriptTarget.ES5,
        noImplicitUseStrict: true,
      },
      transformers: { before: [insertReturnKeywordTransformer()] },
    }).outputText;

    return `(function() { var exports = {}; ${tCode} })()`;
  };

  const handleToggleTranspiled = () => {
    setTranspiledIsOpen(!transpiledIsOpen);
  };

  const handleToggleEdit = () => {
    setEditIsOpen(!editIsOpen);
  };

  const buttonLabel = transpiledIsOpen ? 'Hide Transpiled' : 'View Transpiled';
  const editorButtonLabel = editIsOpen ? 'Close Editor' : 'Edit Inline';
  return (
    <LiveProvider
      language="typescript"
      code={code}
      scope={scope}
      theme={theme}
      transformCode={c => transformCode(c)}
    >
      <h3>Preview</h3>
      <div
        style={{
          border: '5px solid #bababa',
          marginBottom: '10px',
          padding: '20px',
        }}
      >
        <LivePreview />
      </div>

      <LiveError />

      <button type="button" onClick={handleToggleEdit}>
        {editorButtonLabel}
      </button>
      {editIsOpen && <LiveEditor onChange={(c: string) => setCode(c)} />}

      <button type="button" onClick={handleToggleTranspiled}>
        {buttonLabel}
      </button>
      {transpiledIsOpen && (
        <div>
          <h3>Transpiled:</h3>
          <pre>
            <code>{transformCode(code)}</code>
          </pre>
        </div>
      )}
    </LiveProvider>
  );
};
