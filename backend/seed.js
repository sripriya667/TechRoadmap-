const mongoose = require('mongoose');
const Roadmap = require('./models/Roadmap');
const Language = require('./models/Language');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tech-roadmap';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

const roadmaps = [
  {
    title: 'Full Stack Web Development',
    description: 'Learn to build complete web applications from frontend to backend',
    category: 'fullstack',
    difficulty: 'beginner',
    estimatedTime: '6-12 months',
    steps: [
      {
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the basics of web markup and styling',
        order: 1,
        resources: [
          { title: 'MDN HTML Tutorial', url: '#', type: 'article' },
          { title: 'CSS Grid Layout', url: '#', type: 'video' }
        ]
      },
      {
        title: 'JavaScript Programming',
        description: 'Master JavaScript fundamentals and ES6+ features',
        order: 2,
        resources: [
          { title: 'JavaScript.info', url: '#', type: 'article' },
          { title: 'ES6 Tutorial', url: '#', type: 'video' }
        ]
      },
      {
        title: 'React.js Framework',
        description: 'Build interactive user interfaces with React',
        order: 3,
        resources: [
          { title: 'React Official Docs', url: '#', type: 'article' },
          { title: 'React Hooks Tutorial', url: '#', type: 'video' }
        ]
      },
      {
        title: 'Node.js Backend',
        description: 'Create server-side applications with Node.js',
        order: 4,
        resources: [
          { title: 'Node.js Guide', url: '#', type: 'article' },
          { title: 'Express.js Tutorial', url: '#', type: 'video' }
        ]
      },
      {
        title: 'Database Management',
        description: 'Learn MongoDB and database design principles',
        order: 5,
        resources: [
          { title: 'MongoDB University', url: '#', type: 'course' },
          { title: 'Database Design', url: '#', type: 'article' }
        ]
      }
    ]
  },
  {
    title: 'App Development',
    description: 'Create mobile applications for iOS and Android',
    category: 'app',
    difficulty: 'intermediate',
    estimatedTime: '4-8 months',
    steps: [
      {
        title: 'React Native Basics',
        description: 'Learn cross-platform mobile development',
        order: 1,
        resources: [
          { title: 'React Native Docs', url: '#', type: 'article' },
          { title: 'Mobile App Tutorial', url: '#', type: 'video' }
        ]
      },
      {
        title: 'State Management',
        description: 'Manage app state with Redux or Context API',
        order: 2,
        resources: [
          { title: 'Redux Tutorial', url: '#', type: 'video' },
          { title: 'Context API Guide', url: '#', type: 'article' }
        ]
      },
      {
        title: 'Native Features',
        description: 'Integrate camera, GPS, and other native features',
        order: 3,
        resources: [
          { title: 'React Native Modules', url: '#', type: 'article' },
          { title: 'Native Integration', url: '#', type: 'video' }
        ]
      }
    ]
  },
  {
    title: 'Data Science',
    description: 'Analyze data and build machine learning models',
    category: 'datascience',
    difficulty: 'advanced',
    estimatedTime: '8-12 months',
    steps: [
      {
        title: 'Python Programming',
        description: 'Master Python for data analysis',
        order: 1,
        resources: [
          { title: 'Python for Data Science', url: '#', type: 'course' },
          { title: 'Pandas Tutorial', url: '#', type: 'video' }
        ]
      },
      {
        title: 'Statistics & Mathematics',
        description: 'Learn statistical concepts and linear algebra',
        order: 2,
        resources: [
          { title: 'Statistics Course', url: '#', type: 'course' },
          { title: 'Linear Algebra', url: '#', type: 'video' }
        ]
      },
      {
        title: 'Machine Learning',
        description: 'Build and train ML models',
        order: 3,
        resources: [
          { title: 'Scikit-learn Tutorial', url: '#', type: 'video' },
          { title: 'ML Algorithms', url: '#', type: 'article' }
        ]
      }
    ]
  },
  {
    title: 'AI/ML Engineering',
    description: 'Build advanced AI systems and neural networks',
    category: 'aiml',
    difficulty: 'advanced',
    estimatedTime: '12-18 months',
    steps: [
      {
        title: 'Deep Learning Fundamentals',
        description: 'Understand neural networks and backpropagation',
        order: 1,
        resources: [
          { title: 'Neural Networks Course', url: '#', type: 'course' },
          { title: 'Backpropagation', url: '#', type: 'video' }
        ]
      },
      {
        title: 'TensorFlow/PyTorch',
        description: 'Learn popular deep learning frameworks',
        order: 2,
        resources: [
          { title: 'TensorFlow Tutorial', url: '#', type: 'video' },
          { title: 'PyTorch Guide', url: '#', type: 'article' }
        ]
      },
      {
        title: 'Computer Vision',
        description: 'Build image recognition and processing systems',
        order: 3,
        resources: [
          { title: 'OpenCV Tutorial', url: '#', type: 'video' },
          { title: 'CNN Architecture', url: '#', type: 'article' }
        ]
      }
    ]
  }
];

