import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import './SearchBar.scss'
import SearchForm from '../FinalForm/forms/SearchForm/SearchForm';

class SearchBar extends Component {

    state = {
        isVisible: false
    }

    showSearchBar = () => {
        this.setState((state) => ({ isVisible: !state.isVisible }))
    }

    renderButton = () => {
        const { isVisible } = this.state;

        return (
            <div
                className={"search-bar-button " + (isVisible ? 'show' : '')}
                onClick={this.showSearchBar}
            >
                {isVisible ? <Icon name='close' /> : <Icon name='search' />}
            </div>
        )
    }

    handleSubmit = (values) => {
        console.log(values);
    }

    render() {
        const { isVisible } = this.state;

        return (

            <div className={"container-search-bar " + (isVisible ? 'show' : '')}>
                <div className="search-bar">
                    <div className="container-search-form">
                        <SearchForm
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
                <div className="container-search-bar-button">
                    {this.renderButton()}
                </div>
            </div>
        );
    }
}

export default SearchBar;