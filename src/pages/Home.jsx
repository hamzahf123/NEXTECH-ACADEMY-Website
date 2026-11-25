import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal, { useInView } from '../components/Reveal.jsx';
import { Diamond, Orrery, Rule } from '../components/Ornaments.jsx';
import { ART, SITE, waLink } from '../data/site.js';
import { academicPrograms, professionalCourses } from '../data/courses.js';
import { AcademicCard, CourseCard } from '../components/ProgramCards.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABand from '../components/CTABand.jsx';

const STRIP = [
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Computer Science',
  'English',
  'Web Development',
  'Graphic Designing',
  'Shorthand',
];

const PILLARS = [
  {
    icon: 'clipboard',
    title: 'Weekly tests',
    text: 'Short, syllabus-matched tests every week reveal exactly what is understood — and what needs one more pass.',
  },
  {
    icon: 'flask',
    title: 'Theory + practical',
    text: 'Concepts are explained, then applied: science practicals, problem sets and real projects for IT courses.',
  },
  {
    icon: 'users',
    title: 'Experienced teachers',
    text: 'Subject specialists who know board patterns, common mistakes and how to explain a concept a second way.',
  },
];

const GALLERY = [
  { src: ART.posterAdmission, title: 'Admissions Open', caption: '9th · 10th · 1st Year · 2nd Year · ICS', to: '/admissions' },
  { src: ART.posterWebdev, title: 'Web Development', caption: '3-month course · HTML, CSS, JS, Python, Django', to: '/courses#web-development' },
  { src: ART.posterPython, title: 'Python & AI', caption: 'Short course · Artificial Intelligence foundation', to: '/courses' },
];

