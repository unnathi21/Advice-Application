import React from 'react'
import './AdviceSample.css'

const AdviceSample = ({id,title,category,description}) => {
  return (
    <div className='Advice-sample'>
        <div className="Advice-sample-title">
            <h3>{title}</h3>

        </div>
        <p className='Advice-sample-category'>{category}</p>
        <p className='Advice-sample-desc'>{description}</p>
    </div>
  )
}

export default AdviceSample