import React, { Component } from 'react';
import classes from './{{camelCase name}}.module.scss';

class {{pascalCase name}} extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    return <div className={ classes.{{camelCase name}} }>{{camelCase name}}</div>;
  }
}

export default {{pascalCase name}};


