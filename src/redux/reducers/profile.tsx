import { v1 } from 'uuid';

// eslint-disable-next-line import/no-unresolved
// @ts-ignore
import avatar from '../../assets/userpic.png';
import { ProfileActionsType } from '../actions/profile';

const initialState = {
  userId: v1(),
  userName: 'John Smith',
  photos: avatar,
  city: 'Portland, Oregon, Usa',
  language: 'English',
  coords: '10 10',
};

export type InitialStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: ProfileActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'AXETA/PROFILE/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        photos: action.photos,
      };
    case 'AXETA/PROFILE/SET_USER_CITY':
      return { ...state, city: action.city };
    case 'AXETA/PROFILE/SET_USER_NAME':
      return { ...state, userName: action.userName };
    case 'AXETA/PROFILE/SET_USER_LANGUAGE':
      return { ...state, language: action.language };
    case 'AXETA/PROFILE/SET_USER_LOCATION': {
      return {
        ...state,
        coords: action.coords,
      };
    }

    default:
      return state;
  }
};
