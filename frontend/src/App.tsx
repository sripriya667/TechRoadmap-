import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Roadmaps from './pages/Roadmaps';
import Languages from './pages/Languages';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LanguageCategory from './pages/LanguageCategory';
import LanguageDetail from './pages/LanguageDetail';
import DomainOverview from './pages/DomainOverview';
import './App.css';

const RoadmapRedirect: React.FC = () => {
  const { category } = useParams();
  return <Navigate to={`/roadmaps/${category}/overview?tab=roadmap`} replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/roadmaps/:category" element={<RoadmapRedirect />} />
            <Route path="/roadmaps/:domainId/overview" element={<DomainOverview />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/languages/:category" element={<LanguageCategory />} />
            <Route path="/languages/:category/:language" element={<LanguageDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
