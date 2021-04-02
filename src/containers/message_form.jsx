import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions'

class MessageForm extends React.Component {
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
    this.props.sendMessage('general', 'scooter', input.value);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MessageForm);
