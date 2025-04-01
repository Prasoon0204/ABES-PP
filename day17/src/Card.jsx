import React from 'react'

const Card = (props) => {
  return (
    <section>
        <h2>Name: {props.name}</h2>
        <h4>Email: {props.email}</h4>
    </section>
  )
}

export default Card