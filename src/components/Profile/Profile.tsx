import { FC } from 'react';

import { SkillsList } from '../Portfolio/SkillList/SkillsList';
import { EditableSpan } from '../ui/editableSpan/EditableSpan';
import { EditableTitle } from '../ui/editableTitle/EditableTitle';

import styles from './Profile.module.scss';
import { ProfilePropsType } from './type';

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
      <form name="upload">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="upload" className={styles.portfolio_label}>
          <img src={photos} alt="avatar" />
          <div className={styles.portfolio_avatar_overlay} />
        </label>
        <input type="file" accept="image/png" name="upload" id="upload" />
      </form>
    </div>
    <div className={styles.portfolio_info}>
      <div className={styles.portfolio_info_wrap}>
        <EditableTitle title={userName} changeTitle={onSetNameClick} />
        <EditableSpan city={city} changeCity={onSetCityClick} />
        <span className={styles.portfolio_info_item}>{language}</span>
      </div>
      <SkillsList />
    </div>
  </>
);
