import { cn } from '@/utils/cn';
import React from 'react';

const Section = React.forwardRef<
  React.ElementRef<'section'>,
  React.ComponentPropsWithoutRef<'section'>
>(({ className, children, ...props }, ref) => {
  return (
    <section
      className={cn('w-full max-w-screen-lg px-6 py-12 sm:px-6', className)}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  );
});
export { Section };
