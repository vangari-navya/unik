import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoCard from '../components/contact/ContactInfoCard';
import ContactForm from '../components/contact/ContactForm';
import CampusMap from '../components/contact/CampusMap';
import FAQAccordion from '../components/contact/FAQAccordion';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <ContactInfoCard />
            <ContactForm />
          </div>

          <CampusMap />
        </div>
      </section>

      <FAQAccordion />
    </div>
  );
}
