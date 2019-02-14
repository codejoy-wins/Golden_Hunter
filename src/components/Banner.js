import React, { Component } from 'react'

export class Banner extends Component {


  render() {
    
    const myStyle = {
        "background": "#0f0",
        "color": "#00f",
        "fontSize": "55px",
        "padding": "5px",
        "opacity": .78,
    }
    return (
      <div>
        <h1 style = {myStyle}>Jann Software</h1>
      </div>
    )
  }
}

export default Banner
