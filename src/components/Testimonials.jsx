import { testimonials } from '../data/courses.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function Testimonials({ heading = true }) {
  return (
    <section className="section section--deep testimonials">
      <div className="container">
        {heading && (
          <div className="head-block head-block--center">
            <Reveal>
              <p className="eyebrow eyebrow--gold"><span className="eyebrow__mark" />Success stories</p>
              <h2 className="display">Trusted by students <em>and parents</em></h2>
              <p className="section-lead">
                A supportive environment, honest feedback and teaching that finally makes difficult
                topics click.
              </p>
            </Reveal>
          </div>
        )}

        <div className="tgrid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} className="tcard" delay={i * 90} as="figure">
              <span className="tcard__mark" aria-hidden="true"><Icon name="quote" size={30} /></span>
              <div className="tcard__stars" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="star" size={12} />
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{t.initials}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <p className="tnote">
          Reviews shown are illustrative placeholders. Verified student and parent feedback will be
          published on this page.
        </p>
      </div>
    </section>
  );
}
