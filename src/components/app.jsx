import React from 'react';
import MessageList from '../containers/message_list'
import MessageForm from '../containers/message_form'

const App = () => {
  return (
    <div className="app">
      <div className="left-screen bg-success sticky-top">
        <h1>hey</h1>
      </div>
      <div className="right-screen">
        <MessageList />
      </div>
      <MessageForm />
    </div>
  );
};

export default App;
