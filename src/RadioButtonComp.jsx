import React from 'react';
import TextLabel from './TextLabel';

export default function RadioButtonComp() {
  return (
    <div>
      <form>
        <div className="radio">
          <label htmlFor="option1">
            <input id="option1" type="radio" value="option1" checked />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label htmlFor="option2">
            <input id="option2" type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label htmlFor="option3">
            <input id="option2" type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
      <TextLabel />
    </div>
  );
}
