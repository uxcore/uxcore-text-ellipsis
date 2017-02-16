/**
 * TextEllipsis Component for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { getHeightFromDOM } from './utils';
import Tooltip from 'uxcore-tooltip';

class TextEllipsis extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      textLineHeight: 16,
      height: 'auto',
    };
  }

  componentDidMount() {
    const wrapDOM = ReactDOM.findDOMNode(this).parentNode;
    const praHeight = getHeightFromDOM(wrapDOM);
    // 拿到父结构的 line-height 用于自动计算高度
    const praLineHeight = wrapDOM.currentStyle ? parseInt(wrapDOM.currentStyle.lineHeight, 10) :
                   parseInt(window.getComputedStyle(wrapDOM, null)
                   .getPropertyValue('line-height'), 10);

    this.setState({
      height: praHeight,
      textLineHeight: praLineHeight,
    });
  }

  render() {
    const { prefixCls, className = '', overlayClassName, showTooltip, lineLimit, text }
          = this.props;
    const { height, textLineHeight } = this.state;


    let cls = prefixCls || 'uxcore-text-ellipsis';
    if (className) {
      cls = `${cls} text ${className}`;
    }

    let textEllipsisContent = null;
    let handlerDom = <span className="handler">...</span>;
    let wrapperStyle = { maxHeight: lineLimit * textLineHeight };

    if (lineLimit && (lineLimit * textLineHeight) < height) {
      if (showTooltip) {
        handlerDom = (<Tooltip
          overlayClassName={overlayClassName}
          overlay={text}
        >
          <span className="handler">...</span>
        </Tooltip>);
      }
      textEllipsisContent = (<span className="textContainer" style={wrapperStyle}>
        <span className={cls}>{text}</span>
        <span
          className="check-all"
          style={{ height: `${textLineHeight}px`, lineHeight: `${textLineHeight}px` }}
        >
          <span className="dot-more" style={{ height: `${textLineHeight}px` }}></span>
          {handlerDom}
        </span>
      </span>);
    } else {
      textEllipsisContent = <span>{text}</span>;
    }

    return textEllipsisContent;
  }
}


TextEllipsis.defaultProps = {
  className: '',
  overlayClassName: '',
  showTooltip: false,
  // 设置内容
  text: '',
};

TextEllipsis.propTypes = {
  prefixCls: React.PropTypes.string,
  overlayClassName: React.PropTypes.string,
  className: React.PropTypes.string,
  lineLimit: React.PropTypes.number,
  // 是否显示 tool tip
  showTooltip: React.PropTypes.bool,
  // 设置内容
  text: React.PropTypes.string,
};

TextEllipsis.displayName = 'TextEllipsis';

module.exports = TextEllipsis;
