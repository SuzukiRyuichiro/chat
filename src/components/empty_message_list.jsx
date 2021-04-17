import React from 'react';

class EmptyMessageList extends React.Component {
  render() {
    return(
      <div className="message-list">
        <h3>No channel selected </h3>
        <p className="text-muted">(Also, it may take a while if you just opened the app. Heroku dyno is probably waking up <i class="devicon-heroku-plain"></i>)</p>
      </div>
    )
  }
}

export EmptyMessageList;