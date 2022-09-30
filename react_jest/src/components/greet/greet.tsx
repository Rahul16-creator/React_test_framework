import React from 'react'

interface greetProps {
    name?:string
}
const Greet = ({name}:greetProps) => {
  return (
    <div>greet {name}</div>
  )
}

export default Greet;