import React from 'react'
import {connect} from 'react-redux'
import {
  Button
} from 'react-bootstrap'
import {fetchPlaces} from '../state/places'
import {activateFilter} from '../state/activitiesFilter'
import LocationFilter from './LocationFilter'
import SearchField from './SearchField'
import {slide as Menu} from 'react-burger-menu'
import './MenuFilter.css'

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

    showSettings(event) {
      event.preventDefault();
    }

    render() {
      // const { data, fetching, error } = this.props.places
      const buttons = [
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
        <div>
        {/*<Menu isOpen={this.props.isOpen}>*/}
        <SearchField/>
          <LocationFilter/>
              {
                buttons.map(
                  button => (
                    <Button className="filter-button"
                      key={button.filterName}
                      onClick={() => this.props.activateFilter(button.filterName)}
                      active={this.props.activeFilterNames.includes(button.filterName)}
                    > {button.label}
                    </Button>
                  )
                )
              }

         {/*</Menu>*/}
        </div>
      )
    }
  }
)
