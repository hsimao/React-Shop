import React from 'react';
import SignIn from '../../components/SignIn/signIn.component';
import classes from './formPage.module.scss';

const FormPage = props => {
  return (
    <div className={classes.formPage}>
      <SignIn></SignIn>
    </div>
  );
};

export default FormPage;
