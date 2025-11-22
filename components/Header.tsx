import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleHashChange = () => {
      const path = window.location.hash.slice(1) || '/';
      setCurrentPath(path);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Тарифы', path: '/tariffs' },
    { name: 'Как мы работаем', path: '/how-it-works' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const handleNavigation = (path: string) => {
    window.location.hash = `#${path}`;
    setIsMobileMenuOpen(false);
  };

  // Logic for contrasting colors
  // Dark text/elements if:
  // 1. Mobile menu is CLOSED AND (scrolled OR inner page)
  const isDarkHeroPage = currentPath === '/' || currentPath === '/tariffs';
  const needsSolidHeader = isScrolled || !isDarkHeroPage;
  const isDarkText = needsSolidHeader && !isMobileMenuOpen;

  const headerClass = isMobileMenuOpen
    ? 'bg-brand-900 py-3'
    : needsSolidHeader
      ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
      : 'bg-transparent py-5';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex justify-between items-center">
        
        {/* Logo */}
        <button 
          type="button"
          onClick={() => handleNavigation('/')} 
          className="flex items-center gap-2 z-50 relative bg-transparent border-none cursor-pointer text-left"
        >
          <div className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${isDarkText ? 'text-brand-900' : 'text-white'}`}>
            СВОЯ <span className={isDarkText ? 'text-brand-500' : 'text-brand-200'}>ДИСПЕТЧЕРСКАЯ</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              type="button"
              key={link.path} 
              onClick={() => handleNavigation(link.path)}
              className={`text-sm font-medium transition-colors bg-transparent border-none cursor-pointer hover:text-brand-500 ${
                currentPath === link.path 
                  ? (isDarkText ? 'text-brand-600' : 'text-white') 
                  : (isDarkText ? 'text-slate-600' : 'text-white/90 hover:text-white')
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button 
            variant={needsSolidHeader ? 'primary' : 'secondary'} 
            className="py-2 px-4 text-sm"
            onClick={() => handleNavigation('/contacts')}
          >
            Обсудить проект
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className={`md:hidden z-50 relative p-2 rounded-md transition-colors duration-300 bg-transparent border-none ${isDarkText ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-24 px-6`}>
          <nav className="flex flex-col gap-6 text-lg font-medium text-white">
            {navLinks.map((link) => (
              <button 
                type="button"
                key={link.path} 
                onClick={() => handleNavigation(link.path)}
                className="border-b border-brand-800 pb-2 hover:text-brand-200 transition-colors text-left bg-transparent"
              >
                {link.name}
              </button>
            ))}
            <Button 
              variant="secondary" 
              className="w-full justify-center mt-4"
              onClick={() => handleNavigation('/contacts')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Оставить заявку
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;