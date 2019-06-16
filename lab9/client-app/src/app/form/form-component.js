import React, {Component} from 'react';
import axios from 'axios';
import Guitar from '../../domain/guitar';

class FormComponent extends Component {

    constructor () {
        super();
        this.state = {
            guitar: new Guitar('','','','',''),
            guitarTypes: [],
            isFormValid: true
        }
    }

    componentDidMount() {
        this.fetchGuitarTypes();
    }

    async fetchGuitarTypes() {
        const values = await axios.get("http://localhost:4000/api/guitarType/all").then(resp => resp.data);
        this.setState({guitarTypes: values})
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if(this.isFormValid()) {
            await axios.post("http://localhost:4000/api/guitars", {guitar: this.state.guitar}).then(resp => resp.data)
            this.props.onGuitarAdd();
            return;
        }
    }

    isFormValid() {
        if(this.state.guitar.color && this.state.guitar.brand && this.state.guitar.type !== -1 && this.state.guitar.withStrings !== ''){
            this.setState({isFormValid: true});
            return true;
        }
        this.setState({isFormValid: false});
        return false;
    }

    changeHandler = event => {
        var name = event.target.name;
        const value = event.target.value;
      
        this.setState({ model: Object.assign(this.state.guitar, {[name]: value})});
    }

    render() {
        const errorMessageStyle = this.state.isFormValid ? {display: 'none', color: 'red'} : {color: 'red'};
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Entry Guitar Color:</label>
                    <input 
                        name="color"
                        value={this.state.guitar.color}
                        onChange={this.changeHandler}
                    />
                    <hr/>
                    <label> Entry Guitar Brand:</label>
                    <input 
                        name="brand"
                        value={this.state.guitar.brand}
                        onChange={this.changeHandler}
                    />
                    <hr/>
                    <select name="type" onChange={this.changeHandler} >
                        <option value="-1">Choose Guitar Type</option>
                        {this.state.guitarTypes.map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                    </select>
                    <hr/>
                    <fieldset>
                        <legend>With Strings?</legend>
                        <input onChange={this.changeHandler} type="radio" value="true" name="withStrings" /> Yes
                        <input onChange={this.changeHandler} type="radio" value="false" name="withStrings" /> No
                    </fieldset>
                    <hr/>
                    <button>Submit</button>
                    <p style={errorMessageStyle}>Form is not valid</p>
                </form>
            </div>
        )
    }
}

export default FormComponent;