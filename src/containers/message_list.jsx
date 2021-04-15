import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions'

class MessageList extends React.Component {
  fetchMessage = () => {
    fetch(`https://scooter-messages.herokuapp.com/api/v1/channels/${this.props.selectedChannel}/messages` )
    .then(response => response.json())
    .then(data => this.props.setMessages(data.messages));
  }


  componentWillMount() {
    const fetchMessageId = setInterval(this.fetchMessage, 1000);
  }

  componentWillUnmount() {
    clearInterval(fetchMessageId);
  }

  render() {
    let messageExists = (this.props.messages.length > 0);
    let channelSelected = this.props.selectedChannel;
    if(messageExists){　// if message is there (which means channel is selected as well)
      return(
        <div className="message-list">
          <div className="channel-name">
            <h3>{this.props.selectedChannel}</h3>
          </div>
          {this.props.messages.map(message => <Message message={message} key={Math.random()} />)}
        </div>
      )
    } else {
      if (channelSelected) { // if the selected channel has message
        return(
          <div className="message-list">
            <h3>{this.props.selectedChannel}</h3>
            <p>There is no message in this {this.props.selectedChannel}</p>
          </div>
        )
      } else {
        return(
          <div className="message-list">
            <h3>No channel selected </h3>
            <p className="text-muted">(Also, it may take a while if you just opened the app. Heroku dyno is probably waking up <i class="devicon-heroku-plain"></i>)</p>
          </div>
        )
      }
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
