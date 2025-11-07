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
    // Target: December 6, 2025 at 00:00:00 (UTC)
    const targetDate = new Date('2025-12-06T00:00:00Z').getTime();

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
    <div className="flex gap-2.5 md:gap-4 justify-center mt-2 md:mt-4">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
        <div
          key={unit}
          className="relative bg-gradient-to-br from-[#17D3FD]/20 to-[#CD3DFF]/20 backdrop-blur-md rounded-2xl p-2.5 md:p-4 border border-white/20 text-center min-w-[64px] md:min-w-[92px] transition-all duration-300 hover:border-white/40 hover:scale-[1.03]"
        >
          <div className="text-xl md:text-4xl font-bold mb-1 md:mb-2 text-gradient">{formatTime(timeLeft[unit])}</div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70 font-medium">
            {unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;