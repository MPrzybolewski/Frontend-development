import React, { Component } from 'react';
import GuitarListItem from './guitarListItem';

class GuitarsList extends Component {

    render() {
      
      return (
        this.props.guitars.map(guitar => {
          return <GuitarListItem onClick={this.onGuitarItemClicked} key={guitar.id} model={guitar} /> })
      );
    }

    onGuitarItemClicked(guitar) {
      this.props.onClick(guitar);
    }
  }

export default GuitarsList;
