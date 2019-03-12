import React from 'react';
import './css/App.css';
import {connect} from "react-redux";
import {fetchContacts} from "./actions";
import {ContactsFilterContainer} from "./ContactsFilter";
import {getFilteredContacts} from "./selectors/getFilteredContacts";
import {AppHeader} from "./AppHeader";
import {SeedPickerContainer} from "./SeedPicker";
import {AsyncComponent} from "./AsyncComponent";

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
                    {this.renderContactsList()}
                </main>
            </div>
        );
    }

    renderContactsList = () =>{
        if (this.props.fetching){
            return <p>Ładowanie</p>
        }
        if (this.props.contacts.length < 1){
            return <p>Brak kontaktów</p>
        }
        return (<AsyncComponent
            componentProps={{ contacts: this.props.contacts}}
            componentProvider={() =>
                import("./ContactsList").then(module => module.ContactsList)
            }
        />)
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