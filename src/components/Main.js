import React from 'react'
import './Main.css'
import SearchField from './SearchField'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
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
      const {data, fetching, error} = this.props.places
      const checkString = string => string.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
      const checkArray = functions => this.props.searchPhrase.toLowerCase().split(' ').every(phrase => functions.join(' ').toLowerCase().includes(phrase))


      return (
        <div className="mainsection">
          <div className="mainpage center-block">

            <p> Z nami odnajdziesz swoje miejsce do treningów </p>
            <small className="main-small-first"> Zacznij swoją przemianę już dziś!</small><br/>
            <small className="main-small-second"> Wystarczy kliknąć: </small>

            <SearchField />
            { error === null ? null : <p>{error.message}</p> }
            { fetching === false ? null : <p>Fetching data...</p>}
            <div style={{position: 'relative'}}>
            <Table
              className="auto-complete"
              bordered
              striped
              hover
              responsive>
              <thead>
              <tr>
              </tr>
              </thead>
              <tbody>
              {
                data !== null && data.filter(
                  place => this.props.searchPhrase === '' ? false : checkString(place.name) || checkArray(place.functions) || checkString(place.address)
                ).map(
                  place => (
                    <tr key={place.id}>
                      <td>
                        <Link to={'/places/' + place.id}>
                          {place.name}
                        </Link>
                      </td>
                    </tr>
                  )
                )
              }
              </tbody>
            </Table>
            </div>
          </div>
        </div>
      )
    }
  }
)