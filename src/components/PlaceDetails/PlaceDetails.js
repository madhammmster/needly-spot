import React, { Component } from 'react';
import { connect } from 'react-redux';


import './PlaceDetails.scss'
import { Header } from 'semantic-ui-react';
import { additionalOptionsMap } from '../../utils/additionalOptions';

class PlaceDetails extends Component {


    renderAdditionalOptions = () => {
        const { place: { additionalOptions } } = this.props;

        return <ul>
            {additionalOptions.map((option) =>
                <li key={option}>{additionalOptionsMap[option]}</li>)
            }
        </ul>
    }

    render() {
        const { place } = this.props;

        if (!place) {
            return null;
        }

        const { name, description, additionalOptions } = place;

        return (

            <div className={"container-place-details " + (place ? 'visible' : '')}>
                <Header as='h3'>{name}</Header>
                <div className="container-description">
                    <p>{description}</p>
                </div>

                {additionalOptions && this.renderAdditionalOptions()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    place: state.places.place
})

export default connect(mapStateToProps)(PlaceDetails);