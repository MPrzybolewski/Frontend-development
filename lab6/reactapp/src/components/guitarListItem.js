import React, { Component } from 'react';

class GuitarListItem extends Component {
    constructor(props) {
        super(props);
        this.model = props.model;
    }

    render() {
      return <h1>{this.model.brand}</h1>;
    }
  }


export default GuitarListItem;