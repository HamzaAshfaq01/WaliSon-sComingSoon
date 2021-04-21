import Logo from './assets/logo.png';
import './App.css';
import React from 'react';

function App() {
  React.useEffect(() => {
    allFunctionality();
  }, []);
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
            <h1 className='m-0 p-0 days'>00</h1>
            <small>Days</small>
          </div>
          <div className='col-3 d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 hours'>16</h1>
            <small>Hours</small>
          </div>
          <div className='col-3  d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 minutes'>07</h1>
            <small>Min</small>
          </div>
          <div className='col-3  d-flex flex-column align-items-center'>
            <h1 className='m-0 p-0 seconds'>23</h1>
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

const allFunctionality = () => {
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function initializeClock(id, endtime) {
    const daysSpan = document.querySelector('.days');
    const hoursSpan = document.querySelector('.hours');
    const minutesSpan = document.querySelector('.minutes');
    const secondsSpan = document.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parse(new Date()) + 32 * 24 * 60 * 60 * 1000);
  console.log(deadline);
  initializeClock('clockdiv', deadline);
};
