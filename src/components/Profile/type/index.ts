import { ProfileType } from '../../../redux/actions/profile';

export type ProfilePropsType = ProfileType & {
  onSetNameClick: (newUserName: string) => void;
  onSetCityClick: (newCity: string) => void;
};
