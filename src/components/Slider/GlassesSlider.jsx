import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import btnPrev from '../../assets/arrow_left.svg'
import { photoCondition, setDefaultProps } from '../../redux/actions/actions'
import classes from '../../styles/Slider.module.css'

import SliderItem from './SliderItem'

const GlassesSlider = ({ items }) => {
  const condition = useSelector((state) => state.photo.condition)
  const mainItem = useSelector((state) => state.glasses.mainItem)

  const [sliderContainerWidth, setSliderContainerWidth] = React.useState(660)
  const sliderContainer = React.useRef()
  const sliderProps = {
    itemsCount: items.length - 1,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  const [position, setPosition] = React.useState(0)

  const itemWidth = sliderContainerWidth / sliderProps.slidesToShow
  const movePosition = sliderProps.slidesToScroll * itemWidth
  const checkBtnNext = () => {
    if (
      position <=
      -(sliderProps.itemsCount - sliderProps.slidesToShow) * itemWidth
    ) {
      return true
    }
    return false
  }
  const btnNextHandler = () => {
    if (checkBtnNext()) return
    const newPosition = position - movePosition
    setPosition(newPosition)
  }

  const checkBtnPrev = () => {
    if (position === 0) {
      return true
    }
    return false
  }
  const btnPrevHandler = () => {
    if (checkBtnPrev()) return
    const newPosition = position + movePosition
    setPosition(newPosition)
  }
  const dispatch = useDispatch()

  function resetProps() {
    dispatch(setDefaultProps())
  }

  function tryGlassesHandler() {
    dispatch(photoCondition(4))
  }

  React.useEffect(() => {
    if (condition !== 3) {
      setSliderContainerWidth(sliderContainer.current.offsetWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return condition === 3 ? (
    <div>
      <button className={classes.try__btn} onClick={tryGlassesHandler}>
        Try on Glasses
      </button>
      <span onClick={resetProps} className={classes.reset__btn}>
        Reset Adjastments
      </span>
    </div>
  ) : (
    <div className={classes.slider}>
      <h3 className={classes.slider__title}>Similar Frames</h3>

      <div className={classes.slider__wrapper} ref={sliderContainer}>
        <div
          className={classes.slider__track}
          style={{ transform: `translateX(${position}px)` }}
        >
          {items &&
            items.map((elem, index) =>
              index === mainItem ? (
                false
              ) : (
                <SliderItem
                  key={index}
                  index={index}
                  elem={elem}
                  itemWidth={itemWidth}
                />
              )
            )}
        </div>
      </div>
      <div className={classes.slider__btns}>
        <div className={classes.slider__btn} onClick={btnPrevHandler}>
          <img
            className={classNames(classes.slider__prev, {
              [classes.slider__btn_disabled]: !!checkBtnPrev(),
            })}
            src={btnPrev}
            alt=""
          />
        </div>
        <div className={classes.slider__btn} onClick={btnNextHandler}>
          <img
            className={classNames(classes.slider__next, {
              [classes.slider__btn_disabled]: !!checkBtnNext(),
            })}
            src={btnPrev}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default GlassesSlider
