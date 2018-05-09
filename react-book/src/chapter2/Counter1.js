import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '20px'
}

class Counter extends Component{
  constructor(props){
    super(props);
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.state = {
      count: props.initValue
    }
  }
  onClickIncrement(){
    this.setState({count: this.state.count + 1});
  }
  onClickDecrement(){
    this.setState({count: this.state.count - 1});
  }
  render(){
    const {caption} = this.props;
    return(
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrement}></button>
        <button style={buttonStyle} onClick={this.onClickDecrement}></button>
        <span>
          {caption} count: {this.state.count}
        </span>
      </div>
    )
  }
}

export default Counter;