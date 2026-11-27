import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, SITE, waLink } from '../data/site.js';
import { academicPrograms, professionalCourses } from '../data/courses.js';
import Icon from './Icon.jsx';
import Mark from './Mark.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const headRef = useRef(null);
  const progressRef = useRef(null);
  const closeRef = useRef(null);
  const { pathname, hash } = useLocation();

  /* Close the mobile drawer whenever the route (or #hash) changes, so tapping
     a menu link no longer leaves the drawer sitting on top of the new page. */
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  /* Escape key closes the drawer too. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  /* One rAF-throttled listener updates the sticky header directly on the DOM —
     no React re-render per scroll frame. */
  useEffect(() => {
    const head = headRef.current;
    const bar = progressRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY || window.pageYOffset || 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (head) head.classList.toggle('is-solid', y > 12);
      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1).toFixed(4) : 0) + ')';
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    return () => {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>

      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__group">
            <div className="topbar__socials">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" size={16} />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={16} />
              </a>
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Location">
                <Icon name="pin" size={16} />
              </a>
            </div>
            <span className="topbar__sep" aria-hidden="true" />
            <a href={SITE.phoneHref}>
              <Icon name="phone" size={12} /> {SITE.phoneDisplay}
            </a>
            <span className="topbar__addr">
              <Icon name="pin" size={12} /> {SITE.addressShort}
            </span>
            <span className="topbar__hours">
              <Icon name="clock" size={12} /> {SITE.hoursShort}
            </span>
          </div>
          <div className="topbar__group">
            <a className="topbar__portal" href={SITE.portal} target="_blank" rel="noopener noreferrer">
              <Icon name="lock" size={12} /> Student Portal
              <Icon name="external" size={10} />
            </a>
          </div>
        </div>
      </div>

      <header ref={headRef} className="site-head">
        <span ref={progressRef} className="site-head__progress" aria-hidden="true" />
        <div className="container head__inner">
          <Link className="brand" to="/" aria-label="NEXTECH ACADEMY — home">
            <Mark size={36} />
          </Link>

          <nav className="nav" aria-label="Main navigation">
            <ul className="nav__list">
              {NAV.map((item) =>
                item.label === 'Courses' ? (
                  <li key={item.to} className="nav__item nav__item--mega">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => 'nav__link ' + (isActive ? 'is-active' : '')}
                    >
                      Courses <Icon name="chevron-down" size={11} className="caret" />
                    </NavLink>
                    <div className="mega">
                      <div className="mega__col">
                        <p className="mega__label">Academic classes · IX – XII</p>
                        {academicPrograms.map((p) => (
                          <Link key={p.id} to={'/courses#' + p.id} className="mega__link">
                            <span className="mega__icon">
                              <Icon name="book" size={15} />
                            </span>
                            <span>
                              <strong>{p.title}</strong>
                              <small>{p.subtitle}</small>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega__col">
                        <p className="mega__label">Professional courses</p>
                        {professionalCourses.map((c) => (
                          <Link key={c.id} to={'/courses#' + c.id} className="mega__link">
                            <span className="mega__icon">
                              <Icon
                                name={c.id === 'web-development' ? 'code' : c.id === 'graphic-designing' ? 'palette' : 'mic'}
                                size={15}
                              />
                            </span>
                            <span>
                              <strong>{c.title}</strong>
                              <small>{c.duration} · practical training</small>
                            </span>
                          </Link>
                        ))}
                        <Link className="mega__all" to="/courses">
                          View all programs <Icon name="arrow-right" size={13} />
                        </Link>
                      </div>
                      <div className="mega__promo">
                        <span className="mega__promo-kicker">Admissions Open</span>
                        <p>Admissions open. A limited number of seats, per batch, by design.</p>
                        <Link className="btn btn--gold btn--sm" to="/admissions#inquiry">
                          Apply Now <Icon name="arrow-right" size={13} />
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) => 'nav__link ' + (isActive ? 'is-active' : '')}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="head__cta">
            <a className="portal-chip" href={SITE.portal} target="_blank" rel="noopener noreferrer">
              <Icon name="lock" size={13} />
              Portal
            </a>
            <a className="portal-mini" href={SITE.portal} target="_blank" rel="noopener noreferrer" aria-label="Student Portal login">
              <Icon name="lock" size={16} />
            </a>
            <Link className="btn btn--gold btn--sm head__apply" to="/admissions#inquiry">
              Apply Now <Icon name="arrow-right" size={14} />
            </Link>
            <button
              type="button"
              className="burger"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={'drawer ' + (open ? 'is-open' : '')} aria-hidden={!open}>
        <button type="button" className="drawer__scrim" aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} />
        <aside className="drawer__panel" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="drawer__head">
            <Link className="brand" to="/" onClick={() => setOpen(false)}>
              <Mark size={34} />
            </Link>
            <button
              type="button"
              className="drawer__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              ref={closeRef}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Mobile navigation">
            {NAV.map((item, i) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="drawer__link" onClick={() => setOpen(false)}>
                <span className="drawer__num">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </NavLink>
            ))}
            <a className="drawer__link" href={SITE.portal} target="_blank" rel="noopener noreferrer">
              <span className="drawer__num">06</span>
              Student Portal
              <Icon name="external" size={13} />
            </a>
          </nav>
          <div className="drawer__programs">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Programmes</p>
            <div className="drawer__program-links">
              {academicPrograms.map((p) => (
                <Link key={p.id} to={'/courses#' + p.id} onClick={() => setOpen(false)}>{p.title}</Link>
              ))}
              {professionalCourses.map((c) => (
                <Link key={c.id} to={'/courses#' + c.id} onClick={() => setOpen(false)}>{c.title}</Link>
              ))}
            </div>
          </div>

          <div className="drawer__foot">
            <Link className="btn btn--gold btn--block" to="/admissions#inquiry" onClick={() => setOpen(false)}>
              Apply for admission <Icon name="arrow-right" size={15} />
            </Link>
            <a className="btn btn--line btn--block" href={waLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={16} /> WhatsApp us
            </a>
            <div className="drawer__contact">
              <a href={SITE.phoneHref}><Icon name="phone" size={14} /> {SITE.phoneDisplay}</a>
              <span><Icon name="pin" size={14} /> {SITE.addressShort}</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
