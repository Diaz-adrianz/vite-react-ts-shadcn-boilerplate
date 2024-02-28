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
        'rounded-md border  bg-slate-100 px-2 text-primary dark:bg-slate-900',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
});

export { CodeBlock };
