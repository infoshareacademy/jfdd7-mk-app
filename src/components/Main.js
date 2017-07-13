import React from 'react'
import Map from './Map'
import './Main.css'
import SearchField from './SearchField'

import { fetchPlace } from '../state/fetchPlace'

export default connect(
  state => ({
    students: state.students,
    searchPhrase: state.searchField.searchPhrase
  }),
  dispatch => ({
    fetchPlace: () => dispatch(fetchPlace()),
   })
)(
  class Main extends React.Component {

    componentWillMount() {
      this.props.fetchPlace()
    }

    render() {
      const { data, fetching, error } = this.props.students
      return (
        <div>
          <h1>Students</h1>

          <StudentSearcher/>

          { error === null ? null : <p>{error.message}</p> }
          { fetching === false ? null : <p>Fetching data...</p>}
          <Table bordered striped hover responsive>
            <thead>
            <tr>
              <th>Is fav</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Is smoking</th>
              <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {
              //this.props.students.data !== null && this.props.students.data.map(
              data !== null && data.filter(
                student => student.name.toLowerCase().includes(this.props.searchPhrase.toLowerCase()) || student.surname.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
              ).map(
                student => (
                  <tr key={student.id}>
                    <td>
                      { this.props.favoriteStudentIds.includes(student.id) ? '*' : null}
                    </td>
                    <td>
                      <Link to={'/students/' + student.id}>
                        {student.name}
                      </Link>
                    </td>
                    <td>
                      {student.surname}
                    </td>

                    <td>
                      {student.smoking ? 'smoking' : 'fine'}
                    </td>

                    <td>
                      <button onClick={() => this.props.addToFav(student.id)}>
                        Add to fav
                      </button>

                      <button onClick={() => this.props.removeFromFav(student.id)}>
                        Remove from fav
                      </button>

                      <button onClick={() => this.props.toggleFav(student.id)}>
                        Toggle
                      </button>
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