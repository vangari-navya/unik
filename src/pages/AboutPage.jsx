import React from 'react';
import AboutHero from '../components/about/AboutHero';
import VisionMission from '../components/about/VisionMission';
import EducationalPillars from '../components/about/EducationalPillars';
import LeadershipMessage from '../components/about/LeadershipMessage';
import AdmissionsCTA from '../components/home/AdmissionsCTA';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="about-page">
      <AboutHero />
      <VisionMission />
      <EducationalPillars />
      <LeadershipMessage />
      <AdmissionsCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
