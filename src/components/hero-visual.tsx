export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract analytics dashboard showing reliable data flow">
      <div className="visual-grid" />
      <div className="visual-topline">
        <span className="status-dot" />
        <span>Decision system / live</span>
        <span className="visual-code">SE-ANL-01</span>
      </div>
      <div className="visual-kpis">
        <div><small>Reliability</small><strong>99.2%</strong><span>validated records</span></div>
        <div><small>Signal</small><strong>+18%</strong><span>response coverage</span></div>
        <div><small>Risk</small><strong>12</strong><span>exceptions surfaced</span></div>
      </div>
      <div className="visual-chart">
        <div className="chart-label"><span>Operational signal</span><strong>Decision-ready</strong></div>
        <svg viewBox="0 0 600 210" role="img" aria-label="Rising analytical signal with confidence band">
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity=".35"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <g className="chart-grid-lines"><path d="M0 35H600M0 90H600M0 145H600M0 200H600"/></g>
          <path className="chart-area" d="M0 178 C40 170 62 158 96 165 S154 144 190 150 246 104 282 119 342 94 378 101 431 64 470 75 530 36 600 28 V210 H0Z" fill="url(#area)"/>
          <path className="chart-line" d="M0 178 C40 170 62 158 96 165 S154 144 190 150 246 104 282 119 342 94 378 101 431 64 470 75 530 36 600 28"/>
          <g className="chart-dots"><circle cx="96" cy="165" r="5"/><circle cx="282" cy="119" r="5"/><circle cx="470" cy="75" r="5"/><circle cx="600" cy="28" r="6"/></g>
        </svg>
      </div>
      <div className="visual-flow">
        <span>Messy inputs</span><i/><span>Validated model</span><i/><span>Business action</span>
      </div>
    </div>
  );
}
