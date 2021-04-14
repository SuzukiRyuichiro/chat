export default function(state, action) {
  if(state === undefined){
    return [{author: "No one", content: "No message here yet"}];
  }
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload;
    case 'SEND_MESSAGE':
      state.push(action.payload)
      return state;
    default:
      return state;
  }
}
