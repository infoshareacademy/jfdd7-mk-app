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
        <div className="mainpage">
          <div className="search-field">
            <SearchField/>
          </div>
          { error === null ? null : <p>{error.message}</p> }
          { fetching === false ? null : <p>Fetching data...</p>}
          <Table
            className="auto-complete"
            bordered

            hover
            responsive>

            <tbody className="overflow">
            {
              data !== null && data.filter(
                place => this.props.searchPhrase === '' ? false : checkString(place.name) || checkArray(place.functions) || checkString(place.address)
              ).map(
                place => (
                  <tr key={place.id}>
                    <td>
                      <Link to={'/details/' + place.id}>
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
      )
    }
  }
)







