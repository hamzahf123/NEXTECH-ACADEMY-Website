import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import CTABand from '../components/CTABand.jsx';
import { ART, SITE, waLink } from '../data/site.js';
import Mark from '../components/Mark.jsx';

const FEATURES = [
  {
    icon: 'calendar',
    title: 'Attendance',
    text: 'See daily attendance records at a glance, so missed classes are noticed and addressed immediately.',
  },
  {
    icon: 'wallet',
    title: 'Fees',
    text: 'Check fee status, payment history and upcoming dues without waiting for a phone call.',
  },
  {
    icon: 'clipboard',
    title: 'Assignments',
    text: 'Assignments, tests and submission status stay in one place for students and parents.',
  },
  {
    icon: 'user',
    title: 'Profiles',
    text: 'Student details, class information and programme enrolment — always up to date.',
  },
];

export default function Portal() {
  return (
    <>
      <Seo
        title="Student Portal — Attendance, Fees & Assignments | NEXTECH ACADEMY"
        description="Log in to the NEXTECH ACADEMY student portal to access attendance, fees, assignments and student profiles. One place for students and parents."
      />

      <section className="portal-hero">
        <div className="portal-hero__art" aria-hidden="true">
          <img src={ART.arches} alt="" />
        </div>
        <div className="container portal-hero__inner">
          <Reveal className="portal-hero__copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span><span className="crumbs__sep">/</span><span aria-current="page">Student Portal</span></span>
            </nav>
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__mark" />Student portal</p>
            <h1 className="pagehero__title">
              One calm place for the <em>whole term.</em>
            </h1>
            <p className="pagehero__intro">
              Access attendance, fees, assignments and profiles — all in one place. Built for students
              and parents who would rather know than wonder.
            </p>
            <ul className="hero__chips portal-hero__chips">
              <li><Icon name="shield" size={13} /> Secure link</li>
              <li><Icon name="user" size={13} /> Student &amp; parent access</li>
              <li><Icon name="clock" size={13} /> Available 24/7</li>
            </ul>
          </Reveal>

          <Reveal className="login-card" variant="zoom" delay={120}>
            <div className="login-card__top">
              <span className="login-card__brand">
              <Mark size={34} />
              <span>ACADEMY<small>STUDENT PORTAL</small></span>
            </span>
              <span className="login-card__badge"><span />Live</span>
            </div>
            <h2>Student Portal Login</h2>
            <p>
              Sign in with the credentials issued at admission to view attendance, fee status,
              assignments and your profile.
            </p>

            <a className="btn btn--gold btn--block" href={SITE.portal} target="_blank" rel="noopener noreferrer">
              <Icon name="lock" size={16} /> Student Portal Login
              <Icon name="external" size={14} />
            </a>

            <div className="login-card__url">{SITE.portal.replace('https://', '')}</div>

            <div className="login-card__rows">
              <div><Icon name="calendar" size={15} /> Attendance</div>
              <div><Icon name="wallet" size={15} /> Fees</div>
              <div><Icon name="clipboard" size={15} /> Assignments</div>
              <div><Icon name="user" size={15} /> Profiles</div>
            </div>

            <p className="login-card__note">
              <Icon name="shield" size={13} /> Opens the official NEXTECH SMS portal in a new tab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Inside the portal</p>
              <h2 className="display">Everything that matters, <em>visible.</em></h2>
              <p className="section-lead">
                The portal removes the small uncertainties that make parents call the office — and gives
                students a clear record of their own progress.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a className="btn btn--ghost-dark" href={SITE.portal} target="_blank" rel="noopener noreferrer">
                Open portal <Icon name="external" size={14} />
              </a>
            </Reveal>
          </div>

          <div className="portal-features">
            {FEATURES.map((f, i) => (
              <Reveal className="portal-feature" key={f.title} delay={i * 70}>
                <span className="portal-feature__icon"><Icon name={f.icon} size={22} /></span>
                <span className="portal-feature__index">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ACCESS */}
      <section className="section section--cream">
        <div className="container portal-how">
          <Reveal className="portal-how__copy">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Getting started</p>
            <h2 className="display">Your login, <em>explained.</em></h2>
            <p className="section-lead">
              Portal credentials are issued by the academy office after admission is confirmed. If you
              have not received yours, or have forgotten it, we can reset it for you.
            </p>

            <div className="portal-steps">
              {[
                ['Confirm your admission', 'Complete the admission process and confirm your batch timing at the office.'],
                ['Collect your credentials', 'The office issues your student ID and portal login details.'],
                ['Log in and check in', 'Open the portal, review attendance and fee status, and keep your profile current.'],
              ].map(([title, text], i) => (
                <div className="portal-step" key={title}>
                  <span className="portal-step__num">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-row">
              <a className="btn btn--gold" href={SITE.portal} target="_blank" rel="noopener noreferrer">
                Student Portal Login <Icon name="external" size={14} />
              </a>
              <a className="btn btn--ghost-dark" href={waLink('Assalam o Alaikum, I need help with my NEXTECH student portal login.')} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={16} /> Get login help
              </a>
            </div>
          </Reveal>

          <Reveal className="portal-how__art" variant="right" delay={120}>
            <div className="frame frame--gold portal-how__frame">
              <img src={ART.portal} alt="Illustration of a secure student portal login screen" width="800" height="600" loading="lazy" />
            </div>
            <div className="portal-how__quote">
              <Icon name="quote" size={24} />
              <p>No queues for a fee update. No guessing about attendance. Just clarity.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="section section--tight">
        <div className="container">
          <div className="support-band">
            <div>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Need a hand?</p>
              <h2 className="display display--sm">Portal support, from real people.</h2>
              <p className="muted">
                Call or WhatsApp the academy office during working hours and we will help you regain
                access.
              </p>
            </div>
            <div className="support-band__actions">
              <a className="btn btn--gold" href={SITE.phoneHref}>
                <Icon name="phone" size={15} /> {SITE.phoneDisplay}
              </a>
              <a className="btn btn--ghost-dark" href={waLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Not enrolled yet? Start here."
        text="Admissions are open for academic classes and professional courses. Join NEXTECH and get portal access from day one."
      />
    </>
  );
}
