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
// Generic info builders for standard sections
const buildHistory = (name: string) =>
  name.toLowerCase() === 'css'
    ? 'CSS (Cascading Style Sheets) emerged in the late 1990s to separate content from presentation, enabling consistent styling across pages.'
    : name.toLowerCase() === 'javascript'
    ? 'JavaScript was created by Brendan Eich in 1995 and standardized as ECMAScript, becoming the language of the web.'
    : name.toLowerCase() === 'typescript'
    ? 'TypeScript was introduced by Microsoft in 2012 to add static typing and tooling on top of JavaScript.'
    : name.toLowerCase() === 'react'
    ? 'React was released by Facebook in 2013, popularizing component-driven UI development.'
    : name.toLowerCase() === 'angular'
    ? 'Angular (2+) was released by Google in 2016 as a complete rewrite of AngularJS with TypeScript.'
    : name.toLowerCase() === 'vue.js'
    ? 'Vue.js was created by Evan You in 2014 with a focus on approachability and incrementality.'
    : name.toLowerCase() === 'svelte'
    ? 'Svelte, created by Rich Harris, compiles components at build time for minimal runtime overhead.'
    : name.toLowerCase() === 'bootstrap'
    ? 'Bootstrap was open‑sourced by Twitter in 2011 to accelerate consistent, responsive UI development.'
    : name.toLowerCase() === 'tailwind css'
    ? 'Tailwind CSS popularized utility‑first styling, enabling rapid UI building directly in markup.'
    : name.toLowerCase() === 'python'
    ? 'Python, created by Guido van Rossum, emphasizes readability and has grown across web, data, and automation.'
    : name.toLowerCase() === 'php'
    ? 'PHP, created in 1995, powers many dynamic websites and popular CMS platforms.'
    : name.toLowerCase() === 'java'
    ? 'Java, released by Sun Microsystems, is a platform‑independent language widely used in enterprise.'
    : name.toLowerCase() === 'c#'
    ? 'C# is a modern, object‑oriented language from Microsoft, central to the .NET ecosystem.'
    : name.toLowerCase() === 'ruby'
    ? 'Ruby prioritizes developer happiness and productivity and powers Rails.'
    : name.toLowerCase() === 'go'
    ? 'Go (Golang) by Google simplifies concurrent programming and systems development.'
    : name.toLowerCase() === 'rust'
    ? 'Rust provides memory safety without a garbage collector and is used for high‑performance systems.'
    : name.toLowerCase() === 'express'
    ? 'Express.js is a minimalist Node.js web framework for building APIs and web servers.'
    : name.toLowerCase() === 'nestjs'
    ? 'NestJS brings a structured, TypeScript‑first approach to building scalable Node.js apps.'
    : name.toLowerCase() === 'django'
    ? 'Django is a batteries‑included Python framework aimed at rapid, secure development.'
    : name.toLowerCase() === 'flask'
    ? 'Flask is a lightweight Python microframework for simple services and APIs.'
    : name.toLowerCase() === 'fastapi'
    ? 'FastAPI is a modern Python framework for fast, typed APIs with excellent developer experience.'
    : name.toLowerCase() === 'spring boot'
    ? 'Spring Boot streamlines Java application setup for production‑ready services.'
    : name.toLowerCase() === 'asp.net core'
    ? 'ASP.NET Core is a cross‑platform, high‑performance framework for building modern .NET apps.'
    : name.toLowerCase() === 'laravel'
    ? 'Laravel is an elegant PHP framework focused on developer ergonomics.'
    : name.toLowerCase() === 'ruby on rails'
    ? 'Ruby on Rails emphasizes convention over configuration for rapid web app development.'
    : name.toLowerCase() === 'gin'
    ? 'Gin is a fast HTTP web framework for Go with a focus on performance.'
    : name.toLowerCase() === 'actix'
    ? 'Actix is a powerful, actor‑based web framework for Rust.'
    : `Background and evolution of ${name}.`;

const buildWhereUsed = (name: string) =>
  `Commonly used for building web apps, APIs, and tooling with ${name}.`;
const buildDomains = (name: string) =>
  `Typical domains for ${name}: frontend apps, backend services, dashboards, and tooling.`;
const buildWhyMatters = (name: string) =>
  `${name} matters because it enables productivity, maintainability, and strong ecosystems.`;
