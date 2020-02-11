import React from 'react';
import SignIn from '../../components/SignIn/signIn.component';
import SignUP from '../../components/SignUp/signUp.component';
import classes from './formPage.module.scss';

const FormPage = props => {
  return (
    <div className={classes.formPage}>
      <SignIn />
      <SignUP />
    </div>
  );
};

export default FormPage;
