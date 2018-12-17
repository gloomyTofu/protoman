import React, { Component } from 'react';

export default class FullScreen extends Component {
  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions(); 
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return(
      <div 
        style={
          { 
            position: 'relative',
            width: this.state.width,
            height: this.state.height,
          }
        }>
        { this.props.children }
      </div>
    ); 
  }
}