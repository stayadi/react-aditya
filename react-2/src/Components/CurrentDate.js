import React from 'react'

const CurrentDate = (props) => {
    
  return (
    <div className='date-container'>
    <p>The Current Date is: {props.currDate} </p>
    </div>
  )
}

export default CurrentDate