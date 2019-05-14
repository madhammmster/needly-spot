import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Header, Icon } from 'semantic-ui-react';
import { withFirebase } from '../../firebase'
import { withAuthentication } from '../../components/Session/Session';
import { showFader, hideFader } from '../../store/reducers/faderReducer';

import './MyPlaces.scss';
import MyPlacesList from '../../components/MyPlacesList/MyPlacesList';



class MyPlaces extends Component {

    render() {

        const {user} = this.props;

        return (
            <div className='route my-places-route' >
                <Container>
                    <Header as='h2'>
                        <Icon name='list' />
                        <Header.Content>
                            Moje miejsca
                            <Header.Subheader>Lista wszystkich Twoich lokali</Header.Subheader>
                        </Header.Content>

                    </Header>

                    {user && <MyPlacesList />}

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


export default withFirebase(withRouter(withAuthentication(connect(mapStateToProps, mapDispatchToProps)(MyPlaces))));