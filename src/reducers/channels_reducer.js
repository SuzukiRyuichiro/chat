export default function (state=[], action) {
  switch(action.type){
    case 'SET_CHANNELS':
      return action.payload;
    case 'SET_SELECTED_CHANNEL':
      return action.payload;
    default:
      return state;
  }
}
