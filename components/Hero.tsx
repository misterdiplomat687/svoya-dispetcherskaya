import React from 'react';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacts');
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/70000000000', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-500 blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-500 blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-brand-100 mb-4">
              Для домофонных компаний, УК и ТСЖ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Порядок в заявках и спокойствие за каждого абонента
            </h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Берём на себя общение с жильцами, оформляем заявки в Битрикс24 и контролируем работу мастеров. Ваши абоненты чувствуют заботу, а вы — развиваете бизнес.
            </p>
            
            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-brand-50">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span>100% принятых обращений</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span>Прозрачность в задачах</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span>Без «бумажных» журналов</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button onClick={scrollToContact} className="w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Оставить заявку
              </Button>
              <Button variant="whatsapp" onClick={openWhatsApp} className="w-full sm:w-auto">
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Visual representation of the service */}
          <div className="lg:w-2/5 w-full">
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg border border-white/5">
                  <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Входящий вызов • 10:42</p>
                    <p className="font-medium">«У нас не работает домофон, 3-й подъезд...»</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-8 w-0.5 bg-white/20"></div>
                </div>
                <div className="flex items-start gap-4 bg-brand-600 p-4 rounded-lg border border-white/10 shadow-lg transform scale-105">
                  <div className="bg-white p-2 rounded-full flex-shrink-0">
                    <span className="font-bold text-brand-600 text-xs">B24</span>
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">Новая задача в Битрикс24</p>
                    <p className="font-medium">Заявка №452: Ремонт оборудования</p>
                    <p className="text-xs text-brand-200 mt-1">Назначен: Мастер Алексей</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-8 w-0.5 bg-white/20"></div>
                </div>
                 <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg border border-white/5">
                  <div className="bg-accent-500 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Контроль качества</p>
                    <p className="font-medium">«Спасибо, мастер все починил!»</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-brand-200">Полная интеграция с вашими процессами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;