import { useId } from 'react';

/* ————————————————————————————————————————————————
   Engraved ornament set. Everything is drawn with
   currentColor hairlines so it inherits the ink colour
   of whatever surface it sits on.
   ———————————————————————————————————————————————— */

export function Fleuron({ size = 26, className = '' }) {
  return (
    <svg className={'fleuron ' + className} width={size} height={size * 0.62} viewBox="0 0 60 37" fill="none" aria-hidden="true" focusable="false">
      <path d="M30 6.5c-3.6 0-6.4 2.3-6.4 5.4 0 2.8 2.1 4.9 4.9 4.9 2.4 0 4.2-1.7 4.2-3.9 0-1.9-1.3-3.3-3.1-3.3-1.5 0-2.6 1.1-2.6 2.5 0 1.1.8 2 1.9 2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M30 6.5c3.6 0 6.4 2.3 6.4 5.4 0 2.8-2.1 4.9-4.9 4.9-2.4 0-4.2-1.7-4.2-3.9 0-1.9 1.3-3.3 3.1-3.3 1.5 0 2.6 1.1 2.6 2.5 0 1.1-.8 2-1.9 2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M23.2 9.2C18.4 9.2 14 12.3 14 16.6c0 3.4 2.6 5.9 5.9 5.9 2.9 0 5.1-2.1 5.1-4.8" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      <path d="M36.8 9.2c4.8 0 9.2 3.1 9.2 7.4 0 3.4-2.6 5.9-5.9 5.9-2.9 0-5.1-2.1-5.1-4.8" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      <path d="M30 13.6v15.2" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      <circle cx="30" cy="31.4" r="1.7" fill="currentColor" />
      <path d="M12.6 22.2 8 22.6M47.4 22.2 52 22.6" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
    </svg>
  );
}

export function Rule({ className = '', tone = 'ink' }) {
  return (
    <div className={'rule rule--' + tone + ' ' + className} aria-hidden="true">
      <span className="rule__line" />
      <Diamond />
      <span className="rule__line" />
    </div>
  );
}

export function Diamond({ size = 7 }) {
  return (
    <svg className="diamond" width={size} height={size} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <path d="M5 0.6 9.4 5 5 9.4 0.6 5Z" fill="none" stroke="currentColor" strokeWidth="0.9" />
      <path d="M5 3 7 5 5 7 3 5Z" fill="currentColor" />
    </svg>
  );
}

/* ——— The great plate: an orrery of the curriculum ——— */
const SUBJECTS = [
  ['PHYSICS', 0],
  ['CHEMISTRY', 30],
  ['BIOLOGY', 60],
  ['MATHEMATICS', 90],
  ['COMPUTER SCI.', 120],
  ['ENGLISH', 150],
  ['WEB DEV.', 270],
  ['GRAPHIC DES.', 300],
  ['SHORTHAND', 330],
];

const PLANETS = [
  { r: 300, a: -38, s: 6.5 },
  { r: 236, a: 62, s: 5 },
  { r: 170, a: 152, s: 4.5 },
  { r: 300, a: 118, s: 4 },
  { r: 236, a: -142, s: 5.5 },
];

