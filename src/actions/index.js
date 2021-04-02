// TODO: add and export your own actions
export function setMessages(messages) {
  return {
    type: 'SET_MESSAGES',
    payload: messages
  }
}

export function createMessage(channel, author, content) {
  return {
    type: 'SEND_MESSAGE',
    payload: {channel: channel, author: author, content: content}
  }
}
