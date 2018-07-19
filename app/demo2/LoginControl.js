import React, {Component} from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
        console.log('登录:', this.state.isLoggedIn);
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        console.log('退出:', this.state.isLoggedIn);
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return(
            <div>
                <Greeting props={isLoggedIn}/>
                {button}
            </div>
        )
    }
}
export default LoginControl;