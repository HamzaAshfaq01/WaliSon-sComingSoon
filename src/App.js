import React, { useEffect, useState } from 'react';
import Logo from './assets/logo.png';
import './App.css';

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-5-23`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  // console.log(timerComponents[3].props.children);
  console.log(timerComponents[3]);
  // console.log(timerComponents[3].pr  ops.children.length < 1);
  return (
    <div className='App'>
      <div>
        <figure>
          <img src={Logo} />
          <figcaption>
            <small>Shop with Prizes</small>
            Paradise Competitions
          </figcaption>
        </figure>
        <div className='row clock' id='clockdiv'>
          <div className='col-3 d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 days'>
              {timerComponents[0] && timerComponents[0].props.children[0]}
            </h1>
            <small>Days</small>
          </div>
          <div className='col-3 d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 hours'>
              {' '}
              {timerComponents[1] && timerComponents[1].props.children[0]}
            </h1>
            <small>Hours</small>
          </div>
          <div className='col-3  d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 minutes'>
              {' '}
              {timerComponents[2] && timerComponents[2].props.children[0]}
            </h1>
            <small>Min</small>
          </div>
          <div className='col-3  d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 seconds'>
              {' '}
              {timerComponents[3] ? timerComponents[3].props.children[0] : '00'}
            </h1>
            <small>Sec</small>
          </div>
        </div>
        <h2>Something Really Cool is Coming Soon !</h2>
        <h3>
          For Contact Us :{' '}
          <a href='#'>
            <i className='fab fa-whatsapp'></i>
          </a>
        </h3>
      </div>
    </div>
  );
}

export default App;
