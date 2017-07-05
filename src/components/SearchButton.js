import React from 'react'
import {Button} from 'react-bootstrap'
export default class SearchButton extends React.Component {

  render() {

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          active
        >Wyszukaj
        </Button>
              </div>
    )
  }
}