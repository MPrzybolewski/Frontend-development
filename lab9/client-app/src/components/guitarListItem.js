import React, { Component } from 'react';

class GuitarListItem extends Component {
    constructor(props) {
        super(props);
        this.model = props.model;
    }

    render() {
      return (
        <div onClick={() => this.props.onClick(this.props.model)}>
          <h1>{this.model.type} - {this.model.brand}</h1>
        </div>
      )
      
    }
  }


export default GuitarListItem;