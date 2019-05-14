import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Segment, Table, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../firebase';
import { setMyPlaces } from '../../store/reducers/placesReducer'
import './MyPlacesList.scss'

class MyPlacesList extends Component {

    componentDidMount() {
        this.getMyPlaces();
    }

    getMyPlaces = () => {
        const { firebase, user: { uid } } = this.props;

        // console.log(user)

        firebase.database
            .collection('places')
            .where('ownerUid', '==', uid)
            .get()
            .then(this.handleQuerySnapshot);

        // firebase.database
        //     .collection('recrutations')
        //     .onSnapshot(this.handleQuerySnapshot)

    }

    handleQuerySnapshot = (querySnapshot) => {
        const data = [];
        const { setMyPlaces } = this.props;

        querySnapshot.forEach(function (doc) {
            const docData = doc.data();
            docData['id'] = doc.id;
            data.push(docData);
        });

        setMyPlaces(data);
    }

    // handleRowClick = (recrutation) => {
    //     const { setCurrentRecrutation, history, setCandidate } = this.props;

    //     setCurrentRecrutation(recrutation);

    //     setCandidate(recrutation.candidate);
    //     history.push('recrutation-summary')
    // }


    renderMyPlaces = () => {
        const { myPlaces } = this.props;

        return (
            <React.Fragment >
                <Table basic='very'>
                    <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell>Miasto</Table.HeaderCell>
                            <Table.HeaderCell>Nazwa</Table.HeaderCell>
                            <Table.HeaderCell>Opis</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        {
                            myPlaces.map((place, index) => {
                                return (
                                    <Table.Row className='place-row' key={place.id} >
                                        <Table.Cell textAlign='right' width={1}>{index + 1}</Table.Cell>
                                        <Table.Cell width={1}>{place.city}</Table.Cell>
                                        <Table.Cell width={1}>{place.name}</Table.Cell>
                                        <Table.Cell >{place.description}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }

                    </Table.Body>
                </Table>
                {!myPlaces.length && <Segment>
                    Brak wyników
                </Segment>}
            </React.Fragment>


        )
    }

    renderLoader = () => {
        return (
            <Segment style={{ height: '150px' }}>
                <Dimmer active inverted>
                    <Loader inverted />
                </Dimmer>
            </Segment>
        )
    }

    render() {
        const { myPlaces } = this.props;

        return (
            <React.Fragment>
                {myPlaces && this.renderMyPlaces()}
                {!myPlaces && this.renderLoader()}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        //     recrutations: state.recrutations.recrutations
        myPlaces: state.places.myPlaces

    }
}

const mapDispatchToProps = {
    // setRecrutations,
    // setCurrentRecrutation,
    // setCandidate
    setMyPlaces
}


export default withRouter(withFirebase(connect(mapStateToProps, mapDispatchToProps)(MyPlacesList)));
