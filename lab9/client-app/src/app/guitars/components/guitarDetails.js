import React, { Component } from 'react';
import axios from 'axios';
import "../guitars.css"

class GuitarDetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
        guitar: Object.assign({}, props.model),
        guitarTypeId: null,
        guitarTypes: [],
        isFormValid: true
    }
  }

  async fetchGuitarTypes() {
    const values = await axios.get("http://localhost:4000/api/guitarType/all").then(resp => resp.data);
    this.setState({guitarTypes: values})
  }

  componentDidMount() {
    this.fetchGuitarTypes();
  }

  componentWillReceiveProps(props) {
    this.setState({guitar: Object.assign({}, props.model)})
  }

  changeHandler = event => {
    var name = event.target.name;
    var value = event.target.value;
    if(name==="type") {
      this.setState({guitarTypeId: value})
      value = this.state.guitarTypes.filter(v => v.id == value)[0].name;
    }
    this.setState({ model: Object.assign(this.state.guitar, {[name]: value})});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if(this.isFormValid()) {
        this.setState({ model: Object.assign(this.state.guitar, {type: this.state.guitarTypeId})});
        await axios.put("http://localhost:4000/api/guitars", {guitar: this.state.guitar}).then(resp => resp.data)
        this.props.onGuitarUpdate();
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


    render() {
      const errorMessageStyle = this.state.isFormValid ? {display: 'none', color: 'red'} : {color: 'red'};
      const currentGuitarType = this.state.guitarTypes.find(m => m.name === this.state.guitar.type);
      return (
        <div>
          <h1>Details:</h1>
          <h3>Id: {this.state.guitar.id}</h3>
          
          <form onSubmit={this.handleSubmit}>
                    <input 
                        name="color"
                        value={this.state.guitar.color}
                        onChange={this.changeHandler}
                    />
                    <hr/>
                    <input 
                        name="brand"
                        value={this.state.guitar.brand}
                        onChange={this.changeHandler}
                    />
                    <hr/>
                    <select name="type" value={currentGuitarType ? currentGuitarType.id : -1} onChange={this.changeHandler} >
                    <option value="-1">Choose Guitar Type</option>
                        {this.state.guitarTypes.map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                    </select>
                    <hr/>
                    <fieldset>
                        <legend>With Strings?</legend>
                        <input onChange={this.changeHandler} checked={this.state.guitar.withStrings === "true" } type="radio" value="true" name="withStrings" /> Yes
                        <input onChange={this.changeHandler} checked={this.state.guitar.withStrings === "false" } type="radio" value="false" name="withStrings" /> No
                    </fieldset>
                    <hr/>
                    <h3>Sound:{this.state.guitar.sound}</h3> 
                    <button className="btn danger"  onClick={this.deleteGuitar}>Delete</button>
                    <input type="submit" value="Update"/>
                    <p style={errorMessageStyle}>Form is not valid</p>
                </form>
          
        </div>
        );
    }

    deleteGuitar = async() => {
       await axios.delete("http://localhost:4000/api/guitars",{ data: { id: this.state.guitar.id} }).then(resp => resp.data);
       this.props.onGuitarDelete();
    }
  }


export default GuitarDetails;