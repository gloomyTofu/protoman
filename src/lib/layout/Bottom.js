import React, { Component } from 'react';

export default class Bottom extends Component {
  render() {
    return(
      <div 
        style={
          { 
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }
        }>
        { this.props.children }
      </div>
    ); 
  }
}