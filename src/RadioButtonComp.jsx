import React from 'react';
import { connect } from 'react-redux';

class RadioButtonComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: "1",
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
            <label htmlFor="option">
              <input name="option" type="radio" value="1" checked={checkbox === "1"} onChange={this.handleInputChange} />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label htmlFor="option">
              <input name="option" type="radio" value="2" checked={checkbox === "2"} onChange={this.handleInputChange} />
              Option 2
            </label>
          </div>
          <div className="radio">
            <label htmlFor="option">
              <input name="option" type="radio" value="3" checked={checkbox === "3"} onChange={this.handleInputChange} />
              Option 3
            </label>
          </div>
        </form>
        <div>
          { checkbox }
        </div>
      </div>
    );
  }
}
export default connect()(RadioButtonComp);
