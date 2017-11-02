import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        isKing:true,
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      this.setState({
        isKing:!this.state.isKing
      })
  }

  componentWillMount(){
    console.log('组件准备渲染')
  }


  componentDidMount(){
    console.log('组件渲染完毕')
  }

  shouldComponentUpdate(){
    console.log('判断组件是否应该渲染，默认返回true');
    return true;
  }

  componentWillUpdate(){
    console.log('组件App 准备更新了')
  }

  componentDidUpdate(){
    console.log('组件App 更新完毕了')
  }

  render() {
    console.log('组件正在渲染')
    const level = '最强王者'
    const title = this.state.isKing ? <p>早睡早醒，理性游戏</p> :<h2>我们的目标是{level}</h2>
    const wordList = ['俺老孙来也','有妖气','取经之路','就在脚下']
    return (
      <div>
         <button onClick={this.handleClick}>click me</button> 
        {title}
        {this.state.isKing ? <p>我是王者</p>:null}
        <ul>
            {wordList.map(v => <li key={v}>{v}</li>)}
        </ul> 
        <Tank name="程咬金" />
      </div>
    )
  }
}

class Tank extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.name}是一个坦克</h3>
      </div>
    )
  }
}

export default App;
