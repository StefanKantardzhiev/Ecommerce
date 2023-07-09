import React, { useEffect, useState } from 'react'
const Clock = () => {
  const [days, setDays] = useState()
  const [hrs, setHrs] = useState()
  const [mins, setMins] = useState()
  const [sec, setSec] = useState()

  let interval;

  const countDown = () => {
    const destination = new Date('Jul 30, 2023').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = now - destination
      const day = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
      const seconds = Math.floor(difference % (1000 * 60) / 1000)
      if (destination < 0) clearInterval(interval.current)
      else {
        setDays(-day)
        setHrs(-hours)
        setMins(-minutes)
        setSec(-seconds)
      }
    })
  }

  useEffect(() => {
    countDown()
  })

  return (

    <div className='clock'>
      <div className="clock-wrapper">
        <div>
          <div className="days">{days}</div>
          <div className="days-words">Days</div>
        </div>
        <span className="text-white fs-1">:</span>
        <div>
          <div className="hours">{hrs}</div>
          <div className="hours-words">Hours</div>
        </div>
        <span className="text-white fs-1">:</span>
        <div>
          <div className="mins">{mins}</div>
          <div className="mins-words">Minutes</div>
        </div>
        <span className="text-white fs-1">:</span>
        <div>
          <div className="secs">{sec}</div>
          <div className="secs-words">Seconds</div>
        </div>
      </div>

    </div>
  )
}

export default Clock