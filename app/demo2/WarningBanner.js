import React, {Component} from 'react';

class WarningBanner extends Component {
    constructor(props) {
        super(props);
        console.log('传递1:', props.warn);
        this.warningBanner = this.warningBanner.bind(this, props);
    }

    warningBanner(props) {
        console.log('传递2:', props.warn);
        if (!props.warn){
            return null;
        }
        return(
            <div>waring!!!!</div>
        )
    }

    render() {
        return(
            <div>{this.warningBanner(this.props.warn)}</div>
        )
    }
}
export default WarningBanner;