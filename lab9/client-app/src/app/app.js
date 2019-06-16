import React, {Component} from 'react';
import axios from 'axios';
import "./app.css"
import FormComponent from './form/form-component';
import GuitarsContainer from './guitars/containers/guitarsContainer';

class App extends Component {

    constructor () {
        super();
        this.state = {
            guitars: []
        }
    }

    componentDidMount() {
        this.fetchGuitars();
    }

    async fetchGuitars() {
        const values = await axios.get("http://localhost:4000/api/guitars/all").then(resp => resp.data);
        this.setState({guitars: values})
    }

    render() {
        return (
            <div className="main">
                <GuitarsContainer guitars={this.state.guitars} onGuitarDelete={this.deleteGuitar.bind(this)} onGuitarUpdate={this.updateGuitar.bind(this)}/>
                <FormComponent onGuitarAdd={this.guitarAdded.bind(this)}/>
            </div>
        )
    }

    deleteGuitar() {
        this.setState({ guitars: []});
        this.fetchGuitars();
    }

    updateGuitar() {
        this.setState({ guitars: []});
        this.fetchGuitars();
    }

    guitarAdded() {
        this.setState({ guitars: []})
        this.fetchGuitars();
    }
}

export default App;