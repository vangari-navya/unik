import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactInfoCard() {
  return (
    <div className="contact-info-panel">
      <div className="contact-panel-ambient" aria-hidden="true" />

      {/* Header */}
      <div className="contact-info-panel-header">

        <h3 className="contact-info-title">Admissions Office</h3>
      </div>

      {/* Compact Contact Items */}
      <div className="contact-items-list">
        <div className="contact-item-card">
          <div className="contact-item-icon">
            <MapPin size={16} />
          </div>
          <div className="contact-item-text">
            <h4>Campus Address</h4>
            <p>
              <a
                href="https://www.google.com/maps?q=17.6739349,78.468901&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Near Railway Gate, Dabilpur, Medchal-501401
              </a>
            </p>
          </div>
        </div>

        <div className="contact-item-card">
          <div className="contact-item-icon">
            <Phone size={16} />
          </div>
          <div className="contact-item-text">
            <h4>Helpline</h4>
            <p className="contact-link-group">
              <a href="tel:+918045678900">+91 80 4567 8900</a>
              <span className="contact-separator">/</span>
              <a href="tel:+918045678901">+91 80 4567 8901</a>
            </p>
          </div>
        </div>

        <div className="contact-item-card">
          <div className="contact-item-icon">
            <Mail size={16} />
          </div>
          <div className="contact-item-text">
            <h4>Email</h4>
            <p className="contact-link-group">
              <a href="mailto:admissions@unikschool.edu">admissions@unikschool.edu</a>
              <span className="contact-separator">•</span>
              <a href="mailto:info@unikschool.edu">info@unikschool.edu</a>
            </p>
          </div>
        </div>

        <div className="contact-item-card">
          <div className="contact-item-icon">
            <Clock size={16} />
          </div>
          <div className="contact-item-text">
            <div className="contact-hours-header">
              <h4>Hours</h4>
              <span className="contact-status-chip">
                <span className="status-dot-pulse" />
                Active
              </span>
            </div>
            <p>Mon – Sat: 8:00 AM – 5:00 PM </p>
          </div>
        </div>
      </div>


    </div>
  );
}


