# Tech Roadmap App

A full-stack responsive website built with React.js (frontend) and Node.js with Express.js (backend), using MongoDB Atlas as the database. The application provides structured learning paths for various technology domains with interactive code examples.

## Features

### ✅ Home Page (Black & White Theme)
- Hero section with coding-related animated background
- Heading: "Your Clear Path into Tech Begins Here"
- Two buttons: "Get Started" and "Sign Up"
- Navbar with links: Home, Roadmaps, Languages & Frameworks, Contact, and Login

### ✅ Authentication (Functional Signup/Login)
- Toggle between "Sign Up" and "Login" forms
- Inputs: Name, Email, Password
- JWT-based authentication
- User data stored in MongoDB

### ✅ Choose Your Tech Path Section
- Four cards: Full Stack Web Development, App Development, Data Science, AI/ML
- Each card has title, description, icon, and "Explore" button
- Redirects to detailed roadmap pages with step-by-step learning paths

### ✅ Languages & Frameworks Section
- Cards for Frontend, Backend, Database, and Other languages
- Interactive code snippets with auto-typing effect
- Syntax highlighting for different programming languages
- Detailed information about each technology

### ✅ Flowing Logos Section
- Animated horizontal scrolling of tech logos
- Infinite scroll animation

### ✅ Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Modern black and white theme with smooth animations

## Tech Stack

### Frontend
- **React.js** with TypeScript
- **React Router** for navigation
- **Framer Motion** for animations
- **React Syntax Highlighter** for code display
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Database
- **MongoDB Atlas** (cloud database)

## Project Structure

```
tech-roadmap-app/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Utility functions
│   └── public/
├── backend/                 # Node.js backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── controllers/        # Route controllers
│   └── config/            # Configuration files
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### 1. Clone the Repository
```bash
git clone <repository-url>
cd tech-roadmap-app
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit the `.env` file with your MongoDB Atlas connection string:
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install
```

### 4. Database Setup
```bash
cd ../backend

# Seed the database with sample data
npm run seed
```

### 5. Start the Application

#### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```

#### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Roadmaps
- `GET /api/roadmaps` - Get all roadmaps
- `GET /api/roadmaps/:id` - Get roadmap by ID
- `GET /api/roadmaps/category/:category` - Get roadmap by category

### Languages
- `GET /api/languages` - Get all languages
- `GET /api/languages/:id` - Get language by ID
- `GET /api/languages/category/:category` - Get languages by category

## Features in Detail

### Interactive Code Examples
- Auto-typing effect for code snippets
- Syntax highlighting for multiple languages
- Tabbed interface for multiple examples
- Real-time code preview

### Responsive Design
- Mobile-first approach
- Smooth animations and transitions
- Optimized for all screen sizes

### Authentication System
- Secure JWT-based authentication
- Password hashing with bcrypt
- Protected routes and API endpoints

### Database Schema
- User model with authentication fields
- Roadmap model with steps and resources
- Language model with code snippets

## Available Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run seed     # Seed database with sample data
```

### Frontend
```bash
npm start        # Start development server
npm build        # Build for production
npm test         # Run tests
```

## Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to platforms like Heroku, Railway, or Vercel
3. Configure MongoDB Atlas connection

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `build` folder to platforms like Netlify, Vercel, or GitHub Pages
3. Update API endpoints to point to your deployed backend

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository or contact the development team. 