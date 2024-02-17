import React from 'react'

// components
import CountUp from 'react-countup';


const Counter = () => {
  return (
    <div>
        <CountUp 
        end={100} 
        start={1}
        duration={10}
        />
    </div>
  )
}

export default Counter