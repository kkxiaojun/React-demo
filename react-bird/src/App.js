import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: new Date() }
  }
  componentDidMount() {
   this.timer = setInterval(
     () => this.tick(),
     1000
   ) 
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  tick() {
    this.setState({
      data: new Date()
    })
  }
  handleClick() {
    console.log('this:', this)
  }
  render() {
    return (
      <div>
        <h1>react hhh</h1>
        <div>It is { this.state.data.toLocaleTimeString() }</div>
        <button onClick={(e) => this.handleClick(e)}>click me</button>
      </div>
    )
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      isLogin: false
    }
  }
  handleLoginClick() {
    this.setState({
      isLogin: true
    })
  }
  handleLogoutClick() {
    this.setState({
      isLogin: false
    })
  }
  render() {
    const isLogined = this.state.isLogin
    let button
    if (isLogined) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        <Greeting isLogined={isLogined}/>
        {button}
      </div>
    )
  }
}
function Greeting(props) {
  const isLogin = props.isLogined
  if (isLogin) {
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}


function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function UserGreeting(props) {
  return <h1>Welcome back.</h1>
}


// 手控组件
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log('event:', event)
    const val = event.target.value
    this.setState({value: val})
  }
  handleSubmit(event) {
    alert('提交名字：' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}

export default NameForm;
