import React from 'react';
import './css/App.css';
import { connect } from "react-redux";
import { contactsFetched, contactsFetching } from "./actions";

//const EventEmitter = require('events');

//class MyEmitter extends EventEmitter {}

//var EE = new MyEmitter();

class AppHeader extends React.Component{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render(){
        return (
            <header className="ui fixed menu">
                <nav className="ui container">
                    <a href="#" className="header item">
                        <img
                            className="logo"
                            src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
                        />
                        Lista kontaktów
                    </a>
                    <div className="header item">
                        <button className="ui button" onClick={this.onClickHandler}>Dodaj</button>
                    </div>
                </nav>
            </header>
        )
    }

    onClickHandler () {
        alert("DUPA!")
    }
}

class ContactsList extends React.Component {
    contactToContactItem = contact => {
        const avatarUrl = contact.picture.thumbnail;
        const { title, first, last } = contact.name;
        const name = `${title} ${first} ${last}`.trim();
        const phone = contact.phone;
        const key = contact.login.username;
        return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} /*userSelected={this.props.userSelected}*//>;
    };

    render(){
        if (this.props.fetching === true)
            return (<h2>"Ładowanie..."</h2>);
        else
            return (
                <ul className="ui relaxed divided list selection">
                    {this.props.contacts.map(this.contactToContactItem)}
                </ul>
            );
    }
}

class ContactItem extends React.Component{
     render(){
        const { avatarUrl, name, phone } = this.props
        return (
            <li className="item">
                <img src={avatarUrl} className="ui mini rounded image" alt="" />
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="description">{phone}</div>
                </div>
            </li>
        );
    }
}

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
                    <ContactsList contacts={this.props.contacts} fetching={this.props.fetching}/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        contacts: state.contacts
    }
};
const mapDispatchToProps = { contactsFetched, contactsFetching };

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer