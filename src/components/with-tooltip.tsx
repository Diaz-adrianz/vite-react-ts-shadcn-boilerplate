import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/utils/cn';

type Props = {
  children: ReactNode;
  text: string;
  className?: string;
};

export default function WithTooltip({ children, text, className = '' }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger className={cn(className)}>{children}</TooltipTrigger>
      <TooltipContent>
        <p className="text-c">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
