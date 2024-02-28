import Exception from '@/components/exception';
import { useNavigate } from 'react-router-dom';

export default function Exception404() {
  const nav = useNavigate();

  return (
    <div className="">
      <Exception
        exception="not found"
        title="Page Not Found"
        message="Get back to home. Or this is a mistake?"
        className="w-full max-w-sm"
        btnPrimary={{
          label: 'Back to home',
          action: () => {
            nav('/', { replace: true });
          },
        }}
        btnSecondary={{
          label: 'Report',
          action: () => {},
        }}
      />
    </div>
  );
}
