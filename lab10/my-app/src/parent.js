import React, {Component} from 'react';
import Dollar from './dollar';
import PLN from './pln';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dollar: 1,
            pln: 2
        }
    }

    handleDollarChange = (value) => {
        this.setState({dollar: value, pln: value * 3.83})
    }

    handlePLNChange = (value) => {
        this.setState({dollar: value * 0.26, pln: value})
    }
    render() {
        return (
            <div>
                <Dollar dollar={this.state.dollar} onDollarChange={this.handleDollarChange}></Dollar>
                <PLN pln={this.state.pln} onPLNChange={this.handlePLNChange}></PLN> 
            </div>
        )
    }
}
export default Parent;