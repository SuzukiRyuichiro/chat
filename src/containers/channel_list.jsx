import React from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions'

class ChannelList extends React.Component {
  componentWillMount() {
  }


  render() {
    return(
      <div className="channel-list">
      </div>
    )
  }

}

function mapReduxStateToProps(state) {
  return {
    channels: state.channel
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setChannels: setChannels},
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
