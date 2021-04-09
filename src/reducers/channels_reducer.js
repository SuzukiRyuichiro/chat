export default function (state=[{name:'tokyo'}], action) {
  switch(action.type){
    case 'SET_CHANNELS':
      return action.payload;
    case 'CREATE_CHANNEL':
      state.push(action.payload);
      return state;
    default:
      return state;
  }
}
