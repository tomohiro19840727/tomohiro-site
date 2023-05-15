import React from 'react';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript } from 'react-syntax-highlighter/dist/esm/languages/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'tailwindcss/tailwind.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

function PostDetail({ selectedPostText, selectedCode }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <p className="text-2xl text-gray-800 mb-4">{selectedPostText}</p>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <SyntaxHighlighter
            language="javascript"
            style={materialDark}
            className="p-4 text-sm font-mono text-white"
          >
            {selectedCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
