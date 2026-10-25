import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'UNIK – The School of Excellence | Inspiring Excellence in Education',
  '/about': 'About Us | UNIK – The School of Excellence',
  '/faculty': 'Meet Our Faculty | UNIK – The School of Excellence',
  '/contact': 'Contact & Admissions Enquiry | UNIK – The School of Excellence'
};

const routeDescriptions = {
  '/': 'At Unik – The School of Excellence, we create an inspiring learning environment where curiosity, character, creativity, and academic excellence come together.',
  '/about': 'Discover our educational philosophy, vision, mission, and six core pillars nurturing tomorrow’s compassionate global leaders.',
  '/faculty': 'Meet our passionate educators, subject matter experts, and research mentors dedicated to shaping student success.',
  '/contact': 'Reach out to our campus admissions desk, schedule a school visit, or enquire about enrolments for the upcoming academic year.'
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = routeTitles[pathname] || 'UNIK – The School of Excellence';
    const description = routeDescriptions[pathname] || 'Inspiring excellence in education, character, and future-ready innovation.';

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [pathname]);

  return null;
}
