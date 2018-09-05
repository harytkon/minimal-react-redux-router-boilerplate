import { expect } from 'chai';
import { createStore } from 'redux';
import reducer from '../src/reducer';

describe('Test reducer', () => {
  it('Test initial state of the store created by reducer', () => {
    const store = createStore(reducer);
    const state = store.getState();
    expect(state.text).to.be.eql('');
  });
});
