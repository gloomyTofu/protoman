import React, { Component } from 'react';
import Global from './../styles/Global';
import Color from './../styles/Color';

export default class Carousel extends Component {
  state = {
    slideWidth: 0,
    slideHeight: 0,
    currentSlide: this.props.currentSlide,
  }

  numSlides = this.props.slides; 

  componentDidMount() {
    this.updateWindowDimensions(); 
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      slideWidth: window.innerWidth,
      slideHeight: window.innerHeight,
    });
  }
  
  x0 = null;
  i = this.props.currentSlide;

  lockSlide = (e) => {
    console.log('lockSlide'); 
    this.x0 = this.unify(e).clientX
  }
  
  moveSlide = (e) => {
    if (this.x0 || this.x0 === 0) {
      let dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);

      if ((this.i > 0 || s < 0) && (this.i < this.numSlides.length - 1 || s > 0)) {
        console.log('moveSlide', s); 
        this.setState({
          currentSlide: this.i -= s
        });

        this.x0 = null; 
      }
    }
  }
  
  unify = (e) => {
    console.log('unify'); 
    return e.changedTouches ? e.changedTouches[0] : e
  }

  render() {
    const {
      slides,
    } = this.props; 
    let slidesArray = [];
    slides.forEach((slide, index) => {
      let displaySlides = (
        <div 
          key={ index }
          style={{
            width: `calc(100%/${slides.length})`,
            border: '1px solid black',
            pointerEvents: 'none',
          }}>
          <div 
            style={{
              height: '100vh',
              maxHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              { slide.title }
          </div>
        </div>
      ); 
      slidesArray.push(displaySlides);
    });
    return(
      <div style={{
        overflowX: 'hidden',
      }}>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            width: `calc(${slides.length}*100%)`,
            height: '100vh',
            maxHeight: '100vh',
            overflowY: 'hidden',
            backgroundColor: 'pink',
            transition: `transform 0.5s ease-out`,
            transform: `translate(calc(${this.state.currentSlide/slides.length}*-100%))`,
          }}
          onMouseDown={ this.lockSlide }
          onTouchStart={ this.lockSlide }
          onMouseUp={ this.moveSlide }
          onTouchEnd={ this.moveSlide }>
          { slidesArray }
        </div>
      </div>
    );
  }
}