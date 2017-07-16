import React from 'react'
import { connect } from 'react-redux'
import { FormControl, Grid, Row, Col, FormGroup, Button } from 'react-bootstrap'
import './SearchField.css'

import { updateSearchPhrase } from '../state/searchField'

const SearchField = props => (
<Grid>
  <Row>
  <Col sm={6}>
    <FormGroup controlId="formInlineEmail">
    <FormControl
      value={props.searchPhrase}
      onChange={props.update}
      placeholder="Wyszukaj..."
    />
    </FormGroup>
  </Col>
    <Col sm={6}>
      <Button type="submit"
              bsStyle="info"
              bsSize="large"
              >
        Wyszukaj
      </Button>
      <Button type="submit"
              bsStyle="info"
              bsSize="large"
              >
        Filtruj
      </Button>
    </Col>
  </Row>
</Grid>
);

export default connect(
  state => ({
    searchPhrase: state.searchField.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(SearchField)