import React from 'react';
import './css/App.css';
import {connect} from "react-redux";
import {contactsFetched, contactsFetching} from "./actions";
import {ContactsFilterContainer} from "./ContactsFilter";
import {getFilteredContacts} from "./selectors/getFilteredContacts";
import {AppHeader} from "./AppHeader";
import {ContactsList} from "./ContactList";

export class App extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {
        this.props.contactsFetching();
        fetch("https://randomuser.me/api/?format=json&results=10")
            .then(res => res.json())
            .then(json => this.props.contactsFetched(json.results));
    }

    render(){
        return (
            <div>
                <AppHeader/>
                <main className="ui main text container">
                    <br/>
                    <br/>
                    <br/>
                    <ContactsFilterContainer />
                    <ContactsList contacts={this.props.contacts} fetching={this.props.fetching}/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        contacts: getFilteredContacts(state)
    }
};
const mapDispatchToProps = { contactsFetched, contactsFetching };

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer