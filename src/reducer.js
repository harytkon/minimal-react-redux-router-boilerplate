import {
  TEXTBOX,
} from './actions';

const initialState = {
  text: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEXTBOX:
      return Object.assign({}, state, {
        text: action.text
      });
    default:
      return state;
  }
}

export default reducer;
