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

const SearchField = () => (

  <div className="search-field">
    <Grid>
      <Row>
        <Form>
          <Col md={7}>
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
);

export default SearchField