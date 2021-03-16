/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useView, Compiler, Editor, Error } from 'react-view';
import presetTypescript from '@babel/preset-typescript';

import { LiveEditProps } from './LiveEdit';

export const ReactView: React.FC<LiveEditProps> = ({ defaultCode, scope }) => {
  const params = useView({
    initialCode: defaultCode,
    scope,
    onUpdate: console.log,
  });

  return (
    <>
      <Compiler {...params.compilerProps} presets={[presetTypescript]} />
      <Editor {...params.editorProps} language="tsx" />
      <Error {...params.errorProps} />
    </>
  );
};
