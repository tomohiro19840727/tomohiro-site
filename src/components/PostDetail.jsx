import React from 'react';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript } from 'react-syntax-highlighter/dist/esm/languages/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'tailwindcss/tailwind.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

function PostDetail({
  selectedTitle,  
  selectedPostText, 
  selectedCode, 
  selectedPostText2, 
  selectedCode2, 
  selectedPostText3, 
  selectedCode3, 
  selectedImage 
}) {


  return (
    
    <>
    <div class="text-gray-700 border-gray-400 bg-white  bg-h-screen w-full bg-gradient-to-br
    from-violet-100 via-blue-100 to-orange-100 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">

    <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-20">
        <img src={selectedImage} loading="lazy" alt="Photo by Minh Pham" class="h-full w-full object-cover object-center" />
      </div>
      <h1 class="mb-20 text-center text-3xl font-bold  font-serif text-gray-800 sm:text-3xl md:mb-6">{selectedTitle}</h1>

  
      <div className="mb-10 mt-20">
          <p className="text-1xl font-bold  text-gray-800 whitespace-pre-wrap">
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

        {selectedPostText2 && selectedCode2 && (
          <div>
      <div className="mb-4 mt-20">
          <p className="text-1xl font-bold text-gray-800 whitespace-pre-wrap">
          <div dangerouslySetInnerHTML={{ __html: selectedPostText2 }} />
           </p>
        </div>
        <div className="w-full">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-8">
            <SyntaxHighlighter
              language="javascript"
              style={materialDark}
              className="text-lg font-mono text-white whitespace-pre-wrap"
              >
              {selectedCode2}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
     )}

        {selectedPostText3 && selectedCode3 && (
          <div>
      <div className="mb-4 mt-20">
          <p className="text-1xl font-bold text-gray-800 whitespace-pre-wrap">
          <div dangerouslySetInnerHTML={{ __html: selectedPostText3 }} />
           </p>
        </div>
        <div className="w-full">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-8">
            <SyntaxHighlighter
              language="javascript"
              style={materialDark}
              className="text-lg font-mono text-white whitespace-pre-wrap"
              >
              {selectedCode3}
            </SyntaxHighlighter>
          </div>
        </div>
    </div>
  )}
  </div>
  </div>
              </>
  );
}

export default PostDetail;
