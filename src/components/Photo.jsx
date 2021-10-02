import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UploadBtn } from '.'
import InitPhoto from '../assets/photo.png'
import cx from 'classnames'
import WebCam from './WebCam'
import { changeLeftMark, changeRightMark } from '../redux/actions/actions'
import WebcamGlasses from './WebcamGlasses'

function dragMark(e, mark, box, dispatch, markName) {
  const webCamContainerProps = box
    ? box.current.getBoundingClientRect()
    : { x: 31, y: 48 }
  // const markProps = mark.current.getBoundingClientRect()
  // const shiftX = e.clientX - window.scrollX + markProps.left
  // const shiftY = e.clientY - window.scrollY + markProps.top
  mark.current.ondragstart = function () {
    return false
  }
  moveAt(e)
  function moveAt(e) {
    const x = e.clientX - Math.round(webCamContainerProps.x)
    const y = e.clientY - Math.round(webCamContainerProps.y)
    if (x && y) {
      if (markName === 'right') {
        dispatch(changeRightMark(x, y))
      } else if (markName === 'left') {
        dispatch(changeLeftMark(x, y))
      }
    }
  }

  document.onmousemove = function (e) {
    moveAt(e)
  }
}

function breakMoveMark(mark) {
  document.onmousemove = null
  mark.current.onmouseup = null
}

const Photo = () => {
  const { condition, image, photoSize, photoRotation, leftMark, rightMark } =
    useSelector((state) => state.photo)

  const leftMarkRef = React.useRef()
  const rightMarkRef = React.useRef()
  const dispatch = useDispatch()

  const webCamContainer = React.useRef()

  // const frameScaleRatio = (frameWidth)
  return (
    <div className={cx('photo__container')} ref={webCamContainer}>
      {condition === 0 ? (
        <img src={InitPhoto} alt="" />
      ) : condition === 1 || condition === 2 ? (
        <WebCam />
      ) : condition === 3 ? (
        <div className="webcam__container">
          <img
            className="webcam__screen"
            style={{
              transform: `scale(${photoSize}) rotate(${photoRotation}deg)`,
            }}
            src={image}
            alt=""
          />
          <div
            draggable
            onMouseDown={(e) =>
              dragMark(e, leftMarkRef, webCamContainer, dispatch, 'left')
            }
            onMouseUp={() => breakMoveMark(leftMarkRef)}
            style={{ top: `${leftMark.y}px`, left: `${leftMark.x}px` }}
            className="mark left__mark"
            ref={leftMarkRef}
          ></div>
          <div
            draggable
            onMouseDown={(e) =>
              dragMark(e, rightMarkRef, webCamContainer, dispatch, 'right')
            }
            onMouseUp={() => breakMoveMark(rightMarkRef)}
            className="mark right__mark"
            style={{ top: `${rightMark.y}px`, left: `${rightMark.x}px` }}
            ref={rightMarkRef}
          ></div>
        </div>
      ) : condition === 4 ? (
        <div className="webcam__container">
          <WebcamGlasses />
        </div>
      ) : (
        false
      )}

      {condition === 1 || condition === 2 ? false : <UploadBtn />}
    </div>
  )
}

export default Photo
