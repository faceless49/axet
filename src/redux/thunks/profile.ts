// import { ThunkAction } from "redux-thunk";
//
// import { actions, ProfileActionsType } from "../actions/profile";
// import { AppRootStateType } from "../store";
//
// export type ThunkType = ThunkAction<void, AppRootStateType, unknown, ProfileActionsType>;
//

// ======== Pseudo thunk for change avatar.

// export const savePhoto =
//   (file: File): ThunkType =>
//   async dispatch => {
//     const response = await profileAPI.savePhoto(file);
//       dispatch(actions.savePhotoSuccess(response.data.photo));
//     }
//   };
// PLUG
import { Nullable } from '../../types';

export default (): Nullable<void> => {};
