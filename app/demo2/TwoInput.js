import React, {Component} from 'react';

class TwoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

    }

    render() {
        return(
            <form>
                <label>
                    Is going:
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}
export default TwoInput;