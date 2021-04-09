import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { createChannel } from '../actions'

class ChannelForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nameValue: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#channelName');
    this.props.sendMessage(this.props.selectedChannel.name, name.value, content.value);
  }

  handleNameChange = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  }

  render(){
    return(
      <form novalidate="novalidate" class="simple_form search" action="/" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <div class="search-form-control form-group">
          <input class="form-control string required" type="text" name="search[query]" id="search_query" />
          <button name="button" type="submit" class="btn btn-flat">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>

      // <form onSubmit={this.handleSubmit} className="channel-form">
      //   <input type="text" id="channelName" className="form-input" placeholder="New channel name" value={this.state.nameValue} onChange={this.handleNameChange} />
      //   <button type="submit" value="Create Channel" />
      // </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createChannel: createChannel },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ChannelForm);
