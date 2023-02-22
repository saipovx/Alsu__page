let language = 'ru'
// получить атрибут ?l="ru" или ?l="en"
let url = new URL(window.location.href)
let lang_ = url.searchParams.get('l')
language = lang_
language = language !== 'ru' & language !== 'en' ? 'en' : language
let first = false

let langRU = {
    "Founder": "Основатель",
    "Cases": "Проекты",
    "Pricing": "Цены",
    "Contacts": "Контакты",
    "Free Consultation": "Бесплатная консультация",
    "Let us help you make the connections you need for success and take your brand to the next level.": "Позвольте нам помочь вам создать связи, необходимые для успеха, и повысить уровень вашего бренда.",
    "Get access to decision makers with Alus, the #1 LinkedIn agency in the Middle East": "Получите доступ к решающим лицам с Alus, <span>#1 LinkedIn агентство</span> в Среднем Востоке",
    "Total attracted investments": "Всего привлечено инвестиций",
    "Accepted friends": "Принято друзей",
    "Client leads generated": "Клиентские лиды сгенерированы",

    "Veronica Alus": "Veronica Alus",
    "read more...": "читать далее...",
    "Top 6 *Women in Tech* at Standard Chartered Bank": "Топ 6 (Женщин в технологиях) в Standard Chartered Bank",
    "Veronica, a tech leader in the Middle East, has founded two technology companies in the Dubai International Financial Centre (DIFC), the largest financial hub in the MEASA (Middle East, Africa and South Asia) region.": "Вероника, технический лидер в Среднем Востоке, основала две технологические компании в Дубайском международном финансовом центре (DIFC), крупнейшем финансовом хабе в регионе MEASA (Средний Восток, Африка и Южная Азия).",
    'Her company, Theeye, which provides real-time remote property viewing, was selected by Google Inc. as one of the top five fast-growing potential companies in the Middle East and Africa region. In 2022, the Dubai International Financial Centre officially supported Proptech One, a series of events that bring together global players in the real estate industry, including banks, investment funds, developers and technology companies. Veronica frequently speaks at major IT events and has established strong business connections with major investment funds in the region via LinkedIn, including in the UAE, Saudi Arabia and Qatar. In June 2022, Veronica was honored to be recognized as the Top 6 of the "Women in Tech" program organized by the DIFC and Standard Chartered Bank.': "<br>Ее компания Theeye, которая предоставляет реальное время удаленного просмотра недвижимости, была выбрана компанией Google Inc. как одна из пяти самых быстрорастущих потенциальных компаний в регионе Средний Восток и Африка. В 2022 году Дубайский международный финансовый центр официально поддержал Proptech One, серию мероприятий, которые объединяют глобальных игроков в сфере недвижимости, включая банки, инвестиционные фонды, застройщиков и технологические компании.<br><br>Вероника часто выступает на крупных мероприятиях в области информационных технологий и установила сильные деловые связи с крупными инвестиционными фондами в регионе через LinkedIn, включая ОАЭ, Саудовскую Аравию и Катар. В июне 2022 года Вероника была почетно удостоена титула Топ 6 программы «Женщины в технологиях», организованной DIFC и Standard Chartered Bank.",
    'Satisfied Clients:': 'Довольные клиенты:',
    'our Success Story': 'наша история успеха',
    'Raised': 'Поднял',
    'Investors per Month': 'Инвесторов в месяц',
    'Closed Contracts with a Client': 'Закрытые контракты с клиентом',
    'Events for 100 People Invited': 'Мероприятия для 100 приглашенных людей',


    'Who is our agency for?': 'Для кого наша агентство?',
    'Optimized for B2B Sales:': 'Оптимизировано для продаж B2B:',
    'Our solutions help increase your LinkedIn activity and optimize your profile for successful B2B sales.': 'Наши решения помогают повысить активность в LinkedIn и оптимизировать ваш профиль для успешных продаж B2B.',
    'Build Your Personal Brand:': 'Постройте свой личный бренд:',
    'Our services will help you boost your LinkedIn presence and establish a strong personal brand online.': 'Наши услуги помогут вам повысить присутствие в LinkedIn и создать сильный личный бренд в Интернете.',
    'Investment Attraction:': 'Привлечение инвестиций:',
    'Our lead generation through LinkedIn helps you attract potential investors for your business.': 'Наша генерация лидов через LinkedIn помогает вам привлечь потенциальных инвесторов для вашего бизнеса.',
    'Inviting Guests to an Event': 'Приглашение гостей на мероприятие',
    'Our team can assemble decision-makers for any event on a specific theme.': 'Наша команда может собрать решающих лиц для любого мероприятия по определенной теме.',
    'Our expert team specializes in lead generation and account growth, helping you connect with your target audience and drive sales via LinkedIn.': 'Наша экспертная команда специализируется на генерации лидов и росте аккаунта, помогая вам связаться с целевой аудиторией и увеличить продажи через LinkedIn.',

    'Our 3-Step Approach:': 'Наш подход в 3 шага:',
    'How We Drive Lead Generation for Clients': 'Как мы генерируем лиды для клиентов',
    '1 Step': '1 ШАГ',
    'Profile Packaging, Strategy Development, and Conversion-Driven Messaging': 'Упаковка профиля, разработка стратегии и конверсионное сообщение',
    'Our team expertly packages your profile, develops a tailored strategy, and writes compelling messages, all within 5 working days.': 'Наша команда профессионально упаковывает ваш профиль, разрабатывает индивидуальную стратегию и пишет захватывающие сообщения, все это в течение 5 рабочих дней.',
    '2 Step': '2 ШАГ',
    'Targeted Outreach at Scale': 'Целевое обращение на масштабе',
    'Each month, our team sends up to 1500 messages to your desired audience, maximizing the reach and impact of your lead generation efforts.': 'Каждый месяц наша команда отправляет до 1500 сообщений вашей целевой аудитории, максимизируя охват и эффективность ваших усилий по генерации лидов.',
    '3 Step': '3 ШАГ',
    'Lead Collection and Performance Analytics': 'Сбор лидов и аналитика производительности',
    'Our team seamlessly integrates all collected leads into your CRM system and provides comprehensive performance analysis to track your progress and success.': 'Наша команда непрерывно интегрирует все собранные лиды в вашу систему CRM и предоставляет полную аналитику производительности для отслеживания вашего прогресса и успеха.',

    'Features': 'Особенности',
    'Prioritization of Responses': 'Приоритизация ответов',
    'Our neural network is able to determine the positive, neutral and negative response in LinkedIn': 'Наша нейронная сеть способна определить положительный, нейтральный и отрицательный ответ в LinkedIn',
    'Integrate Leads into any CRM System': 'Интегрировать лидов в <span>любую систему CRM</span>',
    'Do not waste time manually filling out a card in the CRM system, our system will do it for you': 'Не тратите время вручную заполняя карточку в системе CRM, наша система сделает это за вас',
    'Support from the Team 24/7': 'Поддержка от команды 24/7',
    'We will answer any of your questions - from how best to respond to a lead, ending with changes in strategy': 'Мы ответим на любые ваши вопросы - от того, как лучше всего отвечать на лид, заканчивая изменениями в стратегии',
    'Our team seamlessly integrates all collected leads into your CRM system and provides comprehensive performance analysis to track your progress and success.': 'Наша команда непрерывно интегрирует все собранные лиды в вашу систему CRM и предоставляет полную аналитику производительности для отслеживания вашего прогресса и успеха.',

    'Monthly': 'Ежемесячно',
    'Every 3 months': 'Каждые 3 месяца',
    'Every 6 months': 'Каждые 6 месяцев',
    'Pricing for Lead Generation': 'Цены на генерацию лидов',
    '1 Account': '1 Аккаунт',
    '2 Accounts': '2 Аккаунта',
    '3 Accounts': '3 Аккаунта',
    '4 Accounts': '4 Аккаунта',
    '5 Accounts': '5 Аккаунтов',
    '6+ Accounts': '6+ Аккаунтов',
    'Who is suitable for': 'Кому подходит',

    'Building a personal brand. Fundraising investments.': 'Создание личного бренда. Финансирование инвестиций.',
    'Finding B2B Clients. Building a partner network. Suitable for small and medium businesses.': 'Поиск B2B-клиентов. Создание партнерской сети. Подходит для малого и среднего бизнеса.',
    'Funding B2B clients and have a large reach of potential clients around the world. Suitable for small and medium businesses.': 'Финансирование B2B-клиентов и имеют широкий охват потенциальных клиентов по всему миру. Подходит для малого и среднего бизнеса.',


    '50 messages per day (up to 1500 messages per month)': '50 сообщений в день (до 1500 сообщений в месяц)',
    '100 messages per day (up to 3000 messages per month)': '100 сообщений в день (до 3000 сообщений в месяц)',
    '150 messages per day (up to 4500 messages per month)': '150 сообщений в день (до 4500 сообщений в месяц)',
    '200 messages per day (up to 6000 messages per month)': '200 сообщений в день (до 6000 сообщений в месяц)',
    '250 messages per day (up to 7500 messages per month)': '250 сообщений в день (до 7500 сообщений в месяц)',
    '300+ messages per day (up to 9000+ messages per month)': '300+ сообщений в день (до 9000+ сообщений в месяц)',
    '4 LinkedIn posts per month': '4 сообщения в LinkedIn в месяц',
    '5+ outreach campaign': '5+ кампаний обращения',
    'LinkedIn profile optimizations': 'Оптимизация профиля LinkedIn',
    'Connection nurture campaigns': 'Кампании по уходу за подключением',
    'Ongoing strategy calls': 'Постоянные звонки по стратегии',
    '8+ messages per sequence': '8+ сообщений в последовательности',
    'Proven done-for-you campaign': 'Доказанная готовая кампания',

    'Outreach messages crafted': 'Сообщения обращения',
    'Ideal decision makers identified': 'Определены идеальные решающие лица',
    'Qualified prospect list built': 'Список квалифицированных потенциальных клиентов',
    'Ongoing campaign optimization': 'Постоянная оптимизация кампании',
    'A/B testing campaigns': 'Кампании A/B тестирования',
    'Advanced campaign metrics': 'Расширенная метрика кампании',
    'CRM integration': 'Интеграция CRM',
    'Email, chat, phone support': 'Поддержка по электронной почте, чату, телефону',
    'Dedicated account manager': 'Персональный менеджер',
    'Subscription': 'Подписка',
    "Setup Price": "Цена на установку",
    "Leave a request": "Оставить заявку",
    'About Alus': 'О Alus',
    'Our Customers': 'Наши клиенты',

    // THE CLOUD
    'Investment:': 'Привлекли:',
    'The Cloud helps businesses maximize the potential of a kitchen or f ood brand and increase their revenue without upfront costs.': 'The Cloud помогает предприятиям максимально использовать потенциал бренда кухни или продуктов питания и увеличивать свой доход без предварительных затрат.',
    'We worked with 9 accounts: 6 of which worked to build B2B clients, and 3 - to attract investments. In 3 months we were able to raise 1 million dollars for the company The Cloud.': 'Мы работали с 9 аккаунтов - 6 из которых работали на выстраивание B2В клиентов, а 3 - на привлечение инвестиций. За 3 месяца мы смогли привлечь 1 миллион долларов для компании The Cloud.',
    'Conversion Rate': 'Конверсия в ответы',

    // YALLA MARKET
    'Investors per Month:': 'Инвесторов Каждый Месяц',
    'Yalla Market is an online store that delivers to your doorstep in Dubai in 15 minutes.': 'Yalla Market - доставка продуктов в Дубае за 15 минут.',
    'For the first 4 months, about 100 investors were in negotiations with Leonid Dovbenko. The target was for investors with small checks from $25k.': 'За первые 4 месяца с Леонидом Довбенко вели переговоры около 100 инвесторов. Цель была для инвесторов с небольшими чеками от 25 тысяч долларов.',

    // Antix
    'Сlosed Сontracts with a Сlient:': 'Закрыто Контрактов с Клиентом',
    'Antix’s proprietary technology creates and integrates metaverses into interconnected meta-worlds to enable infinite human empowerment.': 'Запатентованная технология Antix создает и интегрирует метавселенные во взаимосвязанные метамиры, чтобы обеспечить бесконечные возможности человека.',
    'Over the course of 6 months, the Antix team managed to close 3 contracts through our service. We also continue to develop the strategy of building a partner network in the Middle East region.': 'На протяжении 6 месяцев команде Антикс удалось закрыть 3 контракта через наш сервис. Мы также продолжаем развивать стратегию выстраивания партнерской сети в регионе Ближнего Востока.',

    // Proptech One
    'Events for 100 People Invited:': 'Мероприятия для 100 Человек Приглашенных<br>',
    'A global community where banks, investors, developers, industry experts and technology companies from around the world come together to discuss the future of global property technology.': 'Глобальное сообщество, в котором банки, инвесторы, застройщики, отраслевые эксперты и технологические компании со всего мира собираются вместе, чтобы обсудить будущее глобальных технологий в сфере недвижимости.',
    'We worked from 3 accounts inviting developers, investors and technology companies to events that were held 2 times in 2022. Each event was attended by 100 people.': 'Работали с 3х аккаунтов приглашая застройщиков, инвесторов и технологические компании на мероприятия, которые проводились в 2022 году 2 раза. Каждое мероприятие посещало 100 человек.',
}

