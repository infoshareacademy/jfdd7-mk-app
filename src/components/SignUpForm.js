import React from 'react'
import firebase from 'firebase'

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
      () => this.setState({ message: 'User created!' })
    ).catch(
      error => this.setState({ message: error.message })
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.message}</p>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input type="password"
          value={this.state.password}
               onChange={this.handlePasswordChange}
        />
        <button>Sign Up</button>
      </form>
    )
  }
}

export default SignUpForm