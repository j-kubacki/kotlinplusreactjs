import React from "react";

export class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    render() {
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

    onClickHandler() {
        alert("DUPA!")
    }
}