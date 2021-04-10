import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setSelectedChannel } from '../actions'

class ChannelList extends React.Component {
  componentWillMount() {
    // this will load all available channels from the API
    const fetchChannels = () => {
    fetch('https://scooter-messages.herokuapp.com/api/v1/channels' )
    .then(response => response.json())
    .then(data => this.props.setChannels(data.channels));
    }
    fetchChannels();
    const fetchChannelsId = setInterval(fetchChannels, 1000);
  }

  componentWillUnmount() {
    clearInterval(fetchChannelsId);
  }

  handleClick = (event) => {
    event.persist();
    // it will change the selected channel on Redux state tree on click
    this.props.setSelectedChannel(
      fetch('https://scooter-messages.herokuapp.com/api/v1/channels' ).then(response => response.json()).then(data => data.channels.filter(channel => channel.name == event.target.innerText)[0] || this.props.selectedChannel)
    );
  }


  render() {
    return(
      <div className="channel-list" onClick={this.handleClick}>
        {this.props.channels.map(channel => <h4 className={this.props.selectedChannel.name === channel.name ? 'active' : ''} key={channel.name}>{channel.name}</h4>)}
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
