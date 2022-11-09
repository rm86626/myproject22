import React, { Component } from 'react'

export default class App extends Component {
  state={
    count:0
  }
  render() {
    let {count}=this.state;
    return (
      <div>
        <h3>App组件</h3>
        <p>count:{count}</p>
        <button onClick={()=>{
          this.setState({count:count+1})
        }}>+</button>
      </div>
    )
  }
}
