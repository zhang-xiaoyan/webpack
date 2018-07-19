import React, {Component} from 'react';
import ItemList from './ItemList';
import Clock from './Clock';
import Button from './Button';
//import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Page from './Page';
import List from './List';

class ManageSystem extends Component {
    render() {
        return (
            <div>
                <ItemList name='system'/>
                <Clock/>
                <Button/>
                <LoginControl/>
                <Page/>
                <List/>
            </div>
        )
    }
}
export default ManageSystem;