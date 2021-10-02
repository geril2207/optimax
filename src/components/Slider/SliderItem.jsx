import React from 'react'
import { useDispatch } from 'react-redux'
import { changeMainItem } from '../../redux/actions/actions'
import classes from '../../styles/Slider.module.css'

const SliderItem = ({ elem, index, itemWidth }) => {
  const dispatch = useDispatch()
  function clickHandler() {
    dispatch(changeMainItem(index))
  }
  return (
    <div
      className={classes.slider__item}
      style={{
        minWidth: itemWidth,
      }}
      onClick={clickHandler}
    >
      <img className={classes.slider__item_img} src={elem.image} alt="" />
      <h4 className={classes.slider__item_title}>{elem.name}</h4>
    </div>
  )
}

export default SliderItem
