import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Спасибо за заявку!</h3>
        <p className="text-green-700">Мы свяжемся с вами в ближайшее рабочее время для обсуждения деталей.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Обсудить сотрудничество</h3>
      <p className="text-slate-600 mb-6">Оставьте номер, мы перезвоним и расскажем, как разгрузить вашу компанию.</p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Ваше имя</label>
          <input 
            type="text" 
            id="name"
            required 
            placeholder="Иван Петров"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
          <input 
            type="tel" 
            id="phone"
            required 
            placeholder="+7 (999) 000-00-00"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Название компании</label>
          <input 
            type="text" 
            id="company"
            placeholder="ООО Домофон-Сервис"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          />
        </div>

        <Button type="submit" className="w-full mt-2">
          Отправить заявку
        </Button>
        
        <p className="text-xs text-slate-400 text-center mt-4">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;