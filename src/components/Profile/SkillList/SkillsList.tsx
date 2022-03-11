import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AppRootStateType } from '../../../redux/store';
import { ReturnComponentType } from '../../../types';
import { SkillItem } from '../../Portfolio/Skill/SkillItem';
import { SkillType } from '../../Portfolio/types';
import { Plus } from '../../ui/plus/Plus';

import styles from './SkillList.module.scss';

export const SkillsList = (): ReturnComponentType => {
  const skills = useSelector<AppRootStateType, Array<SkillType>>(
    state => state.portfolio.skills,
  );

  const dispatch = useDispatch();

  // const addSkill = (newSkill: string): void => {
  //   dispatch(newSkill);
  // };

  const removeSkill = useCallback(
    (skillId: string) => {
      const action = removeSkill(skillId);
      dispatch(action);
    },
    [dispatch],
  );

  return (
    <div>
      {skills.map(({ id, skillName }) => (
        <SkillItem key={id} title={skillName} />
      ))}
      <button type="submit" className={styles.btn}>
        <Plus />
      </button>
    </div>
  );
};
