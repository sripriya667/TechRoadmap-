import React from 'react';
import { Link } from 'react-router-dom';
import { buildLanguageUrl } from '../utils/techRouting';
import { motion } from 'framer-motion';
import './Languages.css';

const Languages: React.FC = () => {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Languages & Frameworks',
      description: 'Learn the languages and frameworks that power the user interface',
      icon: '🎨',
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 
        'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'Tailwind CSS', 'Bootstrap', 
        'Sass', 'Less', 'Webpack', 'Vite', 'Babel', 'ESLint', 'Prettier'
      ]
    },
    {
      id: 'backend',
      title: 'Backend Languages & Frameworks',
      description: 'Master server-side programming and API development',
      icon: '⚙️',
      technologies: [
        'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'FastAPI', 'Java', 
        'Spring Boot', 'C#', '.NET', 'ASP.NET', 'PHP', 'Laravel', 'Go', 'Gin', 
        'Rust', 'Actix', 'Ruby', 'Ruby on Rails', 'Scala', 'Play Framework'
      ]
    },
    {
      id: 'database',
      title: 'Database & Data Technologies',
      description: 'Learn data storage, management, and processing systems',
      icon: '🗄️',
      technologies: [
        'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'SQL Server',
        'Apache Cassandra', 'Apache HBase', 'Apache Spark', 'Apache Kafka', 
        'Apache Hadoop', 'Snowflake', 'BigQuery', 'Redshift', 'Elasticsearch',
        'Neo4j', 'InfluxDB', 'TimescaleDB', 'CockroachDB'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Explore artificial intelligence and machine learning technologies',
      icon: '🤖',
      technologies: [
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM',
        'Apache Spark MLlib', 'Hugging Face Transformers', 'OpenAI Gym', 'Ray',
        'FastAI', 'JAX', 'ONNX', 'MLflow', 'Kubeflow', 'Weights & Biases',
        'TensorBoard', 'Streamlit', 'Gradio', 'MLflow'
      ]
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud Technologies',
      description: 'Master deployment, automation, and cloud infrastructure',
      icon: '☁️',
      technologies: [
        'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform',
        'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'AWS', 'Azure', 'GCP',
        'Heroku', 'Vercel', 'Netlify', 'DigitalOcean', 'Linode', 'Vagrant', 'Packer'
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      description: 'Build decentralized applications and smart contracts',
      icon: '⛓️',
      technologies: [
        'Solidity', 'Ethereum', 'Hardhat', 'Web3.js', 'Ethers.js', 'OpenZeppelin',
        'IPFS', 'MetaMask', 'Truffle', 'Ganache', 'Remix', 'Polkadot', 'Solana',
        'Rust (Substrate)', 'Go (Hyperledger)', 'Chainlink', 'The Graph', 'Alchemy'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Tools',
      description: 'Protect systems and networks from digital threats',
      icon: '🔒',
      technologies: [
        'Metasploit', 'Nmap', 'Wireshark', 'Burp Suite', 'Snort', 'Kali Linux',
        'OpenVAS', 'Nessus', 'Qualys', 'Rapid7', 'Splunk', 'QRadar', 'CrowdStrike',
        'Carbon Black', 'FireEye', 'Palo Alto', 'Cisco', 'Check Point', 'Fortinet'
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis & BI',
      description: 'Transform data into actionable business insights',
      icon: '📊',
      technologies: [
        'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI',
        'Jupyter Notebooks', 'R', 'RStudio', 'Shiny', 'Excel', 'Google Sheets',
        'Apache Superset', 'Grafana', 'Kibana', 'Looker', 'Mode', 'Periscope'
      ]
    }
  ];

  const handleTechnologyClick = (technology: string) => {
    window.location.href = buildLanguageUrl(technology);
  };

  return (
    <div className="languages-page">
      <div className="container">
        <motion.div
          className="languages-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Languages & Frameworks</h1>
          <p>Explore programming languages and frameworks by category. Click on any technology to see detailed information and interactive code examples.</p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              
              <div className="technologies-preview">
                <h4>Technologies included:</h4>
                <div className="tech-tags">
                  {category.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag clickable"
                      onClick={() => handleTechnologyClick(tech)}
                      title={`Click to learn more about ${tech}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {category.technologies.length > 6 && (
                    <span className="tech-tag more">
                      +{category.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <Link to={`/languages/${category.id}`} className="btn btn-primary">
                Explore {category.title}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="languages-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Ready to Dive Deep?</h2>
          <p>Each category contains detailed information about technologies, their use cases, and interactive code examples to help you learn effectively. Click on any technology tag to get started!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Languages; 