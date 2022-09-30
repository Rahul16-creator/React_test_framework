import React from 'react'

const Counter = () => {

  return (
    <div>
        <h2>Counter</h2>
        <p>0</p>
        <div>
            <button>-</button>
            <input type="number" name="count" value={1} />
            <button>+</button>
        </div>
    </div>
  )
}

export default Counter