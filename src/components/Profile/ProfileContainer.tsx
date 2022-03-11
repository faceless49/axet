import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks/useAppSelector';
import { actions, ProfileType } from '../../redux/actions/profile';
import { ReturnComponentType } from '../../types';

import { Profile } from './Profile';

export const ProfileContainer = (): ReturnComponentType => {
  const { userName, city, language, photos } = useAppSelector<ProfileType>(
    state => state.profile,
  );
  const dispatch = useDispatch();

  const handleSetNameClick = useCallback(
    (newUserName: string) => {
      const action = actions.setUserName(newUserName);
      dispatch(action);
    },
    [dispatch],
  );

  return (
    <Profile
      photos={photos}
      userName={userName}
      city={city}
      language={language}
      onSetNameClick={handleSetNameClick}
    />
  );
};
