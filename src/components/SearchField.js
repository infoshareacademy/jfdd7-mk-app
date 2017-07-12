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
      <div className="search-field container-fluid table-bordered">
        <Grid>
          <Row>
            <Form>
              <Col md={7} mdOffset={2}>
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Wyszukaj obiekt</ControlLabel>
                  <FormControl type="email" placeholder="Rozwiń listę"/>
                </FormGroup>
              </Col>


              <Col md={1}>
                <Button type="submit">
                  Szukaj
                </Button>
                <br/>
                <Button type="submit">
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