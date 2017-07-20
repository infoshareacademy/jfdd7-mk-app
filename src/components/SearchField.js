import React from 'react'
import {connect} from 'react-redux'
import {FormControl, Grid, Row, Col, FormGroup, Button } from 'react-bootstrap'
import './SearchField.css'
import {LinkContainer} from 'react-router-bootstrap'
import Select from 'react-select';


import 'react-select/dist/react-select.css';

import {updateSearchPhrase} from '../state/searchField'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

const SearchField = props => (
  <Grid>
    <Row>
      <Col sm={6}>
        <Select controlId="formInlineEmail">
          <Select
            name="form-field-name"
            value="one"
            option={options}
            onChange=" "
            placeholder="Wyszukaj..."
            multi={true}
          />
        </Select>
      </Col>
      <Col sm={6}>
        <LinkContainer to="/list-search">
          <Button type="submit"
                  bsStyle="info"
                  bsSize="large"
          >
            Wyszukaj
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