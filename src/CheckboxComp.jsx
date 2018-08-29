import React from 'react';
import TextLabel from './TextLabel';

function handleInputChange() {

}

export default function CheckboxComp() {
  return (
    <div>
      <input
        name="isGoing"
        type="checkbox"
        checked="true"
        onChange={handleInputChange}
      />
      <TextLabel />
    </div>
  );
}
