import React, { Component } from 'react';
import GuitarListItem from './guitarListItem';

class GuitarsList extends Component {

    render() {
      
      return (
        this.props.guitars.map(guitar => { 
          console.log(guitar.id)
          return <GuitarListItem key={guitar.id} model={guitar}/> })
      );
    }
  }

export default GuitarsList;
