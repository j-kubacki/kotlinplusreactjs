import React from 'react';
import './css/App.css';
import {connect} from "react-redux";
import {contactsFetched, contactsFetching, fetchContacts} from "./actions";
import {ContactsFilterContainer} from "./ContactsFilter";
import {getFilteredContacts} from "./selectors/getFilteredContacts";
import {AppHeader} from "./AppHeader";
import {ContactsList} from "./ContactList";
import {SeedPickerContainer} from "./SeedPicker";

export class App extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {
        this.props.fetchContacts()
    }

    render(){
        return (
            <div>
                <AppHeader/>
                <main className="ui main text container">
                    <form className="ui large form">
                        <div className="ui segment">
                            <br/>
                            <br/>
                            <br/>
                            <SeedPickerContainer />
                            <ContactsFilterContainer />
                        </div>
                    </form>
                    <ContactsList contacts={this.props.contacts} fetching={this.props.fetching} />
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
const mapDispatchToProps = { fetchContacts  };

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer