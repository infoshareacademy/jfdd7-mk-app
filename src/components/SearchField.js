import React from 'react'
import {connect} from 'react-redux'
import {FormControl, Grid, Row, Col, FormGroup, Button} from 'react-bootstrap'
import './SearchField.css'
import {LinkContainer} from 'react-router-bootstrap'

import {updateSearchPhrase} from '../state/searchField'

const SearchField = props => (


  <div>
    <FormGroup controlId="formInlineEmail">
      <FormControl
        value={props.searchPhrase}
        onChange={props.update}
        placeholder="Wyszukaj..."
      />
    </FormGroup>


    <LinkContainer to="/list-search">
      <Button type="submit"
              bsStyle="info"
              bsSize="large"
      >
        Lista
      </Button>
    </LinkContainer>
    <LinkContainer to="/map-search">
      <Button type="submit"
              bsStyle="info"
              bsSize="large"
      >
        Mapa
      </Button>
    </LinkContainer>
  </div>


);

export default connect(
  state => ({
    searchPhrase: state.searchField.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(SearchField)