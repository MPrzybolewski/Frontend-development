import React from 'react';
import GuitarsList from '../components/guitarList';
import GuitarDetails from '../components/guitarDetails';
import '../guitars.css';

class GuitarsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGuitar: null
    };
  }

  render() {
    const guitars = this.props.guitars;
    return (
      <div className="Wrapper">
        <div className="List">
          <GuitarsList guitars={guitars} onGuitarClick={this.showDetails.bind(this)}/>
        </div>
        <div className="Details">
          { this.state.selectedGuitar !== null && (<GuitarDetails model={this.state.selectedGuitar} onGuitarDelete={this.deleteGuitar.bind(this)} onGuitarUpdate={this.updateGuitar.bind(this)} />) }
        </div>
      </div>
      )
  }

  showDetails(guitar) {
    this.setState({selectedGuitar: guitar});
  }

  deleteGuitar() {
    this.setState({selectedGuitar: null});
    this.props.onGuitarDelete();
  }

  updateGuitar() {
    this.props.onGuitarUpdate();
  }
}

export default GuitarsContainer