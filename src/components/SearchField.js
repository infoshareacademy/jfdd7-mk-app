import React from 'react'

import {
  Form,
  FormGroup,
  ControlLabel,
  Button,
  FormControl,
  Grid,
  Col,
  Row
}
  from 'react-bootstrap'
import './Main.css'
import './SearchField.css'

export default class SearchField extends React.Component {

  componentWillMount() {
    fetch(
      'http://localhost:3000/public/places.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        places: data
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    return (
      <div className="formdiv">
        <Grid>
          <Row>
            <Form>
              <Col md={5}  mdOffset={1}>
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Wyszukaj obiekt</ControlLabel>
                  <FormControl type="email" placeholder="Rozwiń listę"  className="formshadow"/>
                </FormGroup>
              </Col>

              <Col md={6} className="buttons-location">
                <Button type="submit"
                bsStyle="info"
                className="button">
                  Szukaj
                </Button>
                <Button type="submit"
                bsStyle="info"
                className="button">
                  Filtruj
                </Button>
              </Col>
            </Form>
          </Row>
        </Grid>
      </div>
    )
  }
}