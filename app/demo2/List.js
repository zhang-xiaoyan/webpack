import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        return(
           <Item numbers={numbers}/>
        )
    }
}
export default List;