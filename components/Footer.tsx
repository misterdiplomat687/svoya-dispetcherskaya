import React from 'react';

const Footer: React.FC = () => {
  const navigate = (path: string) => {
    window.location.hash = `#${path}`;
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-xl text-white mb-4">
              СВОЯ ДИСПЕТЧЕРСКАЯ
            </div>
            <p className="text-sm mb-4">
              Удаленный сервис приема заявок для сервисных компаний по всей России.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Меню</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <button type="button" onClick={() => navigate('/')} className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer">Главная</button>
              <button type="button" onClick={() => navigate('/tariffs')} className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer">Тарифы</button>
              <button type="button" onClick={() => navigate('/how-it-works')} className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer">Как мы работаем</button>
              <button type="button" onClick={() => navigate('/about')} className="hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer">О нас</button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>+7 (926) 804-51-70</li>
              <li>info@svoya-disp.ru</li>
              <li>Ежедневно 09:00-21:00</li>
            </ul>
          </div>
          
           <div>
            <h4 className="text-white font-semibold mb-4">Документы</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Договор оферты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-xs text-center">
          &copy; {new Date().getFullYear()} СВОЯ ДИСПЕТЧЕРСКАЯ. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;