import React from 'react'
import { connect } from 'react-redux'
import {
    NavItem,
    Navbar,
    Nav
} from 'react-bootstrap'
import {fetchPlaces} from '../state/places'
import {activateFilter} from '../state/activitiesFilter'
import LocationFilter from './LocationFilter'
export default connect(
    state => ({
        places: state.places,
        activeFilterNames: state.activitiesFilter.activeFilterNames
    }),
    dispatch => ({
        fetchPlaces: () => dispatch(fetchPlaces()),
        activateFilter: filterName => dispatch(activateFilter(filterName))
    })
)(
    class MenuFilter extends React.Component {
        componentWillMount() {
            this.props.fetchPlaces()
        }

        render(){
          const { data, fetching, error } = this.props.places
          const navItems = [
            {
              label: 'Siłownia',
              filterName: 'silownia'
            },
            {
              label: 'Crossfit',
              filterName: 'crossfit'
            },
            {
              label: 'Ścianka wspinaczkowa',
              filterName: 'scianka wspinaczkowa'
            },
            {
              label: 'Sztuki walki',
              filterName: 'sztuki walki'
            },
            {
              label: 'Fitness',
              filterName: 'fitness'
            },
            {
              label: 'Zumba',
              filterName: 'zumba'
            },
            {
              label: 'Taniec Towarzyski',
              filterName: 'taniec towarzyski'
            },
            {
              label: 'Basen',
              filterName: 'basen'
            },
            {
              label: 'Jacuzzi',
              filterName: 'jacuzzi'
            },
            {
              label: 'Sauna',
              filterName: 'sauna'
            },
            {
              label: 'Masaż wodny',
              filterName: 'masaz wodny'
            },
            {
              label: 'Solarium',
              filterName: 'solarium'
            },
            {
              label: 'Zajęcia dla dzieci',
              filterName: 'zajecia dla dzieci'
            },
          ]

            return (

                    <Navbar>
                        <Nav>
                        {
                          navItems.map(
                            navItem => (
                              <NavItem
                                key={navItem.filterName}
                                onClick={() => this.props.activateFilter(navItem.filterName)}
                                active={this.props.activeFilterNames.includes(navItem.filterName)}
                              > {navItem.label}
                              </NavItem>
                            )
                          )

                        }
                        </Nav>
                      <LocationFilter/>
                    </Navbar>


            )
        }
    }

)
