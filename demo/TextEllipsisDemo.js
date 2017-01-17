/**
 * TextEllipsis Component Demo for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const TextEllipsis = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <TextEllipsis />
      </div>
    );
  }
}

module.exports = Demo;
