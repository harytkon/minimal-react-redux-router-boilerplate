import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <div>
        <Link to="/input">
          Input box
        </Link>
      </div>
      <div>
        <Link to="/radiobutton">
          Radio button
        </Link>
      </div>
    </div>
  );
}
