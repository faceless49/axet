import { FC } from 'react';

import { ProfileType } from '../../redux/actions/profile';
import { EditableTitle } from '../ui/editableTitle/EditableTitle';

import styles from './Portfolio.module.scss';
import { SkillsList } from './SkillList/SkillsList';

type ProfilePropsType = ProfileType & {
  onSetNameClick: (newUserName: string) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  userName,
  photos,
  city,
  language,
  onSetNameClick,
}) => (
  <>
    <img src={photos} alt="avatar" />
    <div className={styles.portfolio_info}>
      <EditableTitle title={userName} changeTitle={onSetNameClick} />
      <span className={styles.portfolio_info_item}>{city}</span>
      <span className={styles.portfolio_info_item}>{language}</span>
      <SkillsList />
    </div>
  </>
);
