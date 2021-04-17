import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setSelectedChannel } from '../actions'

class ChannelList extends React.Component {
  fetchChannels = () => {
    fetch('https://scooter-messages.herokuapp.com/api/v1/channels')
    .then(response => response.json())
    .then(data => this.props.setChannels(data.channels))
  }

  componentWillMount() {
    // this will load all available channels from the API
    this.fetchChannels();
    console.log("Component will mount");
    const fetchChannelsId = setInterval(this.fetchChannels, 1000);
  }

  componentWillUnmount() {
    clearInterval(fetchChannelsId);
  }

  handleClick = (event) => {
    event.persist();
    // it will change the selected channel on Redux state tree on click
    return event.target.className !== 'channel-list mt-2' ? this.props.setSelectedChannel(event.target.innerText) : this.props.setSelectedChannel(this.props.channelFromParams);
  }


  render() {
    console.log('channel');
    return(
      <div className="channel-list mt-2" onClick={this.handleClick}>
        {this.props.channels.map(channel => <h4 className={this.props.channelFromParams === channel.name ? 'active' : ''} key={channel.name}>{channel.name}</h4>)}
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
