import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const WebcamGlasses = () => {
  const { image, pd, photoSize, photoRotation, leftMark, rightMark } =
    useSelector((state) => state.photo)
  const item = useSelector(
    (state) => state.glasses.items[state.glasses.mainItem]
  )

  const webCamGlasses = React.useRef()
  const [frameScale, setFrameScale] = useState(1)

  const center = {
    x: (rightMark.x + leftMark.x) / 2,
    y: (rightMark.y + leftMark.y) / 2,
  }

  let angle =
    (Math.atan((rightMark.y - leftMark.y) / (rightMark.x - leftMark.x)) * 180) /
    Math.PI
  function changeFrameScale() {
    const frameScale =
      item.width /
      webCamGlasses.current.offsetWidth /
      (pd /
        Math.sqrt(
          (rightMark.x - leftMark.x) ** 2 + (rightMark.y - leftMark.y) ** 2
        ))
    setFrameScale(frameScale)
  }

  return (
    <>
      <img
        className="webcam__screen"
        style={{
          transform: `scale(${photoSize}) rotate(${photoRotation}deg)`,
        }}
        src={image}
        alt=""
      />

      <img
        src={item.mirror_frame}
        style={{
          position: 'absolute',
          transform: `translate(-50%, -50%) rotate(${angle}deg)  scale(${frameScale}) `,
          top: `${center.y}px`,
          left: `${center.x}px`,
        }}
        ref={webCamGlasses}
        alt=""
        className="webcam__glasses"
        onLoad={changeFrameScale}
      />
    </>
  )
}

export default WebcamGlasses