const translate = () => {
    // найти все элементы с атрибутом translate
    let elements = document.querySelectorAll('[translate]');
    // перебрать все элементы

    // все элементы у которых класс tab
    document.querySelectorAll('.tab').forEach(function (element) {
        // console.log(element);
        element.style.background = 'white'
        element.style.borderRadius = '13px'
    })

    elements.forEach(function (element) {
        // получить текст внутри элемента но без объектов по типу span
        let key_ = element.innerText;
        let key = key_.replace(/\s+/g, ' ').trim();
        // искать по ключам
        if (!langRU[key]) {
            langRU[key] = key
        }
        // console.log('lang', language);
        // если key нет в объекте lang то добавить его
        if (!first) element.setAttribute('origin_text', element.innerHTML);
        if (language == 'ru') {
            let value = langRU[key]
            element.style.fontFamily = language == 'ru' ? 'system-ui' : null;
            element.innerHTML = value;
        }
        if (language == 'en') {
            element.style = null;
            element.innerHTML = element.getAttribute('origin_text');
        }
        // переделать value в html
    })
    first = true;
}

translate();

function changeLanguage() {
    // console.log('lang', language);
    language = language == 'ru' ? 'en' : 'ru';
    // console.log('lang - ', language);
    translate();
}



let changesBTN = `
    <div class='lang'  onclick="changeLanguage()">
        <div class="lang-tab ${language == 'ru' ? 'active' : null}">RU</div>
        /
        <div class="lang-tab ${language == 'en' ? 'active' : null}">EN</div>
    </div>
    `

document.querySelector('[translateBTN]').innerHTML = changesBTN

document.querySelector('[translateBTN]').addEventListener('click', function () {
    changeLanguage();
    let changesBTN = `
    <div class='lang'  onclick="changeLanguage()">
        <div class="lang-tab ${language == 'ru' ? 'active' : null}">RU</div>
        /
        <div class="lang-tab ${language == 'en' ? 'active' : null}">EN</div>
    </div>
    `
    document.querySelector('[translateBTN]').innerHTML = changesBTN
})