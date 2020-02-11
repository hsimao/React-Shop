import React, { Component } from 'react';

import FormInput from '../FormInput/formInput.component';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import classes from './signUp.module.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });

      this.clearInput();
    } catch (error) {
      console.error(error);
    }
  };

  clearInput() {
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className={classes.signUp}>
        <h2 className={classes.title}>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='signUp-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
          />
          <ButtonCustom type='submit'>SIGN UP</ButtonCustom>
        </form>
      </div>
    );
  }
}

export default SignUp;
