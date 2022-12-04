import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const refresh = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section>
        <h3>Canada</h3>
        <div>{date.toLocaleTimeString('en-US')}</div>
      </section>
    </>
  );
};

export default Clock;