const buildDemand = (name: string) =>
  `${name} skills are in demand across startups and enterprises; proficiency is valued in hiring.`;

const CSS_FALLBACK: Language = {
  _id: 'local-css',
  name: 'CSS',
  category: 'frontend',
  description: 'Cascading Style Sheets (CSS) describes how HTML is presented—layout, colors, typography, animations.',
  useCase: 'Create responsive layouts, themes, and interactions across websites and apps.',
  difficulty: 'beginner',
  codeSnippets: [
    {
      title: 'Button Styles',
      description: 'A simple button style with hover state and variables.',
      language: 'css',
      code: `:root { --primary: #4f46e5; }\n.btn {\n  background: var(--primary);\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 8px;\n  transition: background .2s ease;\n}\n.btn:hover {\n  background: #3730a3;\n}`
    }
  ]
};

const JAVASCRIPT_FALLBACK: Language = {
  _id: 'local-js',
  name: 'JavaScript',
  category: 'frontend',
  description: 'JavaScript is the programming language of the web, enabling dynamic content and application logic in browsers and beyond.',
  useCase: 'Add interactivity to pages, build SPAs, call APIs, and power Node.js backends.',
  difficulty: 'beginner',
  codeSnippets: [
    {
      title: 'Counter',
      description: 'Simple interactive counter with event handling and state.',
      language: 'javascript',
      code: `let count = 0;\nconst btn = document.getElementById('inc');\nconst out = document.getElementById('out');\nbtn.addEventListener('click', () => {\n  count++;\n  out.textContent = count;\n});`
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, language]);

  useEffect(() => {
    if (languageData && languageData.codeSnippets.length > 0) {
      startTypingEffect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSnippet, languageData]);

  const fetchLanguage = async () => {
    let languages: Language[] = [];
    let fetchFailed = false;
    try {
      const response = await fetch(`http://localhost:5000/api/languages/category/${category}`);
      if (response.ok) {
        languages = await response.json();
      } else {
        fetchFailed = true;
      }
    } catch (_err) {
      fetchFailed = true;
    }

    let targetLanguage = languages.find((lang: Language) => 
      lang.name.toLowerCase() === language?.toLowerCase()
    );

    const langKey = (language || '').toLowerCase();
    if (!targetLanguage) {
      // Local fallbacks for common frontend
      if (category === 'frontend') {
        if (langKey === 'html') targetLanguage = HTML_FALLBACK;
        if (langKey === 'css') targetLanguage = CSS_FALLBACK;
        if (langKey === 'javascript') targetLanguage = JAVASCRIPT_FALLBACK;
        if (langKey === 'typescript') targetLanguage = {
          _id: 'local-ts', name: 'TypeScript', category: 'frontend', difficulty: 'intermediate',
          description: 'Typed superset of JavaScript that improves developer productivity and maintainability.',
          useCase: 'Large-scale apps in React/Angular/Vue and Node.js services.',
          codeSnippets: [{ title: 'Typed Function', description: 'Basic typing.', language: 'typescript', code: 'function add(a: number, b: number): number {\n  return a + b;\n}' }]
        };
        if (langKey === 'react') targetLanguage = {
          _id: 'local-react', name: 'React', category: 'frontend', difficulty: 'intermediate',
          description: 'Component-based library for building user interfaces.',
          useCase: 'Single-page apps, dashboards, and complex UIs.',
          codeSnippets: [{ title: 'Counter', description: 'React hook state.', language: 'jsx', code: 'function Counter(){ const [c,setC]=React.useState(0); return <button onClick={()=>setC(c+1)}>Count: {c}</button>; }' }]
        };
        if (langKey === 'angular') targetLanguage = {
          _id: 'local-angular', name: 'Angular', category: 'frontend', difficulty: 'advanced',
          description: 'Opinionated framework for building scalable apps in TypeScript.',
          useCase: 'Enterprise SPAs and admin tools.',
          codeSnippets: [{ title: 'Component', description: 'Basic component.', language: 'typescript', code: "@Component({ selector: 'app-hello', template: '<h1>Hello</h1>' })\nexport class HelloComponent {}" }]
        };
        if (langKey === 'vue' || langKey === 'vue.js') targetLanguage = {
          _id: 'local-vue', name: 'Vue.js', category: 'frontend', difficulty: 'intermediate',
          description: 'Progressive framework with gentle learning curve.',
          useCase: 'SPAs, widgets, and prototypes.',
          codeSnippets: [{ title: 'Reactive', description: 'Simple Vue data.', language: 'javascript', code: 'export default { data(){ return { count: 0 } } }' }]
        };
        if (langKey === 'svelte') targetLanguage = {
          _id: 'local-svelte', name: 'Svelte', category: 'frontend', difficulty: 'intermediate',
          description: 'Compiler that turns declarative components into efficient JS.',
          useCase: 'High-performance UIs with minimal runtime.',
          codeSnippets: [{ title: 'Svelte Counter', description: 'Minimal example.', language: 'javascript', code: '<script> let count = 0; </script>\n<button on:click={()=>count++}>Count: {count}</button>' }]
        };
        if (langKey === 'bootstrap') targetLanguage = {
          _id: 'local-bootstrap', name: 'Bootstrap', category: 'frontend', difficulty: 'beginner',
          description: 'CSS framework with prebuilt components and grid.',
          useCase: 'Rapid prototyping and consistent styling.',
          codeSnippets: [{ title: 'Button', description: 'Primary button.', language: 'html', code: '<button class="btn btn-primary">Click</button>' }]
        };
        if (langKey === 'tailwind-css' || langKey === 'tailwind') targetLanguage = {
          _id: 'local-tailwind', name: 'Tailwind CSS', category: 'frontend', difficulty: 'intermediate',
          description: 'Utility-first CSS for rapidly building custom UIs.',
          useCase: 'Compose designs directly in markup.',
          codeSnippets: [{ title: 'Utility Button', description: 'Styled with utilities.', language: 'html', code: '<button class="bg-indigo-600 text-white px-4 py-2 rounded">Click</button>' }]
        };
      }

      // Local fallbacks for backend
      if (category === 'backend') {
        const simple = (n: string, desc: string, use: string, lang: string, code: string, diff: string = 'intermediate'): Language => ({
          _id: `local-${n.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,
          name: n, category: 'backend', description: desc, useCase: use, difficulty: diff as any,
          codeSnippets: [{ title: 'Example', description: `${n} snippet`, language: lang, code }]
        });
        if (langKey === 'python') targetLanguage = simple('Python','Versatile language across web, data, and automation.','APIs with Django/Flask/FastAPI.','python','from flask import Flask\napp=Flask(__name__)\n@app.get("/")\ndef ok(): return {"ok":True}','beginner');
        if (langKey === 'php') targetLanguage = simple('PHP','Server-side scripting language for the web.','Dynamic sites and APIs (Laravel).','php','<?php echo "Hello"; ?>','beginner');
        if (langKey === 'java') targetLanguage = simple('Java','Widely used JVM language for enterprise.','APIs with Spring Boot.','java','class Main{ public static void main(String[]a){ System.out.println("OK"); }}');
        if (langKey === 'csharp' || langKey === 'c#') targetLanguage = simple('C#','Modern language on .NET.','APIs with ASP.NET Core.','csharp','var app=WebApplication.Create(); app.MapGet("/",()=>"OK"); app.Run();');
        if (langKey === 'ruby') targetLanguage = simple('Ruby','Developer-friendly language with Rails.','CRUD apps and APIs.','ruby','puts "Hello"','beginner');
        if (langKey === 'go') targetLanguage = simple('Go','Compiled language for services.','Fast APIs and systems.','go','http.HandleFunc("/", func(w,r){ w.Write([]byte("OK")) })');
        if (langKey === 'rust') targetLanguage = simple('Rust','Performance and safety for systems.','High-performance services.','rust','fn main(){ println!("OK"); }','advanced');
        if (langKey === 'express') targetLanguage = simple('Express.js','Minimal Node.js web framework.','REST APIs and microservices.','javascript','const app=require("express")(); app.get("/",(_,res)=>res.send("OK"));');
        // Prefer Node.js/Express over NestJS per request
        if (langKey === 'django') targetLanguage = simple('Django','Batteries-included Python framework.','Secure, rapid web apps.','python','from django.http import JsonResponse\ndef home(_): return JsonResponse({"ok":True})');
        if (langKey === 'flask') targetLanguage = simple('Flask','Lightweight Python microframework.','Small services and APIs.','python','@app.get("/")\ndef home(): return "OK"','beginner');
        if (langKey === 'fastapi') targetLanguage = simple('FastAPI','Modern Python API framework.','Fast, typed APIs.','python','from fastapi import FastAPI\napp=FastAPI()\n@app.get("/")\ndef home(): return {"ok":True}');
        if (langKey === 'spring-boot' || langKey === 'springboot') targetLanguage = simple('Spring Boot','Java framework for production services.','Enterprise APIs.','java','@RestController class C{ @GetMapping("/") String ok(){return "OK";} }','advanced');
        if (langKey === 'asp-net-core' || langKey === 'asp.net-core' || langKey === 'aspnetcore' || langKey === 'asp.net core') targetLanguage = simple('ASP.NET Core','Cross‑platform .NET web framework.','High-performance APIs.','csharp','var app=WebApplication.Create(); app.MapGet("/",()=>"OK"); app.Run();','advanced');
        if (langKey === 'laravel') targetLanguage = simple('Laravel','Elegant PHP framework.','Rapid web APIs.','php','Route::get("/", function(){ return "OK"; });');
        if (langKey === 'ruby-on-rails' || langKey === 'rails') targetLanguage = simple('Ruby on Rails','Convention-over-configuration framework.','CRUD apps quickly.','ruby','Rails.application.routes.draw do root "home#index" end');
        if (langKey === 'gin') targetLanguage = simple('Gin','Fast Go web framework.','REST APIs in Go.','go','r:=gin.Default(); r.GET("/", func(c){ c.String(200,"OK") })');
        if (langKey === 'actix') targetLanguage = simple('Actix','Powerful Rust web framework.','High-performance services.','rust','HttpServer::new(|| App::new().route("/", web::get().to(|| async {"OK"})))');
      }
    }

    if (!targetLanguage) {
      const message = fetchFailed ? 'Unable to load language data (server unavailable)' : 'Language not found';
      setError(message);
      setLoading(false);
      return;
    }

    setLanguageData(targetLanguage);
    setError('');
    setLoading(false);
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
            {/* Standardized five sections for every language */}
            <div className="info-section">
              <h3>History</h3>
              <p>
                {isHTML
                  ? 'HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 to structure and link documents on the early web. It has evolved through versions (HTML 2.0, 3.2, 4.01) and today is standardized as HTML Living Standard by WHATWG.'
                  : buildHistory(languageData.name)}
              </p>
            </div>
            <div className="info-section">
              <h3>Where It’s Used</h3>
              <p>
                {isHTML
                  ? 'HTML is used everywhere content is displayed on the web: websites, web apps, CMS templates, emails, documentation sites, and embedded UIs (e.g., WebViews in mobile apps).'
                  : buildWhereUsed(languageData.name)}
              </p>
            </div>
            <div className="info-section">
              <h3>Domains</h3>
              <p>
                {isHTML
                  ? 'HTML is foundational across multiple domains including Frontend Development, Content Management Systems, SEO/Content Publishing, E‑commerce, Marketing/Landing Pages, Technical Documentation, and Education/Bootcamps.'
                  : buildDomains(languageData.name)}
              </p>
            </div>
            <div className="info-section">
              <h3>Why It Matters</h3>
              <p>
                {isHTML
                  ? 'HTML is the foundation of the web. It defines structure and semantics, enabling accessibility, SEO, and robust styling/interaction with CSS and JavaScript.'
                  : buildWhyMatters(languageData.name)}
              </p>
            </div>
            <div className="info-section">
              <h3>Demand</h3>
              <p>
                {isHTML
                  ? 'HTML remains among the most in‑demand skills for entry‑level and professional frontend roles. Nearly all web job postings list HTML alongside CSS and JavaScript, and proficiency in semantic, accessible HTML is a key hiring signal.'
                  : buildDemand(languageData.name)}
              </p>
            </div>
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

            {/* Learn more links (placeholder, user will update) */}
            <div className="learn-more">
              <h3>Learn more about {languageData.name}</h3>
              <ul>
                <li><button className="link-like">Official Docs</button></li>
                <li><button className="link-like">MDN / Reference</button></li>
                <li><button className="link-like">Recommended YouTube Tutorial</button></li>
              </ul>
              <p className="note">Replace the above links with your preferred resources.</p>
            </div>
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