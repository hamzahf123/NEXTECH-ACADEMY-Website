import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import { SITE, waLink } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact NEXTECH ACADEMY — Ghouri Town Phase-5, Islamabad"
        description="Contact NEXTECH ACADEMY: 0313-1534876. Visit Al Syed Heights, Phase 5, Ghouri Town, Islamabad. Send an inquiry or message us on WhatsApp."
      />

      <PageHero
        eyebrow="Contact us"
        title={<>Let’s talk about your <em>next step.</em></>}
        intro="Call, message or visit the campus. Our admissions team is available Monday to Saturday, 4:00 PM to 8:00 PM."
        crumbs={[{ label: 'Contact' }]}
      >
        <a className="btn btn--gold" href={SITE.phoneHref}>
          <Icon name="phone" size={15} /> {SITE.phoneDisplay}
        </a>
        <a className="btn btn--line" href={waLink()} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={16} /> WhatsApp us
        </a>
      </PageHero>

      {/* CONTACT CARDS */}
      <section className="section section--tight">
        <div className="container">
          <div className="contact-tiles">
            <Reveal className="contact-tile">
              <span className="contact-tile__icon"><Icon name="phone" size={20} /></span>
              <small>Call admissions</small>
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              <p>Fastest during office hours</p>
            </Reveal>
            <Reveal className="contact-tile" delay={70}>
              <span className="contact-tile__icon"><Icon name="whatsapp" size={20} /></span>
              <small>WhatsApp</small>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Chat with us</a>
              <p>Share documents &amp; questions</p>
            </Reveal>
            <Reveal className="contact-tile" delay={140}>
              <span className="contact-tile__icon"><Icon name="clock" size={20} /></span>
              <small>Office hours</small>
              <strong>Mon – Sat</strong>
              <p>4:00 PM – 8:00 PM</p>
            </Reveal>
            <Reveal className="contact-tile" delay={210}>
              <span className="contact-tile__icon"><Icon name="user" size={20} /></span>
              <small>Student portal</small>
              <a href={SITE.portal} target="_blank" rel="noopener noreferrer">Portal login</a>
              <p>Attendance, fees &amp; more</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP + ADDRESS */}
      <section className="section">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Visit the campus</p>
              <h2 className="display">Easy to find. Easier to <em>remember.</em></h2>
              <p className="section-lead">
                Al Syed Heights-2nd Floor, Ghouri Town Phase#5, Islamabad, 4400
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a className="btn btn--ghost-dark" href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={15} /> Get directions
              </a>
            </Reveal>
          </div>

          <Reveal className="map-large">
            <iframe
              title="Map showing NEXTECH ACADEMY at Al Syed Heights, Ghouri Town Phase 5, Islamabad"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-large__card">
              <span className="map-large__icon"><Icon name="pin" size={18} /></span>
              <div>
                <strong>NEXTECH ACADEMY</strong>
                <p>{SITE.address}</p>
                <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps <Icon name="external" size={12} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <section className="section section--cream" id="message">
        <div className="container apply">
          <Reveal className="apply__aside">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Send a message</p>
            <h2 className="display">We reply during <em>working hours.</em></h2>
            <p className="section-lead">
              Use the form for general questions, or contact admissions directly for enrolment. Either
              way, a real member of our team will get back to you.
            </p>

            <div className="apply__details">
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="apply__detail">
                <span className="apply__icon"><Icon name="pin" size={17} /></span>
                <div><small>Address</small><strong>{SITE.address}</strong></div>
              </a>
              <a href={SITE.phoneHref} className="apply__detail">
                <span className="apply__icon"><Icon name="phone" size={17} /></span>
                <div><small>Phone</small><strong>{SITE.phoneDisplay}</strong></div>
              </a>
              <div className="apply__detail">
                <span className="apply__icon"><Icon name="clock" size={17} /></span>
                <div><small>Office hours</small><strong>{SITE.hours}</strong></div>
              </div>
            </div>

            <div className="contact-aside-note">
              <Icon name="whatsapp" size={20} />
              <div>
                <strong>Prefer WhatsApp?</strong>
                <p>Message us directly for the fastest response.</p>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">Start a chat <Icon name="arrow-right" size={12} /></a>
              </div>
            </div>
          </Reveal>

          <InquiryForm variant="contact" id="contact-form" formTitle="Website message · NEXTECH ACADEMY" />
        </div>
      </section>
    </>
  );
}
