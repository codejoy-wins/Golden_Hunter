import React, { Component } from 'react'

export class Hunter extends Component {
  render() {
    const filthy = {
        "background": "#000",
        "color": "gold",
        "padding": "40px",
    }
    return (
      <div style={filthy}>
        {/* <p>Golden Hunter</p> */}
      </div>
    )
  }
}

export default Hunter
