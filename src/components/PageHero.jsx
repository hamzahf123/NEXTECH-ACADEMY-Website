import { Link } from 'react-router-dom';
import { ART } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function PageHero({ eyebrow, title, intro, crumbs = [], children, art = true }) {
  return (
    <section className="pagehero">
      {art && (
        <div className="pagehero__art" aria-hidden="true">
          <img src={ART.arches} alt="" />
        </div>
      )}
      <div className="pagehero__fade" aria-hidden="true" />
      <div className="container pagehero__inner">
        <Reveal variant="fade">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <span className="crumbs__sep">/</span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
          <p className="eyebrow"><span className="eyebrow__mark" />{eyebrow}</p>
          <h1 className="pagehero__title">{title}</h1>
          {intro && <p className="pagehero__intro">{intro}</p>}
          {children && <div className="pagehero__actions">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
