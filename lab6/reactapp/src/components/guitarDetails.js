import React, { Component } from 'react';

class GuitarDetails extends Component {
    render() {
      return (
        <div>
          <h1>Details:</h1>
          <h1>Id: {this.props.model.id}</h1>
          <h1>Color: {this.props.model.color}</h1>
          <h1>Brand: {this.props.model.brand}</h1>
          <h1>Type: {this.props.model.type}</h1>
          <h1>WithStrings: {this.props.model.withStrings}</h1>
          <h1>Sound:{this.props.model.sound}</h1>
        </div>
        );
    }
  }


export default GuitarDetails;