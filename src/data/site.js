export const SITE = {
  name: 'NEXTECH ACADEMY',
  tagline: 'Quality Education & Future-Ready Skills',
  ceo: 'Khizer Feroze',
  designer: 'HAMZA FEROZE',
  phoneDisplay: '0313-1534876',
  phoneHref: 'tel:+923131534876',
  whatsapp: 'https://wa.me/923131534876',
  facebook: 'https://www.facebook.com/p/NexTech-100067705489773/',
  portal: 'https://nextechsms.duckdns.org',
  address: 'Al Syed Heights, Phase 5, Ghouri Town, Islamabad, 4400, Pakistan',
  addressShort: 'Al Syed Heights, Ghouri Town Ph-5, Islamabad',
  hours: 'Monday – Saturday · 4:00 PM – 8:00 PM',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.674667060188!2d73.12934387428503!3d33.613744740759444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfebcc72e0ba5d%3A0xaafe48eea6a19179!2sNextech%20Academy!5e0!3m2!1sen!2s!4v1795541278614!5m2!1sen!2s',
  mapLink:
    'https://www.google.com/maps?cid=12321365820367278457',
  hoursShort: 'Mon – Sat · 4:00 PM – 8:00 PM',
};

const base = import.meta.env.BASE_URL;

export const ART = {
  logo: `${base}assets/img/logo-mark-192.png`,
  logoMark: `${base}assets/img/logo-mark-192.png`,
  logoMarkLight: `${base}assets/img/logo-mark-light-192.png`,
  logoWord: `${base}assets/img/logo-wordmark-light.png`,
  logoWordDark: `${base}assets/img/logo-wordmark.png`,
  logoFull: `${base}assets/img/logo-full.png`,
  logoFullLight: `${base}assets/img/logo-full-light.png`,
  dashboard: `${base}assets/img/hero-dashboard.svg`,
  classroom: `${base}assets/img/classroom.svg`,
  classroomPhoto: `${base}assets/img/campus-classroom-1400.jpg`,
  heroPhoto: `${base}assets/img/hero-classroom-900.jpg`,
  heroPhotoSmall: `${base}assets/img/hero-classroom-640.jpg`,
  classroomPhoto800: `${base}assets/img/campus-classroom-800.jpg`,
  admissionPoster: `${base}assets/img/admission-poster-2026.jpg`,
  ogImage: `${base}assets/img/og-nextech.jpg`,
  lab: `${base}assets/img/learn-grow-succeed.jpg`,
  web: `${base}assets/img/course-web-real.jpg`,
  graphics: `${base}assets/img/course-graphics-real.jpg`,
  shorthand: `${base}assets/img/course-shorthand-real.jpg`,
  arches: `${base}assets/img/art-arches.svg`,
  portal: `${base}assets/img/art-portal.svg`,
  posterAdmission: `${base}assets/img/poster-admission.jpg`,
  posterWebdev: `${base}assets/img/poster-webdev.jpg`,
  posterPython: `${base}assets/img/poster-python-ai.jpg`,
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact', to: '/contact' },
];

export const waLink = (message) =>
  `${SITE.whatsapp}?text=${encodeURIComponent(
    message || 'Assalam o Alaikum, I would like admission details for NEXTECH ACADEMY.'
  )}`;
