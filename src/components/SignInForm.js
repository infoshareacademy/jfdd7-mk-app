import React from 'react'
import firebase from 'firebase'
import {Form, FormControl, FormGroup, Col, Button, ControlLabel, Checkbox} from 'react-bootstrap'

const errorMessages = {
  'auth/invalid-email' : 'Podano błędny adres email lub hasło',
  'auth/user-not-found' : 'Podano błędny adres email lub hasło',
  'auth/wrong-password' : 'Podano błędny adres email lub hasło'
}


class SignInForm extends React.Component {
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
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      () => this.setState({message: 'Logged In !'})
    ).catch(error => {
      this.setState({message: errorMessages[error.code] || error.message
       })
      console.log(error.code)
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Email..."
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Hasło
            </Col>
            <Col sm={6}>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Hasło..."
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <Checkbox>Pamiętaj mnie</Checkbox>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <Button type="submit">
                Zaloguj się
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default SignInForm