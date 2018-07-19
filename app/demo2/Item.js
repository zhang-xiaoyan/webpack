import React, {Component} from 'react';

class Item extends Component {
    render() {
        const listItem = this.props.numbers.map((number, index)=>{
            return <li key={index}>{number}</li>
        });
        return(
            <ul>{listItem}</ul>
        )
    }
}
export default Item;