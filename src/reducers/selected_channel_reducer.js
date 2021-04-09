export default function (state, action) {
  if (state === undefined) {
    return fetch('https://scooter-messages.herokuapp.com/api/v1/channels' ).then(response => response.json()).then(data => data.channels[0])
;
  }
  switch(action.type){
    case 'SET_SELECTED_CHANNEL':
      return action.payload;
    default:
      return state;
  }
}
