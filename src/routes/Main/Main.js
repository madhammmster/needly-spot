import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from '../../firebase';
import Map from '../../components/Map/Map';
import SearchBar from '../../components/SearchBar/SearchBar';
import { setPlaces } from '../../store/reducers/placesReducer';

import './Main.scss';

class Main extends Component {

    componentDidMount() {
        this.getPlaces();

    }

    getPlaces = () => {
        const { firebase, setPlaces } = this.props;

        firebase.database
            .collection('places')
            .get()
            .then((querySnapshot) => {
                const data = [];

                querySnapshot.forEach(function (doc) {
                    data.push(doc.data());
                });

                console.log('data', data);

                setPlaces(data);
            });

    }

    signOut = () => {
        const { firebase } = this.props;
        firebase.signOut();

    }

    render() {
        const { places } = this.props;

        console.log('places', places)

        return (
            <div className='route main-route' >
                <SearchBar />
                <Map />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        places: state.places.places
    }
}

const mapDispatchToProps = {
    setPlaces
}

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(Main));