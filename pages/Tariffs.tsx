import React from 'react';
import Section from '../components/Section';
import { Check, Clock, Info, PhoneOutgoing, Calculator, XCircle, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Tariffs: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-brand-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Тарифы</h1>
          <p className="text-lg text-brand-100 max-w-3xl mx-auto">
            Мы берем на себя только входящую связь с абонентами (звонки + WhatsApp).<br/>
            Вы платите только за фактическое время разговора, вся работа в CRM — уже включена.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tariff 1 */}
          <div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-xl transition-shadow flex flex-col relative">
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Базовый</h3>
             <p className="text-slate-500 mb-4 text-sm">Для небольших компаний</p>
             <div className="mb-4">
               <span className="text-3xl font-bold text-slate-900">9 990 ₽</span>
               <span className="text-slate-500 text-sm"> / мес</span>
             </div>
             <div className="bg-brand-50 rounded-lg p-4 mb-6 border border-brand-100">
                <div className="text-2xl font-bold text-brand-600 mb-1">400 минут</div>
                <div className="text-xs text-brand-800">входящих разговоров</div>
             </div>
             
             <div className="mb-6 pb-6 border-b border-slate-100 flex-grow text-sm">
               <div className="mb-4 p-2 bg-slate-50 rounded text-center text-brand-700 font-medium text-xs border border-brand-100">
                 Только входящие звонки и WhatsApp
               </div>
               <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-900 font-medium">Доступ к нашей CRM и ведение заявок</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700">Приём обращений из всех каналов</span>
                  </li>
                   <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700">Контроль закрытия и обратная связь</span>
                  </li>
               </ul>
               <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                 <p className="text-slate-500 text-xs mb-1">Стоимость сверх пакета:</p>
                 <p className="font-bold text-slate-700">25 ₽ / мин</p>
               </div>
             </div>
             
             <Button 
               variant="secondary" 
               className="w-full"
               onClick={() => window.location.hash = '#/contacts'}
             >
               Выбрать тариф
             </Button>
          </div>

          {/* Tariff 2 */}
          <div className="border-2 border-brand-500 rounded-2xl p-8 bg-white shadow-lg relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Оптимальный
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Стандарт</h3>
            <p className="text-slate-500 mb-4 text-sm">Для активных сервисных служб</p>
             <div className="mb-4">
               <span className="text-3xl font-bold text-slate-900">19 990 ₽</span>
               <span className="text-slate-500 text-sm"> / мес</span>
             </div>
             <div className="bg-brand-50 rounded-lg p-4 mb-6 border border-brand-100">
                <div className="text-2xl font-bold text-brand-600 mb-1">1 000 минут</div>
                <div className="text-xs text-brand-800">входящих разговоров</div>
             </div>

             <div className="mb-6 pb-6 border-b border-slate-100 flex-grow text-sm">
               <div className="mb-4 p-2 bg-slate-50 rounded text-center text-brand-700 font-medium text-xs border border-brand-100">
                 Только входящие звонки и WhatsApp
               </div>
               <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-900 font-medium">Доступ к нашей CRM и ведение заявок</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700">Подробная история по абонентам</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700">Контроль качества работ</span>
                  </li>
               </ul>
               <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                 <p className="text-slate-500 text-xs mb-1">Стоимость сверх пакета:</p>
                 <p className="font-bold text-brand-600">20 ₽ / мин</p>
               </div>
             </div>

             <Button 
               variant="primary" 
               className="w-full"
               onClick={() => window.location.hash = '#/contacts'}
             >
               Оставить заявку
             </Button>
          </div>

          {/* Tariff 3 */}
          <div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-xl transition-shadow flex flex-col relative">
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Бизнес</h3>
             <p className="text-slate-500 mb-4 text-sm">Для крупных УК и сетей</p>
             <div className="mb-4">
               <span className="text-3xl font-bold text-slate-900">39 990 ₽</span>
               <span className="text-slate-500 text-sm"> / мес</span>
             </div>
             <div className="bg-brand-50 rounded-lg p-4 mb-6 border border-brand-100">
                <div className="text-2xl font-bold text-brand-600 mb-1">2 500 минут</div>
                <div className="text-xs text-brand-800">входящих разговоров</div>
             </div>

             <div className="mb-6 pb-6 border-b border-slate-100 flex-grow text-sm">
               <div className="mb-4 p-2 bg-slate-50 rounded text-center text-brand-700 font-medium text-xs border border-brand-100">
                 Только входящие звонки и WhatsApp
               </div>
               <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-900 font-medium">Доступ к нашей CRM и ведение заявок</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700">Максимальная экономия на минуте</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700">Полный цикл ведения заявки</span>
                  </li>
               </ul>
               <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                 <p className="text-slate-500 text-xs mb-1">Стоимость сверх пакета:</p>
                 <p className="font-bold text-green-600">15 ₽ / мин</p>
               </div>
             </div>

             <Button 
               variant="secondary" 
               className="w-full"
               onClick={() => window.location.hash = '#/contacts'}
             >
               Выбрать тариф
             </Button>
          </div>
        </div>
        
        {/* Outbound Calls Option */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 flex flex-col md:flex-row gap-8 items-center shadow-sm">
           <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-sm">
             <PhoneOutgoing className="w-8 h-8 text-indigo-600" />
           </div>
           <div className="flex-grow">
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Нужна исходящая связь?</h3>
             <p className="text-slate-700 mb-4 leading-relaxed">
               Бережный обзвон должников и информирование абонентов: мягкие напоминания без давления, разные сценарии для аккуратных и хронических должников.
               <br/><span className="text-sm text-indigo-600 font-medium mt-1 inline-block">Оплачивается отдельно: по минутам или по количеству контактов, как договоримся.</span>
             </p>
             <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
               <span className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 Повышение собираемости без конфликтов
               </span>
               <span className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 Сценарии под ваши правила и политику
               </span>
               <span className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 Вся история звонков — в Битрикс24
               </span>
             </div>
           </div>
           <div className="flex-shrink-0">
             <Button 
               variant="outline" 
               className="border-indigo-200 text-indigo-700 hover:bg-indigo-100 bg-white"
               onClick={() => window.location.hash = '#/contacts'}
             >
               Обсудить условия
             </Button>
           </div>
        </div>

        {/* Info Block */}
        <div className="max-w-3xl mx-auto mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4 items-start">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600 flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Что считается минутой?</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Мы считаем только фактическое время разговора с вашими абонентами. 
                Вся внутренняя работа диспетчера — создание карточки в Битрикс24, передача заявки мастеру, контроль статусов и отчеты — <strong>включена в стоимость тарифа</strong> и не расходует пакет минут.
              </p>
            </div>
        </div>
        
        {/* Safe Start Section */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <div className="inline-block bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
             <p className="text-green-800 text-sm font-medium">
                <strong>Безопасный старт:</strong> Можно начать с части объектов или одного города. <br className="hidden md:block"/>
                Если через 1–2 месяца увидите порядок и рост собираемости — расширяемся.
             </p>
          </div>
        </div>
      </Section>

      {/* Math Breakdown Section */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
               <Calculator className="w-8 h-8 text-brand-600" />
               Честная математика
             </h2>
             <p className="text-slate-600 mt-2">Сколько стоит организовать такую же систему самостоятельно (за 1 линию)</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* DIY Cost */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm">
               <h3 className="text-xl font-bold text-red-900 mb-6 border-b border-red-100 pb-4">Если делать самому</h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex justify-between items-center">
                   <span className="text-red-800 text-sm md:text-base">Битрикс24, Телефония, Интеграции</span>
                   <span className="font-bold text-red-900">~ 30 000 ₽</span>
                 </li>
                 <li className="flex justify-between items-center">
                   <span className="text-red-800 text-sm md:text-base">Диспетчер (Зарплата, налоги, отпуск)</span>
                   <span className="font-bold text-red-900">~ 60 000 ₽</span>
                 </li>
                 <li className="flex justify-between items-center">
                   <span className="text-red-800 text-sm md:text-base">Настройка и администрирование</span>
                   <span className="font-bold text-red-900">~ 10 000 ₽</span>
                 </li>
               </ul>
               <div className="bg-white rounded-xl p-6 border border-red-100 text-center">
                 <p className="text-red-600 text-sm font-semibold uppercase mb-1">Итого расходов в месяц</p>
                 <p className="text-3xl font-bold text-red-900">~ 100 000 ₽</p>
                 <p className="text-xs text-red-400 mt-2">И это только одна линия!</p>
               </div>
            </div>

            {/* Outsourcing Cost */}
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 shadow-sm ring-1 ring-brand-200">
               <h3 className="text-xl font-bold text-brand-900 mb-6 border-b border-brand-100 pb-4">СВОЯ ДИСПЕТЧЕРСКАЯ</h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex gap-3 items-center">
                   <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                   <span className="text-brand-900">Битрикс24 и телефония — <strong>Включено</strong></span>
                 </li>
                 <li className="flex gap-3 items-center">
                   <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                   <span className="text-brand-900">Команда диспетчеров — <strong>Включено</strong></span>
                 </li>
                 <li className="flex gap-3 items-center">
                   <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                   <span className="text-brand-900">Техническая поддержка — <strong>Включено</strong></span>
                 </li>
               </ul>
               <div className="bg-white rounded-xl p-6 border border-brand-100 text-center shadow-md">
                 <p className="text-brand-600 text-sm font-semibold uppercase mb-1">Стоимость тарифа</p>
                 <div className="flex items-baseline justify-center gap-2">
                   <span className="text-lg text-slate-400 font-medium">от</span>
                   <span className="text-3xl font-bold text-brand-600">9 990 ₽</span>
                 </div>
                 <p className="text-xs text-brand-400 mt-2">В 10 раз выгоднее штатного сотрудника</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Qualitative Comparison Table */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Плюсы, которые нельзя посчитать деньгами</h2>
          
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 md:p-6 font-semibold text-slate-900 w-1/3">Критерий</th>
                  <th className="p-4 md:p-6 font-semibold text-slate-500 w-1/3">Свой диспетчер</th>
                  <th className="p-4 md:p-6 font-bold text-brand-600 w-1/3 bg-brand-50/50">СВОЯ ДИСПЕТЧЕРСКАЯ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 md:p-6 text-slate-600 font-medium">График работы</td>
                  <td className="p-4 md:p-6 text-slate-500">Болеет, уходит в отпуск, просит отгулы</td>
                  <td className="p-4 md:p-6 text-slate-800 font-medium bg-brand-50/30">Всегда на связи, есть подмена</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-slate-600 font-medium">Оборудование</td>
                  <td className="p-4 md:p-6 text-slate-500">Нужно купить стол, стул, ПК, гарнитуру</td>
                  <td className="p-4 md:p-6 text-slate-800 font-medium bg-brand-50/30">Мы работаем на своём оборудовании</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-slate-600 font-medium">Настроение</td>
                  <td className="p-4 md:p-6 text-slate-500">Может нагрубить абоненту из-за усталости</td>
                  <td className="p-4 md:p-6 text-slate-800 font-medium bg-brand-50/30">Проф. стандарт вежливости и контроль</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Tariffs;