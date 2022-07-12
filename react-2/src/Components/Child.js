import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1 className='h1-container'>{props.state}</h1>
    </div>
  )
}

export default Child