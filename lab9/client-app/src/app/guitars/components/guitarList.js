import React, { Component } from 'react';
import GuitarListItem from './guitarListItem';
import "../guitars.css"

class GuitarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGuitar: null
    }
  }

    render() {
      return (
        <div>
          <h1>List: </h1>
        {this.props.guitars.map(guitar => {
          return <GuitarListItem onClick={this.onGuitarItemClicked.bind(this)} key={guitar.id} model={guitar} /> })}
          </div>
      );
    }

    onGuitarItemClicked(guitar) {
      this.setState({selectedGuitar: guitar});
      this.props.onGuitarClick(guitar);
    }
  }

export default GuitarsList;
