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
      <div style={{ width: '200px' }}>
        <TextEllipsis lineLimit={4} overlayClassName="overlaystyle" showTooltip text="这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长这是一串非常长的文字的长长长长长长长长" />
      </div>
    );
  }
}

module.exports = Demo;
