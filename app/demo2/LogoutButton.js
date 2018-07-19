import React, {Component} from 'react';

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.logoutClick = this.logoutClick.bind(this, props)
    }

    logoutClick(props) {
        props.onClick();
    }

    render() {
        return(
            <button onClick={this.logoutClick}>
                Logout
            </button>
        )
    }
}
export default LogoutButton;