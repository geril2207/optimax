import React from 'react'
import { useSelector } from 'react-redux'

import EditorBar from './EditorBar'
import GlassesBar from './GlassesBar'

const RightBar = ({ item }) => {
  const condition = useSelector((state) => state.photo.condition)
  return condition === 3 ? <EditorBar /> : <GlassesBar item={item} />
}

export default RightBar
