import { ART } from './site.js';

export const academicPrograms = [
  {
    id: 'class-9',
    grade: '9',
    suffix: 'th',
    title: 'Class 9th',
    subtitle: 'The foundation year',
    description:
      'A confident start to Matric. Strong basics across every subject, with weekly tests that expose gaps early — while there is still time to fix them.',
    features: ['Concept-first teaching', 'Weekly tests', 'Science practical guidance', 'Exam-ready notes'],
    meta: 'Matric · Board syllabus',
  },
  {
    id: 'class-10',
    grade: '10',
    suffix: 'th',
    title: 'Class 10th',
    subtitle: 'Board exam focus',
    description:
      'Structured preparation for the board exams: full syllabus coverage, past-paper practice and a revision rhythm that removes last-minute panic.',
    features: ['Board-style practice', 'Topic-wise assessments', 'Past paper drills', 'Revision planning'],
    meta: 'Matric · Board syllabus',
  },
  {
    id: 'first-year',
    grade: '1',
    suffix: 'st Year',
    title: '1st Year',
    subtitle: 'Intermediate begins',
    description:
      'Pre-Medical, Pre-Engineering and ICS students build the conceptual depth that Intermediate demands — before it becomes difficult to catch up.',
    features: ['Subject specialists', 'Concept clarity first', 'Weekly assessments', 'Practical support'],
    meta: 'Intermediate · 11th class',
  },
  {
    id: 'second-year',
    grade: '2',
    suffix: 'nd Year',
    title: '2nd Year',
    subtitle: 'Board & beyond',
    description:
      'Complete board-exam mastery with mock papers, plus the foundations students need for entry tests and university applications.',
    features: ['Full syllabus revision', 'Mock papers', 'Entry-test groundwork', 'Exam strategy'],
    meta: 'Intermediate · 12th class',
  },
];

export const professionalCourses = [
  {
    id: 'web-development',
    title: 'Web Development',
    tag: 'Most in demand',
    duration: '5 months',
    schedule: 'Evening batches',
    description:
      'Build real, responsive websites from scratch. HTML, CSS and JavaScript fundamentals, taught through weekly builds rather than passive lectures.',
    points: ['HTML5 & semantic structure', 'Modern CSS & responsive layout', 'JavaScript essentials', 'Deploy a live portfolio site'],
    image: ART.web,
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    tag: 'Creative',
    duration: '4 months',
    schedule: 'Evening batches',
    description:
      'Learn to think like a designer: typography, colour, composition and brand systems — then apply them to real social, print and branding projects.',
    points: ['Design principles & typography', 'Colour & layout systems', 'Branding & social media design', 'Portfolio-ready projects'],
    image: ART.graphics,
  },
  {
    id: 'shorthand',
    title: 'Shorthand',
    tag: 'Professional skill',
    duration: '3 months',
    schedule: 'Flexible timings',
    description:
      'A professional shorthand course for office, court and secretarial work — with guided dictation and steady speed-building practice.',
    points: ['Shorthand theory & outlines', 'Guided dictation practice', 'Speed-building drills', 'Accuracy & transcription'],
    image: ART.shorthand,
  },
];

export const allCourses = [
  ...academicPrograms.map((p) => ({ value: p.title, label: `${p.title} — Academic` })),
  ...professionalCourses.map((c) => ({ value: c.title, label: `${c.title} — Professional` })),
];

export const testimonials = [
  {
    quote:
      'The weekly tests changed how my son studies. He stopped leaving everything for the last week, and his maths improved noticeably within a couple of months.',
    name: 'Ayesha R.',
    role: 'Parent · Class 9th',
    initials: 'AR',
  },
  {
    quote:
      'Physics finally makes sense. The concept comes first, then we solve past-paper questions — that combination is exactly what I needed for my board exams.',
    name: 'Hamza M.',
    role: 'Student · 2nd Year',
    initials: 'HM',
  },
  {
    quote:
      'I joined the web development course with zero experience. By the end I had built my own portfolio site, and I finally understand how the websites I use every day work.',
    name: 'Sana F.',
    role: 'Student · Web Development',
    initials: 'SF',
  },
];

export const faqs = [
  {
    q: 'When does the new session start?',
    a: 'Admissions are open for the new session. Batches for 9th, 10th, 1st Year and 2nd Year start shortly after seats are confirmed, and professional course batches begin monthly. Call 0313-1534876 or submit the inquiry form to reserve a seat.',
  },
  {
    q: 'Which boards do you prepare students for?',
    a: 'Our academic classes cover the Matric and Intermediate board syllabus, including past-paper practice and board-style assessment. Share your board at admission so we can map your study plan correctly.',
  },
  {
    q: 'Are classes held daily?',
    a: 'Academic classes run six days a week (Monday–Saturday) between 4:00 PM and 8:00 PM. Professional courses run in scheduled evening batches, and the timetable is confirmed before your batch begins.',
  },
  {
    q: 'Is there a transport facility?',
    a: 'Please call the academy office on 0313-1534876 to confirm current transport arrangements and route availability. The campus is at Al Syed Heights, Phase 5, Ghouri Town, Islamabad, and is easily reachable by public transport.',
  },
  {
    q: 'Do professional courses require prior experience?',
    a: 'No. Web Development and Graphic Designing start from the absolute basics and are beginner-friendly. Shorthand is also taught from the foundations, with guided speed-building practice.',
  },
  {
    q: 'How can parents track attendance and fees?',
    a: 'Every enrolled student receives access to the Student Portal, where attendance, fee status, assignments and profiles are available in one place.',
  },
];

export const documents = [
  'Previous school or college result card',
  'Two passport-size photographs',
  'Guardian’s CNIC (photocopy)',
  'Academy leaving certificate, if transferring (optional)',
];

export const admissionSteps = [
  {
    title: 'Inquire',
    text: 'Call, WhatsApp or submit the online inquiry form. We answer questions about courses, timings and current fees.',
  },
  {
    title: 'Visit & assess',
    text: 'Visit the campus for a short discussion. For academic classes, a brief assessment helps us place the student correctly.',
  },
  {
    title: 'Complete the form',
    text: 'Submit the admission form with the required documents and confirm your preferred batch timing.',
  },
  {
    title: 'Start learning',
    text: 'Pay the admission fee, collect your timetable and portal login, and begin with orientation in the first class.',
  },
];

export const feeStructure = [
  { program: 'Class 9th', type: 'Academic', admission: 'Free', monthly: '6,000' },
  { program: 'Class 10th', type: 'Academic', admission: 'Free', monthly: '6,000' },
  { program: '1st Year (Intermediate)', type: 'Academic', admission: 'Free', monthly: '6,000' },
  { program: '2nd Year (Intermediate)', type: 'Academic', admission: 'Free', monthly: '6,500' },
  { program: 'Web Development', type: 'Professional', admission: 'Free', monthly: '8,000' },
  { program: 'Graphic Designing', type: 'Professional', admission: 'Free', monthly: '7,500' },
  { program: 'Shorthand', type: 'Professional', admission: 'Free', monthly: '6,000' },
];
