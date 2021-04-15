import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sendMessage, setMessages } from '../actions'

class MessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nameValue: '',
      contentValue: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const content = document.querySelector('#content');
    if(this.props.selectedChannel !== null){this.props.sendMessage(this.props.selectedChannel, name.value, content.value);}
    this.setState({ contentValue: '' }); // Reset message input
    fetch(`https://scooter-messages.herokuapp.com/api/v1/channels/${this.props.selectedChannel}/messages` )
    .then(response => response.json())
    .then(data => this.props.setMessages(data.messages));
  }

  handleNameChange = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  }

  handleContentChange = (event) => {
    this.setState({contentValue: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="message-form">
        <label>
          Name:
          <input type="text" id="name" className="form-input" value={this.state.nameValue} onChange={this.handleNameChange} />
        </label>
        <label className="mx-3">
          Message:
          <input type="text" id="content" className="form-input" value={this.state.contentValue} onChange={this.handleContentChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage,
    setMessages: setMessages },
    dispatch
  );
}

function mapReduxStateToProps(state){
  return {
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageForm);
