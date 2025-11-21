import React from 'react';
import Section from '../components/Section';
import { PhoneIncoming, ClipboardList, UserCheck, MessageSquareHeart } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const steps = [
  {
    id: 1,
    icon: PhoneIncoming,
    title: "Прием обращения",
    desc: "Абонент звонит на единый номер вашей компании или пишет в WhatsApp. Диспетчер вежливо принимает вызов, уточняет детали проблемы. Если ситуация аварийная — соединяем с мастером сразу."
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Регистрация в системе",
    desc: "Диспетчер создает заявку в нашей CRM-системе, к которой у вас есть полный доступ. Запись разговора и детали сразу появляются в карточке. Вы видите всё то же самое, что и наши операторы."
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Работа мастера",
    desc: "Ваш мастер получает уведомление на телефон через приложение. Он видит адрес, проблему, звонит абоненту и меняет статус заявки. Вы видите в системе, где находится мастер и что он делает."
  },
  {
    id: 4,
    icon: MessageSquareHeart,
    title: "Контроль качества",
    desc: "Мы видим, что мастер закрыл заявку. Диспетчер может перезвонить абоненту или отправить сообщение, чтобы убедиться, что все работает. Только тогда заявка уходит в архив."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-brand-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Как мы работаем</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Прозрачный процесс от звонка бабушки из 5-го подъезда до успешного отчета мастера.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-brand-100"></div>

            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col md:flex-row gap-8 items-start group">
                {/* Number Circle */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-100 text-brand-600 flex items-center justify-center shadow-sm group-hover:border-brand-500 group-hover:text-brand-500 transition-colors duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex-1">
                  <div className="text-sm font-bold text-brand-500 mb-2 uppercase tracking-wide">Шаг {step.id}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Вам не нужно настраивать CRM</h2>
             <p className="text-slate-600 mb-4 text-lg">
               Многие боятся внедрения CRM из-за сложности и хаоса. С нами этого не будет.
             </p>
             <p className="text-slate-600 mb-6">
               Мы работаем в <strong>собственной, идеально настроенной системе Битрикс24</strong>. Мы просто предоставляем вам доступ (Личный кабинет), где вы видите всю картину:
             </p>
             <ul className="space-y-3 text-slate-700">
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-500 rounded-full"></div>Прослушивание записей всех звонков</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-500 rounded-full"></div>Статусы заявок в реальном времени</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-500 rounded-full"></div>Контроль эффективности мастеров</li>
             </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;