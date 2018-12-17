import React, { Component } from 'react';
import Global from './../styles/Global';
import Color from './../styles/Color';
import { CSSTransition } from 'react-transition-group'; 

export default class CustomButton extends Component {
  render() {
    const {
      text,
      styles,
      handleClick,
      disabled,
    } = this.props; 
    return(
      <button 
        style={ styles } 
        onClick={ handleClick }
        disabled={ disabled }>
        { text }
      </button>
    ); 
  }
}