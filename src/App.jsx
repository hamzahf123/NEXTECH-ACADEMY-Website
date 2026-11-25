import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import Home from './pages/Home.jsx';

/* Secondary pages are split out, so the home page never pays for their code. */
const About = lazy(() => import('./pages/About.jsx'));
const Courses = lazy(() => import('./pages/Courses.jsx'));
const Admissions = lazy(() => import('./pages/Admissions.jsx'));
const Portal = lazy(() => import('./pages/Portal.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

function NotFound() {
  return (
    <section className="section notfound">
      <div className="container notfound__inner">
        <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" />404</p>
        <h1 className="display">This page took a different elective.</h1>
        <p>The link you followed does not exist. Head back home, or explore our programs.</p>
        <div className="btn-row">
          <Link className="btn btn--gold" to="/">Back to home</Link>
          <Link className="btn btn--ghost-dark" to="/courses">View courses</Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <div className="page-texture" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
