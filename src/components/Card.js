import React from 'react'
import '../style/card.css'

const Card = (props) => {
    
  return (
    <div className='card' key={props.article_id}>
        <img src={props.image_url} alt="none"  />
        <div className='card-content'>
            <a href={props.link} target="_blank" rel="noopener noreferrer" >
            <h2 className='card-title'>{props.title}</h2>
            </a>
            
        </div>
      
    </div>
  )
}

export default Card
