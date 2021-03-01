import React from 'react';
import { LiveError, LiveEditor, LivePreview, LiveProvider } from 'react-live';

export interface LiveEditProps {
  code: string;
  scope: any;
}
export const LiveEdit: React.FC<LiveEditProps> = ({ code, scope }) => (
  <LiveProvider
    code={code}
    scope={scope}
    // noInline
  >
    <LivePreview />
    <LiveError />
    <LiveEditor />
  </LiveProvider>
);
