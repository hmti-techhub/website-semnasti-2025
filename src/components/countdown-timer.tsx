'use client';

import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: November 24, 2025 at 00:00:00 (UTC)
    const targetDate = new Date('2025-11-24T00:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Event has started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Run immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-3 justify-center mt-8">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
        <div
          key={unit}
          className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 text-center min-w-[70px] transition-all duration-300 hover:bg-white/20"
        >
          <div className="text-2xl md:text-3xl font-bold mb-1">{formatTime(timeLeft[unit])}</div>
          <div className="text-xs uppercase tracking-wider opacity-70">
            {unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;