import React from 'react';
import PropTypes from 'prop-types';

export default function App({ test }) {
  return (
    <div>
      {test}
    </div>);
}
App.defaultProps = {
  test: "Hello world",
};
App.propTypes = {
  test: PropTypes.string,
};