export function Orrery({ className = '' }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9_-]/g, '');
  const C = 450;
  const ticks = [];
  for (let i = 0; i < 72; i += 1) {
    const a = (i * 5 * Math.PI) / 180;
    const major = i % 6 === 0;
    const inner = 402 - (major ? 15 : 7);
    ticks.push(
      <line
        key={'t' + i}
        x1={C + Math.cos(a) * inner}
        y1={C + Math.sin(a) * inner}
        x2={C + Math.cos(a) * 405}
        y2={C + Math.sin(a) * 405}
        stroke="currentColor"
        strokeWidth={major ? 1.15 : 0.55}
        strokeOpacity={major ? 0.85 : 0.5}
      />
    );
  }

  const labels = SUBJECTS.map(([name, deg]) => {
    const a = ((deg - 90) * Math.PI) / 180;
    const x = C + Math.cos(a) * 372;
    const y = C + Math.sin(a) * 372;
    const flipped = deg > 90 && deg < 270;
    return (
      <text
        key={name}
        x={x}
        y={y}
        transform={'rotate(' + (deg + (flipped ? 90 : -90)) + ' ' + x + ' ' + y + ')'}
        textAnchor="middle"
        className="orrery__label"
      >
        {name}
      </text>
    );
  });

  const sectors = SUBJECTS.map(([name, deg], i) => {
    const a = ((deg - 90) * Math.PI) / 180;
    const b = ((deg - 90 + 15) * Math.PI) / 180;
    return (
      <path
        key={'s' + name}
        d={
          'M' + (C + Math.cos(a) * 356) + ' ' + (C + Math.sin(a) * 356) +
          ' L' + (C + Math.cos(a) * 396) + ' ' + (C + Math.sin(a) * 396) +
          ' M' + (C + Math.cos(b) * 392) + ' ' + (C + Math.sin(b) * 392) +
          ' A 392 392 0 0 1 ' + (C + Math.cos(((deg + 15 - 90) * Math.PI) / 180) * 392) + ' ' +
          (C + Math.sin(((deg + 15 - 90) * Math.PI) / 180) * 392)
        }
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.35"
        fill="none"
      />
    );
  });

  return (
    <svg className={'orrery ' + className} viewBox="0 0 900 900" fill="none" role="img" aria-label="An engraved orrery: the twelve subjects of the academy arranged in orbit around a central sun">
      <defs>
        <pattern id={'hatch' + id} width="3.4" height="3.4" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
          <line x1="0" y1="0" x2="0" y2="3.4" stroke="currentColor" strokeWidth="0.55" strokeOpacity="0.5" />
        </pattern>
        <radialGradient id={'sun' + id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.04" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <clipPath id={'clip' + id}>
          <circle cx={C} cy={C} r="54" />
        </clipPath>
      </defs>

      {/* outer rim */}
      <circle cx={C} cy={C} r="430" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.55" />
      <circle cx={C} cy={C} r="422" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.9" />
      <circle cx={C} cy={C} r="408" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" />
      {ticks}

      {sectors}

      {/* subject band */}
      <circle cx={C} cy={C} r="356" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      <circle cx={C} cy={C} r="396" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      {labels}

      {/* orbits */}
      <circle cx={C} cy={C} r="300" stroke="currentColor" strokeWidth="0.55" strokeOpacity="0.55" strokeDasharray="1 5" />
      <circle cx={C} cy={C} r="236" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6" />
      <circle cx={C} cy={C} r="170" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.45" strokeDasharray="8 6" />
      <ellipse cx={C} cy={C} rx="326" ry="196" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.45" transform={'rotate(-26 ' + C + ' ' + C + ')'} strokeDasharray="2 4" />
      <ellipse cx={C} cy={C} rx="290" ry="150" stroke="currentColor" strokeWidth="0.55" strokeOpacity="0.35" transform={'rotate(32 ' + C + ' ' + C + ')'} />

      {/* hairline cross */}
      <path d={'M' + C + ' 96 V806 M96 ' + C + ' H806'} stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.22" />

      {/* planets */}
      {PLANETS.map((p, i) => {
        const a = ((p.a - 90) * Math.PI) / 180;
        const x = C + Math.cos(a) * p.r;
        const y = C + Math.sin(a) * p.r;
        return (
          <g key={'p' + i}>
            <circle cx={x} cy={y} r={p.s + 9} fill={'url(#sun' + id + ')'} />
            <circle cx={x} cy={y} r={p.s} fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.9" />
            <circle cx={x} cy={y} r={p.s * 0.34} fill="currentColor" />
            <path
              d={'M' + (x - p.s - 15) + ' ' + y + ' h' + (p.s * 2 + 30)}
              stroke="currentColor"
              strokeWidth="0.4"
              strokeOpacity="0.35"
            />
          </g>
        );
      })}

      {/* the sun */}
      <circle cx={C} cy={C} r="112" fill={'url(#sun' + id + ')'} />
      <g className="orrery__rays">
        {Array.from({ length: 32 }).map((_, i) => {
          const a = (i * 11.25 * Math.PI) / 180;
          const long = i % 4 === 0;
          return (
            <line
              key={'r' + i}
              x1={C + Math.cos(a) * 62}
              y1={C + Math.sin(a) * 62}
              x2={C + Math.cos(a) * (long ? 104 : 82)}
              y2={C + Math.sin(a) * (long ? 104 : 82)}
              stroke="currentColor"
              strokeWidth={long ? 0.85 : 0.5}
              strokeOpacity={long ? 0.7 : 0.45}
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <circle cx={C} cy={C} r="56" stroke="currentColor" strokeWidth="1.1" fill="none" />
      <circle cx={C} cy={C} r="50" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" fill="none" />
      <circle cx={C} cy={C} r="44" fill={'url(#hatch' + id + ')'} fillOpacity="0.5" clipPath={'url(#clip' + id + ')'} />
      <text x={C} y={C + 15} textAnchor="middle" className="orrery__sun">N</text>

      {/* cardinal fleurons */}
      {[0, 90, 180, 270].map((deg) => {
        const a = ((deg - 90) * Math.PI) / 180;
        const x = C + Math.cos(a) * 430;
        const y = C + Math.sin(a) * 430;
        return (
          <path
            key={'c' + deg}
            d={'M' + x + ' ' + (y - 9) + ' L' + (x + 9) + ' ' + y + ' L' + x + ' ' + (y + 9) + ' L' + (x - 9) + ' ' + y + ' Z'}
            fill="var(--paper, #efe5d1)"
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

export function WaxSeal({ size = 132, label = 'ADMISSIONS OPEN', className = '' }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9_-]/g, '');
  const points = [];
  for (let i = 0; i < 96; i += 1) {
    const a = (i / 96) * Math.PI * 2;
    const wobble = 1 + Math.sin(i * 1.7) * 0.012 + Math.cos(i * 0.9) * 0.01;
    points.push([100 + Math.cos(a) * 86 * wobble, 100 + Math.sin(a) * 86 * wobble]);
  }
  const d = points.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' ') + 'Z';

  return (
    <div className={'wax ' + className} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <defs>
          <radialGradient id={'wax' + id} cx="38%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#a8402f" />
            <stop offset="55%" stopColor="#8c2f24" />
            <stop offset="100%" stopColor="#5d1b17" />
          </radialGradient>
          <path id={'waxpath' + id} d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" fill="none" />
        </defs>
        <path d={d} fill={'url(#wax' + id + ')'} stroke="#4a1411" strokeWidth="1" strokeOpacity="0.55" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#f3e3c8" strokeOpacity="0.32" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="52" fill="none" stroke="#f3e3c8" strokeOpacity="0.28" strokeWidth="0.7" />
        <g className="wax__ring">
          <text fill="#f6ead4" fillOpacity="0.92" fontSize="8.4" letterSpacing="2.9" fontFamily="'Spectral', Georgia, serif">
            <textPath href={'#waxpath' + id} startOffset="2">{[...label].join('')}</textPath>
          </text>
        </g>
        <text x="100" y="114" textAnchor="middle" fill="#f6ead4" fillOpacity="0.92" fontSize="42" fontFamily="'Bodoni Moda', Georgia, serif">N</text>
        <path d="M78 126h44" stroke="#f6ead4" strokeOpacity="0.5" strokeWidth="0.7" />
      </svg>
    </div>
  );
}

export function CompassRose({ size = 120, className = '' }) {
  return (
    <svg className={'rose ' + className} width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
      <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4" />
      <path d="M100 18 108 92 100 100 92 92Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.8" />
      <path d="M100 182 108 108 100 100 92 108Z" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeWidth="0.8" />
      <path d="M18 100 92 92 100 100 92 108Z" stroke="currentColor" strokeWidth="0.7" />
      <path d="M182 100 108 92 100 100 108 108Z" stroke="currentColor" strokeWidth="0.7" />
      <path d="M100 30 100 170 M30 100 170 100" stroke="currentColor" strokeWidth="0.35" strokeOpacity="0.5" />
      <circle cx="100" cy="100" r="5" fill="none" stroke="currentColor" strokeWidth="0.9" />
      <text x="100" y="14" textAnchor="middle" className="rose__n">N</text>
    </svg>
  );
}

/* ——— Course emblems: engraved vignettes, 120×120 ——— */
export function Emblem({ kind = 'web', size = 72, className = '' }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9_-]/g, '');
  return (
    <svg className={'emblem ' + className} width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <pattern id={'e' + id} width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.45" />
        </pattern>
      </defs>
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.45" strokeDasharray="1 3" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.7" />
      {kind === 'web' && (
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <rect x="27" y="34" width="66" height="47" rx="1.5" />
          <path d="M27 44h66" strokeWidth="0.8" />
          <circle cx="33.5" cy="39" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="38.5" cy="39" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="43.5" cy="39" r="1.4" fill="currentColor" stroke="none" />
          <path d="M35 55h20M35 62h30M35 69h14" strokeWidth="0.9" />
          <path d="M68 56l12 8-5 1.6-2.4 5.4z" fill="currentColor" fillOpacity="0.85" stroke="none" />
          <rect x="55" y="52" width="10" height="10" fill={'url(#e' + id + ')'} stroke="none" />
          <path d="M60 20v8M60 92v8M20 60h8M92 60h8" strokeWidth="0.7" strokeOpacity="0.6" />
        </g>
      )}
      {kind === 'design' && (
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <circle cx="52" cy="55" r="17" strokeWidth="1.1" />
          <circle cx="52" cy="55" r="6" />
          <path d="M69 52 86 72M64 60 84 66M60 68 78 78" strokeWidth="0.9" />
          <path d="M34 78h30v20H34z" fill={'url(#e' + id + ')'} strokeWidth="0.9" />
          <path d="M74 40l8-8 8 8-8 8z" strokeWidth="0.9" />
          <path d="M60 20v8M60 92v8M20 60h8M92 60h8" strokeWidth="0.7" strokeOpacity="0.6" />
        </g>
      )}
      {kind === 'shorthand' && (
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <path d="M45 30c8 0 14 6 14 14 0 10-6 16-14 24-8-8-14-14-14-24 0-8 6-14 14-14z" />
          <path d="M45 44v22" strokeWidth="0.8" />
          <path d="M52 56c8 4 12 12 12 24" strokeWidth="0.9" />
          <path d="M60 76h26M60 82h20M60 88h26" strokeWidth="0.8" strokeOpacity="0.7" />
          <path d="M28 34c8 0 10 5 10 10" strokeWidth="0.7" strokeOpacity="0.6" />
          <path d="M60 20v8M60 92v8M20 60h8M92 60h8" strokeWidth="0.7" strokeOpacity="0.6" />
        </g>
      )}
    </svg>
  );
}

export function Spine({ className = '' }) {
  return (
    <svg className={'spine ' + className} viewBox="0 0 400 24" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M0 12h400" stroke="currentColor" strokeWidth="0.6" />
      <path d="M0 16h400" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" />
      <path d="M0 6h400" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />
    </svg>
  );
}