export default function Home() {
  const [stripRef, stripInView] = useInView({ threshold: 0, rootMargin: '160px 0px' });

  return (
    <>
      <Seo
        title="NEXTECH ACADEMY — Quality Education & Future-Ready Skills | Islamabad"
        description="Quality education and future-ready skills in Ghouri Town Phase-5, Islamabad. Classes for 9th, 10th, 1st Year & 2nd Year plus Web Development, Graphic Designing and Shorthand. Admissions open."
      />

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <img
            src={ART.heroPhoto}
            srcSet={`${ART.heroPhotoSmall} 640w, ${ART.heroPhoto} 900w`}
            sizes="100vw"
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="container hero__inner">
          <Reveal variant="fade">
           
            <h1 className="hero__title">
              Learn. Create. <em>Succeed.</em>
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={80}>
            <Rule className="hero__rule" />
            <p className="hero__lede">
              NEXTECH ACADEMY keeps what a good academy has always needed —{' '}
              <strong>small batches, weekly tests, teachers who stay until it clicks</strong> — and adds
              what this century demands: <strong>web development, graphic design and shorthand</strong>,
              taught properly.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--gold" to="/admissions#inquiry">
                Apply for admission <Icon name="arrow-right" size={15} />
              </Link>
              <a className="btn btn--line" href={SITE.phoneHref}>
                <Icon name="phone" size={15} /> {SITE.phoneDisplay}
              </a>
            </div>
            <ul className="hero__chips">
              <li><Icon name="check" size={12} /> Admissions open</li>
              <li><Icon name="clock" size={12} /> Mon–Sat · 4:00–8:00 PM</li>
              <li><Icon name="pin" size={12} /> Al Syed Heights</li>
            </ul>
          </Reveal>

          <Reveal className="hero__plate" delay={120}>
            <figure className="hero__figure">
              <span className="hero__fig-no">TAB. I</span>
              <Orrery />
              <figcaption>Fig. I — twelve subjects, one orbit</figcaption>
            </figure>

            <div className="hero__plate-copy">
              <ol className="hero__facts">
                <li className="hero__fact">
                  <span className="hero__fact-num">I.</span>
                  <span className="hero__fact-label">
                    Academic classes
                    <small>Matric &amp; intermediate · board-focused</small>
                  </span>
                  <span className="hero__fact-value">IV</span>
                </li>
                <li className="hero__fact">
                  <span className="hero__fact-num">II.</span>
                  <span className="hero__fact-label">
                    Professional courses
                    <small>Web development · graphic design · shorthand</small>
                  </span>
                  <span className="hero__fact-value">III</span>
                </li>
                <li className="hero__fact">
                  <span className="hero__fact-num">III.</span>
                  <span className="hero__fact-label">
                    Weekly tests
                    <small>Syllabus-matched, marked, discussed</small>
                  </span>
                  <span className="hero__fact-value hero__fact-value--word">Weekly</span>
                </li>
              </ol>

              <div className="hero__note">
                <Icon name="shield" size={16} />
                <div>
                  <strong>A small academy, on purpose.</strong>
                  Seats are limited per batch — a class that cannot be taught properly is not a class we
                  open.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div ref={stripRef} className={'strip' + (stripInView ? '' : ' is-paused')} aria-hidden="true">
          <div className="strip__track">
            {[0, 1].map((g) => (
              <div className="strip__group" key={g}>
                {STRIP.map((item) => (
                  <span className="strip__item" key={item + g}>
                    {item} <i />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="section" id="academy" data-plate="PLATE II · THE ACADEMY">
        <div className="container intro-grid">
          <Reveal className="intro-media" variant="left">
            <div className="stacked">
              <div className="stacked__main frame">
                <img
                  src={ART.classroomPhoto}
                  srcSet={`${ART.classroomPhoto800} 800w, ${ART.classroomPhoto} 1400w`}
                  sizes="(max-width: 980px) 92vw, 560px"
                  alt="Students writing a maths solution on the whiteboard during a NEXTECH ACADEMY class in Ghouri Town, Islamabad"
                  width="1400"
                  height="875"
                  loading="lazy"
                />
                <span className="photo-tag"><Icon name="pin" size={12} /> Real campus · Ghouri Town</span>
              </div>
              <div className="stacked__sub frame frame--gold">
                <img src={ART.dashboard} alt="" aria-hidden="true" width="680" height="560" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal className="intro-copy" variant="right" delay={100}>
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />The academy</p>
            <h2 className="display">
              A modern academy built around how students <em>actually</em> learn.
            </h2>
            <p>
              NEXTECH ACADEMY is an educational institute in Ghouri Town Phase-5, Islamabad, created
              for students who want more than rote memorisation. We combine a disciplined academic
              routine — weekly tests, concept-based teaching and board-style practice — with hands-on
              professional training in web development, graphic design and shorthand.
            </p>
            <p className="muted">
              Every class is taught by subject specialists who explain the “why” before the “how”, so
              students build confidence that lasts far beyond one exam.
            </p>

            <ul className="check-list">
              <li><Icon name="check" size={15} /> Academic classes for 9th, 10th, 1st Year and 2nd Year</li>
              <li><Icon name="check" size={15} /> Weekly tests with clear, honest performance feedback</li>
              <li><Icon name="check" size={15} /> Theory lessons paired with practical, applied work</li>
              <li><Icon name="check" size={15} /> Experienced teachers and small, focused batches</li>
            </ul>

            <div className="intro-copy__foot">
              <Link className="text-link" to="/about">
                More about NEXTECH <Icon name="arrow-right" size={14} />
              </Link>
              <div className="signature">
                <span className="signature__name">Khizer Feroze</span>
                <span className="signature__role">Owner · NEXTECH Academy</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS / PILLARS ---------------- */}
      <section className="section section--cream section--tight" data-plate="PLATE III · THE RECORD">
        <div className="container">
          <div className="statband">
            <Reveal className="statband__item">
              <span className="statband__value">9th – 2nd</span>
              <span className="statband__label">Academic classes<br />Board-focused batches</span>
            </Reveal>
            <Reveal className="statband__item" delay={70}>
              <span className="statband__value">IT Skills</span>
              <span className="statband__label">Web · Graphics · AI<br />&amp; more short courses</span>
            </Reveal>
            <Reveal className="statband__item" delay={140}>
              <span className="statband__value">Weekly</span>
              <span className="statband__label">Tests &amp;<br />progress feedback</span>
            </Reveal>
            <Reveal className="statband__item" delay={210}>
              <span className="statband__value">Mon–Sat</span>
              <span className="statband__label">Classes &amp; lab access<br />4:00 – 8:00 PM</span>
            </Reveal>
          </div>

          <div className="pillars">
            {PILLARS.map((p, i) => (
              <Reveal className="pillar" key={p.title} delay={i * 90}>
                <span className="pillar__icon"><Icon name={p.icon} size={22} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="pillar__num" aria-hidden="true">0{i + 1}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMS ---------------- */}
      <section className="section" id="programs" data-plate="PLATE IV · PROGRAMMES">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Our programs</p>
              <h2 className="display">Two paths. One standard of <em>excellence.</em></h2>
              <p className="section-lead">
                Choose a board-focused academic class or a career-focused professional course — both
                taught on campus in Ghouri Town Phase-5.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link className="btn btn--ghost-dark" to="/courses">
                All programs <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="group-head">
            <p className="group-head__label">Academic classes <span>9th – 2nd Year</span></p>
            <span className="group-head__line" />
          </div>
          <div className="acard-grid">
            {academicPrograms.map((p, i) => (
              <AcademicCard key={p.id} program={p} index={i} />
            ))}
          </div>

          <div className="group-head">
            <p className="group-head__label">Professional courses <span>Career skills</span></p>
            <span className="group-head__line" />
          </div>
          <div className="ccard-grid">
            {professionalCourses.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} />
            ))}
          </div>
          <p className="fine-print">
            Durations are indicative and confirmed at admission. Classes run subject to batch
            availability. <Link to="/admissions#fee">View fee structure</Link>.
          </p>
        </div>
      </section>

      {/* ---------------- WHY / METHOD ---------------- */}
      <section className="section section--deep method" data-plate="PLATE V · THE METHOD">
        <div className="container method__grid">
          <Reveal className="method__copy">
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__mark" />The NEXTECH method</p>
            <h2 className="display">
              Structure is a kindness. <em>Clarity</em> is the outcome.
            </h2>
            <p className="section-lead">
              Students do not fail because they are incapable. They fall behind because nobody checks
              in time. Our system is designed to make progress visible — in week one, not in the final
              result.
            </p>

            <div className="method__list">
              {[
                ['01', 'Teach the concept', 'Every topic begins with the idea, not the answer key. Students learn why a method works before drilling it.'],
                ['02', 'Test the week', 'A short weekly test converts learning into evidence. Weak areas are revisited while the lesson is still fresh.'],
                ['03', 'Apply it practically', 'Lab work, problem sets and real projects turn abstract theory into something a student can do.'],
                ['04', 'Keep parents in the loop', 'Attendance, fees, assignments and results stay visible through the student portal.'],
              ].map(([num, title, text]) => (
                <div className="method__item" key={num}>
                  <span className="method__num">{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="method__media" variant="right" delay={120}>
            <div className="frame frame--gold method__frame">
              <img
                src={ART.lab}
                alt="Student studying at desk — Learn, Grow, Succeed at NEXTECH ACADEMY"
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="method__caption">
              <span className="method__caption-icon"><Icon name="flask" size={19} /></span>
              <div>
                <strong>Practical learning</strong>
                <span>Science labs &amp; project-based IT training</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- GALLERY / REAL OFFERS ---------------- */}
      <section className="section section--cream section--tight" data-plate="PLATE VI · CURRENT OFFERS">
        <div className="container">
          <div className="head-row head-row--end">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Current offers</p>
              <h2 className="display">Real classes. Real <em>results.</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="section-lead section-lead--right">
                Admissions open for academic batches and professional short courses — seats are limited.
              </p>
            </Reveal>
          </div>

          <div className="gallery">
            {GALLERY.map((g, i) => (
              <Reveal key={g.title} delay={i * 90} as="figure" className="gallery__item">
                <Link to={g.to} className="gallery__media">
                  <img src={g.src} alt={g.title} width="800" height="540" loading="lazy" decoding="async" />
                  <span className="gallery__view"><Icon name="arrow-right" size={15} /></span>
                </Link>
                <figcaption>
                  <strong>{g.title}</strong>
                  <span>{g.caption}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABand />

      {/* ---------------- VISIT ---------------- */}
      <section className="section" id="visit" data-plate="PLATE VII · THE ADDRESS">
        <div className="container visit">
          <Reveal className="visit__info">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Find us</p>
            <h2 className="display">Right in the heart of <em>Ghouri Town.</em></h2>
            <p className="section-lead">
              Al Syed Heights, Phase 5 — easy to reach from across Islamabad and Rawalpindi.
            </p>

            <div className="contact-cards">
              <a href={SITE.mapLink} className="contact-card" target="_blank" rel="noopener noreferrer">
                <span className="contact-card__icon"><Icon name="pin" size={18} /></span>
                <div>
                  <small>Visit the campus</small>
                  <strong>{SITE.address}</strong>
                </div>
                <Icon name="external" size={13} className="contact-card__arrow" />
              </a>
              <a href={SITE.phoneHref} className="contact-card">
                <span className="contact-card__icon"><Icon name="phone" size={18} /></span>
                <div>
                  <small>Call admissions</small>
                  <strong>{SITE.phoneDisplay}</strong>
                </div>
                <Icon name="arrow-right" size={14} className="contact-card__arrow" />
              </a>
              <div className="contact-card contact-card--static">
                <span className="contact-card__icon"><Icon name="clock" size={18} /></span>
                <div>
                  <small>Office hours</small>
                  <strong>{SITE.hours}</strong>
                </div>
              </div>
            </div>

            <div className="btn-row">
              <a className="btn btn--gold" href={waLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={17} /> WhatsApp us
              </a>
              <Link className="btn btn--ghost-dark" to="/contact">
                Contact page <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal className="map-card" variant="right" delay={100}>
            <iframe
              title="Map showing NEXTECH ACADEMY at Al Syed Heights, Ghouri Town Phase 5, Islamabad"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-card__foot">
              <span><Icon name="pin" size={13} /> Al Syed Heights · Ghouri Town Phase 5</span>
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
                Get directions <Icon name="arrow-right" size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
