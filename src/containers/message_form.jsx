import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions'

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
    this.props.sendMessage('tokyo-bilinguals', name.value, content.value);
  }

  handleNameChange = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  }

  handleContentChange = (event) => {
    this.setState({
      contentValue: event.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="message-form">
        <label>
          Name:
          <input type="text" id="name" className="form-input" value={this.state.nameValue} onChange={this.handleNameChange} />
        </label>
        <label>
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
    { sendMessage: sendMessage },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MessageForm);
