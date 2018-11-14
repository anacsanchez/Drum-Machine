import { createStore } from 'redux';

const PLAY_KEY = 'PLAY_SOUND';
const ADD_KEY_SOUND = 'ADD_KEY_SOUND';
const GET_SOUND = 'GET_SOUND';

const playKeySound = (key) => ({ type: PLAY_KEY, currentKey: key});
const addKeySound = (key) => ({ type: ADD_SOUND, key: key })

const reducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_KEY_SOUND :
      return Object.assign(state.keys, action.key)
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

// console.log(reducer)
