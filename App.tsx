
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, Home as HomeIcon, Info, Layers, Briefcase, Mail, ChevronUp, MapPin, Globe } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Accueil', path: '/', icon: <HomeIcon size={20} /> },
    { label: 'À Propos', path: '/about', icon: <Info size={20} /> },
    { label: 'Services', path: '/services', icon: <Layers size={20} /> },
    { label: 'Projets', path: '/projects', icon: <Briefcase size={20} /> },
    { label: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
             <div className="flex items-center gap-2">
                <div className="bg-[#E11D48] p-1 rounded">
                   <HomeIcon className="text-white" size={20} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[#0F172A] font-extrabold text-xl tracking-tighter">PLACOF</span>
                  <span className="text-slate-500 text-[10px] font-bold tracking-widest">UNIVERS DECOR</span>
                </div>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-colors hover:text-orange-500 ${
                    isActive(link.path) ? 'text-orange-600' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:+21697286007"
              className="gradient-orange text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <Phone size={16} />
              +216 97 286 007
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-600 bg-slate-50 rounded-lg border border-slate-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={toggleMenu} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
               <span className="font-black text-xl">Menu</span>
               <button onClick={toggleMenu} className="p-2 bg-slate-100 rounded-full"><X size={20}/></button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-4 p-4 rounded-2xl text-lg font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-orange-50 text-orange-600 border border-orange-100'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+21697286007"
              className="mt-auto gradient-orange text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl"
            >
              <Phone size={22} />
              +216 97 286 007
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer (Common for all pages) */}
      <footer className="bg-[#0F172A] text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-black text-orange-500 mb-6">Placof Décor</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Votre partenaire premium en décoration intérieure et extérieure pour des espaces élégants, innovants et fonctionnels qui reflètent votre personnalité unique.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 transition-all"><Facebook size={20} /></a>
                <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-pink-600 transition-all"><Instagram size={20} /></a>
                <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-black transition-all"><Globe size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">Liens Rapides</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronUp className="rotate-90 text-orange-500" size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">Nos Services</h3>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-slate-400 hover:text-white flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Décoration Intérieure</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-white flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Aménagement Extérieur</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-white flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Design Commercial</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-white flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Consultation en Décoration</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">Contactez-nous</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0"><MapPin className="text-orange-500" size={20} /></div>
                  <p className="text-slate-400">Sfax, Tunis</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0"><Phone className="text-orange-500" size={20} /></div>
                  <p className="text-slate-400">+216 97 286 007</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0"><Mail className="text-orange-500" size={20} /></div>
                  <p className="text-slate-400">placof.decor@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">© 2026 <span className="text-orange-500 font-bold">Placof Décor</span>. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
               <span className="text-slate-500 text-sm">Développé par <span className="text-white font-medium">Mohamed Ali ZID</span></span>
               <button onClick={scrollToTop} className="p-3 bg-orange-500 rounded-xl text-white shadow-lg hover:-translate-y-1 transition-transform">
                 <ChevronUp size={24} />
               </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
