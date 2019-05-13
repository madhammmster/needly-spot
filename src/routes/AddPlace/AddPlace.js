import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Header, Icon } from 'semantic-ui-react';
import { withFirebase } from '../../firebase'
import { withAuthentication } from '../../components/Session/Session';
import { showFader, hideFader } from '../../store/reducers/faderReducer';

import './AddPlaceForm.scss';
import AddPlaceForm from '../../components/FinalForm/forms/AddPlaceForm/AddPlaceForm';


class AddPlace extends Component {

    addDocument = (values) => {
        const { user: { uid }, firebase, history, hideFader } = this.props;

        values['ownerUid'] = uid;

        firebase.database
            .collection('places')
            .doc()
            .set(values)
            .then(() => {
                hideFader();
                history.push('/');
            })

    }

    handleSubmit = (values) => {
        const { showFader, user: { uid } } = this.props;

        console.log('values', values);
        console.log('user:uid', uid);

        values['uuid'] = uuid(); 

        showFader();
        this.addDocument(values);
    }

    render() {

        return (
            <div className='route document-route' >
                <Container>
                    <Header as='h2'>
                        <Icon name='add' />
                        <Header.Content>
                            Dodaj miejsce
                            <Header.Subheader>Wprowadź wszystkie potrzebne informacje i pozwól użytkownikom odszukać ich wymarzone miejsce pracy</Header.Subheader>
                        </Header.Content>

                    </Header>

                    <AddPlaceForm
                        onSubmit={this.handleSubmit}
                    />

                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    showFader,
    hideFader
}


export default withFirebase(withRouter(withAuthentication(connect(mapStateToProps, mapDispatchToProps)(AddPlace))));