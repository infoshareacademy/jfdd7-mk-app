import React from 'react'
import {connect} from 'react-redux'
import firebase from 'firebase'

export default connect(

)(
  class Favorites extends React.Component {
    state = {
      favorites: []
    }

    componentWillMount() {
      firebase.database().ref('favorites').on(
        'value',
        snapshot => {
          const val = snapshot.val()
          const favorites = Object.keys(val).map(key => ({...val[key], id: key }))
          // console.log(posts)
          this.setState({ favorites: favorites })

        }
      )
    }

    render() {
      return (
        <div>
          <h1>Twoje ulubione miejsca:</h1>
          {
            this.state.favorites.map(
              favoritePlace => (
                <div key={favoritePlace.id}>{favoritePlace.content}</div>
              )
            )
          }
        </div>
      )
    }
  }
)