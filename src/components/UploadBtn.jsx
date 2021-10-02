import React from 'react'

import classes from '../styles/UploadBtn.module.css'

import btnPrev from '../assets/btn-prev.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { photoCondition } from '../redux/actions/actions'

const UploadBtn = ({ func }) => {
  const condition = useSelector((state) => state.photo.condition)
  const dispatch = useDispatch()

  function uploadHandler() {
    if (condition === 3) {
      return dispatch(photoCondition(condition - 1))
    }
    if (condition === 4) {
      return dispatch(photoCondition(condition - 2))
    }
    if (func) {
      func()
    }
    return dispatch(photoCondition(condition + 1))
  }

  const textSpan = ['Upload', '', 'Take a photo', 'Retake', 'Retake']

  return condition === 1 ? (
    <div className={classes.hidden}></div>
  ) : (
    <button className={classes.btn} onClick={uploadHandler}>
      <img className={classes.img} src={btnPrev} alt="" />
      <span className={classes.text}>{textSpan[condition]}</span>
    </button>
  )
}

export default UploadBtn
