"use client";

import { useState, useEffect } from "react";

export function LiveTimeTicker({ prefix = "IST" }: { prefix?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <span className="cine-time-placeholder">--:--:--</span>;
  }

  return (
    <span className="cine-live-time" aria-label="Current Indian Standard Time">
      {prefix} {time}
    </span>
  );
}
