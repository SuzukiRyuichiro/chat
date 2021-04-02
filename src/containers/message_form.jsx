import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions'

export default class MessageForm extends React.Component {
  constructor(props){
    super(props);
    console.log('constructoring');
    this.state = {
      value: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('.form-input');
    sendMessage('general', 'scooter', input.value);
    // here, i have to dispatch an action that changes redux state
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="message-form">
        <label>
          Name:
          <input type="text" className="form-input" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
