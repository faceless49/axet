import { Dispatch } from 'redux';

import { locationAPI } from '../../api/api';
import { actions, ProfileActionsType } from '../actions/profile';

export const requestLocation =
  (city: string) => async (dispatch: Dispatch<ProfileActionsType>) => {
    dispatch(actions.setUserCity(city));
    try {
      const response = await locationAPI.getLocation(city);
      if (response) {
        console.log(`${response} response getLocation`);
        dispatch(actions.setUserLocation(response));
      }
    } catch (e) {
      console.warn('Bad request');
    }
  };
