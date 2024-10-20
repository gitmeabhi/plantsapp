import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='thanks-container'>
        <h1 className='thanks-head'>Thank You!</h1>
        <p className='thanks-para'>Explor more on our website.</p>
        <Link to = "/" className='back-link'><button type=' button' className='back-btn'>Back to Home</button></Link>
    </div>

  )
}

export default Thanks