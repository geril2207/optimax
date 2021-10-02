import {
  FETCH_TODO_SUCCESS,
  SET_DEFAULT,
  SET_LEFT_MARK,
  SET_LOADING,
  SET_MAIN_ITEM,
  SET_PD,
  SET_PHOTOSIZE,
  SET_PHOTO_CONDITION,
  SET_PHOTO_ROTATION,
  SET_RIGHT_MARK,
  UPLOAD_IMAGE,
} from './actionTypes'

export const setDefaultProps = () => ({
  type: SET_DEFAULT,
})

export const changePd = (pd) => ({
  type: SET_PD,
  payload: pd,
})

export const changePhotoSize = (photoSize) => ({
  type: SET_PHOTOSIZE,
  payload: photoSize,
})
export const changePhotoRotation = (photoRotation) => ({
  type: SET_PHOTO_ROTATION,
  payload: photoRotation,
})
export const changeLeftMark = (x, y) => ({
  type: SET_LEFT_MARK,
  payload: { x, y, type: 'left' },
})
export const changeRightMark = (x, y) => ({
  type: SET_RIGHT_MARK,
  payload: { x, y, type: 'right' },
})

export const photoCondition = (condition) => ({
  type: SET_PHOTO_CONDITION,
  payload: condition,
})

export const uploadImage = (img) => ({
  type: UPLOAD_IMAGE,
  payload: img,
})

export const loading = (load) => ({
  type: SET_LOADING,
  payload: load,
})

export const changeMainItem = (mainItem) => ({
  type: SET_MAIN_ITEM,
  payload: mainItem,
})

export const glassesFetchSuccess = (glasses) => ({
  type: FETCH_TODO_SUCCESS,
  payload: glasses,
})

export const glassesFetch = () => async (dispatch) => {
  dispatch(loading(true))
  const response = await fetch(
    'https://optimaxdev.github.io/volga-it/response.json'
  )
  const payload = await response.json()
  dispatch(glassesFetchSuccess(payload))
  dispatch(loading(false))
}
