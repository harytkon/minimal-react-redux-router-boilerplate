import React from 'react';
import { connect } from 'react-redux';
import addtext from './actions';

const TextLabel = (props) => {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return ({
    clearText: text => dispatch(addtext(text)),
  });
}

const mapStateToProps = (state) => {
  return { text: state.text };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextLabel);
