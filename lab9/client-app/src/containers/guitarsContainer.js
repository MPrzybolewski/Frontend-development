import React from 'react';
import GuitarsList from '../components/guitarList';
import GuitarDetails from '../components/guitarDetails';

class GuitarsContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      selectedGuitar: null
    };
  }

  componentDidMount() {
    // this.setState((state) => ({ selectedGuitar: state.guitars[0]}))

    // this.timerId = setInterval(() => {
    //   this.updateGuitarDetails()
    // }, 1000);
  }

  updateGuitarDetails() {
    this.setState({selectedGuitar: this.getNextGuitar()})
  }

  render() {
    const guitars = this.props.guitars;
    console.log(guitars)
    return (
      <div>
        <GuitarsList guitars={guitars}/>
        <hr/>
        { guitars.length > 0 && this.state.selectedGuitar !== null && (<GuitarDetails  model={this.state.selectedGuitar}/>) }
      </div>
      )
  }

  getNextGuitar() {
    const indexOfSelectedGuitar = this.state.guitars.indexOf(this.state.selectedGuitar);
    const indexOfNextElement = (indexOfSelectedGuitar + 1) % (this.state.guitars.length);
    console.log(indexOfNextElement)

    return this.state.guitars[indexOfNextElement]
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
}

export default GuitarsContainer