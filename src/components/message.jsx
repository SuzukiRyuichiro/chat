import React from 'react'

export default class Message extends React.Component {
  render(){
    const { author, content } = this.props.message;
    const shortDate =  new Date(this.props.message.created_at).toLocaleTimeString('en-US');
    return(
      <div className='message border-bottom'>
        <b className='author'>{author}</b> <small className='created_at text-muted'>{shortDate}</small>
        <p className='content'>{content}</p>
      </div>
    )
  }
}
