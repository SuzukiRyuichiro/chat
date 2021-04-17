import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setSelectedChannel } from '../actions';
import { Link } from 'react-router-dom';

class ChannelList extends React.Component {
  fetchChannels = () => {
    fetch('https://scooter-messages.herokuapp.com/api/v1/channels')
    .then(response => response.json())
    .then(data => this.props.setChannels(data.channels))
  }

  componentWillMount() {
    // this will load all available channels from the API
    this.fetchChannels();
    const fetchChannelsId = setInterval(this.fetchChannels, 1000);
  }

  componentWillUnmount() {
    clearInterval(fetchChannelsId);
  }

  render() {
    return(
      <div className="channel-list mt-2">
        {this.props.channels.map(channel => <Link to={`/${channel.name}`}><h4 className={this.props.channelFromParams === channel.name ? 'active' : ''} key={channel.name}>{channel.name}</h4></Link>)}
      </div>
    )
  }

}

function mapReduxStateToProps(state) {
  return {
    channels: state.channels
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
