import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Тарифы', path: '/tariffs' },
    { name: 'Как мы работаем', path: '/how-it-works' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
            СВОЯ <span className={isScrolled ? 'text-brand-500' : 'text-brand-200'}>ДИСПЕТЧЕРСКАЯ</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                location.pathname === link.path 
                  ? (isScrolled ? 'text-brand-600' : 'text-white') 
                  : (isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contacts">
            <Button variant={isScrolled ? 'primary' : 'secondary'} className="py-2 px-4 text-sm">
              Обсудить проект
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden z-50 p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-24 px-6`}>
          <nav className="flex flex-col gap-6 text-lg font-medium text-slate-800">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="border-b border-slate-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacts" className="mt-4">
              <Button className="w-full justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;