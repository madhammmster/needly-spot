import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Header, Icon } from 'semantic-ui-react';
import { withFirebase } from '../../firebase'
import { withAuthentication } from '../../components/Session/Session';
import { showFader, hideFader } from '../../store/reducers/faderReducer';


import DocumentForm from '../../components/FinalForm/forms/DocumentForm/DocumentForm';
import './Document.scss';

class Document extends Component {

    addDocument = (values) => {
        const { user, firebase, history, hideFader } = this.props;

        firebase.database
            .collection('users').doc(user.uid)
            .collection('documents').doc()
            .set(values)
            .then(() => {
                hideFader();
                history.push('/');
            })

    }

    handleSubmit = (values) => {
        const { showFader } = this.props;

        console.log('values', values);

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
                            Dodaj dokument
                            <Header.Subheader>Wszystkie komponenty dostępne dla Final Form'a i ich użycie</Header.Subheader>
                        </Header.Content>

                    </Header>

                    <DocumentForm
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


export default withFirebase(withRouter(withAuthentication(connect(mapStateToProps, mapDispatchToProps)(Document))));