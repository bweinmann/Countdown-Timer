import React, {useState, useEffect} from 'react';
import './App.css';
import Time from './Components/Time';

function App() {

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const initiate = () => {
        const countdown = new Date("Jan 1, 2023").getTime();

        interval = setInterval(() => {
            const instant = new Date().getTime();
            const totalTime = (countdown - instant);

            const days = Math.floor(totalTime/(3600*1000*24));
            const hours = Math.floor((totalTime % (24*3600*1000))/(1000*60*60));
            const minutes = Math.floor((totalTime % (3600*1000))/(1000*60));
            const seconds = Math.floor((totalTime % (60*1000))/1000);

            if (totalTime < 0) {
              clearInterval(interval.current)
            } else {
              setDays(days);
              setHours(hours);
              setMinutes(minutes);
              setSeconds(seconds);
            }
        });
    }
    
    useEffect(() => {
      initiate();
    });

  return (
    <div className="App">
      <div className="header">
     <h1>Until new beginnings...</h1>
     <Time 
     days={days}
     hours={hours}
     minutes={minutes}
     seconds={seconds}
     />
     </div>
    </div>
  );
}

export default App;
