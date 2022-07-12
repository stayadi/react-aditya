import React from 'react'
import { useState } from 'react'
const MyComponents = () => {
    const [message] = useState("Welcome to TechMojo")
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default MyComponents