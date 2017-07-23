import React from 'react'
import firebase from 'firebase'
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap'

const errorMessages = {
  'auth/email-already-in-use' : 'Istnieje już konto użytkownika o takim adresie email.',
  'auth/invalid-email' : 'Podano nieprawidłowy adres email',
  'auth/weak-password' : 'Podano zbyt krótkie hasło'
}

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    message: null
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      () => this.setState({message: 'User created!'})
    ).catch(
      error => this.setState({message: errorMessages[error.code] || error.message})
    )
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Twój Email
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Tutaj podaj swój email"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Twoje Hasło
            </Col>
            <Col sm={6}>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Tu wpisz hasło"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <Button type="submit">
                Stwórz użytkownika
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default SignUpForm