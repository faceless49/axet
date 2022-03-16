import { createSelector } from 'reselect';

import { SkillType } from '../components/Portfolio/types';
import { AppRootStateType } from '../redux/store';

export const getUserSkills = (state: AppRootStateType): Array<SkillType> =>
  state.portfolio.skills;

const sortSkills = (skills: Array<SkillType>): Array<SkillType> =>
  [...skills].sort((a, b) => b.experience - a.experience);

export const selectSortedSkills = createSelector(getUserSkills, skills =>
  sortSkills(skills),
);
