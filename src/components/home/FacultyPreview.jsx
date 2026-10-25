import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FacultyCard from '../faculty/FacultyCard';
import { facultyData } from '../../data/facultyData';

export default function FacultyPreview() {
  const featuredFaculty = facultyData.filter((f) => f.featured);

  return (
    <section className="section-padding bg-subtle-pattern" aria-label="Faculty Preview">
      <div className="container">
        <SectionHeading
          badge="Our Educators"
          title="Meet Our Distinguished Faculty"
          subtitle="Passionate educators dedicated to shaping the future with pedagogical mastery, empathy, and visionary scholarship."
        />

        <div className="faculty-grid" style={{ marginBottom: '3rem' }}>
          {featuredFaculty.map((faculty, idx) => (
            <FacultyCard key={faculty.id} faculty={faculty} index={idx} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/faculty" className="btn btn-outline">
            <span>View All Department Faculty</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
