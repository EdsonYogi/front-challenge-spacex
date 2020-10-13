import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="header">
        <h2 className="title">{props.title}</h2>
      </div>
      <div className="content">
        <p>{props.description}</p>
      </div>
      <div className="footer">
        <p>{props.date}</p>
      </div>
    </div>
  )
}
