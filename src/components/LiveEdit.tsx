import React, { useState } from 'react';
import { LiveError, LiveEditor, LivePreview, LiveProvider } from 'react-live';
import { JsxEmit, ModuleKind, ScriptTarget, transpileModule } from 'typescript';
import theme from 'prism-react-renderer/themes/okaidia';
// eslint-disable-next-line max-len
import { insertReturnKeywordTransformer } from '../utils/insert-return-keyword-transformer';

export interface LiveEditProps {
  defaultCode: string;
  scope: any;
}

export const LiveEdit: React.FC<LiveEditProps> = ({ defaultCode, scope }) => {
  const [code, setCode] = useState(defaultCode);
  const [transpiledIsOpen, setTranspiledIsOpen] = useState(false);

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

  return (
    <LiveProvider
      language="typescript"
      code={code}
      scope={scope}
      theme={theme}
      transformCode={transformCode}
    >
      <div className="bordered">
        <div className="preview-wrapper">
          <LivePreview />
        </div>

        <LiveError />
        <LiveEditor onChange={(c: string) => setCode(c)} />

        <button type="button" onClick={handleToggleTranspiled}>
          Toggle Transpiled
        </button>
        {transpiledIsOpen && (
          <div>
            <pre>{transformCode(code)}</pre>
          </div>
        )}
      </div>
    </LiveProvider>
  );
};
