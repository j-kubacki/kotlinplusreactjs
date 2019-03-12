import React from "react";

export class ContactItem extends React.Component {
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