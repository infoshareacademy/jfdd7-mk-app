import React from 'react'
import SignUpForm from './SignInForm'
import SignInForm from './SignInForm'
import {connect} from 'react-redux'

const Authorisation = () => (
  user !== null ?
    children :
    <div>
      <SignInForm/>
      <SignUpForm/>
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Authorisation)