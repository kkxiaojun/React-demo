import React, { Component } from 'react'
import Counter from './Counter1.js'

const style = {
  margin: '20px'
}

class ControlPanel extends Component {

  constructor(props){
    super(props);
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.initValue = [0, 10, 20];
    const initSum = this.initValue.reduce((a, b) => { return a + b }, 0);
    this.state = {
      sum: initSum
    }
  }
  onCounterUpdate(newValue, prevValue){
    const valueChange = newValue - prevValue;
    this.setState({sum: this.state.sum + valueChange});  
  }
  render() {
    console.log('enter ControlPanel render:')
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValue[0]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValue[1]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValue[2]} />
        <button onClick={() => { this.forceUpdate() }}>
          Click me to re-render
        </button>
        <div>total: {this.state.sum}</div>
      </div>
    );
  }
}

export default ControlPanel;

