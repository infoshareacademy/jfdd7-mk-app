/**
 * Created by adamkowalski on 05.07.17.
 */
import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

export default class FilterButton extends React.Component {

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="default" bsSize="small" active>Filtruj</Button>
        </ButtonToolbar>
      </div>
    )
  }
}