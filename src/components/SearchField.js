import React from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'

import { updateSearchPhrase } from '../state/searchField'

const SearchField = props => (
  <FormControl
    value={props.searchPhrase}
    onChange={props.update}
    style={{marginBottom: 20}}

  />
)

export default connect(
  state => ({
    searchPhrase: state.searchField.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(SearchField)