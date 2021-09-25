export default (state, action) => {
  switch (action.type) {
    case 'GET_STORES':
      return {
        ...state,
        stores: action.payload
      }
    case 'GET_PIES':
      return {
        ...state,
        pies: [action.payload, ...state.pies]
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}