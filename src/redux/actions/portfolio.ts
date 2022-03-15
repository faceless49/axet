import { InferActionsType } from '../../types';

export const actions = {
  addProject: (newNameProject: string) =>
    ({ type: 'AXETA/PORTFOLIO/ADD-PROJECT', newNameProject } as const),
  addSkill: (newSkill: string) =>
    ({ type: 'AXETA/PORTFOLIO/ADD-SKILL', newSkill } as const),
  removeSkill: (skillId: string) =>
    ({ type: 'AXETA/PORTFOLIO/REMOVE-SKILL', skillId } as const),
  updateExperience: (skillId: string, experience: number) =>
    ({ type: 'AXETA/PORTFOLIO/UPDATE-SKILL-EXPERIENCE', skillId, experience } as const),
};
export type PortfolioActionsType = InferActionsType<typeof actions>;
