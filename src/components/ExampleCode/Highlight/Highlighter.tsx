import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { ReturnComponentType } from '../../../types';

import Theme from './Theme';

export const Highlighter = (): ReturnComponentType => {
  const child = `<div class='golden-grid'>
    <div style='grid-area:
      11 /  1 / span 10 / span
      12;'>
  </div>
</div>`;

  return (
    <SyntaxHighlighter
      language="htmlbars"
      style={Theme}
      showLineNumbers
      showInlineLineNumbers
      customStyle={{
        background: 'rgba(179, 186, 192, 0.2)',
        borderRadius: '8px',
        maxWidth: '325px',
      }}
    >
      {child}
    </SyntaxHighlighter>
  );
};
