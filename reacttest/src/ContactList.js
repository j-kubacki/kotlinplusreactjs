import React from "react";

export class ContactsList extends React.Component {
    contactToContactItem = contact => {
        const avatarUrl = contact.picture.thumbnail;
        const {title, first, last} = contact.name;
        const name = `${title} ${first} ${last}`.trim();
        const phone = contact.phone;
        const key = contact.login.username;
        return <ContactItem key={key} avatarUrl={avatarUrl} name={name}
                            phone={phone} /*userSelected={this.props.userSelected}*//>;
    };

    render() {
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

class ContactItem extends React.Component {
    render() {
        const {avatarUrl, name, phone} = this.props
        return (
            <li className="item">
                <img src={avatarUrl} className="ui mini rounded image" alt=""/>
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="description">{phone}</div>
                </div>
            </li>
        );
    }
}