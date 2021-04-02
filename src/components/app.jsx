import React from 'react';
import MessageList from '../containers/message_list'

const App = () => {
  return (
    <div className="app">
      <div className="left-screen">
        <div className="bg-primary">
        </div>
      </div>
      <div className="right-screen">
        <MessageList />
      </div>
    </div>
  );
};

export default App;
