import React from 'react'

const GlassesBar = ({ item }) => {
  return (
    <div className="rightbar">
      <h3 className="glasses__title">{item.name}</h3>
      <img src={item.image} alt="Очки" className="glasses__img" />
      <button className="glasses__btn">Choose Lenses</button>
      <div className="glasses__about">
        <div className="glasses__about_title">Product Description</div>
        <p className="glasses__about_description">{item.description}</p>
      </div>
    </div>
  )
}

export default GlassesBar
