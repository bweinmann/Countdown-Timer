import React from 'react'

export default function Time({days, hours, minutes, seconds}) {
    

  return (
    <div className="time-container">
        <section>
       
            <p className="time-text" id="days">{days}</p>
            <span>days</span>
        </section>
        <section>
    
            <p className="time-text" id="hours">{hours}</p>
            <span>hours</span>
         </section>
        <section>
        
            <p className="time-text" id="minutes">{minutes}</p>
            <span>minutes</span>
        </section>
        <section>
           
            <p className="time-text" id="seconds">{seconds}</p>
            <span>seconds</span>
        </section>
    </div>
  )
}
