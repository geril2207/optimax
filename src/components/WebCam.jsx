import React from 'react'
import { useDispatch } from 'react-redux'
import Webcam from 'react-webcam'
import { UploadBtn } from '.'
import { photoCondition, uploadImage } from '../redux/actions/actions'

const WebCam = () => {
  const webcamRef = React.useRef(null)
  const [camCondtition, setCamCondtition] = React.useState('')
  const dispatch = useDispatch()
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    dispatch(uploadImage(imageSrc))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef])
  function checkUserMedia() {
    setCamCondtition('granted')
    dispatch(photoCondition(2))
  }
  function cameraErrorHandler(error) {
    setCamCondtition('denied')
  }
  React.useEffect(() => {
    navigator.permissions
      .query({ name: 'camera' })
      .then(function (permissionStatus) {
        setCamCondtition(permissionStatus.state) // granted, denied, prompt
      })
  }, [])
  return (
    <>
      <Webcam
        className="webcam__screen"
        audio={false}
        ref={webcamRef}
        width={444}
        screenshotFormat="image/jpeg"
        onUserMedia={checkUserMedia}
        onUserMediaError={cameraErrorHandler}
      />
      {camCondtition === 'prompt' ? (
        <div className="webcam__confirm_container">
          <h3>Allow camera access</h3>
          <h4>
            We ask you to enable camera access so you can start trying on
            glasses.
          </h4>
        </div>
      ) : camCondtition === 'granted' ? (
        <UploadBtn func={capture} />
      ) : camCondtition === 'denied' ? (
        <div className="webcam__confirm_container">
          <h3>Something went wrong</h3>
          <h4>Maybe you denied access to your camera</h4>
        </div>
      ) : (
        false
      )}
    </>
  )
}
export default WebCam
