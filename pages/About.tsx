import React from 'react';
import Section from '../components/Section';
import { Users, ShieldCheck, Smile } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Кто мы такие</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Мы — команда спокойных и надежных специалистов. Мы верим, что сервис — это не про «принять заявку», а про отношение.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div>
             <img 
               src="https://picsum.photos/600/400?grayscale" 
               alt="Команда диспетчерской" 
               className="rounded-2xl shadow-lg"
             />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Наша эволюционная цель</h3>
            <p className="text-slate-600 text-lg font-medium text-brand-900 border-l-4 border-brand-500 pl-4">
              Наша цель — чтобы абоненты относились к вашей компании как к «своей»: как к добрым друзьям, а не к очередной службе, где только принимают жалобы.
            </p>
            <p className="text-slate-600">
              Когда бабушка звонит нам, она должна чувствовать, что её слышат. Когда молодой человек пишет в WhatsApp, он должен получать быстрый ответ.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           <div className="bg-brand-50 p-8 rounded-2xl">
             <Smile className="w-10 h-10 text-brand-600 mb-4" />
             <h4 className="text-xl font-bold mb-2">Для абонента</h4>
             <p className="text-slate-700">Ощущение заботы и безопасности. Понимание, что помощь придет быстро.</p>
           </div>
           <div className="bg-brand-50 p-8 rounded-2xl">
             <ShieldCheck className="w-10 h-10 text-brand-600 mb-4" />
             <h4 className="text-xl font-bold mb-2">Для собственника</h4>
             <p className="text-slate-700">Порядок в бизнесе без микроменеджмента. Устойчивый доход благодаря лояльности клиентов.</p>
           </div>
           <div className="bg-brand-50 p-8 rounded-2xl">
             <Users className="w-10 h-10 text-brand-600 mb-4" />
             <h4 className="text-xl font-bold mb-2">Для команды</h4>
             <p className="text-slate-700">Адекватные условия труда, отсутствие бюрократии и работа в атмосфере уважения.</p>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default About;