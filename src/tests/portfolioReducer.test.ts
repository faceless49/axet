import { v1 } from "uuid";
import { actions } from "../redux/actions/portfolio";
import { portfolioReducer } from "../redux/reducers/portfolio";

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

type InitialStateType = typeof initialState

let startState: InitialStateType

beforeEach(() => {
  startState = {
    projects: [
      { id: '1', name: 'Bootstrap 4 Material Design' },
      { id: '2', name: 'Modern JavaScript stack' },
      { id: '3', name: 'Datepicker for twitter bootstrap' },
      { id: '4', name: 'Fast and reliable Bootstrap widgets in Angular' },
    ],
    skills: [
      { id: '1', skillName: 'PHP', experience: 6 },
      { id: '2', skillName: 'Ruby', experience: 2 },
      { id: '3', skillName: 'JavaScript', experience: 4.5 },
    ],
  };

})

test('new skill should be added with new length of array', ()=> {
  const action = actions.addSkill('NodeJS')

  const endState = portfolioReducer(startState, action)

  expect(endState.skills.length).toBe(4)
  expect(endState.skills[3].skillName).toBe('NodeJS')
})


test('new project should be added with new length of array', ()=> {
  const action = actions.addProject('React portfolio')

  const endState = portfolioReducer(startState, action)

  expect(endState.projects.length).toBe(5)
  expect(endState.projects[4].name).toBe('React portfolio')
})

test('after deleting length of skills should be decrement', ()=> {
  const action = actions.removeSkill('2')

  const endState = portfolioReducer(startState, action)

  expect(endState.skills.length).toBe(2)
})

test('after update experience of skills should be increment', ()=> {
  const action = actions.updateExperience('2', 10)

  const endState = portfolioReducer(startState, action)

  expect(endState.skills['1'].experience).toBe(10)
})