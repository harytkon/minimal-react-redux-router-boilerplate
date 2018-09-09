import { expect } from 'chai';
import { addtext, TEXTBOX } from '../src/actions';

describe('Test actions', () => {
  it('Test addtext function', () => {
    expect(addtext('test')).to.be.eql({ type: TEXTBOX, text: 'test' });
  });
});
