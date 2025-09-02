import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { buildLanguageUrl } from '../utils/techRouting';
import { motion } from 'framer-motion';
import './LanguageCategory.css';

// Removed unused CodeSnippetPreview interface

interface Language {
  _id?: string;
  name: string;
  category: string;
  description: string;
  useCase: string;
  difficulty: string;
  codeSnippets: Array<{
    title: string;
    code: string;
    description: string;
    language: string;
  }>;
  history?: string;
  usedInDomains?: string[];
  popularity?: string;
}

const FRONTEND_LANGUAGES_LOCAL: Language[] = [
  {
    name: 'HTML',
    category: 'frontend',
    difficulty: 'beginner',
    description: 'Markup language for structuring content on the web.',
    useCase: 'Building the structure of web pages and applications.',
    history: 'Created by Tim Berners-Lee in 1991, standardized by W3C/WHATWG.',
    usedInDomains: ['Web Development', 'Email Templates', 'CMS', 'Landing Pages'],
    popularity: 'Universally used; foundational for the web.',
    codeSnippets: [
      {
        title: 'Basic Page',
        description: 'A minimal HTML5 document structure.',
        language: 'html',
        code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello HTML</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a basic HTML page.</p>
  </body>
</html>`
      }
    ]
  },
  {
    name: 'CSS',
    category: 'frontend',
    difficulty: 'beginner',
    description: 'Stylesheet language for describing the look of a document.',
    useCase: 'Styling and layout of web pages and UI components.',
    history: 'Introduced in 1996 by Håkon Wium Lie and Bert Bos; maintained by W3C.',
    usedInDomains: ['Web UI', 'Design Systems', 'Email Styling'],
    popularity: 'Essential alongside HTML; ubiquitous for styling.',
    codeSnippets: [
      {
        title: 'Button Styles',
        description: 'A simple button style with hover state.',
        language: 'css',
        code: `.btn {
  background: #4f46e5;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
}
.btn:hover {
  background: #3730a3;


  }`
      }
    ]
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    difficulty: 'beginner',
    description: 'Programming language of the web for interactivity and logic.',
    useCase: 'Interactivity, DOM manipulation, API calls, SPA logic.',
    history: 'Created by Brendan Eich in 1995; standardized as ECMAScript.',
    usedInDomains: ['Web Apps', 'PWAs', 'Desktop (Electron)', 'Mobile (React Native)'],
    popularity: 'One of the most popular languages worldwide.',
    codeSnippets: [
      {
        title: 'Counter',
        description: 'Simple interactive counter.',
        language: 'javascript',
        code: `let count = 0;
const btn = document.getElementById('inc');
const out = document.getElementById('out');
btn.addEventListener('click', () => {
  count++;
  out.textContent = count;
});`
      }
    ]
  }
  ,
  {
    name: 'TypeScript',
    category: 'frontend',
    difficulty: 'intermediate',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript.',
    useCase: 'Build large-scale, maintainable applications with type safety and tooling.',
    history: 'Developed by Microsoft and released in 2012 to add static types to JavaScript.',
    usedInDomains: ['Web Apps', 'Node.js Services', 'React/Angular/Vue Projects'],
    popularity: 'Widely adopted in enterprise and open-source projects.',
    codeSnippets: [
      {
        title: 'Typed Function',
        description: 'A simple typed function in TypeScript.',
        language: 'typescript',
        code: `function add(a: number, b: number): number {\n  return a + b;\n}`
      }
    ]
  },
  {
    name: 'React',
    category: 'frontend',
    difficulty: 'intermediate',
    description: 'Library for building user interfaces with components and hooks.',
    useCase: 'Build interactive, component-driven UIs and SPAs.',
    history: 'Created at Facebook in 2013; popularized component-based development.',
    usedInDomains: ['Web Apps', 'PWAs', 'Mobile (React Native)'],
    popularity: 'One of the most popular frontend libraries.',
    codeSnippets: [
      {
        title: 'Counter Component',
        description: 'A simple React counter using hooks.',
        language: 'jsx',
        code: `function Counter() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n  );\n}`
      }
    ]
  },
  {
    name: 'Angular',
    category: 'frontend',
    difficulty: 'advanced',
    description: 'Framework for building large-scale applications with TypeScript.',
    useCase: 'Enterprise-grade SPAs with strong structure and tooling.',
    history: 'Successor to AngularJS, rebuilt and released by Google in 2016.',
    usedInDomains: ['Enterprise SPAs', 'Dashboards', 'Admin Tools'],
    popularity: 'Popular in enterprises and complex apps.',
    codeSnippets: [
      {
        title: 'Component',
        description: 'Basic Angular component class.',
        language: 'typescript',
        code: `@Component({ selector: 'app-hello', template: '<h1>Hello</h1>' })\nexport class HelloComponent {}`
      }
    ]
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    difficulty: 'intermediate',
    description: 'Progressive framework for building user interfaces.',
    useCase: 'Approachable, versatile framework for SPAs and widgets.',
    history: 'Created by Evan You in 2014; focuses on simplicity and incrementality.',
    usedInDomains: ['Web Apps', 'Admin Tools', 'Prototypes'],
    popularity: 'Highly popular with a gentle learning curve.',
    codeSnippets: [
      {
        title: 'Reactive State',
        description: 'Vue component with reactive data.',
        language: 'javascript',
        code: `export default { data() { return { count: 0 }; } }`
      }
    ]
  },
  {
    name: 'Svelte',
    category: 'frontend',
    difficulty: 'intermediate',
    description: 'Compiler that turns declarative components into efficient JS.',
    useCase: 'High-performance UIs with minimal runtime overhead.',
    history: 'Created by Rich Harris; compiles components at build time.',
    usedInDomains: ['Web Apps', 'Widgets', 'Sites'],
    popularity: 'Growing popularity for simplicity and performance.',
    codeSnippets: [
      {
        title: 'Svelte Counter',
        description: 'Minimal Svelte counter.',
        language: 'javascript',
        code: `<script> let count = 0; </script>\n<button on:click={() => count++}>Count: {count}</button>`
      }
    ]
  },
  {
    name: 'Next.js',
    category: 'frontend',
    difficulty: 'intermediate',
    description: 'React framework for production with routing, SSR/SSG, and APIs.',
    useCase: 'Build SEO-friendly, fast web apps with file-based routing.',
    history: 'Created by Vercel; popularized hybrid rendering (SSR/SSG/ISR).',
    usedInDomains: ['Web Apps', 'E-commerce', 'Dashboards'],
    popularity: 'Widely adopted for modern React apps.',
    codeSnippets: [
      {
        title: 'Basic Page',
        description: 'A simple Next.js page component.',
        language: 'javascript',
        code: `export default function Home(){\n  return <h1>Hello Next.js</h1>;\n}`
      }
    ]
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    difficulty: 'beginner',
    description: 'CSS framework for building responsive, mobile-first sites.',
    useCase: 'Rapid UI development with prebuilt components.',
    history: 'Open-sourced by Twitter in 2011.',
    usedInDomains: ['Websites', 'Dashboards', 'Admin Panels'],
    popularity: 'Widely used for quick, consistent styling.',
    codeSnippets: [
      {
        title: 'Button',
        description: 'Bootstrap primary button.',
        language: 'html',
        code: `<button class="btn btn-primary">Click</button>`
      }
    ]
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    difficulty: 'intermediate',
    description: 'Utility-first CSS framework for rapidly building custom UIs.',
    useCase: 'Compose complex designs directly in your markup.',
    history: 'Created by Adam Wathan; popular in modern frontend stacks.',
    usedInDomains: ['Web Apps', 'Design Systems'],
    popularity: 'Very popular in modern React/Next.js apps.',
    codeSnippets: [
      {
        title: 'Utility Button',
        description: 'Tailwind-styled button.',
        language: 'html',
        code: `<button class="bg-indigo-600 text-white px-4 py-2 rounded">Click</button>`
      }
    ]
  }
];

const BACKEND_LANGUAGES_LOCAL: Language[] = [
  {
    name: 'Python',
    category: 'backend',
    difficulty: 'beginner',
    description: 'Versatile language used for web backends, data, and automation.',
    useCase: 'Build APIs with Django/Flask/FastAPI, scripts, and services.',
    codeSnippets: [
      {
        title: 'Hello API (Flask)',
        description: 'A minimal Flask endpoint.',
        language: 'python',
        code: `from flask import Flask\napp = Flask(__name__)\n@app.get('/')\ndef hello():\n  return {'ok': True}`
      }
    ]
  },
  {
    name: 'PHP',
    category: 'backend',
    difficulty: 'beginner',
    description: 'Server-side scripting language widely used for web.',
    useCase: 'Build dynamic websites and APIs (Laravel).',
    codeSnippets: [
      { title: 'Echo', description: 'Simple PHP output.', language: 'php', code: `<?php echo "Hello"; ?>` }
    ]
  },
  { name: 'Java', category: 'backend', difficulty: 'intermediate', description: 'Robust, JVM-based language.', useCase: 'Enterprise APIs with Spring Boot.', codeSnippets: [ { title: 'Main', description: 'Hello from Java.', language: 'java', code: `class Main { public static void main(String[] a){ System.out.println("Hello"); } }` } ] },
  { name: 'C#', category: 'backend', difficulty: 'intermediate', description: 'Modern language on .NET.', useCase: 'Web APIs with ASP.NET Core.', codeSnippets: [ { title: 'Minimal API', description: 'ASP.NET Core snippet.', language: 'csharp', code: `var app = WebApplication.Create(); app.MapGet("/", () => "OK"); app.Run();` } ] },
  { name: 'Ruby', category: 'backend', difficulty: 'beginner', description: 'Friendly language with Rails.', useCase: 'Build CRUD apps and APIs.', codeSnippets: [ { title: 'puts', description: 'Print to console.', language: 'ruby', code: `puts 'Hello'` } ] },
  { name: 'Go', category: 'backend', difficulty: 'intermediate', description: 'Compiled language for services.', useCase: 'Fast APIs and systems.', codeSnippets: [ { title: 'HTTP', description: 'Go HTTP handler.', language: 'go', code: `http.HandleFunc("/", func(w,r){ w.Write([]byte("OK")) })` } ] },
  { name: 'Rust', category: 'backend', difficulty: 'advanced', description: 'Performance and safety.', useCase: 'High-performance backends.', codeSnippets: [ { title: 'Print', description: 'Hello in Rust.', language: 'rust', code: `fn main(){ println!("Hello"); }` } ] },
  // Frameworks
  { name: 'Express.js', category: 'backend', difficulty: 'beginner', description: 'Minimal Node.js web framework.', useCase: 'REST APIs and microservices.', codeSnippets: [ { title: 'Route', description: 'Express route.', language: 'javascript', code: `const app=require('express')(); app.get('/',(_,res)=>res.send('OK'));` } ] },
  { name: 'Node.js', category: 'backend', difficulty: 'beginner', description: 'JavaScript runtime built on V8 for server-side apps.', useCase: 'APIs, real-time apps, CLIs.', codeSnippets: [ { title: 'HTTP', description: 'Basic Express server.', language: 'javascript', code: `const express=require('express')(); express.get('/',(_,res)=>res.send('OK')); express.listen(3000);` } ] },
  { name: 'Django', category: 'backend', difficulty: 'intermediate', description: 'Batteries-included Python framework.', useCase: 'Full-featured web apps and APIs.', codeSnippets: [ { title: 'View', description: 'Django view.', language: 'python', code: `from django.http import JsonResponse\ndef home(_): return JsonResponse({'ok':True})` } ] },
  { name: 'Flask', category: 'backend', difficulty: 'beginner', description: 'Lightweight Python microframework.', useCase: 'Small services and APIs.', codeSnippets: [ { title: 'Route', description: 'Flask route.', language: 'python', code: `@app.get('/')\ndef home(): return 'OK'` } ] },
  { name: 'FastAPI', category: 'backend', difficulty: 'intermediate', description: 'Modern Python API framework.', useCase: 'Fast, typed APIs.', codeSnippets: [ { title: 'Endpoint', description: 'FastAPI endpoint.', language: 'python', code: `from fastapi import FastAPI\napp = FastAPI()\n@app.get('/')\ndef home(): return {'ok':True}` } ] },
  { name: 'Spring Boot', category: 'backend', difficulty: 'advanced', description: 'Java framework for production services.', useCase: 'Enterprise APIs.', codeSnippets: [ { title: 'RestController', description: 'Spring Boot REST.', language: 'java', code: `@RestController class C{ @GetMapping("/") String ok(){return "OK";} }` } ] },
  { name: 'ASP.NET Core', category: 'backend', difficulty: 'advanced', description: 'Cross-platform .NET web framework.', useCase: 'High-performance APIs.', codeSnippets: [ { title: 'Minimal API', description: 'ASP.NET Core minimal.', language: 'csharp', code: `var app = WebApplication.Create(); app.MapGet("/", () => "OK"); app.Run();` } ] },
  { name: 'Laravel', category: 'backend', difficulty: 'intermediate', description: 'Elegant PHP framework.', useCase: 'Rapid web and API development.', codeSnippets: [ { title: 'Route', description: 'Laravel route.', language: 'php', code: `Route::get('/', function(){ return 'OK'; });` } ] },
  { name: 'Ruby on Rails', category: 'backend', difficulty: 'intermediate', description: 'Convention-over-configuration web framework.', useCase: 'CRUD apps quickly.', codeSnippets: [ { title: 'Route', description: 'Rails route.', language: 'ruby', code: `Rails.application.routes.draw do root 'home#index' end` } ] },
  { name: 'Gin', category: 'backend', difficulty: 'intermediate', description: 'Fast Go web framework.', useCase: 'REST APIs in Go.', codeSnippets: [ { title: 'Route', description: 'Gin route.', language: 'go', code: `r:=gin.Default(); r.GET("/", func(c){ c.String(200,"OK") })` } ] },
  { name: 'Actix', category: 'backend', difficulty: 'advanced', description: 'Powerful Rust web framework.', useCase: 'High-performance services.', codeSnippets: [ { title: 'Handler', description: 'Actix handler.', language: 'rust', code: `HttpServer::new(|| App::new().route("/", web::get().to(|| async {"OK"})))` } ] }
];

const LanguageCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const intervalsRef = useRef<Array<number | NodeJS.Timeout>>([]);

  useEffect(() => {
    // Clear intervals when category changes
    intervalsRef.current.forEach((id) => clearInterval(id as number));
    intervalsRef.current = [];

    if (category === 'frontend') {
      const local = FRONTEND_LANGUAGES_LOCAL.map((l, idx) => ({ ...l, _id: `${idx}` }));
      setLanguages(local);
      setLoading(false);
      return;
    }

    if (category === 'backend') {
      const local = BACKEND_LANGUAGES_LOCAL.map((l, idx) => ({ ...l, _id: `${idx}` }));
      setLanguages(local);
      setLoading(false);
      return;
    }

    if (category) {
      fetchLanguages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    return () => {
      intervalsRef.current.forEach((id) => clearInterval(id as number));
    };
  }, []);

  const fetchLanguages = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/languages/category/${category}`);
      let data: Language[] = [];
      if (response.ok) {
        data = await response.json();
      }
      if (category === 'frontend') {
        const hasHTML = (data || []).some(l => l.name?.toLowerCase() === 'html');
        if (!hasHTML) {
          data = [
            ...data,
            FRONTEND_LANGUAGES_LOCAL.find(l => l.name === 'HTML') as Language
          ].filter(Boolean) as Language[];
        }
      }
      setLanguages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Frontend Languages & Frameworks';
      case 'backend':
        return 'Backend Languages & Frameworks';
      case 'database':
        return 'Database Technologies';
      case 'other':
        return 'Other Technologies';
      default:
        return 'Languages';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return '🎨';
      case 'backend':
        return '⚙️';
      case 'database':
        return '🗄️';
      case 'other':
        return '🛠️';
      default:
        return '💻';
    }
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

  if (loading) {
    return (
      <div className="language-category-page">
        <div className="container">
          <div className="loading-container">
            <div className="loading"></div>
            <p>Loading languages...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="language-category-page">
        <div className="container">
          <div className="error-container">
            <h2>Error</h2>
            <p>{error}</p>
            <Link to="/languages" className="btn btn-primary">
              Back to Languages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="language-category-page">
      <div className="container">
        <motion.div
          className="category-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="category-title">
            <div className="category-icon">{getCategoryIcon(category || '')}</div>
            <div>
              <h1>{getCategoryTitle(category || '')}</h1>
              <p>Explore programming languages and frameworks in this category. Each card shows an auto-typing code preview. Click any language to see full details.</p>
            </div>
          </div>
        </motion.div>

        <div className="languages-grid">
          {languages.map((language, index) => (
            <motion.div
              key={(language._id ?? language.name) + index}
              className="language-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="language-header">
                <h3>{language.name}</h3>
                <span 
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(language.difficulty) }}
                >
                  {language.difficulty}
                </span>
              </div>
              
              <p className="language-description">{language.description}</p>
              
              <div className="language-use-case">
                <h4>Use Case:</h4>
                <p>{language.useCase}</p>
              </div>

              <Link to={buildLanguageUrl(language.name)} className="btn btn-primary">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="category-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Ready to Learn?</h2>
          <p>Each language includes interactive code examples and detailed explanations to help you understand the concepts better.</p>
          <Link to="/languages" className="btn btn-secondary">
            Back to Categories
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LanguageCategory;