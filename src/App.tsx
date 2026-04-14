import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Home from './views/Home';
import Article from './views/Article';
import Journal from './views/Journal';
import Collections from './views/Collections';
import Categories from './views/Categories';
import Profile from './views/Profile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f9f9fb]">
        <TopNav />
        <div className="flex max-w-7xl mx-auto">
          <SideNav />
          <main className="flex-1 min-h-screen p-8 lg:p-12 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/essays" element={<Article />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/trending" element={<Collections />} />
              <Route path="/collections" element={<Categories />} />
              <Route path="/subscribers" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              {/* Fallback to home for other routes shown in UI but not implemented */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

