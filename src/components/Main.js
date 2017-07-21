import React from 'react'
import './Main.css'
import {connect} from 'react-redux'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

import {fetchPlaces} from '../state/places'

export default connect(
  state => ({
    places: state.places,
    searchPhrase: state.searchField.searchPhrase,
    user: state.auth.user

  }),
  dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
  })
)(
  class Main extends React.Component {

    componentWillMount() {
      this.props.fetchPlaces()
    }

    render() {

      return (
        <div className="mainpage">
          {this.props.user === null ?
            <SignInForm/> : null
          }
        </div>

      )
    }
  }
)








