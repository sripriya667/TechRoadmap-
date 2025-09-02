import React from 'react';
import { Link } from 'react-router-dom';
import { buildLanguageUrl } from '../utils/techRouting';
import { motion } from 'framer-motion';
import './Home.css';

const Home: React.FC = () => {
  const techPaths = [
    {
      id: 'fullstack',
      title: 'Full Stack Web Development',
      description: 'Learn to build complete web applications from frontend to backend',
      icon: '🌐'
    },
    {
      id: 'app',
      title: 'App Development',
      description: 'Create mobile applications for iOS and Android platforms',
      icon: '📱'
    },
    {
      id: 'datascience',
      title: 'Data Science',
      description: 'Analyze data and build machine learning models',
      icon: '📊'
    },
    {
      id: 'aiml',
      title: 'AI/ML Engineering',
      description: 'Build advanced AI systems and neural networks',
      icon: '🤖'
    }
  ];

  const languageCategories = [
    {
      id: 'frontend',
      title: 'Frontend Languages',
      description: 'Learn the languages and frameworks that power the user interface',
      icon: '🎨',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular', 'TypeScript']
    },
    {
      id: 'backend',
      title: 'Backend Languages',
      description: 'Master server-side programming and API development',
      icon: '⚙️',
      technologies: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Go', 'Ruby']
    },
    {
      id: 'database',
      title: 'Database Technologies',
      description: 'Learn data storage and management systems',
      icon: '🗄️',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'SQLite', 'Oracle']
    },
    {
      id: 'other',
      title: 'Other Technologies',
      description: 'Explore additional tools and frameworks',
      icon: '🛠️',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Linux', 'Docker']
    }
  ];

  const techIcons = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
  ];

  return (
    <div className="home">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="code-lines">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="code-line" style={{ animationDelay: `${i * 0.5}s` }}>
              <span className="code-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="code-content">
                {i % 3 === 0 && '<div className="container">'}
                {i % 3 === 1 && '  <h1>Hello World</h1>'}
                {i % 3 === 2 && '</div>'}
                {i % 4 === 0 && 'const app = express();'}
                {i % 4 === 1 && 'app.get("/", (req, res) => {'}
                {i % 4 === 2 && '  res.json({ message: "Hello" });'}
                {i % 4 === 3 && '});'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Your Clear Path into <style color = "red"> Tech </style> <br /> Begins Here
            </h1>
            <p className="hero-subtitle">
              Master the skills you need to build the future. From web development to AI,
              we provide structured learning paths to accelerate your tech career.
            </p>
            <div className="hero-buttons">
              <Link to="/roadmaps" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign Up
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Paths Section */}
      <section className="tech-paths">
        <div className="container">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose Your Tech Path 
          </motion.h2>
          <div className="categories-grid">
            {techPaths.map((path, index) => (
              <motion.div
                key={path.id}
                className="category-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.07 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="category-icon">{path.icon}</div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <Link to={`/roadmaps/${path.id}/overview`} className="btn btn-primary">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="section-footer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/roadmaps" className="btn btn-primary btn-large">
              See All Tech Paths
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Languages and Frameworks Section */}
      <section className="languages-section">
        <div className="container">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Languages & Frameworks
          </motion.h2>
          <motion.p
            className="section-subtitle text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore programming languages and frameworks by category. Each category contains detailed information and interactive code examples.
          </motion.p>
          <div className="categories-grid">
            {languageCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.07 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                
                <div className="technologies-preview">
                  <h4>Technologies included:</h4>
                  <div className="tech-tags">
                    {category.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Link key={techIndex} to={buildLanguageUrl(tech)} className="tech-tag" title={`Explore ${tech}`}>
                        {tech}
                      </Link>
                    ))}
                    {category.technologies.length > 4 && (
                      <span className="tech-tag more">
                        +{category.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <Link to={category.id === 'other' ? '/languages' : `/languages/${category.id}`} className="btn btn-primary">
                  Explore {category.title}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="section-footer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link to="/languages" className="btn btn-primary btn-large">
              See All Languages & Frameworks
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Flowing Logos Section */}
      <section className="flowing-logos">
        <div className="container">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Technologies You'll Master
          </motion.h2>
          <div className="logos-container">
            <div className="logos-scroll">
              {[...techIcons, ...techIcons].map((tech, index) => (
                <motion.div
                  key={index}
                  className="logo-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="tech-icon"
                    title={tech.name}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of developers who have transformed their careers with our structured learning paths.</p>
            <Link to="/roadmaps" className="btn btn-primary">
              Explore All Roadmaps
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 