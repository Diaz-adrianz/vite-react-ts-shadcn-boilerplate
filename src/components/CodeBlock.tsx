import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default function CodeBlock({ children }: Props) {
  return (
    <code className="px-2 bg-slate-100  dark:bg-slate-900 text-primary border rounded-md">
      {children}
    </code>
  );
}
