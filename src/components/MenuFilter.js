import React from 'react'
import { connect } from 'react-redux'
import {
    NavItem,
    Navbar,
    Nav
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {fetchPlaces} from '../state/places'
export default connect(
    state => ({
        places: state.places
    }),
    dispatch => ({
        fetchPlaces: () => dispatch(fetchPlaces())
    })
)(
    class MenuFilter extends React.Component {
        componentWillMount() {
            this.props.fetchPlaces()
        }

        render(){
            const {data} = this.props.places
            const allActivities = data === null ? [] : [].concat.apply([], data.map(place => place.functions))
            const uniqueActivities = allActivities.filter((value, index, self) => self.indexOf(value) === index)

            const activities = uniqueActivities;

            return data === null ? <div/> : (
                <div>
                    <Navbar>
                        <Nav>
                            {activities.map(
                            activity =>
                            <LinkContainer to={"/list-search/" + activity}>
                                <NavItem>{activity}</NavItem>
                            </LinkContainer>)}
                        </Nav>
                    </Navbar>
                </div>

            )
        }
    }

)
