import { v1 } from 'uuid';

import { PortfolioActionsType } from '../actions/portfolio';

const initialState = {
  projects: [
    { id: v1(), name: 'Bootstrap 4 Material Design' },
    { id: v1(), name: 'Modern JavaScript stack' },
    { id: v1(), name: 'Datepicker for twitter bootstrap' },
    { id: v1(), name: 'Fast and reliable Bootstrap widgets in Angular' },
  ],
  skills: [
    { id: v1(), skillName: 'PHP', experience: 6 },
    { id: v1(), skillName: 'Ruby', experience: 2 },
    { id: v1(), skillName: 'JavaScript', experience: 4.5 },
  ],
};

export type InitialStateType = typeof initialState;

export const portfolioReducer = (
  state: InitialStateType = initialState,
  action: PortfolioActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'AXETA/PORTFOLIO/ADD-PROJECT': {
      const project = {
        id: v1(),
        name: action.newNameProject,
      };
      return {
        ...state,
        projects: [...state.projects, project],
      };
    }
    case 'AXETA/PORTFOLIO/ADD-SKILL': {
      const skill = {
        id: v1(),
        skillName: action.newSkill,
        experience: 0,
      };
      return {
        ...state,
        skills: [...state.skills, skill],
      };
    }
    case 'AXETA/PORTFOLIO/REMOVE-SKILL': {
      return {
        ...state,
        skills: [...state.skills.filter(({ id }) => id !== action.skillId)],
      };
    }
    case 'AXETA/PORTFOLIO/UPDATE-SKILL-EXPERIENCE': {
      return {
        ...state,
        skills: [...state.skills].map(skill =>
          skill.id === action.skillId
            ? { ...skill, experience: action.experience }
            : skill,
        ),
      };
    }

    default:
      return state;
  }
};
