import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'
import MessageForm from '../containers/message_form'
import ChannelForm from '../containers/channel_form'

const App = (props) => {
  return (
    <div className="app">
      <div className="left-screen sticky-top">
        <div className="py-2 border-bottom">
          <h2><i className="devicon-react-original"></i> <i className="devicon-redux-original"></i> Chat</h2>
        </div>
        <ChannelList channelFromParams={props.match.params.channel} />
        <ChannelForm />
      </div>
      <div className="right-screen">
        <div className="right-screen-inner">
          <MessageList channelFromParams={props.match.params.channel} />
        </div>
        <MessageForm channelFromParams={props.match.params.channel} />
      </div>
    </div>
  );
};

export default App;
