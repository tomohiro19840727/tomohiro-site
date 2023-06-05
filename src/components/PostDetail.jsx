import React from 'react';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript } from 'react-syntax-highlighter/dist/esm/languages/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'tailwindcss/tailwind.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

function PostDetail({ selectedPostText, selectedCode, selectedImage }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <img src={selectedImage} className="w-1/3 my-8" alt="Selected Image" />
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <p className="text-3xl text-gray-800 whitespace-pre-wrap">
          <div dangerouslySetInnerHTML={{ __html: selectedPostText }} />
           </p>
        </div>
        <div className="w-full">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-8">
            <SyntaxHighlighter
              language="javascript"
              style={materialDark}
              className="text-lg font-mono text-white whitespace-pre-wrap"
            >
              {selectedCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
