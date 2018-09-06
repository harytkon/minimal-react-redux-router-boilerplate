import { expect } from 'chai';
import { createStore } from 'redux';
import reducer from '../src/reducer';
import { TEXTBOX } from '../src/actions';

describe('Test reducer', () => {
  it('Test initial state of the store created by reducer', () => {
    const store = createStore(reducer);
    const state = store.getState();
    expect(state.text).to.be.eql('');
  });
  it('Test to change state using reducer', () => {
    expect(reducer(undefined, { type: TEXTBOX, text: 'unittest' })).to.be.eql({ text: 'unittest' });
  });
});
