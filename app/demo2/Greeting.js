import React, {Component} from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.greeting = this.greeting.bind(this);
    }

    greeting(props) {
        if (props){
            return <UserGreeting/>
        }
        return <GuestGreeting/>
    }

    render() {
        return <div>{this.greeting(this.props.isLoggedIn)}</div>
    }
}
export default Greeting;