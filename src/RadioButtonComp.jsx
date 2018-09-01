import React from 'react';
import { connect } from 'react-redux';
import TextLabel from './TextLabel';

class RadioButtonComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: 1,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ checkbox: event.currentTarget.value });
  }

  render() {
    const { checkbox } = this.state;
    console.log(checkbox);
    return (
      <div>
        <form>
          <div className="radio">
            <label htmlFor="option1">
              <input name="option" type="radio" value="1" onChange={this.handleInputChange} />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label htmlFor="option2">
              <input name="option" type="radio" value="2" onChange={this.handleInputChange} />
              Option 2
            </label>
          </div>
          <div className="radio">
            <label htmlFor="option3">
              <input name="option" type="radio" value="3" onChange={this.handleInputChange} />
              Option 3
            </label>
          </div>
        </form>
        <TextLabel />
      </div>
    );
  }
}
export default connect()(RadioButtonComp);
