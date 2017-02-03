/**
 * TextEllipsis Component for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import { getWidthFromDOM } from './utils';
import Tooltip from 'uxcore-tooltip';

class TextEllipsis extends React.Component {

  constructor(props) {
    super(props);
    // 判断是否支持 WebkitLineClamp 属性
    let isSupportLineClamp = true;
    const node = document.createElement('div');

    if ('WebkitLineClamp' in node.style) {
      node.style['WebkitLineClamp'] = 3;
      if (node.style['WebkitLineClamp'] != 3) {
        isSupportLineClamp = false;
      }
    } else {
      isSupportLineClamp = false;
    }

    this.state = {
      isSupportLineClamp,
      wrapWidth: 'auto',
      fontSize: 16,
    };
  }

  componentDidMount() {
    let wrapDOM = ReactDOM.findDOMNode(this).parentNode;
    let wrapWidth = getWidthFromDOM(wrapDOM);
    // 拿到父结构的 font-size 用于自动计算宽度
    let fontSize = wrapDOM.currentStyle ? parseInt(wrapDOM.currentStyle.fontSize) : parseInt(window.getComputedStyle(wrapDOM, null).getPropertyValue('font-size'));

    this.setState({
      wrapWidth: wrapWidth,
      fontSize: fontSize,
    });
  }

  render() {
    let content = null;
    let { style = null, prefixCls, className = '', overlayClassName, lineLimit, text } = this.props;
    const { wrapWidth, isSupportLineClamp, fontSize } = this.state;

    let cls = prefixCls || "uxcore-text-ellipsis";
    if(className){
      cls += ' ' + className;
    }

    if (lineLimit === 1) {

      content = (
        <span
          className={cls}
          style={{
            width: wrapWidth,
            textOverflow: 'ellipsis',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            ...style,
          }}
        >
          {text}
        </span>
      );

    } else if (lineLimit > 1) {

      if (this.state.isSupportLineClamp) {

        content = (
          <span
            className={cls}
            style={{
              width: wrapWidth,
              textOverflow: 'ellipsis',
              display: 'inline-block',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: lineLimit,
              WebkitBoxOrient: 'vertical',
              ...style,
            }}
          >
            {text}
          </span>
        );

      } else {

        let lineCount = 10;
        if (wrapWidth !== 'auto') {
          lineCount = parseFloat(wrapWidth / fontSize, 10);
        }
        lineCount = Math.floor(lineCount);

        let textArr = getTextArr(text, lineCount, lineLimit);

        const textList = textArr.map((item, index)=> {

          // 最后一个超过一行长度的裁切一下加下省略号
          if (index == lineLimit - 1 && item.length === lineCount) {
            return <span key={index}>{setEllipsis(item)}</span>;
          }

          return <span key={index}>{item}</span>;

        });

        content = (
          <span
            className={cls}
            style={{
              width: wrapWidth,
              ...style
            }}
          >
            {textList}
          </span>
        );
      }

    }


    if (this.props.showTooltip) {
      return (
        <Tooltip overlayClassName={overlayClassName} overlay={text} placement="bottom">
         {content}
        </Tooltip>
      );
    } else {
      return (
        <span title={text}>{content}</span>
      );
    }
  }
}

function getTextArr(text, lineTextLength, lineLimit) {
  let result = [];

  for (let i = 1; i <= Math.ceil(text.length/lineTextLength); i++) {
    const start = lineTextLength * (i - 1);
    const end = Math.min(i * lineTextLength, text.length);
    const currentStr = text.substring(start, end);
    result.push(currentStr);
  }

  if (result.length > lineLimit) {
    result.splice(lineLimit);
  }

  return result;
}

function setEllipsis(text) {
  let textArr = text.split('');
  textArr.splice(textArr.length - 1, 3, '...');
  return textArr.join('');
}

TextEllipsis.defaultProps = {
  className: '',
  overlayClassName: '',
  lineLimit: 1,
  showTooltip: false,
  // 设置内容
  text: '',
};

TextEllipsis.propTypes = {
  style: React.PropTypes.object,
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
