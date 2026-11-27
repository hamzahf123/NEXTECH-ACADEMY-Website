import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allCourses } from '../data/courses.js';
import { SITE, waLink } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

const CONFIG = {
  admission: {
    kicker: 'Admission application',
    title: 'Reserve a seat for the new session',
    intro: 'Share a few details and our admissions team will confirm availability, timings and the current fee schedule.',
    submit: 'Submit application',
    guardian: true,
    timing: true,
    subject: false,
    consent: true,
    footnote: 'Submitting opens WhatsApp with your details pre-filled. Nothing is stored on this website.',
  },
  inquiry: {
    kicker: 'Quick inquiry',
    title: 'Ask us anything',
    intro: 'Questions about a class, a course or fees? Send a short message and we will reply during working hours.',
    submit: 'Send inquiry',
    guardian: false,
    timing: false,
    subject: false,
    consent: false,
    footnote: 'Submitting opens WhatsApp with your message pre-filled.',
  },
  contact: {
    kicker: 'Send a message',
    title: 'Talk to NEXTECH ACADEMY',
    intro: 'Use the form below, call us directly, or message us on WhatsApp — whichever is easiest for you.',
    submit: 'Send message',
    guardian: false,
    timing: false,
    subject: true,
    consent: false,
    footnote: 'Submitting opens WhatsApp with your message pre-filled.',
  },
};

const EMPTY = {
  name: '',
  guardian: '',
  phone: '',
  email: '',
  program: '',
  timing: '',
  subject: 'Admissions',
  message: '',
  consent: false,
};

