import React from 'react';
import { connect } from 'react-redux';
import { addtext } from './actions';

const TextField = ({ dispatch }) => {
  return (
    <div>
      <input onChange={e => dispatch(addtext(e.target.value))} />
    </div>
  );
};

export default connect()(TextField);
