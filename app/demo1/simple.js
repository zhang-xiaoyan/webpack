import React, {Component} from 'react';
import styles from './../greeter.css';

class Greeter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState({count:this.state.count+1})
    }

    decrement(){
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div className={styles.root}>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <span>当前点击次数</span>
                <span>{this.state.count}</span>
            </div>
        )
    }
}
export default Greeter;