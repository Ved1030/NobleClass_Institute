"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

function preprocessContent(content: string): string {
  return content.replace(/\b(\d{10})\b/g, '[$1](tel:$1)');
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processed = preprocessContent(content);

  return (
    <div className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="mb-3 leading-[1.7] text-[15px] text-gray-800 last:mb-0">
              {children}
            </p>
          ),
          h1: ({ children }) => (
            <h1 className="text-lg font-bold text-noble-dark mb-3 mt-5 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-base font-bold text-noble-dark mb-2 mt-5 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-[15px] font-semibold text-noble-dark mb-2 mt-4 first:mt-0">
              {children}
            </h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 mb-3 text-[15px] text-gray-800 space-y-1 last:mb-0">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 mb-3 text-[15px] text-gray-800 space-y-1 last:mb-0">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-[1.7] pl-1">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-noble-dark">{children}</strong>
          ),
          a: ({ href, children }) => {
            if (href?.startsWith('tel:')) {
              return (
                <a
                  href={href}
                  className="text-noble-blue font-semibold hover:underline whitespace-nowrap"
                >
                  {children}
                </a>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-noble-blue underline hover:text-noble-blue-dark"
              >
                {children}
              </a>
            );
          },
          hr: () => <hr className="my-4 border-gray-200 last:hidden" />,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-noble-blue/20 bg-noble-blue/[0.04] pl-4 py-2.5 my-3 rounded-r-lg text-gray-700 text-[15px] leading-[1.7] last:mb-0">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-noble-red font-mono">
              {children}
            </code>
          ),
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
