import { InferActionsType } from '../../types';

export type ProfileType = {
  userName: string;
  photos: string;
  city: string;
  language: string;
};

export const actions = {
  savePhotoSuccess: (photos: string) =>
    ({ type: 'AXETA/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const),

  setUserName: (userName: string) =>
    ({ type: 'AXETA/PROFILE/SET_USER_NAME', userName } as const),

  setUserCity: (city: string) => ({ type: 'AXETA/PROFILE/SET_USER_CITY', city } as const),

  setUserLanguage: (language: string) =>
    ({ type: 'AXETA/PROFILE/SET_USER_LANGUAGE', language } as const),
};

export type ProfileActionsType = InferActionsType<typeof actions>;
