import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  changePd,
  changePhotoRotation,
  changePhotoSize,
  photoCondition,
} from '../../redux/actions/actions'

import arrowLeft from '../../assets/arrow_left.svg'
import pdImage from '../../assets/pd.svg'

const EditorBar = () => {
  const { pd, photoSize, photoRotation } = useSelector((state) => state.photo)

  function inputsHandler(e) {
    const value = e.target.value
    switch (e.target.name) {
      case 'pd':
        return dispatch(changePd(value))
      case 'photoSize':
        return dispatch(changePhotoSize(value))
      case 'photoRotation':
        return dispatch(changePhotoRotation(value))

      default:
        break
    }
    // setInputs({ ...inputs, [e.target.name]: value })
  }

  const dispatch = useDispatch()

  function backHandler() {
    dispatch(photoCondition(0))
  }
  return (
    <div className="rightbar editor">
      <div className="editor__back" onClick={backHandler}>
        <img className="editor__back_arrow" src={arrowLeft} alt="" />
        Back
      </div>
      <h3 className="editor__title">Adjust the Image</h3>
      <div className="editor__instructions">
        <div className="editor__instruction">
          <h5 className="editor__instruction_title">
            <strong>1. </strong>{' '}
            <span>Drag the RED targets to the center of your eyes.</span>
          </h5>
        </div>
        <div className="editor__instruction">
          <h5 className="editor__instruction_title">
            <strong>2. </strong> Drag to reposition photo
          </h5>
        </div>
        <div className="editor__instruction">
          <h5 className="editor__instruction_title">
            <strong>3. </strong> Set your PD, if you know it.
            <img className="editor__instruction_pd_img" src={pdImage} alt="" />
          </h5>
          <input
            className="editor__pd"
            type="text"
            value={pd}
            name="pd"
            onChange={inputsHandler}
          />
        </div>
        <div className="editor__instruction">
          <h5 className="editor__instruction_title">
            <strong>4. </strong> Adjust the photo with the controls.
          </h5>
          <h5 className="editor__instruction_subtitle">Photo size:</h5>
          <input
            className="editor__input_range"
            type="range"
            min="0.5"
            max="1.5"
            step="0.1"
            value={photoSize}
            name="photoSize"
            onChange={inputsHandler}
          />
          <h5 className="editor__instruction_subtitle">Photo rotation: </h5>
          <input
            className="editor__input_range"
            type="range"
            min="-180"
            max="180"
            step="5"
            value={photoRotation}
            name="photoRotation"
            onChange={inputsHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default EditorBar
