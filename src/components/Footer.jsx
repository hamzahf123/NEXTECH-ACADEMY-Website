import { Link } from 'react-router-dom';
import { SITE, waLink } from '../data/site.js';
import { academicPrograms, professionalCourses } from '../data/courses.js';
import Icon from './Icon.jsx';
import Mark from './Mark.jsx';
import { Rule } from './Ornaments.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="brand brand--lg" to="/" aria-label="NEXTECH ACADEMY — home">
              <Mark size={44} />
              <span className="brand__text">
                <span className="brand__word">Academy</span>
                <span>Islamabad</span>
              </span>
            </Link>
            <p>
              Quality education and future-ready skills in Ghouri Town Phase-5, Islamabad. Academic
              classes for 9th–2nd Year, plus professional courses in web development, graphic design
              and shorthand.
            </p>
            <p className="footer__est">Est. 2019</p>
            <div className="footer__socials">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp NEXTECH ACADEMY">
                <Icon name="whatsapp" size={16} />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="NEXTECH ACADEMY on Facebook">
                <Icon name="facebook" size={16} />
              </a>
              <a href={SITE.phoneHref} aria-label="Call NEXTECH ACADEMY">
                <Icon name="phone" size={16} />
              </a>
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps">
                <Icon name="pin" size={16} />
              </a>
              <a href={SITE.portal} target="_blank" rel="noopener noreferrer" aria-label="Student portal">
                <Icon name="lock" size={16} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <nav aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/admissions">Admissions</Link>
              <Link to="/portal">Student Portal</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h4>Programmes</h4>
            <nav aria-label="Programs">
              {academicPrograms.map((p) => (
                <Link key={p.id} to={'/courses#' + p.id}>{p.title}</Link>
              ))}
              {professionalCourses.map((c) => (
                <Link key={c.id} to={'/courses#' + c.id}>{c.title}</Link>
              ))}
            </nav>
          </div>

          <div className="footer__col footer__visit">
            <h4>Visit the academy</h4>
            <ul>
              <li>
                <Icon name="pin" size={15} />
                <span>{SITE.address}</span>
              </li>
              <li>
                <Icon name="phone" size={15} />
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <Icon name="clock" size={15} />
                <span>{SITE.hours}</span>
              </li>
            </ul>
            <a className="footer__portal-btn" href={SITE.portal} target="_blank" rel="noopener noreferrer">
              <Icon name="lock" size={14} />
              Student Portal
              <Icon name="external" size={11} />
            </a>
          </div>
        </div>

        <Rule className="rule--paper footer__rule" />
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span>© {year} NEXTECH ACADEMY. All rights reserved.</span>
          <span className="footer__credit">
           Created by <strong>{SITE.designer}</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