const languages = [
  {
    name: 'HTML',
    category: 'frontend',
    description: 'HyperText Markup Language for structuring web content',
    useCase: 'Creating the structure and content of web pages',
    difficulty: 'beginner',
    codeSnippets: [
      {
        title: 'Basic HTML Structure',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Site</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the main content area.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`,
        description: 'Complete HTML document structure with semantic elements',
        language: 'html'
      },
      {
        title: 'HTML Forms',
        code: `<form action="/submit" method="POST">
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
    </div>
    <button type="submit">Submit</button>
</form>`,
        description: 'HTML form with various input types and validation',
        language: 'html'
      }
    ]
  },
  {
    name: 'CSS',
    category: 'frontend',
    description: 'Cascading Style Sheets for styling and layout',
    useCase: 'Styling web pages and creating responsive layouts',
    difficulty: 'beginner',
    codeSnippets: [
      {
        title: 'CSS Flexbox Layout',
        code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 400px;
    width: 100%;
}

.card h2 {
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
}

.card p {
    color: #666;
    line-height: 1.6;
}`,
        description: 'Modern CSS with flexbox, gradients, and card design',
        language: 'css'
      },
      {
        title: 'CSS Grid Layout',
        code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.grid-item {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}`,
        description: 'Responsive CSS Grid with hover effects',
        language: 'css'
      }
    ]
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    description: 'Programming language for web interactivity and dynamic content',
    useCase: 'Adding interactivity, handling events, and manipulating DOM',
    difficulty: 'intermediate',
    codeSnippets: [
      {
        title: 'Modern JavaScript (ES6+)',
        code: `// Arrow functions and destructuring
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

// Filter and map with arrow functions
const youngUsers = users
    .filter(user => user.age < 30)
    .map(({ name, age }) => ({ name, age }));

console.log(youngUsers);

// Async/await for API calls
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Template literals
const createUserCard = (user) => \`
    <div class="user-card">
        <h3>\${user.name}</h3>
        <p>Age: \${user.age}</p>
        <button onclick="editUser(\${user.id})">Edit</button>
    </div>
\`;`,
        description: 'Modern JavaScript features including arrow functions, destructuring, and async/await',
        language: 'javascript'
      },
      {
        title: 'DOM Manipulation',
        code: `// Modern DOM manipulation
class TodoApp {
    constructor() {
        this.todos = [];
        this.todoInput = document.getElementById('todo-input');
        this.todoList = document.getElementById('todo-list');
        this.init();
    }

    init() {
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        if (!text) return;

        const todo = {
            id: Date.now(),
            text,
            completed: false
        };

        this.todos.push(todo);
        this.renderTodos();
        this.todoInput.value = '';
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.renderTodos();
        }
    }

    renderTodos() {
        this.todoList.innerHTML = this.todos
            .map(todo => \`
                <li class="\${todo.completed ? 'completed' : ''}" 
                    onclick="todoApp.toggleTodo(\${todo.id})">
                    \${todo.text}
                </li>
            \`)
            .join('');
    }
}

const todoApp = new TodoApp();`,
        description: 'Class-based DOM manipulation with event handling',
        language: 'javascript'
      }
    ]
  },
  {
    name: 'React',
    category: 'frontend',
    description: 'JavaScript library for building user interfaces',
    useCase: 'Creating interactive web applications with component-based architecture',
    difficulty: 'intermediate',
    codeSnippets: [
      {
        title: 'React Hooks Component',
        code: `import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(\`/api/users/\${userId}\`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <button onClick={() => setUser({...user, role: 'Admin'})}>
                Make Admin
            </button>
        </div>
    );
};

export default UserProfile;`,
        description: 'React functional component with hooks for state management and side effects',
        language: 'jsx'
      },
      {
        title: 'Custom React Hook',
        code: `import { useState, useEffect } from 'react';

// Custom hook for API calls
const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

// Usage in component
const PostsList = () => {
    const { data: posts, loading, error } = useApi('/api/posts');

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="posts-list">
            {posts?.map(post => (
                <article key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="author">By {post.author}</span>
                </article>
            ))}
        </div>
    );
};`,
        description: 'Custom React hook for reusable API logic',
        language: 'jsx'
      }
    ]
  },
  {
    name: 'Node.js',
    category: 'backend',
    description: 'JavaScript runtime for server-side development',
    useCase: 'Building scalable backend APIs and server applications',
    difficulty: 'intermediate',
    codeSnippets: [
      {
        title: 'Express.js Server',
        code: `const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new User({ name, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`,
        description: 'Complete Express.js server with MongoDB integration',
        language: 'javascript'
      },
      {
        title: 'Async/Await with Error Handling',
        code: `const express = require('express');
const router = express.Router();

// Middleware for async error handling
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// User controller with async/await
const userController = {
    // Get all users
    getAllUsers: asyncHandler(async (req, res) => {
        const users = await User.find()
            .select('-password')
            .sort({ createdAt: -1 });
        
        res.json({
            success: true,
            count: users.length,
            data: users
        });
    }),

    // Get user by ID
    getUserById: asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id)
            .select('-password');
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        
        res.json({
            success: true,
            data: user
        });
    }),

    // Create new user
    createUser: asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
        
        const user = await User.create({
            name,
            email,
            password
        });
        
        res.status(201).json({
            success: true,
            data: user
        });
    })
};

// Routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;`,
        description: 'Node.js controller with proper async/await and error handling',
        language: 'javascript'
      }
    ]
  },
  {
    name: 'MongoDB',
    category: 'database',
    description: 'NoSQL document database for scalable applications',
    useCase: 'Storing and querying document-based data with high performance',
    difficulty: 'intermediate',
    codeSnippets: [
      {
        title: 'MongoDB Aggregation Pipeline',
        code: `// MongoDB aggregation for analytics
const analyticsPipeline = [
    {
        $match: {
            createdAt: {
                $gte: new Date('2024-01-01'),
                $lte: new Date('2024-12-31')
            }
        }
    },
    {
        $group: {
            _id: {
                year: { $year: '$createdAt' },
                month: { $month: '$createdAt' },
                category: '$category'
            },
            totalSales: { $sum: '$amount' },
            orderCount: { $sum: 1 },
            avgOrderValue: { $avg: '$amount' }
        }
    },
    {
        $sort: {
            '_id.year': 1,
            '_id.month': 1
        }
    },
    {
        $group: {
            _id: '$_id.category',
            monthlyData: {
                $push: {
                    month: '$_id.month',
                    totalSales: '$totalSales',
                    orderCount: '$orderCount',
                    avgOrderValue: '$avgOrderValue'
                }
            },
            totalRevenue: { $sum: '$totalSales' }
        }
    }
];

// Execute aggregation
const results = await Order.aggregate(analyticsPipeline);
console.log('Analytics Results:', results);`,
        description: 'Complex MongoDB aggregation pipeline for business analytics',
        language: 'javascript'
      },
      {
        title: 'MongoDB Schema with Indexes',
        code: `const mongoose = require('mongoose');

// Product schema with validation and indexes
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['electronics', 'clothing', 'books', 'home']
    },
    tags: [{
        type: String,
        trim: true
    }],
    inStock: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            maxlength: 500
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes for better query performance
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, price: 1 });
productSchema.index({ 'reviews.rating': -1 });
productSchema.index({ createdAt: -1 });

// Virtual for average rating
productSchema.virtual('averageRating').get(function() {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / this.reviews.length).toFixed(1);
});

// Instance method
productSchema.methods.addReview = function(userId, rating, comment) {
    this.reviews.push({ user: userId, rating, comment });
    return this.save();
};

// Static method
productSchema.statics.findByCategory = function(category) {
    return this.find({ category, inStock: true })
        .sort({ price: 1 });
};

const Product = mongoose.model('Product', productSchema);
module.exports = Product;`,
        description: 'Comprehensive MongoDB schema with validation, indexes, and methods',
        language: 'javascript'
      }
    ]
  }
];

async function seedDatabase() {
  try {
    // Clear existing data
    await Roadmap.deleteMany({});
    await Language.deleteMany({});

    // Insert roadmaps
    await Roadmap.insertMany(roadmaps);
    console.log('Roadmaps seeded successfully');

    // Insert languages
    await Language.insertMany(languages);
    console.log('Languages seeded successfully');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 