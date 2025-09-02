import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { techDomains } from '../data/techDomains';
import './RoadmapDetail.css';

const RoadmapDetail: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const domain = techDomains.find(d => d.id === category);

  if (!domain) {
    return (
      <div className="roadmap-detail-page">
        <div className="container">
          <div className="error-container">
            <h2>Roadmap Not Found</h2>
            <p>The requested roadmap could not be found.</p>
            <Link to="/roadmaps" className="btn btn-primary">
              Back to Roadmaps
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '#4ade80';
      case 'intermediate':
        return '#fbbf24';
      case 'advanced':
        return '#f87171';
      default:
        return '#ffffff';
    }
  };

  return (
    <div className="roadmap-detail-page">
      <div className="container">
        <motion.div
          className="roadmap-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="roadmap-title">
            <div className="roadmap-icon">{domain.icon}</div>
            <div>
              <h1>{domain.title}</h1>
              <p>{domain.description}</p>
            </div>
          </div>
          <div className="roadmap-meta">
            <span 
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(domain.difficulty) }}
            >
              {domain.difficulty}
            </span>
            <span className="time-estimate">{domain.estimatedTime}</span>
          </div>
        </motion.div>

        <motion.div
          className="roadmap-steps"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Learning Path</h2>
          <div className="steps-container">
            {domain.roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="step-header">
                  <div className="step-number">{step.order}</div>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
                
                {step.resources && step.resources.length > 0 && (
                  <div className="step-resources">
                    <h4>Resources:</h4>
                    <ul>
                      {step.resources.map((resource, resourceIndex) => (
                        <li key={resourceIndex}>
                          <span className="resource-link">
                            {resource}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="roadmap-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Ready to Start?</h2>
          <p>Follow this roadmap step by step to master {domain.title.toLowerCase()}.</p>
          <Link to="/roadmaps" className="btn btn-secondary">
            Explore Other Roadmaps
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapDetail; 