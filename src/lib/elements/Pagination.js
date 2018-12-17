import React, { Component } from 'react';
import Global from './../styles/Global';
import Color from './../styles/Color';
import { CSSTransition } from 'react-transition-group'; 

export default class Pagination extends Component {
  state = {
    currentSlide: this.props.currentSlide
  }
  render() {
    const {
      styleType,
      numSlides,
      size,
    } = this.props;
    let dotArray = []; 
    const 
      dotBorderRadius = styleType === 'circle' ? 50 : 0,
      dotWidth = styleType === 'circle' ? size : size * 3,
      dotHeight = styleType === 'circle' ? size : size / 2; 

    numSlides.forEach((slide, index) => {
      let displayDots = (
        <div
          key={ index }
          style={{
              height: dotHeight,
              width: dotWidth,
              backgroundColor: Color.gray75,
              marginLeft: index === 0 ? 0 : size,
              overflow: 'hidden', 
              borderRadius: dotBorderRadius,
              position: 'relative',
          }}>
          <div style={
            {
              backgroundColor: Color.gray45,
              width: dotWidth,
              height: dotHeight,
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0,
              transition: `opacity 0.5s ease-out`,
            }
          }>
          </div>
        </div>
      ); 
      dotArray.push(displayDots); 
    }); 
    return(
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: Global.space,
        bottom: Global.space,
      }}>
        { dotArray }
      </div>
    );
  }
}