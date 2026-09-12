"use client";

import { LiveTimeTicker } from "./live-time-ticker";

export function CineHudTelemetry() {
  return (
    <div className="cine-hud-bar" role="region" aria-label="Event Production Status">
      <div className="cine-rec-pill">
        <span className="cine-rec-dot" aria-hidden="true" />
        <span>BRAJWASI ON-GROUND DIRECTION</span>
      </div>

      <div className="cine-meter" aria-hidden="true">
        <span className="cine-meter-ticks">VRINDAVAN • MATHURA • DELHI • DESTINATION</span>
      </div>

      <div className="cine-telemetry-meta">
        <LiveTimeTicker prefix="LIVE IST" />
      </div>
    </div>
  );
}
