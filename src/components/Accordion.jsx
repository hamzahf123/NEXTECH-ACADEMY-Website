import { useState } from 'react';
import Icon from './Icon.jsx';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`acc ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="acc__trigger"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${i}`}
              id={`acc-trigger-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="acc__icon" aria-hidden="true" />
            </button>
            <div className="acc__panel" id={`acc-panel-${i}`} role="region" aria-labelledby={`acc-trigger-${i}`}>
              <div className="acc__panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
