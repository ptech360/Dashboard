import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import UserAPI from '../api/UserAPI';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.userApi = new UserAPI();
    const token = localStorage.getItem('access_token');

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: 'ajaygarg01',
      password: 'abc123',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const { username, password } = this.state
    this.userApi.login({ username, password })
      .then(data => {
        localStorage.setItem('access_token', data.access_token);
        this.setState({
          loggedIn: true
        })
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
