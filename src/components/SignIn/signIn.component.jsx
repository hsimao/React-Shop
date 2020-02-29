import React, { Component } from 'react';
import { connect } from 'react-redux';

import FromInput from '../FormInput/formInput.component';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';
import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';

import classes from './signIn.module.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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
          <div className={classes.buttons}>
            <ButtonCustom type='submit'>SIGN IN</ButtonCustom>
            <ButtonCustom
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn>
              Sign in with Google
            </ButtonCustom>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});
export default connect(null, mapDispatchToProps)(SignIn);
