import { Link } from 'react-router-dom';
import { ART, SITE, waLink } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function CTABand({
  kicker = 'Admissions open',
  title = 'Begin a year that changes how your child learns.',
  text = 'Meet the teachers, see the classrooms and reserve a seat for the new session. Seats are limited across every programme — that is the point.',
  primary = { to: '/admissions#inquiry', label: 'Apply Now' },
  secondary = true,
}) {
  return (
    <section className="cta-wrap">
      <div className="container">
        <Reveal>
          <div className="cta">
            <img className="cta__art" src={ART.arches} alt="" aria-hidden="true" />
            <div className="cta__content">
              <p className="eyebrow eyebrow--gold"><span className="eyebrow__mark" />{kicker}</p>
              <h2 className="cta__title">{title}</h2>
              <p className="cta__text">{text}</p>
              <div className="btn-row">
                <Link className="btn btn--gold" to={primary.to}>
                  {primary.label} <Icon name="arrow-right" size={15} />
                </Link>
                {secondary && (
                  <a className="btn btn--line" href={waLink()} target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={16} /> WhatsApp us
                  </a>
                )}
              </div>
              <div className="cta__meta">
                <span><Icon name="phone" size={13} /> {SITE.phoneDisplay}</span>
                <span><Icon name="pin" size={13} /> {SITE.addressShort}</span>
                <span><Icon name="clock" size={13} /> {SITE.hoursShort}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
