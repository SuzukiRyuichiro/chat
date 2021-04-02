import React from 'react'

export default class Message extends React.Component {
  render(){
    const { author, content } = this.props.message;
    const shortDate =  new Date(this.props.message.created_at).toLocaleTimeString('en-US');
    const nameColor = { color: intToRGB(hashCode(this.props.message.author)) };
    return(
      <div className='message border-bottom'>
        <b className='author' style={nameColor}>{author}</b> <small className='created_at text-muted'>{shortDate}</small>
        <p className='content'>{content}</p>
      </div>
    )
  }
}

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

