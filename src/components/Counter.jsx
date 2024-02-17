import React from 'react'

// components
import CountUp from 'react-countup';


const Counter = (props) => {
  const {startNum, endNum} = props
  return (
    <div>
        <CountUp 
        end={endNum} 
        start={startNum}
        duration={10}
        />
    </div>
  )
}

export default Counter