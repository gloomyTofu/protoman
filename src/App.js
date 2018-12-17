import React, { Component } from 'react';
import FullScreen from './lib/layout/FullScreen'; 
import Columns from './lib/layout/Columns'; 
import Bottom from './lib/layout/Bottom'; 
import CustomButton from './lib/elements/Button'; 

class App extends Component {
  state = {
    LeftCount: 50,
    RightCount: 50,
    isWinner: 'default'
  }

  componentDidMount() {
    let intervalId = setInterval(this.opponent, 250);
    this.setState({
      intervalId: intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  recordLeftClick = () => {
    this.setState({
      LeftCount: this.state.LeftCount + 5,
      RightCount: this.state.RightCount - 5
    });

    if (this.state.LeftCount > 94) {
      clearInterval(this.state.intervalId);
      this.setState({ isWinner: 'winner' });
    }
  } 

  opponent = () => {
    this.setState({
      LeftCount: this.state.LeftCount - 
      5,
      RightCount: this.state.RightCount + 5
    });

    if (this.state.RightCount > 99) {
      this.setState({ isWinner: 'loser' });
      clearInterval(this.state.intervalId);
    }
  } 
  render() {
    const buttonStyles = {
      padding: '40px 10px',
      textTransform: 'uppercase',
      borderRadius: 0,
      backgroundColor: 'lightgray',
      flex: '1 0',
      border: '1px solid black',
      touchAction: 'manipulation' // prevents ios double tab zoom/panning
    }
    const transition = 'width 1s linear'; 
    let message, winnerColor;
    if (this.state.isWinner === 'loser') {
      message = 'you lose'; 
      winnerColor = 'deeppink'; 
    } else if (this.state.isWinner === 'winner') {
      message = 'you win'; 
      winnerColor = 'aquamarine'; 
    } else {
      message = ''; 
      winnerColor = 'white'; 
    }
    return (
      <div className="app">
        <FullScreen>

          {/*
            (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
          */}    
          <div style={
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              height: '75vh',
            }
          }>
            <div 
              style={
                {
                  display: 'inline-block', 
                  textAlign: 'center',
                  padding: 20,
                  margin: 50,
                  fontSize: 50,
                  color: winnerColor,
                  border: `5px solid ${winnerColor}`,
                  position: 'relative',
                }
            }>
              { message }
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div style={
                {
                  backgroundColor: 'aquamarine',
                  width: this.state.LeftCount + '%',
                  height: 50,
                  transition: transition
                }
              }></div>
              <div style={
                {
                  backgroundColor: 'deeppink',
                  width: this.state.RightCount + '%',
                  height: 50,
                  transition: transition
                }
              }></div>
            </div>
          </div>

          <Bottom>
            <Columns>
              <CustomButton
                text="Fire!"
                styles={ buttonStyles } 
                handleClick={ this.recordLeftClick }
                disabled={ this.state.LeftCount === 0 || this.state.LeftCount > 99 } />

              {/* <CustomButton
                text="Right"
                styles={ buttonStyles } 
                handleClick={ this.recordRightClick } /> */}
            </Columns>
          </Bottom>
        </FullScreen>
      </div>
    );
  }
}

export default App;
