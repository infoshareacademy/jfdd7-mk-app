import React from 'react'
import './Main.css'
import {connect} from 'react-redux'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import {Button} from 'react-bootstrap'

export default connect(
  state => ({
    user: state.auth.user
  })
)(
  class Main extends React.Component {

    state = {
      showSignIn: true,
      showSignUp: false
    }

    handleButtonClick = () =>
      this.setState({
        showSignIn: false,
        showSignUp: true
      })

    render() {
      const classSet = this.state.showSignIn ? 'accounHeader' : 'noAccounHeader'
      return (
        <div className="mainpage">
          {this.props.user === null ?
            <div>
              {this.state.showSignIn ? <SignInForm/> : null}
              <div className="registrationRedirect">
                <h3 className={classSet}>Nie masz jeszcze konta?</h3>
                <Button className={classSet} onClick={this.handleButtonClick}>Kliknij!</Button>
              </div>
              {this.state.showSignUp ? <SignUpForm/> : null }
            </div>
            : null
          }
        </div>

      )
    }
  }
)








