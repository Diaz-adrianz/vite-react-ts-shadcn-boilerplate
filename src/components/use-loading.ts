import React from 'react';

type LoadingType = 'overlay' | 'progress-top';
type State = {
  type: LoadingType;
  open: boolean;
  progress?: number;
};

let memoryState: State = {
  type: 'overlay',
  open: false,
  progress: 0,
};

const loading = {
  show: (typ: LoadingType, progress?: number) => {
    if (progress == 100) memoryState['open'] = false;
    memoryState = {
      type: typ,
      open: true,
      progress: 0,
    };
    console.log(memoryState);
  },
  dismiss: () => {
    memoryState['open'] = false;
    memoryState['progress'] = 0;
  },
};

function useLoading() {
  const [state, setState] = React.useState<State>(memoryState);
  return {
    ...state,
  };
}

export { loading, useLoading };
