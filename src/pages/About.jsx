import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import Reveal, { Counter } from '../components/Reveal.jsx';
import CTABand from '../components/CTABand.jsx';
import { ART, SITE } from '../data/site.js';

function CeoPortrait() {
  const [hasPhoto, setHasPhoto] = useState(true);
  return (
    <figure className="ceo__card">
      <div className="ceo__plate">
        {hasPhoto ? (
          <img
            className="ceo__photo"
            src="/assets/img/ceo.jpg"
            alt={`${SITE.ceo}, Chief Executive Officer of NEXTECH ACADEMY`}
            width="600"
            height="750"
            onError={() => setHasPhoto(false)}
          />
        ) : (
          <img
            className="ceo__logo"
            src="/assets/img/ceo.jpg"
            alt="NEXTECH ACADEMY logo"
            width="656"
            height="544"
          />
        )}
      </div>
      <figcaption className="ceo__label">Message from the Owner of NEXTECH</figcaption>
    </figure>
  );
}

const REASONS = [
  {
    icon: 'target',
    title: 'Concept before shortcut',
    text: 'We teach the reasoning behind a method, so students can handle a question they have never seen before.',
  },
  {
    icon: 'clipboard',
    title: 'Weekly accountability',
    text: 'Regular testing and feedback mean nothing quietly slips. Parents know where their child stands.',
  },
  {
    icon: 'users',
    title: 'Small, focused batches',
    text: 'Teachers can see who is following and who is lost — and adjust before the next topic begins.',
  },
  {
    icon: 'flask',
    title: 'Practical exposure',
    text: 'Laboratory work and real projects connect the syllabus to something students can actually do.',
  },
  {
    icon: 'award',
    title: 'Exam-ready preparation',
    text: 'Past-paper practice, revision plans and time-management coaching make board exams feel familiar.',
  },
  {
    icon: 'shield',
    title: 'A safe, respectful campus',
    text: 'A disciplined environment where asking questions is encouraged and every student is known by name.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About NEXTECH ACADEMY — Our Story, Mission & Leadership | Islamabad"
        description="Learn about NEXTECH ACADEMY in Ghouri Town Phase-5, Islamabad: our story, mission and vision, a message from Owner of NEXTECH Khizer Feroze, and why students and parents choose us."
      />

      <PageHero
        eyebrow="About the academy"
        title={<>A serious academy, built on <em>genuine care.</em></>}
        intro="NEXTECH ACADEMY exists for one reason: to make quality education accessible, understandable and genuinely useful for students in Islamabad — in the classroom and beyond it."
        crumbs={[{ label: 'About' }]}
      />

      {/* STORY */}
      <section className="section">
        <div className="container about-story">
          <Reveal className="about-story__copy">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Our story</p>
            <h2 className="display">Born in the neighbourhood. Built for the <em>future.</em></h2>
            <p>
              NEXTECH ACADEMY began with a simple observation: too many students in our area were
              attending classes every day yet still struggling alone. The teaching was happening — but
              the understanding was not.
            </p>
            <p>
              We set out to build a different kind of academy in Ghouri Town Phase-5. Smaller batches.
              Teachers who stay until the concept lands. A weekly test that tells the truth early. And a
              deliberate bridge between academic success and the practical, digital skills the modern
              workplace now expects.
            </p>
            <p>
              Today, NEXTECH serves students from 9th class through Intermediate, alongside
              professionals and beginners building careers in web development, graphic design and
              shorthand. The subjects are different; the standard is not.
            </p>

            <div className="about-story__facts">
              <div>
                <strong>Ghouri Town Phase-5</strong>
                <span>Al Syed Heights, Phase 5</span>
              </div>
              <div>
                <strong>9th – 2nd Year</strong>
                <span>Matric &amp; Intermediate, board-focused</span>
              </div>
              <div>
                <strong>3 professional courses</strong>
                <span>Web · Graphics · Shorthand</span>
              </div>
            </div>

            <Link className="text-link" to="/courses">
              Explore our programs <Icon name="arrow-right" size={14} />
            </Link>
          </Reveal>

          <Reveal className="about-story__media" variant="right" delay={120}>
            <div className="frame frame--gold about-story__frame">
              <img
                src={ART.classroomPhoto}
                alt="Students working through a maths problem on the whiteboard at NEXTECH ACADEMY, Ghouri Town Phase-5"
                width="1400"
                height="875"
                loading="lazy"
              />
            </div>
            <div className="about-story__badge">
              <span className="about-story__badge-icon"><Icon name="cap" size={20} /></span>
              <div>
                <strong>Teaching that explains twice</strong>
                <span>Without making a student feel small</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section--cream">
        <div className="container">
          <div className="head-block head-block--center">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Purpose</p>
              <h2 className="display">Mission &amp; <em>vision</em></h2>
            </Reveal>
          </div>

          <div className="mv-grid">
            <Reveal className="mv-card">
              <span className="mv-card__num">I</span>
              <span className="mv-card__icon"><Icon name="target" size={24} /></span>
              <h3>Our mission</h3>
              <p>
                To deliver rigorous, concept-based education that helps every student master their
                syllabus, think independently and walk into examinations with genuine confidence — not
                borrowed confidence from guess papers.
              </p>
              <ul className="check-list check-list--tight">
                <li><Icon name="check" size={14} /> Clarity over cramming</li>
                <li><Icon name="check" size={14} /> Feedback over assumption</li>
                <li><Icon name="check" size={14} /> Skills alongside grades</li>
              </ul>
            </Reveal>

            <Reveal className="mv-card mv-card--dark" delay={110}>
              <span className="mv-card__num">II</span>
              <span className="mv-card__icon"><Icon name="eye" size={24} /></span>
              <h3>Our vision</h3>
              <p>
                To be the most trusted academy in the region: a place where academic results and
                future-ready skills are not competing priorities, but the same education delivered
                properly.
              </p>
              <ul className="check-list check-list--tight">
                <li><Icon name="check" size={14} /> Every student understood</li>
                <li><Icon name="check" size={14} /> Every week measured</li>
                <li><Icon name="check" size={14} /> Every learner future-ready</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="section section--deep">
        <div className="container">
          <div className="ceo">
           <Reveal className="ceo__portrait" variant="left">
             <CeoPortrait />
           </Reveal>

            <Reveal className="ceo__copy" variant="right" delay={100}>
              <p className="eyebrow eyebrow--gold"><span className="eyebrow__mark" />Leadership</p>
              <h2 className="display">“Education should change what a student can <em>do.</em>”</h2>
              <blockquote>
                <p>
                  When we started NEXTECH ACADEMY, we made ourselves a promise: no student would sit
                  silently at the back. Understanding is not a talent some children are born with — it
                  is the result of good teaching, honest feedback and enough patience to try again.
                </p>
                <p>
                  Parents trust us with something irreplaceable: their child’s time and confidence. We
                  take that seriously in every class, every test and every conversation. If a student
                  is with us, they will be seen.
                </p>
                <p>
                  I invite you to visit the campus, meet our teachers and judge us by the questions our
                  students ask — not just the marks on a result card.
                </p>
              </blockquote>
              <div className="ceo__sign">
                <span className="ceo__sign-name">{SITE.ceo}</span>
                <span>Chief Executive Officer · NEXTECH ACADEMY</span>
              </div>
              <div className="ceo__meta">
                <span><Icon name="phone" size={13} /> {SITE.phoneDisplay}</span>
                <span><Icon name="pin" size={13} /> Ghouri Town Phase-5</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Why NEXTECH</p>
              <h2 className="display">Six reasons parents choose us — and <em>stay.</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="section-lead section-lead--right">
                No gimmicks. A clear academic system, delivered by people who are accountable for the
                outcome.
              </p>
            </Reveal>
          </div>

          <div className="reasons">
            {REASONS.map((r, i) => (
              <Reveal className="reason" key={r.title} delay={i * 60}>
                <span className="reason__icon"><Icon name={r.icon} size={21} /></span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="about-stats">
            <div className="about-stats">
  <Reveal className="about-stat">
    <span className="about-stat__value">01</span>
    <span>Academic classes<br />9th – 2nd Year</span>
  </Reveal>
  <Reveal className="about-stat" delay={60}>
    <span className="about-stat__value">02</span>
    <span>Professional<br />short courses</span>
  </Reveal>
  <Reveal className="about-stat" delay={120}>
    <span className="about-stat__value">03</span>
    <span>Weekly tests &amp; feedback<br />for every student</span>
  </Reveal>
  <Reveal className="about-stat" delay={180}>
    <span className="about-stat__value">04</span>
    <span>Student portal for attendance,<br />fees &amp; assignments</span>
  </Reveal>
</div>
          </div>
        </div>
      </section>

      <CTABand
        title="Come and see the difference for yourself."
        text="Book a campus visit, meet the teachers and ask us the difficult questions. Admissions are open for the new session."
      />
    </>
  );
}
