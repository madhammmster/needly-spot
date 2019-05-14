import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from "react-router-dom";
import Fader from '../Fader/Fader';
//routes
import Main from '../../routes/Main/Main';
import Login from '../../routes/Login/Login';
import Page404 from '../../routes/404/404';
import Register from '../../routes/Register/Register';
import Document from '../../routes/Document/Document';
//styles
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
//actions
import { startApp } from '../../store/reducers/appReducer';
import Menu from '../Menu/Menu';
import AddPlace from '../../routes/AddPlace/AddPlace';
import MyPlaces from '../../routes/MyPlaces/MyPlaces';


class App extends Component {

  componentDidMount() {
    const { startApp } = this.props;
    startApp();
  }

  renderMenu = () => {
    return (
      <Menu
        items={
          [
            { label: 'Mapa', path: '/' },
            // { label: 'Miejsca', path: '/places' },
            { label: 'Dodaj miejsce', path: '/add-place' },
            { label: 'Moje miejsca', path: '/my-places' },
            // { label: 'Kontakt', path: '/contact' }
          ]
        }
      />
    )
  }

  render() {
    return (
      <Fragment>

        {this.renderMenu()}

        <div className="app">
          <Switch>
            <Route
              exact
              path='/'
              withAuthentication
              component={Main}
            />

            <Route
              path='/login'
              component={Login}
            />

            <Route
              path='/my-places'
              component={MyPlaces}
            />

            <Route
              path='/register'
              component={Register}
            />

            <Route
              path='/add-place'
              component={AddPlace}
            />

            <Route
              component={Page404}
            />
          </Switch>

        </div>

        <Fader />

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    user: state.user.user
  }
}

const mapDispatchToProps = {
  startApp
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

