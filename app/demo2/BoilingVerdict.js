import React, {Component} from 'react';

class BoilingVerdict extends Component {
    constructor(props) {
        super(props);
    }

    BoilingVerdict(props) {
        if (props.celsius >= 100) {
            return <p>水会烧开</p>;
        }
        return <p>水不会烧开</p>;
    }

    render() {
        return(
            <div>{this.BoilingVerdict(this.props)}</div>
        )
    }
}

export default BoilingVerdict;