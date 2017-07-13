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
            <Col sm={7}>
                <FormGroup controlId="formInlineEmail">
                  {/*<ControlLabel>Wyszukaj obiekt</ControlLabel>*/}
                  <FormControl type="email" placeholder="Rozwiń listę"/>
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
      </div>
    )
  }
}