import store from '@/store';
import { toggleOverlay, updateProgress } from '@/store/loading.store';

export default {
  loading: {
    showOverlay() {
      store.dispatch(toggleOverlay(true));
    },
    progress(num: number) {
      store.dispatch(updateProgress(num));
    },
    dismiss() {
      store.dispatch(toggleOverlay(false));
      store.dispatch(updateProgress(0));
    },
  },
};
