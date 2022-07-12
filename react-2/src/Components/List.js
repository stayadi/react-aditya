import React from 'react'

const List = (props) => {
  return (
    <div>
       <p>{props.tasks.join(" , ")}</p> 
    </div>
  )
}

export default List