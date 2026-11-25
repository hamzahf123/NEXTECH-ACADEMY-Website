import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import Accordion from '../components/Accordion.jsx';
import { SITE, waLink, ART } from '../data/site.js';
import { admissionSteps, documents, feeStructure, faqs } from '../data/courses.js';

export default function Admissions() {
  return (
    <>
      <Seo
        title="Admissions Open 2027 — Process, Documents & Fees | NEXTECH ACADEMY Islamabad"
        description="Apply to NEXTECH ACADEMY, Ghouri Town Phase-5, Islamabad. Admission process, required documents, indicative fee structure and an online admission inquiry form."
      />

      <PageHero
        eyebrow="Admissions open · Session 2027"
        title={<>Your next chapter starts with <em>one form.</em></>}
        intro="Admissions are open for 9th, 10th, 1st Year, 2nd Year and all professional short courses. Here is exactly how the process works — no guesswork, no hidden steps."
        crumbs={[{ label: 'Admissions' }]}
      >
        <a className="btn btn--gold" href="#inquiry">
          Apply online <Icon name="arrow-right" size={15} />
        </a>
        <a className="btn btn--line" href={SITE.phoneHref}>
          <Icon name="phone" size={15} /> {SITE.phoneDisplay}
        </a>
      </PageHero>

      {/* ADMISSION CAMPAIGN */}
      <section className="section section--tight">
        <div className="container campaign">
          <Reveal className="campaign__poster" variant="left">
            <figure>
              <img
                src={ART.admissionPoster}
                alt="NEXTECH ACADEMY admission poster — Class 9, new session starting, weekly tests"
                width="680"
                height="1020"
                loading="lazy"
              />
              <figcaption>Admission poster · Session 2027</figcaption>
            </figure>
          </Reveal>

          <Reveal className="campaign__copy" variant="right" delay={100}>
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Admission campaign</p>
            <h2 className="display display--sm">Class 9 seats are open for the <em>new session.</em></h2>
            <p className="section-lead">
              Theory plus practical learning, weekly tests and small batches. If your child is starting
              9th class this year, this is the right moment to visit the campus in Ghouri Town Phase-5.
            </p>
            <ul className="campaign__list">
              <li><Icon name="check" size={14} /> New session starting — limited seats per batch</li>
              <li><Icon name="check" size={14} /> Weekly tests with honest parent feedback</li>
              <li><Icon name="check" size={14} /> Theoretical knowledge combined with practical work</li>
            </ul>
            <div className="btn-row">
              <a
                className="btn btn--gold"
                href={waLink('Assalam o Alaikum, I want admission details for Class 9 at NEXTECH ACADEMY.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={15} /> Ask about Class 9
              </a>
              <a className="btn btn--ghost-dark" href="#fee">
                See fee structure <Icon name="arrow-right" size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />How it works</p>
              <h2 className="display">Admission in four <em>clear</em> steps.</h2>
              <p className="section-lead">
                Most students complete the process in a single campus visit. Bring the documents and
                you can start the same week.
              </p>
            </Reveal>
            <Reveal delay={100} className="head-row__meta">
              <span className="meta-pill"><Icon name="calendar" size={15} /> Seats open now</span>
              <span className="meta-pill"><Icon name="clock" size={15} /> Mon–Sat · 4–8 PM</span>
            </Reveal>
          </div>

          <div className="steps">
            {admissionSteps.map((s, i) => (
              <Reveal className="step" key={s.title} delay={i * 80}>
                <span className="step__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {i < admissionSteps.length - 1 && <span className="step__line" aria-hidden="true" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS + FEE */}
      <section className="section section--cream" id="fee">
        <div className="container">
          <div className="admissions-split">
            <Reveal className="docs">
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Checklist</p>
              <h2 className="display display--sm">Required documents</h2>
              <p className="muted">
                Bring photocopies along with the originals for verification. Our office can guide you if
                something is missing.
              </p>
              <ul className="docs__list">
                {documents.map((d, i) => (
                  <li key={d}>
                    <span className="docs__num">{String(i + 1).padStart(2, '0')}</span>
                    {d}
                    <Icon name="check" size={14} />
                  </li>
                ))}
              </ul>
              <div className="docs__note">
                <Icon name="shield" size={17} />
                <p>Your documents are used only for admission verification and are handled confidentially.</p>
              </div>
              <Link className="text-link" to="/contact">
                Questions about documents? Contact us <Icon name="arrow-right" size={14} />
              </Link>
            </Reveal>

            <Reveal className="fee" delay={110}>
              <div className="fee__head">
                <div>
                  <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Fee structure</p>
                  <h2 className="display display--sm">Transparent, published fees</h2>
                </div>
                <span className="fee__badge">Indicative</span>
              </div>
              <div className="table-wrap">
                <table className="fee-table">
                  <caption className="visually-hidden">
                    NEXTECH ACADEMY indicative admission and monthly fees
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Program</th>
                      <th scope="col">Type</th>
                      <th scope="col">Admission (PKR)</th>
                      <th scope="col">Monthly (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((f) => (
                      <tr key={f.program}>
                        <th scope="row">{f.program}</th>
                        <td><span className={`fee-type ${f.type === 'Professional' ? 'is-pro' : ''}`}>{f.type}</span></td>
                        <td className="fee-num">{f.admission}</td>
                        <td className="fee-num">{f.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="table-note">
                * Fees shown are indicative placeholders and may change. Please confirm the current
                fee schedule with the admissions office before paying.
              </p>
              <div className="fee__actions">
                <a className="btn btn--gold btn--sm" href={SITE.phoneHref}>
                  <Icon name="phone" size={14} /> Confirm current fees
                </a>
                <a className="btn btn--ghost-dark btn--sm" href={waLink('Assalam o Alaikum, please share the current fee structure for NEXTECH ACADEMY.')} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={15} /> Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section className="section" id="apply">
        <div className="container apply">
          <Reveal className="apply__aside">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Apply now</p>
            <h2 className="display">Let us find the right <em>starting point.</em></h2>
            <p className="section-lead">
              Submit your details and our admissions team will confirm seat availability, batch timings
              and fees. You can also visit the campus directly during office hours.
            </p>

            <div className="apply__details">
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="apply__detail">
                <span className="apply__icon"><Icon name="pin" size={17} /></span>
                <div><small>Admissions office</small><strong>{SITE.address}</strong></div>
              </a>
              <a href={SITE.phoneHref} className="apply__detail">
                <span className="apply__icon"><Icon name="phone" size={17} /></span>
                <div><small>Call or WhatsApp</small><strong>{SITE.phoneDisplay}</strong></div>
              </a>
              <div className="apply__detail">
                <span className="apply__icon"><Icon name="clock" size={17} /></span>
                <div><small>Office hours</small><strong>{SITE.hours}</strong></div>
              </div>
            </div>

            <div className="apply__seal">
              <p>New session 2027<br /><span>Limited seats per batch</span></p>
            </div>
          </Reveal>

          <InquiryForm
            variant="admission"
            id="inquiry"
            formTitle="Admission application · NEXTECH ACADEMY"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container faq">
          <Reveal className="faq__intro">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />Admission FAQs</p>
            <h2 className="display">Everything parents <em>ask us.</em></h2>
            <p className="section-lead">
              If your question is not here, call the admissions office — a real person will answer.
            </p>
            <div className="faq__contact">
              <a href={SITE.phoneHref}><Icon name="phone" size={15} /> {SITE.phoneDisplay}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={15} /> WhatsApp admissions
              </a>
            </div>
          </Reveal>
          <Reveal className="faq__list" delay={100}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
