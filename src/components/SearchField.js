import React from 'react'
import { connect } from 'react-redux'
import {
  FormGroup,
  Button,
  FormControl,
  Grid,
  Col,
  Row
} from 'react-bootstrap'

import './Main.css'
import './SearchField.css'

import { updateSearchPhrase } from '../state/searchField'

const SearchField = props => (

    <Grid>
      <Row>
        <Col sm={7}>
          <FormGroup controlId="formInlineEmail">
            {/*<ControlLabel>Wyszukaj obiekt</ControlLabel>*/}
            <FormControl
              value={props.searchPhrase}
              onChange={props.update}
            />
          </FormGroup>
        </Col>
        <Col sm={5}>
          <Button type="submit"
                  bsStyle="info"
                  bsSize="large"
                  className="button">
            {/*<img alt="" src={process.env.PUBLIC_URL + '/images/zoom.png'}/>*/}
            Wyszukaj
          </Button>
          <Button type="submit"
                  bsStyle="info"
                  bsSize="large"
                  className="button">
            Filtruj
          </Button>
        </Col>
      </Row>
    </Grid>

)

export default connect(
  state => ({
    searchPhrase: state.searchField.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(SearchField)
