import React, { Component } from 'react';
import classes from './signIn.module.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('email', this.state.email);
    console.log('password', this.state.password);
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={classes.signIn}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
