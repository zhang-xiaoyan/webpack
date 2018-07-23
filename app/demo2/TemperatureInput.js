import React, {Component} from 'react';

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return(
            <fieldset>
                <legend>在{scaleNames[scale]}:中输入温度数值</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

export default TemperatureInput;