import { StorageType } from '@/types/general.type';

const StorageService = {
  set(typ: StorageType, key: string, data: any): boolean {
    try {
      if (typ === 'local' || typ === 'both') localStorage.setItem(key, JSON.stringify(data));
      if (typ === 'session' || typ === 'both') sessionStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log('browser_storage_error');
      console.error(error);
      return false;
    }
  },

  get(typ: StorageType, key: string): any | null {
    let data: any;
    if (typ === 'local' || typ === 'both') data = localStorage.getItem(key);
    if (typ === 'session' || typ === 'both') data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
};

export default StorageService;
