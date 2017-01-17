/**
 * TextEllipsis Component for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
class TextEllipsis extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>uxcore-text-ellipsis component</div>
    );
  }
}

TextEllipsis.defaultProps = {
};


// http://facebook.github.io/react/docs/reusable-components.html
TextEllipsis.propTypes = {
};

TextEllipsis.displayName = 'TextEllipsis';

module.exports = TextEllipsis;
