import React,{Component} from 'react'
class ClickCounter extends Component {
  constructor(props){
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {count: 1};
  }
  onClickButton(){
    console.log(this)
    this.setState({count: this.state.count + 1});
  }
  render() {
    const counterStyle = {
      margin: '20px'
    }
    return (
      <div>
        <button onClick={this.onClickButton}>Click me</button>
        <div style={counterStyle}>
          Click count: {this.state.count}
        </div>
        
      </div>
    );
  }
}
export default ClickCounter;