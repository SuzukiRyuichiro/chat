import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions'

class MessageList extends React.Component {
  componentWillMount() {
    const fetchMessage = () => {
      fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json())
    .then(data => this.props.setMessages(data.messages));
    console.log('fetched');
  }

    const fetchMessageId = setInterval(fetchMessage, 3000);
  }

  componentWillUnmount() {
    clearInterval(fetchMessageId);
  }

  render() {
    return(
      <div className="message-list">
        {this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
      </div>
    )
  }

}

function mapReduxStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setMessages: setMessages},
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
