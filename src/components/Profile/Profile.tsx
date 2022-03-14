import { FC } from 'react';

import { ProfileType } from '../../redux/actions/profile';
import { EditableSpan } from '../ui/editableSpan/EditableSpan';
import { EditableTitle } from '../ui/editableTitle/EditableTitle';

import styles from './Profile.module.scss';
import { SkillsList } from './SkillList/SkillsList';

type ProfilePropsType = ProfileType & {
  onSetNameClick: (newUserName: string) => void;
  onSetCityClick: (newCity: string) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  userName,
  photos,
  city,
  language,
  onSetNameClick,
  onSetCityClick,
}) => (
  <>
    <div className={styles.portfolio_avatar}>
      <img src={photos} alt="avatar" />
    </div>
    <div className={styles.portfolio_info}>
      <EditableTitle title={userName} changeTitle={onSetNameClick} />
      <EditableSpan city={city} changeCity={onSetCityClick} />
      <span className={styles.portfolio_info_item}>{language}</span>
      <SkillsList />
    </div>
  </>
);
