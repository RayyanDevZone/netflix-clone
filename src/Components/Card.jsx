import React from 'react'
import './Card.scss'

const Card = ({img}
) => {
  return (
    <div className='card'>
        <img id='img ' src={img} alt="cover"/>
    </div>
  )
}

export default Card