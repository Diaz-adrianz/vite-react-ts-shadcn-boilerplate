import { useStore } from '@/providers/store.provider';
import { Progress } from './ui/progress';

export default function LoadingBar() {
  const { state } = useStore();

  return (
    <div className="fixed top-0 w-screen left-0 z-50">
      <Progress
        value={state?.loading.progress}
        color="black"
        className={
          (state?.loading.progress ? 'bg-secondary' : 'bg-transparent') + ' rounded-none h-1'
        }
      />
    </div>
  );
}
