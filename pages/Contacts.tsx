import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contacts: React.FC = () => {
  return (
    <div className="pt-20">
       <Section background="gray">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-slate-900 text-center mb-12">Контакты</h1>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                   <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                   <div className="space-y-6">
                     <a href="tel:+79268045170" className="flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-colors">
                       <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                         <Phone className="w-6 h-6" />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Телефон</p>
                         <p className="text-lg font-medium">+7 (926) 804-51-70</p>
                       </div>
                     </a>
                     
                     <a 
                       href="https://wa.me/79268045170?text=Здравствуйте!%20Хочу%20узнать%20условия%20подключения%20к%20«Своей%20диспетчерской»."
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-colors"
                     >
                       <div className="bg-green-100 p-3 rounded-full text-green-600">
                         <MessageCircle className="w-6 h-6" />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">WhatsApp</p>
                         <p className="text-lg font-medium">Написать сообщение</p>
                       </div>
                     </a>

                     <a href="mailto:info@svoya-disp.ru" className="flex items-center gap-4 text-slate-700 hover:text-brand-600 transition-colors">
                       <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                         <Mail className="w-6 h-6" />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Email</p>
                         <p className="text-lg font-medium">info@svoya-disp.ru</p>
                       </div>
                     </a>

                      <div className="flex items-center gap-4 text-slate-700">
                       <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                         <MapPin className="w-6 h-6" />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Формат работы</p>
                         <p className="text-lg font-medium">Удаленная диспетчерская по всей РФ</p>
                       </div>
                     </div>
                   </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Режим работы отдела продаж</h4>
                  <p className="text-blue-800">
                    Пн-Пт: 09:00 — 18:00 (МСК)<br/>
                    Оставьте заявку в любое время, мы перезвоним в рабочие часы.
                  </p>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
         </div>
       </Section>
    </div>
  );
};

export default Contacts;