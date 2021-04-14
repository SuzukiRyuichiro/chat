import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions'

class MessageList extends React.Component {
  componentWillMount() {
    const fetchMessage = () => {
    fetch(`https://scooter-messages.herokuapp.com/api/v1/channels/${this.props.selectedChannel}/messages` )
    .then(response => response.json())
    .then(data => this.props.setMessages(data.messages));
    }
    fetchMessage();
    const fetchMessageId = setInterval(fetchMessage, 1000);
  }

  componentWillUnmount() {
    clearInterval(fetchMessageId);
  }

  render() {
    let messageExists = (this.props.messages.length > 0);
    console.log(messageExists);
    if(messageExists){
      return(
        <div className="message-list">
          <h3>{this.props.selectedChannel}</h3>
          {this.props.messages.map(message => <Message message={message} key={message} />)}
        </div>
      )
    } else {
      return(
        <div className="message-list">
          <h3>{this.props.selectedChannel}</h3>
          <p>There is no message in this channel</p>
        </div>
      )
    }
  }
}

function mapReduxStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setMessages: setMessages},
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
