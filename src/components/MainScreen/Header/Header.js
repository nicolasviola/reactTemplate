import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div className="headerContainer">
        <div className="headerTitleContainer">
          {this.props.title}
        </div>
      </div>

    );
  }
}

export default Header;
