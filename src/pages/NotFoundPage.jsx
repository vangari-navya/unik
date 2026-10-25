import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        background: 'radial-gradient(circle at 50% 40%, rgba(0, 127, 255, 0.08) 0%, transparent 60%), #FFFFFF',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '560px' }}>
        <div
          style={{
            fontSize: '6.5rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--color-deep-blue)',
            marginBottom: '1rem',
            letterSpacing: '-0.04em'
          }}
        >
          4<span style={{ color: 'var(--color-golden)' }}>0</span>4
        </div>

        <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-blue)', marginBottom: '1rem' }}>
          Page Off Campus
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.25rem' }}>
          It seems the lesson or page you are looking for has moved or does not exist. Let's guide you back to our main campus hub.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return to Campus Home</span>
          </Link>
          <Link to="/contact" className="btn btn-outline">
            <Compass size={18} />
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
