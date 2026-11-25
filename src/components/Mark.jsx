import { ART } from '../data/site.js';

/* NEXTECH logo — official brand logo image (hexagon + drafting compass). */
export default function Mark({ size = 46, className = '' }) {
  const h = Math.round(size * 1.3);
  return (
    <img
      className={`mark ${className}`}
      src={ART.logoMark}
      alt="NEXTECH ACADEMY logo"
      height={h}
      width={Math.round((h * 656) / 544)}
      decoding="async"
    />
  );
}
