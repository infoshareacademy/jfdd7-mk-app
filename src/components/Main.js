import React from 'react'
import './Main.css'
import {connect} from 'react-redux'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

import {fetchPlaces} from '../state/places'

export default connect(
  state => ({
    places: state.places,
    searchPhrase: state.searchField.searchPhrase
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
          {/*<div className="headings">*/}
          {/*<p> Z nami znajdziesz swoje miejsce do treningów </p>*/}
          {/*<small className="small-first"> Nie zwlekaj i zacznij swą przemianę już dziś!</small>*/}
          {/*<br/>*/}
          {/*<small className="small-second"> Skorzystaj z naszej wyszukiwarki...</small>*/}
          {/*</div>*/}
          {/*<SignUpForm/>*/}
          <SignInForm/>

        </div>

      )
    }
  }
)







