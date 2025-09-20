"use client";
import { useEffect, useState } from "react";

const AnimatedClock: React.FC = () => {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Format time as HH:MM:SS IST
    const formatted = time
        .toLocaleTimeString("en-IN", { hour12: false, timeZone: "Asia/Kolkata" });

    return (
        <div className="flex items-center font-mono px-3 py-1.5">
            <span className="font-bold text-black dark:text-white">
                {formatted} <span className="text-base font-normal">IST</span>
            </span>
        </div>
    );
};

export default AnimatedClock;