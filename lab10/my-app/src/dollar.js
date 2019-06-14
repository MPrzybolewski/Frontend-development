import React, {Component} from 'react';

class Dollar extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onDollarChange(e.target.value);
    }


    render() {
        const cash = this.props.dollar;
        return (
            <div>
                <label>Dollar</label>
                <input value={cash} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Dollar;