import {
  FETCH_TODO_SUCCESS,
  SET_LOADING,
  SET_MAIN_ITEM,
} from '../actions/actionTypes'

const initState = {
  mainItem: 0,
  loading: false,
  items: [],
}

const glassesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MAIN_ITEM:
      return { ...state, mainItem: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case FETCH_TODO_SUCCESS:
      return { ...state, items: action.payload.items }
    default:
      return state
  }
}

export default glassesReducer
