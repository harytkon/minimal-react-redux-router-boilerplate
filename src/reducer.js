import {
  TEXTBOX,
} from './actions';

const initialState = {
  CHECKBOX: false,
};

function boilerplate(state = initialState, action) {
  switch (action.type) {
    case TEXTBOX:
      return Object.assign({}, state, {
        TEXTBOX: action.textbox
      });
    default:
      return state;
  }
}

export default boilerplate;
