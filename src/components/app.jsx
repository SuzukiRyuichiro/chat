import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'
import MessageForm from '../containers/message_form'
import ChannelForm from '../containers/channel_form'

const App = () => {
  return (
    <div className="app">
      <div className="left-screen sticky-top">
        <div className="py-2 border-bottom">
          <h2><i className="devicon-react-original"></i> <i className="devicon-redux-original"></i> Chat</h2>
        </div>
        <ChannelList />
        <ChannelForm />
      </div>
      <div className="right-screen">
        <div className="right-screen-inner">
          <MessageList />
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
