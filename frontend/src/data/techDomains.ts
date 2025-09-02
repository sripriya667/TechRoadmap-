export interface TechDomain {
  id: string;
  title: string;
  description: string;
  icon: string;
  overview: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  languages: Array<{
    name: string;
    icon: string;
    description: string;
    codeSnippet: string;
  }>;
  frameworks: Array<{
    name: string;
    icon: string;
    description: string;
    codeSnippet: string;
  }>;
  roadmapSteps: Array<{
    title: string;
    description: string;
    order: number;
    resources: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  color: string;
}

export const techDomains: TechDomain[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    description: 'Master both frontend and backend development to build complete web applications',
    icon: '🌐',
    overview: 'Full Stack Web Development is the art of building complete web applications that handle both client-side and server-side operations. You\'ll learn to create responsive user interfaces, robust backend APIs, and manage databases to deliver seamless user experiences.',
    difficulty: 'intermediate',
    estimatedTime: '6-12 months',
    color: '#4f46e5',
    languages: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Structure and semantic markup for web pages', codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Styling and layout for the web', codeSnippet: 'body {\n  font-family: system-ui;\n  line-height: 1.6;\n}' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Dynamic programming for web interactivity', codeSnippet: 'const greeting = "Hello World";\nconsole.log(greeting);' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Typed superset of JavaScript', codeSnippet: 'function add(a: number, b: number) {\n  return a + b;\n}' }
    ],
    frameworks: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Frontend library for building user interfaces', codeSnippet: 'import React, { useState } from "react";\nfunction App() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n  );\n}' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', description: 'TypeScript-based application framework', codeSnippet: '@Component({ selector: "app-hello", template: "<h1>Hello</h1>" })\nexport class HelloComponent {}' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', description: 'Progressive framework for building UIs', codeSnippet: 'export default { data() { return { count: 0 }; } }' },
      { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', description: 'Compiler that generates minimal JS for UIs', codeSnippet: '<script> let count = 0; </script>\n<button on:click={() => count++}>Count: {count}</button>' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Server-side JavaScript runtime', codeSnippet: 'const express = require("express");\nconst app = express();\napp.get("/", (_, res) => res.json({ message: "Hello World" }));\napp.listen(3000);' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'Web framework for Node.js', codeSnippet: 'const express = require("express");\nconst app = express();\napp.get("/", (_, res) => res.send("OK"));' }
    ],
    roadmapSteps: [
      {
        title: 'Learn HTML & CSS Fundamentals',
        description: 'Master the basics of web structure and styling',
        order: 1,
        resources: ['MDN Web Docs', 'CSS-Tricks', 'Flexbox Froggy']
      },
      {
        title: 'Master JavaScript ES6+',
        description: 'Learn modern JavaScript with async/await and modules',
        order: 2,
        resources: ['Eloquent JavaScript', 'You Don\'t Know JS', 'JavaScript.info']
      },
      {
        title: 'Build Frontend with React',
        description: 'Create interactive user interfaces with React hooks',
        order: 3,
        resources: ['React Documentation', 'React Tutorial', 'React Patterns']
      },
      {
        title: 'Learn Node.js & Express',
        description: 'Build RESTful APIs and server-side logic',
        order: 4,
        resources: ['Node.js Documentation', 'Express Guide', 'REST API Tutorial']
      },
      {
        title: 'Database Integration',
        description: 'Connect your app with MongoDB or PostgreSQL',
        order: 5,
        resources: ['MongoDB University', 'Mongoose Documentation', 'SQL Tutorial']
      },
      {
        title: 'Deployment & DevOps',
        description: 'Deploy your full-stack application to production',
        order: 6,
        resources: ['Heroku Documentation', 'Vercel Guide', 'Docker Tutorial']
      }
    ],
    faqs: [
      {
        question: 'How long does it take to become a full-stack developer?',
        answer: 'Typically 6-12 months with consistent practice, depending on your prior experience and learning pace.'
      },
      {
        question: 'Should I learn frontend or backend first?',
        answer: 'Start with frontend (HTML, CSS, JavaScript) to understand user interfaces, then move to backend development.'
      },
      {
        question: 'Which database should I learn first?',
        answer: 'Start with MongoDB for its simplicity, then learn SQL databases like PostgreSQL for more complex applications.'
      }
    ]
  },
  {
    id: 'aiml',
    title: 'AI/ML Engineering',
    description: 'Build intelligent systems and machine learning models',
    icon: '🤖',
    overview: 'AI/ML Engineering combines mathematics, statistics, and programming to create intelligent systems that can learn from data and make predictions. You\'ll learn to build machine learning models, neural networks, and AI applications that solve real-world problems.',
    difficulty: 'advanced',
    estimatedTime: '12-18 months',
    color: '#8b5cf6',
    languages: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Primary language for AI/ML development',
        codeSnippet: 'import numpy as np\nimport pandas as pd\n\n# Load data\ndata = pd.read_csv("dataset.csv")\nprint(data.head())'
      }
    ],
    frameworks: [
      {
        name: 'TensorFlow',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        description: 'Open-source machine learning framework',
        codeSnippet: 'import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n  tf.keras.layers.Dense(128, activation="relu"),\n  tf.keras.layers.Dense(10, activation="softmax")\n])\n\nmodel.compile(optimizer="adam",\n              loss="sparse_categorical_crossentropy",\n              metrics=["accuracy"])'
      }
    ],
    roadmapSteps: [
      {
        title: 'Mathematics & Statistics Foundation',
        description: 'Master linear algebra, calculus, and probability',
        order: 1,
        resources: ['Khan Academy', 'MIT OpenCourseWare', '3Blue1Brown']
      },
      {
        title: 'Python Programming',
        description: 'Learn Python with focus on data manipulation',
        order: 2,
        resources: ['Python Documentation', 'Pandas Tutorial', 'NumPy Guide']
      },
      {
        title: 'Machine Learning Fundamentals',
        description: 'Learn supervised and unsupervised learning algorithms',
        order: 3,
        resources: ['Coursera ML Course', 'Scikit-learn Tutorial', 'Andrew Ng\'s Course']
      },
      {
        title: 'Deep Learning & Neural Networks',
        description: 'Build neural networks with TensorFlow or PyTorch',
        order: 4,
        resources: ['Deep Learning Book', 'Fast.ai Course', 'PyTorch Tutorial']
      }
    ],
    faqs: [
      {
        question: 'Do I need a strong math background for AI/ML?',
        answer: 'Yes, a solid foundation in linear algebra, calculus, and statistics is essential for understanding ML algorithms.'
      },
      {
        question: 'Which framework should I learn first: TensorFlow or PyTorch?',
        answer: 'Start with PyTorch for its intuitive syntax, then learn TensorFlow for production deployment.'
      }
    ]
  },
  {
    id: 'app',
    title: 'App Development',
    description: 'Create mobile applications for iOS and Android',
    icon: '📱',
    overview: 'App Development focuses on creating mobile applications that run on smartphones and tablets. You\'ll learn to build native apps for iOS and Android, or cross-platform apps that work on both platforms, using modern frameworks and development tools.',
    difficulty: 'intermediate',
    estimatedTime: '8-12 months',
    color: '#06b6d4',
    languages: [
      {
        name: 'Swift',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
        description: 'Programming language for iOS development',
        codeSnippet: 'import UIKit\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var label: UILabel!\n    \n    override func viewDidLoad() {\n        super.viewDidLoad()\n        label.text = "Hello, iOS!"\n    }\n}'
      },
      {
        name: 'Kotlin',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        description: 'Modern language for Android development',
        codeSnippet: 'class MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        \n        findViewById<TextView>(R.id.textView).text = "Hello, Android!"\n    }\n}'
      }
    ],
    frameworks: [
      {
        name: 'React Native',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: 'Cross-platform mobile development',
        codeSnippet: 'import React, { useState } from "react";\nimport { View, Text, TouchableOpacity } from "react-native";\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <View>\n      <Text>Count: {count}</Text>\n      <TouchableOpacity onPress={() => setCount(count + 1)}>\n        <Text>Increment</Text>\n      </TouchableOpacity>\n    </View>\n  );\n};'
      },
      {
        name: 'Flutter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        description: 'Google\'s UI toolkit for mobile apps',
        codeSnippet: 'import "package:flutter/material.dart";\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: Text("Flutter App")),\n        body: Center(child: Text("Hello, Flutter!")),\n      ),\n    );\n  }\n}'
      }
    ],
    roadmapSteps: [
      {
        title: 'Learn Mobile Development Basics',
        description: 'Understand mobile platforms and development concepts',
        order: 1,
        resources: ['Apple Developer Docs', 'Android Developer Guide', 'Mobile Design Principles']
      },
      {
        title: 'Choose Your Platform',
        description: 'Decide between native (iOS/Android) or cross-platform',
        order: 2,
        resources: ['iOS vs Android Guide', 'Cross-platform Comparison', 'Platform Decision Matrix']
      },
      {
        title: 'Learn Platform-Specific Languages',
        description: 'Master Swift for iOS or Kotlin for Android',
        order: 3,
        resources: ['Swift Documentation', 'Kotlin Tutorial', 'Android Studio Guide']
      },
      {
        title: 'Cross-Platform Development',
        description: 'Build apps with React Native or Flutter',
        order: 4,
        resources: ['React Native Documentation', 'Flutter Tutorial', 'Cross-platform Testing']
      },
      {
        title: 'App Store Deployment',
        description: 'Publish your app to App Store and Google Play',
        order: 5,
        resources: ['App Store Guidelines', 'Google Play Console', 'App Store Optimization']
      }
    ],
    faqs: [
      {
        question: 'Should I learn native or cross-platform development?',
        answer: 'Start with cross-platform (React Native/Flutter) for faster development, then learn native for platform-specific features.'
      },
      {
        question: 'Which platform should I target first: iOS or Android?',
        answer: 'Consider your target audience - iOS users spend more, but Android has larger market share globally.'
      }
    ]
  },
  {
    id: 'datascience',
    title: 'Data Science',
    description: 'Analyze data and extract meaningful insights',
    icon: '📊',
    overview: 'Data Science combines statistics, programming, and domain expertise to extract insights from data. You\'ll learn to collect, clean, analyze, and visualize data to solve complex business problems and make data-driven decisions.',
    difficulty: 'intermediate',
    estimatedTime: '8-12 months',
    color: '#10b981',
    languages: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Primary language for data science',
        codeSnippet: 'import pandas as pd\nimport numpy as np\n\n# Load and explore data\ndf = pd.read_csv("data.csv")\nprint(df.info())\nprint(df.describe())'
      },
      {
        name: 'R',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
        description: 'Statistical computing and analysis',
        codeSnippet: 'library(tidyverse)\n\n# Load data\ndata <- read_csv("data.csv")\nsummary(data)\n\n# Create visualization\nggplot(data, aes(x = variable)) +\n  geom_histogram()'
      }
    ],
    frameworks: [
      {
        name: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        description: 'Data manipulation and analysis',
        codeSnippet: 'import pandas as pd\n\n# Data manipulation\ndf = pd.read_csv("data.csv")\ndf_clean = df.dropna()\ndf_grouped = df.groupby("category").agg({\n    "value": ["mean", "std", "count"]\n})'
      },
      {
        name: 'Scikit-learn',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg',
        description: 'Machine learning algorithms',
        codeSnippet: 'from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y)\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)'
      }
    ],
    roadmapSteps: [
      {
        title: 'Statistics & Mathematics',
        description: 'Learn probability, statistics, and linear algebra',
        order: 1,
        resources: ['Statistics Course', 'Khan Academy Math', 'Linear Algebra Course']
      },
      {
        title: 'Python Programming',
        description: 'Master Python for data manipulation',
        order: 2,
        resources: ['Python for Data Science', 'Pandas Tutorial', 'NumPy Guide']
      },
      {
        title: 'Data Wrangling & Cleaning',
        description: 'Clean and prepare data for analysis',
        order: 3,
        resources: ['Data Cleaning Guide', 'Pandas Documentation', 'Data Quality Assessment']
      },
      {
        title: 'Exploratory Data Analysis',
        description: 'Explore and visualize data patterns',
        order: 4,
        resources: ['EDA Best Practices', 'Matplotlib Tutorial', 'Seaborn Guide']
      },
      {
        title: 'Machine Learning Basics',
        description: 'Apply ML algorithms to solve problems',
        order: 5,
        resources: ['Scikit-learn Tutorial', 'ML Course', 'Kaggle Competitions']
      }
    ],
    faqs: [
      {
        question: 'What\'s the difference between data science and data analysis?',
        answer: 'Data analysis focuses on descriptive insights, while data science includes predictive modeling and machine learning.'
      },
      {
        question: 'Do I need a PhD to become a data scientist?',
        answer: 'No, but strong mathematical and statistical skills are essential. Many data scientists have master\'s degrees or relevant experience.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems and networks from digital threats',
    icon: '🔒',
    overview: 'Cybersecurity focuses on protecting computer systems, networks, and data from digital attacks, damage, or unauthorized access. You\'ll learn about network security, ethical hacking, cryptography, and security best practices to defend against cyber threats.',
    difficulty: 'advanced',
    estimatedTime: '12-18 months',
    color: '#ef4444',
    languages: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Scripting and security tools development',
        codeSnippet: 'import socket\nimport subprocess\n\n# Network scanning\ndef scan_port(host, port):\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    result = sock.connect_ex((host, port))\n    sock.close()\n    return result == 0'
      },
      {
        name: 'Bash',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
        description: 'Command line security tools',
        codeSnippet: '#!/bin/bash\n\n# Network scan\nfor ip in {1..254}; do\n    ping -c 1 192.168.1.$ip | grep "64 bytes" &\ndone\nwait'
      }
    ],
    frameworks: [
      {
        name: 'Metasploit',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
        description: 'Penetration testing framework',
        codeSnippet: 'use exploit/multi/handler\nset PAYLOAD windows/meterpreter/reverse_tcp\nset LHOST 192.168.1.100\nset LPORT 4444\nexploit'
      },
      {
        name: 'Nmap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nmap/nmap-original.svg',
        description: 'Network discovery and security auditing',
        codeSnippet: '# Basic network scan\nnmap -sS -sV -O 192.168.1.0/24\n\n# Service enumeration\nnmap -sV -p 1-65535 target.com'
      }
    ],
    roadmapSteps: [
      {
        title: 'Networking Fundamentals',
        description: 'Understand TCP/IP, routing, and network protocols',
        order: 1,
        resources: ['Network+ Certification', 'TCP/IP Guide', 'Wireshark Tutorial']
      },
      {
        title: 'Operating System Security',
        description: 'Learn Windows and Linux security concepts',
        order: 2,
        resources: ['Windows Security', 'Linux Security', 'OS Hardening Guide']
      },
      {
        title: 'Cryptography & Encryption',
        description: 'Master encryption algorithms and protocols',
        order: 3,
        resources: ['Cryptography Course', 'SSL/TLS Guide', 'Hash Functions']
      },
      {
        title: 'Web Application Security',
        description: 'Identify and exploit web vulnerabilities',
        order: 4,
        resources: ['OWASP Top 10', 'Web Security Testing', 'Burp Suite Tutorial']
      },
      {
        title: 'Penetration Testing',
        description: 'Learn ethical hacking and vulnerability assessment',
        order: 5,
        resources: ['Penetration Testing Guide', 'Metasploit Tutorial', 'Kali Linux']
      }
    ],
    faqs: [
      {
        question: 'Is cybersecurity only about hacking?',
        answer: 'No, cybersecurity includes defense, incident response, risk management, and compliance, not just offensive security.'
      },
      {
        question: 'Do I need certifications to work in cybersecurity?',
        answer: 'Certifications like CompTIA Security+, CEH, or CISSP are valuable but not always required. Experience and skills matter more.'
      }
    ]
  }
]; 