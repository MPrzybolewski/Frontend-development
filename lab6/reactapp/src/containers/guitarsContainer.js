import React from 'react';
import GuitarsList from '../components/guitarList';
import GuitarDetails from '../components/guitarDetails';
import GUITAR_DB from '../services/guitarsService';

class GuitarsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guitars: GUITAR_DB().getAll(),
      selectedGuitar: null
    };
  }

  componentDidMount() {
    this.setState((state) => ({ selectedGuitar: state.guitars[0]}))

    this.timerId = setInterval(() => {
      this.updateGuitarDetails()
    }, 1000);
  }

  updateGuitarDetails() {
    this.setState({selectedGuitar: this.getNextGuitar()})
  }

  render() {
    return (
      <div>
        <GuitarsList guitars={this.state.guitars}/>
        <hr/>
        { this.state.selectedGuitar !== null && (<GuitarDetails  model={this.state.selectedGuitar}/>) }
      </div>
      )
  }

  getNextGuitar() {
    const indexOfSelectedGuitar = this.state.guitars.indexOf(this.state.selectedGuitar);
    const indexOfNextElement = (indexOfSelectedGuitar + 1) % (this.state.guitars.length);

    return this.state.guitars[indexOfNextElement]
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
}

export default GuitarsContainer