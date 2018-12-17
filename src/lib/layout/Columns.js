import React, { Component } from 'react';

export default class Columns extends Component {
  render() {
    return(
      <div 
        style={
          { 
            display: 'flex', 
            justifyContent: 'space-between',
          }
        }>
        { this.props.children }
      </div>
    ); 
  }
}