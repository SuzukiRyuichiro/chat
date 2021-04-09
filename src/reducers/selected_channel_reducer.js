export default function (state=[], action) {
  if (state === undefined) {
    console.log('here');
  }
  switch(action.type){
    case 'SET_SELECTED_CHANNEL':
      return action.payload;
    default:
      return state;
  }
}
