import { cn } from '@/utils/cn';
import React from 'react';

const CodeBlock = React.forwardRef<
  React.ElementRef<'section'>,
  React.ComponentPropsWithoutRef<'section'>
>(({ className, children, ...props }, ref) => {
  return (
    <code
      ref={ref}
      className={cn(
        'px-2 bg-slate-100  dark:bg-slate-900 text-primary border rounded-md',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
});

export default CodeBlock;
