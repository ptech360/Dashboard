import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('access_token');
  }
  render() {
    return (
      <div>
        <h1>You have been successfuly logged out!</h1>
        <Link to="/">Login</Link>
      </div>
    )
  }
}
