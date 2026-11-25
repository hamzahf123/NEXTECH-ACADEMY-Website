import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

/* Cursor-following gold glow, shared by academic + course cards. */
const spotlight = {
  'data-spotlight': '',
  onPointerMove: (e) => {
    if (e.pointerType === 'touch') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  },
  onPointerLeave: (e) => {
    e.currentTarget.style.setProperty('--mx', '50%');
    e.currentTarget.style.setProperty('--my', '0%');
  },
};

export function AcademicCard({ program, index = 0 }) {
  return (
    <Reveal className="acard" delay={index * 70} as="article" id={program.id} {...spotlight}>
      <span className="spot-glow" aria-hidden="true" />
      <div className="acard__top">
        <span className="acard__grade">
          {program.grade}
          <sup>{program.suffix}</sup>
        </span>
        <span className="acard__badge">{program.meta.split('·')[0].trim()}</span>
      </div>
      <h3 className="acard__title">{program.title}</h3>
      <p className="acard__sub">{program.subtitle}</p>
      <p className="acard__text">{program.description}</p>
      <ul className="acard__list">
        {program.features.slice(0, 3).map((f) => (
          <li key={f}><Icon name="check" size={13} /> {f}</li>
        ))}
      </ul>
      <div className="acard__foot">
        <span>{program.meta}</span>
        <Link className="round-link" to={`/courses#${program.id}`} aria-label={`View ${program.title} details`}>
          <Icon name="arrow-right" size={15} />
        </Link>
      </div>
    </Reveal>
  );
}

export function CourseCard({ course, index = 0 }) {
  return (
    <Reveal className="ccard" delay={index * 80} as="article" {...spotlight}>
      <span className="spot-glow" aria-hidden="true" />
      <Link className="ccard__media" to={`/courses#${course.id}`} aria-label={`${course.title} course details`}>
        <img src={course.image} alt={`${course.title} course artwork`} width="640" height="400" loading="lazy" />
        <span className="ccard__tag">{course.tag}</span>
        <span className="ccard__duration"><Icon name="clock" size={13} /> {course.duration}</span>
      </Link>
      <div className="ccard__body">
        <h3 className="ccard__title">{course.title}</h3>
        <p>{course.description}</p>
        <ul className="ccard__points">
          {course.points.slice(0, 3).map((p) => (
            <li key={p}><Icon name="check" size={13} /> {p}</li>
          ))}
        </ul>
        <div className="ccard__foot">
          <span className="ccard__schedule"><Icon name="calendar" size={14} /> {course.schedule}</span>
          <Link className="btn btn--gold btn--sm" to={`/admissions?course=${encodeURIComponent(course.title)}#inquiry`}>
            Enroll Now <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
