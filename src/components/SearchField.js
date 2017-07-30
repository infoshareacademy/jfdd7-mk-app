import React from 'react'
import {connect} from 'react-redux'
import {FormControl, FormGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {updateSearchPhrase} from '../state/searchField'
import './SearchField.css'

const SearchField = props => (


  <div className="search-controler">
    <FormGroup controlId="formInlineEmail">
      <FormControl
        value={props.searchPhrase}
        onChange={props.update}
        placeholder="Wyszukaj..."
      />
    </FormGroup>


    <LinkContainer to="/list-search">
      <button className="switch-button" data-active={window.location.pathname.match(/list-search/) ? 'true' : 'false'}>
        Lista
      </button>
    </LinkContainer>
    <LinkContainer to="/map-search">
      <button className="switch-button" data-active={window.location.pathname.match(/map-search|(^\/$)/) ? 'true' : 'false'}>
        Mapa
      </button>
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