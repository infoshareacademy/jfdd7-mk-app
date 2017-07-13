import React from 'react'
import Map from './Map'
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
      return (
        <div>
          <h1>Places</h1>
          <div className="center-block" style={{width: "70%"}}>
            <SearchField />
          </div>
          { error === null ? null : <p>{error.message}</p> }
          { fetching === false ? null : <p>Fetching data...</p>}
          <Table bordered striped hover responsive>
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>

              //this.props.students.data !== null && this.props.students.data.map(
              {data !== null && data.filter(
                place => this.props.searchPhrase === '' ? false : place.name.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
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
          <div style={{ height: "200px"}}>
            <div className="center-block"
                 style={{width: "80%", height: "80%"}}
            >

              <Map/>

            </div>
          </div>
        </div>
      )
    }
  }
)