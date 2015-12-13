import React, { Component } from 'react';
import { Input, Autocomplete, Slider } from 'react-toolbox/lib';

export default class Home extends Component {
  state = {
    slider2: 5,
    slider3: 1
  };

  handleChange = (slider, value) => {
    const newState = {};
    newState[slider] = value;
    this.setState(newState);
  };

  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        TOOLBOX:
        <Input label="test"/>
        <Autocomplete />
        <Slider value={this.state.slider1} onChange={this.handleChange.bind(this, 'slider1')}/>
      </div>
    );
  }
}
