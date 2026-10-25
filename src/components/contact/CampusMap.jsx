import React from 'react';
import { MapPin, Navigation, Car, Bus, Train } from 'lucide-react';

export default function CampusMap() {
  return (
    <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
      <div
        className="card-premium"
        style={{
          overflow: 'hidden',
          border: '1.5px solid var(--border-azure)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        }}
      >
        {/* Stylized Vector Campus Map Graphic */}
        <div
          style={{
            minHeight: 'clamp(260px, 35vw, 340px)',
            background: 'linear-gradient(135deg, #0A224E 0%, #05193B 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#FFFFFF',
          }}
        >
          {/* Subtle grid pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(0, 127, 255, 0.25) 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Central Pulsing Campus Pin */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-golden)',
                color: '#04122C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                boxShadow: '0 0 35px rgba(247, 186, 0, 0.6)',
              }}
            >
              <MapPin size={34} />
            </div>

            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              UNIK 12-Acre Green Campus
            </h4>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-azure-light)' }}>
              Near Railway Gate, Dabilpur, Medchal-501401
            </span>

            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="https://www.google.com/maps?q=17.6739349,78.468901&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-golden"
                style={{ fontSize: '0.88rem', padding: '0.55rem 1.25rem' }}
              >
                <Navigation size={15} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Transit & Commute Guidance */}
        <div
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.15rem, 3.5vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
              color: 'var(--color-deep-blue)',
              marginBottom: '0.5rem',
            }}
          >
            Directions & Campus Accessibility
          </h3>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
            }}
          >
            Conveniently located in Dabilpur, Medchal, Telangana, the campus
            benefits from easy road and railway connectivity through NH-44 and
            the nearby Dabilpur Railway Station.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.1rem',
            }}
          >
            {/* Road Connectivity */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-light-blue)',
                  color: 'var(--color-azure)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <Car size={20} />
              </div>

              <span
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.55,
                }}
              >
                <strong>Road Connectivity:</strong> Easily accessible via NH-44
                and the Medchal–Dabilpur road network.
              </span>
            </div>

            {/* Bus Connectivity */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-light-blue)',
                  color: 'var(--color-azure)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <Bus size={20} />
              </div>

              <span
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.55,
                }}
              >
                <strong>Bus Connectivity:</strong> Dabilpur and Medchal are
                connected by local bus services, providing convenient access to
                the surrounding areas.
              </span>
            </div>

            {/* Railway Connectivity */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-light-blue)',
                  color: 'var(--color-azure)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <Train size={20} />
              </div>

              <span
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.55,
                }}
              >
                <strong>Railway Connectivity:</strong> Dabilpur Railway Station
                is nearby, with Medchal Railway Station approximately 4 km away.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
