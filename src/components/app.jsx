import React from 'react';
import MessageList from '../containers/message_list'

const App = () => {
  return (
    <div className="app">
      <div className="left-screen bg-success sticky-top">
        <h1>hey</h1>
      </div>
      <div className="right-screen">
        <MessageList />
      </div>
    </div>
  );
};

export default App;
