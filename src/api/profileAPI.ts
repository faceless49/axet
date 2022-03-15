// Pseudo code for change avatar with backend.

// export const ProfileApi = {
//   savePhoto(photoFile: any) {
//     const formData = new FormData();
//     formData.append('image', photoFile);
//     return instance
//       .put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then(res => res.data);
//   },
// };

// PLUG
import { Nullable } from '../types';

export default (): Nullable<void> => {};
