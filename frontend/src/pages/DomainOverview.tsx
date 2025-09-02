import React, { useState, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { buildLanguageUrl } from '../utils/techRouting';
import { motion, AnimatePresence } from 'framer-motion';
import { techDomains } from '../data/techDomains';
import './DomainOverview.css';

const DomainOverview: React.FC = () => {
  const { domainId } = useParams<{ domainId: string }>();
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialTab = (query.get('tab') as 'overview' | 'languages' | 'frameworks' | 'roadmap' | 'faq') || 'overview';
  const [activeTab, setActiveTab] = useState<'overview' | 'languages' | 'frameworks' | 'roadmap' | 'faq'>(initialTab);

  const domain = techDomains.find(d => d.id === domainId);

  if (!domain) {
    return (
      <div className="domain-overview-page">
        <div className="container">
          <div className="error-container">
            <h2>Domain Not Found</h2>
            <p>The requested tech domain could not be found.</p>
            <Link to="/roadmaps" className="btn btn-primary">
              Back to Tech Paths
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="domain-overview-page">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="domain-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-content">
            <div className="hero-icon">
              {domain.icon}
            </div>
            <div className="hero-text">
              <h1>{domain.title}</h1>
              <p className="hero-description">{domain.description}</p>
              <div className="hero-meta">
                <span className="difficulty-badge">
                  {domain.difficulty}
                </span>
                <span className="time-estimate">{domain.estimatedTime}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="domain-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'languages', label: 'Languages' },
            { id: 'frameworks', label: 'Frameworks' },
            { id: 'roadmap', label: 'Learning Path' },
            { id: 'faq', label: 'FAQ' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id as any);
                const url = new URL(window.location.href);
                url.searchParams.set('tab', tab.id);
                window.history.replaceState({}, '', url.toString());
                window.scrollTo(0, 0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="tab-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <div className="overview-section">
                <h2>About {domain.title}</h2>
                <p className="overview-text">{domain.overview}</p>
                
                <div className="overview-highlights">
                  <div className="highlight-card">
                    <h3>What You'll Learn</h3>
                    <ul>
                      {domain.roadmapSteps.slice(0, 4).map((step, index) => (
                        <li key={index}>{step.title}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="highlight-card">
                    <h3>Career Opportunities</h3>
                    <ul>
                      <li>High-demand job market</li>
                      <li>Competitive salaries</li>
                      <li>Remote work options</li>
                      <li>Continuous learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'languages' && (
              <div className="languages-section">
                <h2>Programming Languages</h2>
                <p>Master these essential languages for {domain.title.toLowerCase()}</p>
                
                <div className="languages-grid">
                  {domain.languages.map((language, index) => (
                    <motion.div
                      key={index}
                      className="language-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link to={buildLanguageUrl(language.name)} className="language-header">
                        <img src={language.icon} alt={language.name} className="language-icon" />
                        <h3>{language.name}</h3>
                      </Link>
                      <p className="language-description">{language.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'frameworks' && (
              <div className="frameworks-section">
                <h2>Frameworks & Tools</h2>
                <p>Essential frameworks and libraries for {domain.title.toLowerCase()}</p>
                
                <div className="frameworks-grid">
                  {domain.frameworks.map((framework, index) => (
                    <motion.div
                      key={index}
                      className="framework-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link to={buildLanguageUrl(framework.name)} className="framework-header">
                        <img src={framework.icon} alt={framework.name} className="framework-icon" />
                        <h3>{framework.name}</h3>
                      </Link>
                      <p className="framework-description">{framework.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="roadmap-section">
                <h2>Learning Roadmap</h2>
                <p>Follow this structured path to master {domain.title.toLowerCase()}</p>
                
                <div className="roadmap-timeline">
                  {domain.roadmapSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="roadmap-step"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                        <div className="step-resources">
                          <h4>Resources:</h4>
                          <div className="resource-buttons">
                            {step.resources.map((resource, resourceIndex) => (
                              <button key={resourceIndex} className="resource-btn">
                                {resource}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about {domain.title.toLowerCase()}</p>
                
                <div className="faq-list">
                  {domain.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="faq-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h3 className="faq-question">{faq.question}</h3>
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          className="domain-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to={`/roadmaps/${domain.id}`} className="btn btn-primary">
            Start Learning Path
          </Link>
          <Link to="/roadmaps" className="btn btn-secondary">
            Explore Other Paths
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainOverview; 