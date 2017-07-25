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
            // const { data, fetching, error } = this.props.places
            const navItems = [
              {
                label: 'Fitness',
                filterName: 'fitness'
              },
              {
                label: 'Zajęcia dla dzieci',
                filterName: 'zajecia_dla_dzieci'
              },
              {
                label: 'Solarium',
                filterName: 'solarium'
              },
              {
                label: 'Sztuki walki',
                filterName: 'sztuki_walki'
              },
              {
                label: 'Masaż wodny',
                filterName: 'masaz_wodny'
              },
              {
                label: 'Jacuzzi',
                filterName: 'jacuzzi'
              },
              {
                label: 'Basen',
                filterName: 'basen'
              },
              {
                label: 'Zumba',
                filterName: 'zumba'
              },
              {
                label: 'Kręgle',
                filterName: 'kregle'
              },
              {
                label: 'Ścianka wspinaczkowa',
                filterName: 'scianka_wspinaczkowa'
              },
              {
                label: 'Taniec towarzyski',
                filterName: 'taniec_towarzyski'
              },
              {
                label: 'Sauna',
                filterName: 'sauna'
              },
              {
                label: 'Siłownia',
                filterName: 'silownia'
              },
              {
                label: 'Crossfit',
                filterName: 'crossfit'
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
                        <LocationFilter/>
                        </Nav>
                    </Navbar>


            )
        }
    }

)
