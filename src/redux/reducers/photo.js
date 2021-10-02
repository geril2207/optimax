import {
  SET_DEFAULT,
  SET_LEFT_MARK,
  SET_PD,
  SET_PHOTOSIZE,
  SET_PHOTO_CONDITION,
  SET_PHOTO_ROTATION,
  SET_RIGHT_MARK,
  UPLOAD_IMAGE,
} from '../actions/actionTypes'

const initState = {
  condition: 0,
  image: '',
  pd: '62',
  photoSize: 1,
  photoRotation: 0,
  leftMark: { x: 135, y: 175, type: 'left' },
  rightMark: { x: 270, y: 175, type: 'right' },
}

const photoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DEFAULT:
      return {
        ...state,
        pd: '62',
        photoSize: 1,
        photoRotation: 0,
        leftMark: { x: 135, y: 175, type: 'left' },
        rightMark: { x: 270, y: 175, type: 'right' },
      }
    case SET_PD:
      return { ...state, pd: action.payload }
    case SET_PHOTOSIZE:
      return { ...state, photoSize: action.payload }
    case SET_PHOTO_ROTATION:
      return { ...state, photoRotation: action.payload }
    case SET_LEFT_MARK:
      return { ...state, leftMark: action.payload }
    case SET_RIGHT_MARK:
      return { ...state, rightMark: action.payload }
    case SET_PHOTO_CONDITION:
      return { ...state, condition: action.payload }
    case UPLOAD_IMAGE:
      return { ...state, image: action.payload }
    default:
      return state
  }
}

export default photoReducer
