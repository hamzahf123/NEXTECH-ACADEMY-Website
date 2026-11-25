import { useEffect, useState } from 'react';
import { SITE, waLink } from '../data/site.js';
import Icon from './Icon.jsx';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      const next = (window.scrollY || window.pageYOffset || 0) > 560;
      if (next !== visible) {
        visible = next;
        setShow(next);
      }
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', request, { passive: true });
    return () => {
      window.removeEventListener('scroll', request);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <a
        className="float-wa"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NEXTECH ACADEMY on WhatsApp"
        title="WhatsApp us — Admissions"
      >
        <span className="float-wa__icon"><Icon name="whatsapp" size={28} /></span>
        <span className="float-wa__label" aria-hidden="true">
          <small>Admissions</small>
          WhatsApp us
        </span>
      </a>

      <button
        type="button"
        className={`to-top ${show ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
      >
        <Icon name="arrow-up" size={16} />
      </button>

      <a className="float-call" href={SITE.phoneHref} aria-label={`Call ${SITE.phoneDisplay}`}>
        <Icon name="phone" size={19} />
      </a>
    </>
  );
}
