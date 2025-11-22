import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { LayoutList, HeartHandshake, Smartphone, Activity, TrendingUp, PhoneOutgoing, Building2, Wrench, Users, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const Home: React.FC = () => {
  const mockTasks = [
    { 
      id: 4523, 
      title: 'Нет вызова в квартиру', 
      caller: 'Мария Ивановна',
      address: 'ул. Ленина 45, кв. 12', 
      status: 'new', 
      statusText: 'Новая',
      time: '10:42'
    },
    { 
      id: 4522, 
      title: 'Течёт крыша (сильно капает)', 
      caller: 'Ольга Сергеевна',
      address: 'пр. Мира 12, кв. 98', 
      status: 'work', 
      statusText: 'В работе (Бригада №2)',
      time: '09:15'
    },
    { 
      id: 4521, 
      title: 'Сломан доводчик', 
      caller: 'Дмитрий Петрович',
      address: 'ул. Гагарина 8, п. 1', 
      status: 'done', 
      statusText: 'Выполнена',
      time: 'Вчера'
    }
  ];

  return (
    <>
      <Hero />

      {/* Bitrix Integration Highlight */}
      <Section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Мы не просто «отвечаем», мы даём вам готовую систему порядка
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Вам не нужно покупать и настраивать CRM. <strong>Мы работаем в нашей собственной системе Битрикс24</strong>, специально заточенной под диспетчерскую, и даём вам и вашим мастерам полный доступ.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Именно поэтому мы обеспечиваем такую глубину обработки: мы сами следим за стандартами ведения базы, а вы просто заходите и видите идеальный порядок.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                  <LayoutList className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Вы приходите на всё готовое</h4>
                  <p className="text-slate-600 text-sm">Мы пускаем вас в свою экосистему. Вы сразу видите список заявок, историю по каждому абоненту и записи разговоров.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Удобство для мастеров</h4>
                  <p className="text-slate-600 text-sm">Ваши сотрудники устанавливают приложение и получают готовые, четко оформленные задачи от наших диспетчеров.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => window.location.hash = '#/how-it-works'}
                className="text-brand-600 font-semibold hover:text-brand-700 flex items-center bg-transparent border-none cursor-pointer p-0 text-lg"
              >
                Как это устроено технически &rarr;
              </button>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 relative">
             {/* Realistic Task Visualization */}
             <div className="space-y-4">
                <div className="flex justify-between items-center text-sm text-slate-500 uppercase font-semibold tracking-wider mb-2">
                  <span>Список заявок (Live)</span>
                  <span className="text-brand-600">Битрикс24</span>
                </div>
                
                {mockTasks.map((task) => (
                  <div key={task.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 transition-transform hover:scale-[1.02] duration-200">
                    <div className="flex items-start gap-3">
                      {/* Status Indicator */}
                      <div className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${
                        task.status === 'new' ? 'bg-red-500 animate-pulse' :
                        task.status === 'work' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold text-slate-400">#{task.id}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            task.status === 'new' ? 'bg-red-50 text-red-600' :
                            task.status === 'work' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-600'
                          }`}>
                            {task.statusText}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-0.5 truncate">{task.title}</h4>
                        <p className="text-xs text-brand-600 font-medium mb-1">{task.caller}</p>
                        <div className="flex justify-between items-center text-xs text-slate-500">
                          <span className="truncate mr-2">{task.address}</span>
                          <span className="whitespace-nowrap flex items-center gap-1 opacity-70">
                            <Clock className="w-3 h-3" /> {task.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce duration-[3000ms]">
               <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full">
                   <CheckCircle2 className="w-5 h-5 text-green-600" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-medium">Статистика сегодня</p>
                   <p className="text-sm font-bold text-slate-900">Закрыто 98% заявок</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Target Audience Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Кому особенно заходит «Своя диспетчерская»</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-brand-200 transition-colors">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Домофонные компании</h3>
            <p className="text-slate-600 text-sm">С базой от 50 подъездов, где директор устал сам принимать звонки и хочет заниматься развитием, а не рутиной.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-brand-200 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">УК и ТСЖ</h3>
            <p className="text-slate-600 text-sm">Где жители жалуются, что «в диспетчерскую не дозвониться», а штатные сотрудники часто болеют или хамят.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-brand-200 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Сервисные компании</h3>
            <p className="text-slate-600 text-sm">Лифты, шлагбаумы, системы доступа. Тем, кому важно не терять заявки, фотоотчёты и контролировать мастеров.</p>
          </div>
        </div>
      </Section>

      {/* Value Props */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Почему нас выбирают?</h2>
          <p className="text-slate-600 text-lg">Наша главная цель — чтобы ваши абоненты чувствовали, что звонят добрым друзьям, а не в безликую контору.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Человечность</h3>
            <p className="text-slate-600">Никаких скриптов робота. Живое, вежливое, спокойное общение. Мы успокоим даже самого рассерженного жильца.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Рука на пульсе</h3>
            <p className="text-slate-600">Мы не просто передаем заявку, мы добиваемся ее закрытия. Собираем обратную связь и держим вас в курсе.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Омниканальность</h3>
            <p className="text-slate-600">Молодежь не любит звонить. Мы принимаем заявки в WhatsApp и обрабатываем их так же быстро, как звонки.</p>
          </div>
        </div>
      </Section>

      {/* Debt Collection & Outbound Calls Section */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Работа с задолженностью</h2>
          <p className="text-slate-600 text-lg">Мы не «выбиваем долги», а помогаем людям вовремя платить и не уходить в отрыв.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Block 1 */}
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-10 border border-indigo-100">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Повышаем собираемость платежей мягко и по-доброму</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Регулярные напоминания, понятная коммуникация и порядок в Битрикс24 помогают вашим абонентам платить вовремя — без угроз и конфликтов.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-600">Аккуратно напоминаем о платеже голосом или в WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-600">Фиксируем договорённости в Битрикс24, ничего не теряется</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span className="text-slate-600">Вы видите, кто обещал оплатить и на какую дату</span>
              </li>
            </ul>
          </div>

          {/* Block 2 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 shadow-sm mb-6">
              <PhoneOutgoing className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Бережный обзвон должников вместо жёсткого давления</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Мы звоним вашим абонентам так, как позвонили бы своим родным: спокойно, уважительно, с поиском решения, а не виноватого.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div>
                <span className="text-slate-600">Разные сценарии для аккуратных плательщиков и «хроников»</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div>
                <span className="text-slate-600">Предлагаем варианты: перенос срока, частичная оплата, уточнение квитанций</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div>
                <span className="text-slate-600">Ограниченная частота звонков, чтобы не выжигать доверие к вашей компании</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand" className="!py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы навести порядок?</h2>
            <p className="text-white text-lg mb-6">
              Хватит терять заявки и нервничать из-за пропущенных звонков. Доверьте диспетчерскую нам и занимайтесь развитием бизнеса.
            </p>
            <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-8">
              <p className="text-brand-100 text-sm">
                <strong>Безопасный старт:</strong> Можно начать с части объектов или одного города. 
                Если через 1–2 месяца увидите порядок и рост собираемости — расширяемся.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
               <button 
                 className="px-6 py-3 rounded-lg bg-white text-brand-900 font-medium hover:bg-brand-50 transition-colors cursor-pointer border-none"
                 onClick={() => window.location.hash = '#/tariffs'}
               >
                 Смотреть тарифы
               </button>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;