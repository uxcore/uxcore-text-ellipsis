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
    const style = { width: '200px', marginTop: '20px',marginBottom: '20px' };
    const pStyle = { color: 'red' };
    return (
      <div style={{ marginTop: '20px', marginLeft: '30px' }}>
        <p style={pStyle}>限制三行，并显示tooltip</p>
        <div style={style}>
          <TextEllipsis
            lineLimit={3}
            overlayClassName="overlaystyle"
            showTooltip
            text="We provide the fundamental technology infrastructure and
            mark eting reach to help merchants, brands and other businesses
            that provide products, services and digital content to leverage
            the power of the Internet to engage with their users and customers.
            Our businesses are comprised of core commerce, cloud computing, digital media and"
          />
        </div>
        <p style={pStyle}>限制两行，不显示tooltip</p>
        <div style={style}>
          <TextEllipsis
            lineLimit={2}
            overlayClassName="overlaystyle"
            text="是可敬的分好卡德数据返回爱看的积分，和爱看的积分和爱卡机的发货卡交电话费空
            间都是。阿卡绝对是发卡机的和发卡机的合法接口的话费，卡啊框架发哈肯定会说就发货快
            爱看的交话费卡号的反馈就爱看。的积分哈卡交电话费爱看的积分哈卡交电话费看"
          />
        </div>
        <p style={pStyle}>限制一行，显示tooltip</p>
        <div style={style}>
          <TextEllipsis
            lineLimit={1}
            overlayClassName="overlaystyle"
            showTooltip
            text="We provide the fundamen是可敬的分好卡德数据返回爱看的积分，和爱看的
            积We provide the fundamen分和爱卡机的发货卡交电话费空间都是。阿卡绝对是发卡
            We provide the fundamen机的和发卡机的合法接口的话费，卡啊框We provide the
            fundamen架发哈肯定会说就发货快爱看的交话费卡号的反馈就爱看。的积分哈卡交电话费爱看的积分哈卡交电话费看"
          />
        </div>
        <p style={pStyle}>不限制行数，不显示tooltip</p>
        <div style={style}>
          <TextEllipsis
            overlayClassName="overlaystyle"
            text="We provide the fundamen是可敬的分好卡德数据返回爱看的积分，和爱看的
            积We provide the fundamen分和爱卡机的发货卡交电话费空间都是。阿卡绝对是发卡
            We provide the fundamen机的和发卡机的合法接口的话费，卡啊框We provide the
            fundamen架发哈肯定会说就发货快爱看的交话费卡号的反馈就爱看。的积分哈卡交电话费爱看的积分哈卡交电话费看"
          />
        </div>
      </div>
    );
  }
}

module.exports = Demo;
