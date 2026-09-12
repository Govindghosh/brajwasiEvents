"use client";

import { LiveTimeTicker } from "./live-time-ticker";

export function CineHudTelemetry() {
  return (
    <div className="cine-hud-bar" role="region" aria-label="Camera Telemetry Readout">
      <div className="cine-rec-pill">
        <span className="cine-rec-dot" aria-hidden="true" />
        <span>PROD // 24FPS 8K RAW</span>
      </div>

      <div className="cine-meter" aria-hidden="true">
        <span className="cine-meter-ticks">3 . . 2 . . 1 . . 0 . . 1 . . 2 . . 3</span>
        <span className="cine-meter-pin" />
      </div>

      <div className="cine-telemetry-meta">
        <LiveTimeTicker prefix="TIME" />
      </div>
    </div>
  );
}
