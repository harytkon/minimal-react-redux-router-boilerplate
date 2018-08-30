import React from 'react';
import TextLabel from './TextLabel';

export default class RadioButtonComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(this);
    console.log(event);
  }

  render() {
    return (
      <div>
        <form>
          <div className="radio">
            <label htmlFor="option1">
              <input name="option1" type="radio" value="option1" checked />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label htmlFor="option2">
              <input name="option2" type="radio" value="option2" />
              Option 2
            </label>
          </div>
          <div className="radio">
            <label htmlFor="option3">
              <input name="option3" type="radio" value="option3" />
              Option 3
            </label>
          </div>
        </form>
        <TextLabel />
      </div>
    );
  }
}
