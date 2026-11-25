import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { AcademicCard, CourseCard } from '../components/ProgramCards.jsx';
import Accordion from '../components/Accordion.jsx';
import CTABand from '../components/CTABand.jsx';
import { academicPrograms, professionalCourses, faqs } from '../data/courses.js';
import { SITE, waLink } from '../data/site.js';

const INCLUDED = [
  {
    icon: 'clipboard',
    title: 'Weekly tests',
    text: 'A short assessment every week, marked and discussed while the topic is still current.',
  },
  {
    icon: 'book',
    title: 'Concept-based teaching',
    text: 'Teachers explain the reasoning behind each method, not just the steps to reproduce it.',
  },
  {
    icon: 'target',
    title: 'Exam preparation',
    text: 'Past-paper practice, board-style questions and a structured revision plan before exams.',
  },
  {
    icon: 'flask',
    title: 'Practical support',
    text: 'Science practical guidance and applied problem-solving built into the academic routine.',
  },
];

export default function Courses() {
  return (
    <>
      <Seo
        title="Courses & Programs — Academic Classes & Professional Short Courses | NEXTECH ACADEMY"
        description="Explore NEXTECH ACADEMY programs: Class 9th, 10th, 1st Year and 2nd Year academic classes plus Web Development, Graphic Designing and Shorthand professional courses in Islamabad."
      />

      <PageHero
        eyebrow="Courses & programs"
        title={<>Programs designed for <em>real</em> outcomes.</>}
        intro="Two clear categories, one standard. Board-focused academic classes for 9th–2nd Year and career-focused professional courses taught on campus in Ghouri Town Phase-5."
        crumbs={[{ label: 'Courses' }]}
      >
        <a className="btn btn--gold" href="#academic">
          Academic classes <Icon name="arrow-right" size={15} />
        </a>
        <a className="btn btn--line" href="#professional">
          Professional courses <Icon name="arrow-right" size={15} />
        </a>
      </PageHero>

      {/* Jump nav */}
      <div className="course-nav">
        <div className="container course-nav__inner">
          <span className="course-nav__label">Jump to</span>
          <a href="#academic"><Icon name="book" size={14} /> Academic classes</a>
          <a href="#professional"><Icon name="code" size={14} /> Professional courses</a>
          <a href="#faq"><Icon name="message" size={14} /> Course FAQs</a>
          <a className="course-nav__apply" href="#apply">Apply now <Icon name="arrow-right" size={13} /></a>
        </div>
      </div>

      {/* ACADEMIC */}
      <section className="section" id="academic">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Category 01</p>
              <h2 className="display">Academic classes <em>9th – 2nd Year</em></h2>
              <p className="section-lead">
                Matric and Intermediate students follow a disciplined weekly rhythm: concept classes,
                assessed practice and board-style preparation.
              </p>
            </Reveal>
            <Reveal delay={100} className="head-row__meta">
              <span className="meta-pill"><Icon name="cap" size={15} /> Matric &amp; Intermediate</span>
              <span className="meta-pill"><Icon name="clock" size={15} /> 4:00–8:00 PM</span>
            </Reveal>
          </div>

          <div className="acard-grid">
            {academicPrograms.map((p, i) => (
              <AcademicCard key={p.id} program={p} index={i} />
            ))}
          </div>

          <div className="included">
            <Reveal className="included__head">
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Included in every class</p>
              <h3 className="display display--sm">What academic students receive</h3>
            </Reveal>
            <div className="included__grid">
              {INCLUDED.map((f, i) => (
                <Reveal className="included__item" key={f.title} delay={i * 70}>
                  <span className="included__icon"><Icon name={f.icon} size={20} /></span>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="note-strip">
            <Icon name="shield" size={18} />
            <p>
              Not sure which class or group fits your child? Call{' '}
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> — we will help you choose the right
              starting point before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL */}
      <section className="section section--cream" id="professional">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Category 02</p>
              <h2 className="display">Professional <em>short courses</em></h2>
              <p className="section-lead">
                Practical, project-based courses for students and professionals who want a skill they
                can use — not just a certificate they can frame.
              </p>
            </Reveal>
            <Reveal delay={100} className="head-row__meta">
              <span className="meta-pill"><Icon name="briefcase" size={15} /> Career-focused</span>
              <span className="meta-pill"><Icon name="users" size={15} /> Beginner friendly</span>
            </Reveal>
          </div>

          <div className="ccard-grid">
            {professionalCourses.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} />
            ))}
          </div>

          <div className="course-rows">
            {professionalCourses.map((c, i) => (
              <Reveal
                className={`course-row ${i % 2 ? 'course-row--reverse' : ''}`}
                key={`${c.id}-detail`}
                id={c.id}
              >
                <div className="course-row__media frame">
                  <img src={c.image} alt={`${c.title} course artwork`} width="640" height="400" loading="lazy" />
                  <span className="course-row__tag">{c.tag}</span>
                </div>
                <div className="course-row__body">
                  <span className="course-row__index">Course 0{i + 1}</span>
                  <h3 className="display display--sm">{c.title}</h3>
                  <p>{c.description}</p>
                  <div className="course-row__meta">
                    <span><Icon name="clock" size={15} /> {c.duration}</span>
                    <span><Icon name="calendar" size={15} /> {c.schedule}</span>
                    <span><Icon name="pin" size={15} /> On-campus</span>
                  </div>
                  <ul className="course-row__modules">
                    {c.points.map((p) => (
                      <li key={p}><Icon name="check" size={14} /> {p}</li>
                    ))}
                  </ul>
                  <div className="btn-row">
                    <Link
                      className="btn btn--gold btn--sm"
                      to={`/admissions?course=${encodeURIComponent(c.title)}#inquiry`}
                    >
                      Enroll Now <Icon name="arrow-right" size={14} />
                    </Link>
                    <a
                      className="btn btn--ghost-dark btn--sm"
                      href={waLink(`Assalam o Alaikum, I want details about the ${c.title} course at NEXTECH ACADEMY.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="whatsapp" size={15} /> Ask a question
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="fine-print">
            Course durations are indicative and confirmed at admission. Fees for each program are listed
            on the <Link to="/admissions#fee">admissions page</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container faq">
          <Reveal className="faq__intro">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Good questions</p>
            <h2 className="display">Before you <em>enroll.</em></h2>
            <p className="section-lead">
              Straight answers about timings, boards and how our programs work. Anything else — just
              call or WhatsApp.
            </p>
            <div className="faq__contact">
              <a href={SITE.phoneHref}><Icon name="phone" size={15} /> {SITE.phoneDisplay}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={15} /> Message on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal className="faq__list" delay={100}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <div id="apply">
        <CTABand
          title="Choose your program. We will handle the rest."
          text="Apply online, visit the campus, or simply call. Our admissions team will confirm seat availability and the current fee schedule."
        />
      </div>
    </>
  );
}
