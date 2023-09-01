import React, { Component } from 'react'
import { ThemeContext } from "./ContextSample";
export default class ClassComponent extends Component {


  render() {
    return (
      <ThemeContext.Consumer>
        {
          dark => {
            return (<>
            <div>ClassComponent {dark}</div>
            </>)
          }
        }
        
      </ThemeContext.Consumer>
    )
  }
}
