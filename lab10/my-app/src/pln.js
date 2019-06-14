import React, {Component} from 'react';

class PLN extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onPLNChange(e.target.value);
    }

    render() {
        const cash = this.props.pln;
        return (
            <div>
                <label>PLN</label>
                <input value={cash} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default PLN;