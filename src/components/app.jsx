import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'
import MessageForm from '../containers/message_form'
import ChannelForm from '../containers/channel_form'

const App = () => {
  return (
    <div className="app">
      <div className="left-screen bg-success sticky-top">
        <h2><i className="devicon-react-original"></i> <i className="devicon-redux-original"></i> Chat</h2>
        <ChannelList />
        <ChannelForm />
      </div>
      <div className="right-screen">
        <MessageList />
      </div>
      <MessageForm />
    </div>
  );
};

export default App;
