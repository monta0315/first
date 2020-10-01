import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { normal: "React" ,img:logo,count:0}
    this.img={normal:logo}
  }
  handleClick(word) {
    this.setState({ normal: word });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const imgurl = "https://halo-halo-mayumi.cocolog-nifty.com/photos/uncategorized/2015/04/17/image_2.jpeg";
    return (
      <div>
        <img src={this.state.img} className="App-logo" alt="logo" />
        <h1>{this.state.normal}</h1>
        <button onClick={()=>{this.handleClick("やりきれ！")}}>もう無理 +</button>
        <button onClick={() => { this.handleClick("起きろ！") }}>眠い +</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
export default App;
