import React, { Component } from 'react';

export const Toggle = (props) => (

  <div className="toggable">
    <div className="toggable_heading" onClick={props.setActive}>
      { props.title }
    </div>
    { 
      props.active ? (
        <div className="toggable_content">
          { props.children }
        </div>
      ) : null
    }
  </div>
)

export class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.activeDefault
    }
  }

  setActive = (i) => {
    this.setState(oldState => ({
        active: oldState.active === i ? null : i
    }))
  }

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this.state.active == i,
        setActive: () => this.setActive(i)
      })
    })
    return (
      <div className="accordion">
        { children }
      </div>
    )
  }
}