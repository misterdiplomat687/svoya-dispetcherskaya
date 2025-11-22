import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tariffs from './pages/Tariffs';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contacts from './pages/Contacts';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.slice(1);
      if (!hash) hash = '/';
      setPath(hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    if (!window.location.hash) {
        setPath('/');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  let Component = Home;
  const cleanPath = path.split('?')[0];

  if (cleanPath === '/') Component = Home;
  else if (cleanPath === '/tariffs') Component = Tariffs;
  else if (cleanPath === '/how-it-works') Component = HowItWorks;
  else if (cleanPath === '/about') Component = About;
  else if (cleanPath === '/contacts') Component = Contacts;
  else Component = Home;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component />
      </main>
      <Footer />
    </div>
  );
};

export default App;