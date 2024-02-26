import ApiService from '@/services/axios';
import { Photo } from '@/types/photo.type';

const api = new ApiService('https://jsonplaceholder.typicode.com');

const PhotosApi = {
  getPhotosInAlbum: async (albumId: string): Promise<Photo[]> => {
    return await api.useProgress(true).get(`/albums/${albumId}/photos`, ({ data, status }) => {
      if (status == 200) return data;
      else return [];
    });
  },
};

export default PhotosApi;
