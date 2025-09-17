import React from 'react';
// Step 1: Import the new CSS file
import './SkillsSection.css';

// Data for the skills remains the same.
const skillsData = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React / Next.js', level: 'Advanced' },
  { name: 'Node / Express', level: 'Advanced' },
  { name: 'CSS / Tailwind', level: 'Advanced' },
  { name: 'SQL / MongoDB', level: 'Intermediate' },
  { name: 'Cloud (Vercel, AWS)', level: 'Intermediate' },
];

/**
 * A reusable component for displaying a single skill card.
 * All Tailwind classes have been replaced with our custom CSS classes.
 */
const SkillCard = ({ name, level }) => {
  return (
    <div className="skill-card">
      <p className="skill-name">{name}</p>
      <span className="skill-level">
        {level}
      </span>
    </div>
  );
};

/**
 * The main component that renders the entire skills section.
 */
function SkillsSection() {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills:-</h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;