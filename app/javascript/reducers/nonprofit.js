import { FETCH_NONPROFIT } from '../actions/types'

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_NONPROFIT:
      return [action.payload.data, ...state]
    default:
      return state
  }
}
