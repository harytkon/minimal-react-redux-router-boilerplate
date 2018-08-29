import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Link to="/input">
        Input box
      </Link>
      <Link to="/radiobutton">
        Radio button
      </Link>
    </div>
  );
}
