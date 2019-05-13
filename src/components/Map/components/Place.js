import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlace } from '../../../store/reducers/placesReducer'

import './Place.scss'

class Place extends Component {

    render() {

        const { place, currentPlace, setPlace } = this.props;
        const isActive = currentPlace && currentPlace.uuid === place.uuid;

        return (

            <i

                onClick={
                    () => {
                        setPlace(place);
                    }
                }
                style={{
                    fontSize: '28px',
                    cursor: 'pointer'
                }}
                className={"logo fas fa-map-marker " + (isActive ? 'active-place' : '')}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    currentPlace: state.places.place
})

const mapDispatchToProps = {
    setPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);