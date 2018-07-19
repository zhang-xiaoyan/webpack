import React, {Component} from 'react';
class ItemList extends Component {
    constructor(props) {
        super();
        this.state = {
            user: {
                firstName: 'Harper',
                lastName: 'Perez'
            }
        };
        this.formatName = this.formatName.bind(this);
    }

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    getGreeting(user) {
        if (user){
            return <h1>{this.formatName(user)}</h1>
        }
        return <h1>欢迎您！</h1>
    }

    render() {
        return (
            <div>itemList组件==={this.props.name}{this.getGreeting(this.state.user)}</div>
        )
    }
}
export default ItemList;