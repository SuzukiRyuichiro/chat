import React from 'react';

export default class MessageForm extends React.Component {
  constructor(props){
    super(props);
    console.log('constructoring');
    this.state = {
      value: 'hello'
    };
  }

  handleSubmit = () => {

  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="message-form">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
