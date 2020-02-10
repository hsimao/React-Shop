import React, { Component } from 'react';
import FromInput from '../FormInput/formInput.component';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';
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
      <div className={classes.singIn}>
        <h2 className={classes.title}>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FromInput
            name='email'
            type='email'
            label='email'
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FromInput
            name='password'
            type='password'
            label='password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <ButtonCustom type='submit'>SIGN IN</ButtonCustom>
        </form>
      </div>
    );
  }
}

export default SignIn;
