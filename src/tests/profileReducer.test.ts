// @ts-ignore
import avatar from "../assets/userpic.png";
import { profileReducer } from "../redux/reducers/profile";
import { actions } from "../redux/actions/profile";

const initialState = {
  userId: '1',
  userName: 'John Smith',
  photos: avatar,
  city: 'Portland, Oregon, Usa',
  language: 'English',
  coords: '10 10',
};

type InitialStateType = typeof initialState

let startState: InitialStateType

beforeEach(() => {
  startState = {
    userId: '1',
    userName: 'Egor Kolesnikov',
    photos: avatar,
    city: 'Russia Moscow',
    language: 'Russian',
    coords: '50 50',
  };

})

test('city should be updated', ()=> {
  const action = actions.setUserCity('Russia SaintPetersburg')

  const endState = profileReducer(startState, action)

  expect(endState.city).toBe('Russia SaintPetersburg')
})

test('username should be updated', ()=> {
  const action = actions.setUserName('Unknown Man')

  const endState = profileReducer(startState, action)

  expect(endState.userName).toBe('Unknown Man')
  expect(endState.userName.length).not.toBeLessThan(5)
})

