import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from '../../firebase';

import { setDocuments } from '../../store/reducers/documentsReducer';
import { Table, Dimmer, Loader, Segment } from 'semantic-ui-react';

class DocumentsList extends Component {

    componentDidMount() {
        this.getDocuments();
    }

    getDocuments = () => {
        const { user, firebase, setDocuments } = this.props;
        if (user) {

            firebase.database
                .collection('users').doc(user.uid)
                .collection('documents')
                .get()
                .then((querySnapshot) => {
                    const data = [];

                    querySnapshot.forEach(function (doc) {
                        data.push(doc.data());
                    });

                    setDocuments(data);
                });
        }
    }

    renderTable = () => {
        return (
            <Table basic='very'>
                {this.renderTableHeader()}
                {this.renderTableBody()}
            </Table>
        )
    }

    renderTableHeader = () => {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Dane</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        )
    }

    renderTableBody = () => {
        const { documents } = this.props;
        return (
            <Table.Body>
                {documents.map((document, index) => {
                    return (
                        <Table.Row key={'document' + index}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{JSON.stringify(document)}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
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
        const { documents } = this.props;

        return (
            <React.Fragment>
                {documents && this.renderTable()}
                {!documents && this.renderLoader()}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        documents: state.documents.documents
    }
}

const mapDispatchToProps = {
    setDocuments
}


export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(DocumentsList));
