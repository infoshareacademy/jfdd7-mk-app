/**
 * Created by dominikakosiedowska on 05.07.17.
 */

import React from 'react'
import {
  FormControl
}
from 'react-bootstrap'
export default class SearchField extends React.Component {
  render() {
    return (
      <form>
        <FormControl
          type="text"
          placeholder="Enter text"
        />
          <FormControl.Feedback />

      </form>
    );
  }
}