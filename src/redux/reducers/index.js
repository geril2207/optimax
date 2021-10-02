import { combineReducers } from 'redux'
import glassesReducer from '../reducers/glasses'
import photoReducer from './photo'
const rootReducer = combineReducers({
  glasses: glassesReducer,
  photo: photoReducer,
})

export default rootReducer
