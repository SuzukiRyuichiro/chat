export default function(state = [], action) {
  const test = {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  }

  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload;
    case 'SEND_MESSAGE':
      state.push(test)
      return state;
    default:
      return state;
  }
}
