import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles, Shield, User, Mail, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Admissions Query',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone';
    }
    if (!formData.message.trim()) errs.message = 'Please provide your message or inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
      } catch { }
    }, 1100);
  };

  return (
    <div className="form-card">
      <div className="form-card-top-accent" aria-hidden="true" />

      {!isSubmitted ? (
        <>


          <form onSubmit={handleSubmit} noValidate className="contact-actual-form">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                <User size={13} className="label-icon" />
                <span>Full Name <strong className="required-star">*</strong></span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Dr. Priya Ramachandran"
                className={`form-input ${errors.name ? 'error' : ''}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="form-error-msg">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  <Mail size={13} className="label-icon" />
                  <span>Email <strong className="required-star">*</strong></span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone" className="form-label">
                  <Phone size={13} className="label-icon" />
                  <span>Phone <strong className="required-star">*</strong></span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                <MessageSquare size={13} className="label-icon" />
                <span>Subject</span>
              </label>
              <div className="form-select-wrapper">
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>General Admissions Query</option>
                  <option>Campus Walkthrough & Tour</option>
                  <option>Primary & Middle Wing Admissions</option>
                  <option>High School STEM Programs</option>
                  <option>Transport & Bus Routes</option>
                  <option>Careers & Faculty Applications</option>
                </select>
                <ChevronDown size={14} className="select-arrow-icon" aria-hidden="true" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                <MessageSquare size={13} className="label-icon" />
                <span>Message <strong className="required-star">*</strong></span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your questions, child's grade, or requirements..."
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="form-error-msg">{errors.message}</span>}
            </div>

            <div className="form-submit-container">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-contact-submit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>


            </div>
          </form>
        </>
      ) : (
        <div className="form-success-banner">
          <div className="success-icon-badge">
            <CheckCircle2 size={38} color="#10B981" />
          </div>
          <h3 className="success-title">Message Dispatched!</h3>
          <p className="success-desc">
            Thank you, <strong>{formData.name}</strong>. Your query has been forwarded to our Admissions Office. We will reply within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="btn btn-outline success-reset-btn"
          >
            Send Another Enquiry
          </button>
        </div>
      )}
    </div>
  );
}