const PHONE_RE = /^[+()\d\s-]{10,18}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export default function InquiryForm({ variant = 'inquiry', id = 'inquiry', formTitle }) {
  const conf = CONFIG[variant] || CONFIG.inquiry;
  const [searchParams] = useSearchParams();
  const requested = (searchParams.get('course') || '').toLowerCase();
  const matched = requested
    ? allCourses.find(
        (c) => c.value.toLowerCase() === requested || c.value.toLowerCase().includes(requested)
      )
    : null;

  const [values, setValues] = useState({ ...EMPTY, program: matched ? matched.value : '' });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim() || values.name.trim().length < 2) next.name = 'Please enter a name.';
    if (conf.guardian && !values.guardian.trim()) next.guardian = 'Please enter a guardian name.';
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.';
    else if (!PHONE_RE.test(values.phone.trim())) next.phone = 'Enter a valid number, e.g. 0313-1534876.';
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address.';
    if (conf.timing && !values.program) next.program = 'Please choose a program.';
    if (conf.consent && !values.consent) next.consent = 'Please confirm before submitting.';
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      const first = document.querySelector(`#${id} [aria-invalid="true"]`);
      first?.focus();
      return;
    }

    const title = formTitle || conf.kicker;
    const lines = [`*${title}* — NEXTECH ACADEMY`, ''];
    const push = (label, value) => {
      if (value !== '' && value !== false && value != null) lines.push(`${label}: ${value}`);
    };
    push(variant === 'admission' ? 'Student name' : 'Name', values.name.trim());
    push('Guardian', values.guardian.trim());
    push('Phone / WhatsApp', values.phone.trim());
    push('Email', values.email.trim());
    push('Program', values.program);
    push('Preferred timing', values.timing);
    push(conf.subject ? 'Subject' : '', values.subject);
    push('Message', values.message.trim());
    lines.push('', 'Sent from the NEXTECH ACADEMY website.');

    const url = waLink(lines.join('\n'));
    setResult({ url });
    window.open(url, '_blank', 'noopener,noreferrer');
    setValues({ ...EMPTY, program: matched ? matched.value : '' });
  };

  return (
    <Reveal className="form-card" id={id}>
      <div className="form-card__head">
        <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />{conf.kicker}</p>
        <h2 className="form-card__title">{conf.title}</h2>
        <p className="form-card__intro">{conf.intro}</p>
      </div>

      {result && (
        <div className="form-success" role="status">
          <span className="form-success__icon"><Icon name="check" size={18} /></span>
          <div>
            <strong>Details ready.</strong> WhatsApp should have opened in a new tab — press send and
            our team will reply during working hours.{' '}
            <a href={result.url} target="_blank" rel="noopener noreferrer">Open WhatsApp again</a> or
            call <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate>
        <div className="fgrid">
          <div className={`field ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor={`${id}-name`}>
              {variant === 'admission' ? 'Student name' : 'Full name'} <span>*</span>
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder={variant === 'admission' ? ' Please Enter Your Name' : 'Your name'}
              value={values.name}
              onChange={set('name')}
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={errors.name ? `${id}-name-error` : undefined}
            />
            <span className="field__error" id={`${id}-name-error`}>{errors.name}</span>
          </div>

          {conf.guardian && (
            <div className={`field ${errors.guardian ? 'has-error' : ''}`}>
              <label htmlFor={`${id}-guardian`}>Guardian name <span>*</span></label>
              <input
                id={`${id}-guardian`}
                name="guardian"
                type="text"
                placeholder="Parent / guardian"
                value={values.guardian}
                onChange={set('guardian')}
                aria-invalid={errors.guardian ? 'true' : undefined}
                aria-describedby={errors.guardian ? `${id}-guardian-error` : undefined}
              />
              <span className="field__error" id={`${id}-guardian-error`}>{errors.guardian}</span>
            </div>
          )}

          <div className={`field ${errors.phone ? 'has-error' : ''}`}>
            <label htmlFor={`${id}-phone`}>Phone / WhatsApp <span>*</span></label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="03XX-XXXXXXX"
              value={values.phone}
              onChange={set('phone')}
              aria-invalid={errors.phone ? 'true' : undefined}
              aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            />
            <span className="field__error" id={`${id}-phone-error`}>{errors.phone}</span>
          </div>

          <div className={`field ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor={`${id}-email`}>Email <small>(optional)</small></label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={set('email')}
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
            />
            <span className="field__error" id={`${id}-email-error`}>{errors.email}</span>
          </div>

          {conf.subject && (
            <div className="field">
              <label htmlFor={`${id}-subject`}>Subject</label>
              <select id={`${id}-subject`} name="subject" value={values.subject} onChange={set('subject')}>
                <option>Admissions</option>
                <option>Academic classes</option>
                <option>Professional courses</option>
                <option>Fee structure</option>
                <option>Student portal</option>
                <option>Something else</option>
              </select>
            </div>
          )}

          {(variant === 'admission' || variant === 'inquiry') && (
            <div className={`field ${errors.program ? 'has-error' : ''}`}>
              <label htmlFor={`${id}-program`}>
                {variant === 'admission' ? 'Program' : 'Program of interest'}{' '}
                {variant === 'admission' ? <span>*</span> : <small>(optional)</small>}
              </label>
              <select
                id={`${id}-program`}
                name="program"
                value={values.program}
                onChange={set('program')}
                aria-invalid={errors.program ? 'true' : undefined}
              >
                <option value="">Select a program</option>
                {allCourses.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <span className="field__error">{errors.program}</span>
            </div>
          )}

          {conf.timing && (
            <div className="field">
              <label htmlFor={`${id}-timing`}>Preferred timing</label>
              <select id={`${id}-timing`} name="timing" value={values.timing} onChange={set('timing')}>
                <option value="">Any timing</option>
                <option>Afternoon · 4:00–5:00 PM</option>
                <option>Evening · 5:00–6:30 PM</option>
                <option>Night · 6:30–8:00 PM</option>
                <option>Flexible</option>
              </select>
            </div>
          )}

          <div className="field field--full">
            <label htmlFor={`${id}-message`}>
              {variant === 'admission' ? 'Anything we should know?' : 'Message'}{' '}
              <small>(optional)</small>
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows="4"
              placeholder={
                variant === 'admission'
                  ? 'question about timings.'
                  : 'Tell us how we can help.'
              }
              value={values.message}
              onChange={set('message')}
            />
          </div>
        </div>

        {conf.consent && (
          <div className={`consent ${errors.consent ? 'has-error' : ''}`}>
            <label>
              <input type="checkbox" checked={values.consent} onChange={set('consent')} />
              <span>
                I confirm the information provided is correct and agree to be contacted about my
                admission inquiry.
              </span>
            </label>
            <span className="field__error">{errors.consent}</span>
          </div>
        )}

        <div className="form-card__actions">
          <button className="btn btn--gold" type="submit">
            {conf.submit} <Icon name="send" size={15} />
          </button>
          <a className="btn btn--ghost-dark" href={SITE.phoneHref}>
            <Icon name="phone" size={15} /> Call {SITE.phoneDisplay}
          </a>
        </div>
        <p className="form-card__note">{conf.footnote}</p>
      </form>
    </Reveal>
  );
}
