import { useStore } from '@/providers/store.provider';
import { Progress } from './ui/progress';

export default function LoadingBar() {
  const { state } = useStore();

  return (
    <div className="fixed left-0 top-0 z-50 w-screen">
      <Progress
        value={state?.loading.progress}
        color="black"
        className={
          (state?.loading.progress ? 'bg-secondary' : 'bg-transparent') + ' h-1 rounded-none'
        }
      />
    </div>
  );
}
