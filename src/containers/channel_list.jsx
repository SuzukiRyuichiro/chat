import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setSelectedChannel } from '../actions'

class ChannelList extends React.Component {
  componentWillMount() {
    const fetchChannels = () => {
    fetch('https://scooter-messages.herokuapp.com/api/v1/channels' )
    .then(response => response.json())
    .then(data => this.props.setChannels(data.channels));
    }
    fetchChannels();
  }


  render() {
    return(
      <div className="channel-list">
        {this.props.channels.map(channel => <h1 key={channel.name}>{channel.name}</h1>)}
      </div>
    )
  }

}

function mapReduxStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { setChannels: setChannels,
      setSelectedChannel: setSelectedChannel },
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
