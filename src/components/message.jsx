import React from 'react'

export default class Message extends React.Component {
  render(){
    const { author, content } = this.props.message;
    return(
      <div>
        <p>{content}</p>
        <small>{author}</small>
      </div>
    )
  }
}
