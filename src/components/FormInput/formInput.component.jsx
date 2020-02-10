import React from 'react';
import classes from './formInput.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={classes.group}>
      <input
        className={classes['form-input']}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? classes.shrink : ''} ${
            classes['form-input.label']
          }`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
