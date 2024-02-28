import noDataIlus from '@/assets/images/no-data.png';
import notFoundIlus from '@/assets/images/not-found.png';
import { Button } from './ui/button';
import { cn } from '@/utils/cn';
import { MouseEventHandler } from 'react';

interface Slot {
  label: string;
  action: MouseEventHandler<HTMLButtonElement>;
}

interface Props {
  exception: 'not found' | 'no data';
  title: string;
  message?: string;
  className?: string;
  btnPrimary?: Slot;
  btnSecondary?: Slot;
}
export default function Exception({
  exception,
  title,
  message = '',
  className = '',
  btnPrimary = undefined,
  btnSecondary = undefined,
}: Props) {
  return (
    <div className={cn('m-auto w-64 p-6 text-center', className)}>
      {exception == 'not found' && <img src={notFoundIlus} className="w-full" />}
      {exception == 'no data' && <img src={noDataIlus} className="w-full" />}
      <h3 className="text-s-1">{title}</h3>
      <div className="text-b-1">{message}</div>
      <div className="mt-6 flex items-center justify-center gap-3">
        {btnPrimary && (
          <Button size={'sm'} onClick={btnPrimary.action}>
            {btnPrimary.label}
          </Button>
        )}
        {btnSecondary && (
          <Button variant={'secondary'} size={'sm'} onClick={btnSecondary.action}>
            {btnSecondary.label}
          </Button>
        )}
      </div>
    </div>
  );
}
