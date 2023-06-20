import React, { useState, useEffect } from 'react';

function App() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timerId = null;

    if (countdown > 0) {
      timerId = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [countdown]);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      const input = parseInt(event.target.value);
      const countdownValue = isNaN(input) ? 0 : Math.floor(input);
      setCountdown(countdownValue);
      event.target.value = '';
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const timerStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '16px',
  };

  return (
    <div style={containerStyle}>
      <input
        id="timeCount"
        type="number"
        onKeyDown={handleKeyDown}
        placeholder="Enter a number"
        style={{ fontSize: '24px', padding: '8px' }}
      />
      <div id="current-time" style={timerStyle}>
        {countdown}
      </div>
    </div>
  );
}

export default App;
