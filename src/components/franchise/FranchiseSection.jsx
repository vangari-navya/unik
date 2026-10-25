import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FranchiseCard from './FranchiseCard';
import { franchisePillars } from '../../data/franchiseData';
import '../../styles/franchise.css';

export default function FranchiseSection() {
  return (
    <section id="franchise" className="franchise-section" aria-label="School Franchise Information">
      <div className="franchise-container">
        {/* Standard Website Section Heading */}
        <SectionHeading
          badge="Franchise Opportunity"
          title="School Franchise Model"
          subtitle="Explore institutional provisions, academic support, infrastructure guidance, and partner responsibilities."
        />

        {/* All 11 Franchise Cards Directly Displayed */}
        <div className="franchise-cards-grid">
          {franchisePillars.map((pillar, idx) => (
            <FranchiseCard
              key={pillar.id}
              pillar={pillar}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
