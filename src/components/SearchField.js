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
      <div className="searching-main-div">
        <Grid>
          <Row>
            <Col sm={8}>
                <FormGroup controlId="formInlineEmail" className="form-group">
                  {/*<ControlLabel>Wyszukaj obiekt</ControlLabel>*/}
                  <FormControl type="email" placeholder="Rozwiń listę"  className="formshadow"/>
                </FormGroup>
            </Col>
            <Col sm={4}>
                <Button type="submit"
                bsStyle="info"
                className="button">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/zoom.png'} height="20"/>
                </Button>
                <Button type="submit"
                bsStyle="info"
                className="button">
                  Filtruj
                </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}