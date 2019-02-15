import React, { Component } from 'react'
import './../components/css/Banner.css';


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
        <h1 style = {myStyle}> <a href="https://codejoy-wins.github.io/">Jann Software</a></h1>
      </div>
    )
  }
}

export default Banner
