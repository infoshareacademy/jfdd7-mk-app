/**
 * Created by dominikakosiedowska on 05.07.17.
 */

import React from 'react'
import {
  ControlLabel,
  FormGroup,
  FormControl
}
from 'react-bootstrap'
export default class SearchField extends React.Component {
  state = {
    value: ''
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render () {
    return (
      <div>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
           </FormGroup>
        </form>
      </div>
    )

  }
}