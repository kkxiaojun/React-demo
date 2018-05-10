import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '20px'
}

class Counter extends Component{
  constructor(props){
    super(props);
    console.log('enter constructor:'+this.props.caption)
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.state = {
      count: props.initValue
    }
  }
  onClickIncrement(){
    this.updateCount(true);
    // this.setState({count: this.state.count + 1});
  }
  onClickDecrement(){
    this.updateCount(false);
    // this.setState({count: this.state.count - 1});
  }
  updateCount(isIncrement){
    const prevValue = this.state.count;
    const newValue = isIncrement ? prevValue + 1 : prevValue - 1;
    this.setState({count: newValue});
    this.props.onUpdate(newValue, prevValue);
  }
  // Mount
  componentWillMount(){
    console.log('enter componentWillMount:'+this.props.caption)
  }
  componentDidMount(){
    console.log('enter componentDidMount:'+this.props.caption)
  }
  // Update
  componentWillReceiveProps(nextProps){
    console.log('enter componentWillReceiveProps: '+this.props.caption);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('enter shuouldComponentUpdate:'+this.props.caption);
    return (this.props.caption!==nextProps.caption) || (this.state.count!==nextState.count)
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  // render
  render(){
    console.log('enter render:'+this.props.caption);
    const {caption} = this.props;
    return(
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrement}>-</button>
        <span>
          {caption} count: {this.state.count}
        </span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue:PropTypes.number,
  onUpdate:PropTypes.func
}

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f=>f
}

export default Counter;