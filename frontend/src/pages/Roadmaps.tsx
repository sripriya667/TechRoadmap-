import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { techDomains } from '../data/techDomains';
import './Roadmaps.css';

const Roadmaps: React.FC = () => {
  return (
    <div className="roadmaps-page">
      <div className="container">
        <motion.div
          className="roadmaps-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Choose Your Tech Path</h1>
          <p>Select your learning journey and follow our structured roadmaps to master the skills you need for your career.</p>
        </motion.div>

        <div className="tech-domains-grid">
          {techDomains.map((domain, index) => (
            <motion.div
              key={domain.id}
              className="tech-domain-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="domain-top">
                <div className="domain-icon left">{domain.icon}</div>
                <div className="domain-meta-stack">
                  <span className="difficulty-badge">{domain.difficulty}</span>
                </div>
              </div>

              <h3 className="domain-title">{domain.title}</h3>
              <p className="domain-overview-text">{domain.overview}</p>

              <div className="domain-actions">
                <Link to={`/roadmaps/${domain.id}/overview`} className="btn btn-primary">
                  Learn More
                </Link>
                <Link to={`/roadmaps/${domain.id}`} className="btn btn-secondary">
                  View Roadmap
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="roadmaps-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Ready to Start Your Journey?</h2>
          <p>Each tech path is carefully designed with structured learning steps, practical projects, and real-world applications to help you succeed in your chosen field.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmaps; 