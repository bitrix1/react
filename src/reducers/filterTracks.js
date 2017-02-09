const initialState = '';

export default function filterTracks(state = initialState, action) {
  if (action.type === 'FIND_TRACK') {
    return action.payload//{ ...state, column:  }
  }
  return state;
}
