import { createSelector } from 'reselect';

import { SkillType } from '../components/Portfolio/types';
import { AppRootStateType } from '../redux/store';

export const getUserSkills = (state: AppRootStateType): Array<SkillType> =>
  state.portfolio.skills;

export const getSortedSkills = createSelector(getUserSkills, skills =>
  skills.sort((a, b) => b.experience - a.experience),
);
