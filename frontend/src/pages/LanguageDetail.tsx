import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './LanguageDetail.css';

interface CodeSnippet {
  title: string;
  code: string;
  description: string;
  language: string;
}

interface Language {
  _id: string;
  name: string;
  category: string;
  description: string;
  useCase: string;
  difficulty: string;
  codeSnippets: CodeSnippet[];
}

const HTML_FALLBACK: Language = {
  _id: 'local-html',
  name: 'HTML',
  category: 'frontend',
  description: 'Markup language for structuring content on the web.',
  useCase: 'Building the structure of web pages and applications.',
  difficulty: 'beginner',
  codeSnippets: [
    {
      title: 'Basic Page',
      description: 'A minimal HTML5 document structure.',
      language: 'html',
      code: `<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Hello HTML</title>\n  </head>\n  <body>\n    <h1>Welcome</h1>\n    <p>This is a basic HTML page.</p>\n  </body>\n</html>`
    }
  ]
};

const LanguageDetail: React.FC = () => {
  const { category, language } = useParams<{ category: string; language: string }>();
  const [languageData, setLanguageData] = useState<Language | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [typedCode, setTypedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (category && language) {
      fetchLanguage();
    }
  }, [category, language]);

  useEffect(() => {
    if (languageData && languageData.codeSnippets.length > 0) {
      startTypingEffect();
    }
  }, [activeSnippet, languageData]);

  const fetchLanguage = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/languages/category/${category}`);
      let languages: Language[] = [];
      if (response.ok) {
        languages = await response.json();
      }
      let targetLanguage = languages.find((lang: Language) => 
        lang.name.toLowerCase() === language?.toLowerCase()
      );
      
      // Fallback for HTML detail
      if (!targetLanguage && category === 'frontend' && language?.toLowerCase() === 'html') {
        targetLanguage = HTML_FALLBACK;
      }
      
      if (!targetLanguage) {
        throw new Error('Language not found');
      }
      
      setLanguageData(targetLanguage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const startTypingEffect = () => {
    if (!languageData) return;
    
    const currentSnippet = languageData.codeSnippets[activeSnippet];
    if (!currentSnippet) return;

    setIsTyping(true);
    setTypedCode('');
    
    let index = 0;
    const code = currentSnippet.code;
    
    const typeInterval = setInterval(() => {
      if (index < code.length) {
        setTypedCode(code.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 30); // Adjust speed here

    return () => clearInterval(typeInterval);
  };

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

  const getLanguageSyntax = (language: string) => {
    switch (language.toLowerCase()) {
      case 'html':
        return 'markup';
      case 'css':
        return 'css';
      case 'javascript':
        return 'javascript';
      case 'jsx':
        return 'jsx';
      case 'typescript':
        return 'typescript';
      case 'python':
        return 'python';
      case 'java':
        return 'java';
      case 'c#':
        return 'csharp';
      case 'php':
        return 'php';
      default:
        return 'javascript';
    }
  };

  if (loading) {
    return (
      <div className="language-detail-page">
        <div className="container">
          <div className="loading-container">
            <div className="loading"></div>
            <p>Loading language details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !languageData) {
    return (
      <div className="language-detail-page">
        <div className="container">
          <div className="error-container">
            <h2>Error</h2>
            <p>{error || 'Language not found'}</p>
            <Link to={`/languages/${category}`} className="btn btn-primary">
              Back to Languages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isHTML = languageData.name.toLowerCase() === 'html';
  const syntaxTheme = isHTML ? okaidia : tomorrow;

  return (
    <div className="language-detail-page">
      <div className="container">
        <motion.div
          className="language-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="language-title">
            <h1>{languageData.name}</h1>
            <p>{languageData.description}</p>
          </div>
          <div className="language-meta">
            <span 
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(languageData.difficulty) }}
            >
              {languageData.difficulty}
            </span>
          </div>
        </motion.div>

        <div className={`language-content ${isHTML ? 'html-layout' : ''}`}>
          <motion.div
            className="language-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isHTML ? (
              <>
                <div className="info-section">
                  <h3>History</h3>
                  <p>HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 to structure and link documents on the early web. It has evolved through versions (HTML 2.0, 3.2, 4.01) and today is standardized as HTML Living Standard by WHATWG.</p>
                </div>
                <div className="info-section">
                  <h3>Where It’s Used</h3>
                  <p>HTML is used everywhere content is displayed on the web: websites, web apps, CMS templates, emails, documentation sites, and embedded UIs (e.g., WebViews in mobile apps).</p>
                </div>
                <div className="info-section">
                  <h3>Domains</h3>
                  <p>HTML is foundational across multiple domains including Frontend Development, Content Management Systems, SEO/Content Publishing, E‑commerce, Marketing/Landing Pages, Technical Documentation, and Education/Bootcamps.</p>
                </div>
                <div className="info-section">
                  <h3>Why It Matters</h3>
                  <p>HTML is the foundation of the web. It defines structure and semantics, enabling accessibility, SEO, and robust styling/interaction with CSS and JavaScript.</p>
                </div>
                <div className="info-section">
                  <h3>Demand</h3>
                  <p>HTML remains among the most in‑demand skills for entry‑level and professional frontend roles. Nearly all web job postings list HTML alongside CSS and JavaScript, and proficiency in semantic, accessible HTML is a key hiring signal.</p>
                </div>
              </>
            ) : (
              <>
                <div className="info-section">
                  <h3>Use Case</h3>
                  <p>{languageData.useCase}</p>
                </div>
                
                <div className="info-section">
                  <h3>About {languageData.name}</h3>
                  <p>{languageData.description}</p>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            className={`code-snippets-section ${isHTML ? 'html-code-panel' : ''}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>{isHTML ? 'Example Snippet' : 'Interactive Code Examples'}</h2>
            {!isHTML && (
              <div className="snippets-navigation">
                {languageData.codeSnippets.map((snippet, index) => (
                  <button
                    key={index}
                    className={`snippet-tab ${index === activeSnippet ? 'active' : ''}`}
                    onClick={() => setActiveSnippet(index)}
                  >
                    {snippet.title}
                  </button>
                ))}
              </div>
            )}

            {languageData.codeSnippets[activeSnippet] && (
              <div className={`snippet-container ${isHTML ? 'floating-snippet' : ''}`}>
                <div className="snippet-header">
                  <h3>{languageData.codeSnippets[activeSnippet].title}</h3>
                  <div className="typing-indicator">
                    {isTyping && <span className="cursor">|</span>}
                  </div>
                </div>
                {!isHTML && (
                  <p className="snippet-description">
                    {languageData.codeSnippets[activeSnippet].description}
                  </p>
                )}
                <div className="code-block colorful">
                  <SyntaxHighlighter
                    language={getLanguageSyntax(languageData.codeSnippets[activeSnippet].language)}
                    style={syntaxTheme}
                    customStyle={{
                      margin: 0,
                      borderRadius: '12px',
                      fontSize: '14px',
                      lineHeight: '1.6',
                    }}
                  >
                    {typedCode}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="language-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Ready to Practice?</h2>
          <p>Try running these code examples in your development environment to see them in action.</p>
          <Link to={`/languages/${category}`} className="btn btn-secondary">
            Explore More Languages
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LanguageDetail; 