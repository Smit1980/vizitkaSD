(function () {
  'use strict';

  var STORAGE_KEY = 'vizitkaSD-language';
  var fallbackLanguage = 'ru';
  var supported = { ru: true, en: true, fa: true };

  var translations = {
    en: {
      title: 'Denis Shandalin - AI implementation expert',
      description: 'Denis Shandalin is a researcher, entrepreneur and expert in implementing artificial intelligence in education and business.',
      text: {
        '.brand': '<span class="dot"></span>Shandalin D. A.',
        '.links a[href="#about"]': 'Projects',
        '.links a[href="#skills"]': 'Expertise',
        '.links a[href="#talks"]': 'Speaking',
        '.links a[href="#trust"]': 'Clients',
        '.links a[href="#contact"]': 'Contact',
        '.nav .btn[href*="t.me"] span:first-child': 'Contact me',
        '.kicker': '<span class="dot"></span>AI in education · AI in business · Continuing professional education',
        '.name': '<span class="ln"><span>Shandalin</span></span><span class="ln"><span>Denis</span></span><span class="ln"><span>Anatolyevich</span></span>',
        '.hero .lead:nth-of-type(2)': 'Researcher, entrepreneur and expert in implementing artificial intelligence in education and business; co-founder of the <a class="lnk" href="https://iivobrazovanii.club/" target="_blank" rel="noopener">AI in Education Club</a> and head of the <a class="lnk" href="https://anv-ai.ru/" target="_blank" rel="noopener">Agency of New Perspectives</a>.',
        '.hero .lead:nth-of-type(3)': 'Speaker at research and practice conferences and participant in federal education initiatives. He works with universities and federal-level education organizations, specializing in digital skills development and AI-powered process transformation.',
        '.hero .cta .btn.solid span': 'Message on Telegram',
        '.hero .cta .btn[href="#talks"] span:first-child': 'Speaking and awards',
        '.stats .stat:nth-child(1) span': 'years managing assets and business processes',
        '.stats .stat:nth-child(2) span': 'professionals trained to use AI',
        '.stats .stat:nth-child(3) span': 'continuing professional education programs for <span class="hl">Almaz-Antey</span>',
        '#about .head h2': 'Projects',
        '.org:nth-child(1) div b': 'Agency of New Perspectives',
        '.org:nth-child(1) div span': 'ANV-AI · AI implementation in business processes',
        '.org:nth-child(2) div b': 'AI in Education Club',
        '.org:nth-child(2) div span': 'a platform for sharing practices and implementing technology',
        '#skills .head h2': 'Expertise',
        '#skills .row:nth-child(1) > span:last-child': 'Over 25 years of experience managing assets and business processes across Russia',
        '#skills .row:nth-child(2) > span:last-child': 'Implementation of AI tools in business processes, focused on higher efficiency and lower operating costs',
        '#skills .row:nth-child(3) > span:last-child': 'Design and launch of neural-network education programs for entrepreneurs, leaders and teams, including people with disabilities',
        '#skills .row:nth-child(4) > span:last-child': 'More than 400 professionals, entrepreneurs and experts trained in practical AI use',
        '#skills .row:nth-child(5) > span:last-child': 'Work with federal-level education organizations and participation in digital skills development',
        '#skills .row:nth-child(6) > span:last-child': 'Participation in projects with government bodies and industrial companies, including cooperation with the Ministry of Science and Higher Education and <span class="hl">Almaz-Antey</span>',
        '#skills .row:nth-child(7) > span:last-child': 'Delivery of AI training, strategy sessions and individual learning programs',
        '#skills .row:nth-child(8) > span:last-child': 'Building AI implementation systems in companies, from diagnostics to practical use',
        '#skills .row:nth-child(9) > span:last-child': 'Creation and implementation of LLM-based solutions for task automation, analytics and communication',
        '#skills .row:nth-child(10) > span:last-child': 'Presentations at industry conferences and participation in expert discussions on AI, education and digital transformation',
        '#skills .row:nth-child(11) > span:last-child': 'Development of the AI in Education Club as a platform for sharing practices and implementing technology',
        '#skills .row:nth-child(12) > span:last-child': 'Design and implementation of automation and agent systems for the oil and gas industry',
        '#talks .head h2': 'Conference and forum speaker',
        '#talks .talk:nth-child(1) .body h3': 'Ministry of Science and Higher Education of Russia',
        '#talks .talk:nth-child(1) .body p': 'Presentation on how teaching communities support the development of digital skills.',
        '#talks .talk:nth-child(2) .body h3': 'Russia National Centre',
        '#talks .talk:nth-child(2) .body p': '10th Conference: Information Security and Children.',
        '#talks .talk:nth-child(3) .body h3': 'Russian Academy of Education',
        '#talks .talk:nth-child(3) .body p': 'Teaching communities as a sustainable environment for developing digital skills.',
        '#talks .talk:nth-child(4) .body h3': '<a class="lnk" href="https://radio.mediametrics.ru/intellectual_capital/75949/" target="_blank" rel="noopener">Mediametrics radio broadcast ↗</a>',
        '#talks .talk:nth-child(4) .body p': 'Intellectual Capital program: AI tools for scientific research.',
        '#talks .sub': 'Certificates and acknowledgements',
        '#trust .head h2': 'Trusted by major organizations',
        '.trust-text p:nth-child(1)': 'Experts from the AI in Education Club provide practical training in artificial intelligence for employees of <span class="hl">Almaz-Antey Air and Space Defence Corporation</span>.',
        '.trust-text p:nth-child(2)': 'Programs are built around real work tasks and include analytics, document preparation, routine automation and safe AI use.',
        '.trust-text p:nth-child(3)': 'We currently deliver six continuing professional education programs for the corporation’s employees.',
        '.trust-text p:nth-child(4)': 'We do more than talk about neural networks: we help integrate them into work processes.',
        '#contact .head h2': 'Contact',
        '.contact .big-t': 'Discuss AI training or implementation<i>.</i>',
        '.contact .note': 'Message us on Telegram: we will tell you about the programs and select a format for your team’s goals.',
        '.contact .cta .btn.solid span': 'Telegram · @smitAnin',
        'footer span:nth-child(1)': '© AI in Education Club',
        'footer span:nth-child(2)': 'Agency of New Perspectives',
        '.snd-t': 'Turn sound on'
      },
      attr: {
        '.portrait img': { alt: 'Denis Anatolyevich Shandalin' },
        '.org:nth-child(1) img': { alt: 'ANV-AI logo' },
        '.org:nth-child(2) img': { alt: 'AI in Education Club logo' },
        '.banner img': { alt: 'Digital protection: an AI implementation ecosystem including the AI in Education Club and ANV-AI' },
        '#skills .logos > div:nth-child(1) img': { alt: 'Ministry of Science and Higher Education of the Russian Federation' },
        '#skills .logos > div:nth-child(2) img': { alt: 'Almaz-Antey Air and Space Defence Corporation' },
        '#skills .logos > div:nth-child(3) img': { alt: 'Russian Academy of Sciences' },
        '#skills .logos > div:nth-child(4) img': { alt: 'Oil and gas industry automation' },
        '#talks .talk:nth-child(1) .ph:nth-child(1) img': { alt: 'Invitation from the Ministry of Science and Higher Education of Russia' },
        '#talks .talk:nth-child(1) .ph:nth-child(2) img': { alt: 'Presentation at the Ministry of Science and Higher Education' },
        '#talks .talk:nth-child(2) img': { alt: 'Presentation at the Russia National Centre' },
        '#talks .talk:nth-child(3) .ph:nth-child(1) img': { alt: 'Certificate' },
        '#talks .talk:nth-child(3) .ph:nth-child(2) img': { alt: 'Presentation at the Russian Academy of Education forum' },
        '#talks .talk:nth-child(4) img': { alt: 'Mediametrics radio broadcast' },
        '.gallery button:nth-child(1) img': { alt: 'Lomonosov Moscow State University certificate' },
        '.gallery button:nth-child(2) img': { alt: 'MSU Higher School of Innovation certificate' },
        '.gallery button:nth-child(3) img': { alt: 'Acknowledgement from the MSU Higher School of Management and Innovation' },
        '.gallery button:nth-child(4) img': { alt: 'Academic Community 2025 forum participant certificate' },
        '.gallery button:nth-child(5) img': { alt: 'International Congress participant certificate, MSU' },
        '.trust-pic video': { 'aria-label': 'AI does not replace engineering expertise. It strengthens it: Almaz-Antey and the AI in Education Club' },
        '#lb': { 'aria-label': 'Image preview' },
        '#lb .x': { 'aria-label': 'Close' }
      }
    },
    fa: {
      title: 'دنیس شاندالین - متخصص پیاده سازی هوش مصنوعی',
      description: 'دنیس شاندالین پژوهشگر، کارآفرین و متخصص پیاده سازی هوش مصنوعی در آموزش و کسب و کار است.',
      text: {
        '.brand': '<span class="dot"></span>شاندالین د. آ.',
        '.links a[href="#about"]': 'پروژه ها',
        '.links a[href="#skills"]': 'تخصص ها',
        '.links a[href="#talks"]': 'سخنرانی ها',
        '.links a[href="#trust"]': 'مشتریان',
        '.links a[href="#contact"]': 'تماس',
        '.nav .btn[href*="t.me"] span:first-child': 'تماس با من',
        '.kicker': '<span class="dot"></span>هوش مصنوعی در آموزش · هوش مصنوعی در کسب و کار · آموزش حرفه ای مستمر',
        '.name': '<span class="ln"><span>شاندالین</span></span><span class="ln"><span>دنیس</span></span><span class="ln"><span>آناتولیویچ</span></span>',
        '.hero .lead:nth-of-type(2)': 'پژوهشگر، کارآفرین و متخصص پیاده سازی هوش مصنوعی در آموزش و کسب و کار؛ هم بنیان گذار <a class="lnk" href="https://iivobrazovanii.club/" target="_blank" rel="noopener">باشگاه هوش مصنوعی در آموزش</a> و مدیر <a class="lnk" href="https://anv-ai.ru/" target="_blank" rel="noopener">آژانس چشم اندازهای نو</a>.',
        '.hero .lead:nth-of-type(3)': 'سخنران کنفرانس های علمی و کاربردی و شرکت کننده در ابتکارهای آموزشی فدرال. او با دانشگاه ها و سازمان های آموزشی ملی کار می کند و در توسعه مهارت های دیجیتال و تحول فرایندها با هوش مصنوعی تخصص دارد.',
        '.hero .cta .btn.solid span': 'پیام در تلگرام',
        '.hero .cta .btn[href="#talks"] span:first-child': 'سخنرانی ها و افتخارات',
        '.stats .stat:nth-child(1) span': 'سال مدیریت دارایی ها و فرایندهای کسب و کار',
        '.stats .stat:nth-child(2) span': 'متخصص آموزش دیده در استفاده از هوش مصنوعی',
        '.stats .stat:nth-child(3) span': 'برنامه آموزش حرفه ای برای <span class="hl">آلماز-آنتی</span>',
        '#about .head h2': 'پروژه ها',
        '.org:nth-child(1) div b': 'آژانس چشم اندازهای نو',
        '.org:nth-child(1) div span': 'ANV-AI · پیاده سازی هوش مصنوعی در فرایندهای کسب و کار',
        '.org:nth-child(2) div b': 'باشگاه هوش مصنوعی در آموزش',
        '.org:nth-child(2) div span': 'فضایی برای تبادل تجربه و پیاده سازی فناوری',
        '#skills .head h2': 'تخصص ها',
        '#skills .row:nth-child(1) > span:last-child': 'بیش از ۲۵ سال تجربه در مدیریت دارایی ها و فرایندهای کسب و کار در سراسر روسیه',
        '#skills .row:nth-child(2) > span:last-child': 'پیاده سازی ابزارهای هوش مصنوعی در فرایندهای کسب و کار با تمرکز بر افزایش بهره وری و کاهش هزینه های عملیاتی',
        '#skills .row:nth-child(3) > span:last-child': 'طراحی و اجرای برنامه های آموزشی شبکه های عصبی برای کارآفرینان، مدیران و تیم ها، از جمله افراد دارای معلولیت',
        '#skills .row:nth-child(4) > span:last-child': 'آموزش کاربرد عملی هوش مصنوعی به بیش از ۴۰۰ متخصص، کارآفرین و کارشناس',
        '#skills .row:nth-child(5) > span:last-child': 'همکاری با سازمان های آموزشی ملی و مشارکت در توسعه مهارت های دیجیتال',
        '#skills .row:nth-child(6) > span:last-child': 'مشارکت در پروژه ها با نهادهای دولتی و شرکت های صنعتی، از جمله همکاری با وزارت علوم و آموزش عالی و <span class="hl">آلماز-آنتی</span>',
        '#skills .row:nth-child(7) > span:last-child': 'برگزاری دوره های آموزشی هوش مصنوعی، نشست های راهبردی و برنامه های یادگیری فردی',
        '#skills .row:nth-child(8) > span:last-child': 'ایجاد سامانه های پیاده سازی هوش مصنوعی در شرکت ها، از ارزیابی تا کاربرد عملی',
        '#skills .row:nth-child(9) > span:last-child': 'ایجاد و پیاده سازی راه حل های مبتنی بر مدل های زبانی برای خودکارسازی، تحلیل و ارتباطات',
        '#skills .row:nth-child(10) > span:last-child': 'سخنرانی در کنفرانس های تخصصی و مشارکت در گفت و گوهای کارشناسی درباره هوش مصنوعی، آموزش و تحول دیجیتال',
        '#skills .row:nth-child(11) > span:last-child': 'توسعه باشگاه هوش مصنوعی در آموزش به عنوان بستری برای تبادل تجربه و پیاده سازی فناوری',
        '#skills .row:nth-child(12) > span:last-child': 'طراحی و پیاده سازی سامانه های خودکار و عامل محور برای صنعت نفت و گاز',
        '#talks .head h2': 'سخنران کنفرانس ها و همایش ها',
        '#talks .talk:nth-child(1) .body h3': 'وزارت علوم و آموزش عالی روسیه',
        '#talks .talk:nth-child(1) .body p': 'سخنرانی درباره تاثیر جوامع آموزشی بر توسعه مهارت های دیجیتال.',
        '#talks .talk:nth-child(2) .body h3': 'مرکز ملی روسیه',
        '#talks .talk:nth-child(2) .body p': 'دهمین کنفرانس امنیت اطلاعات و کودکان.',
        '#talks .talk:nth-child(3) .body h3': 'آکادمی آموزش روسیه',
        '#talks .talk:nth-child(3) .body p': 'جوامع آموزشی به عنوان محیطی پایدار برای توسعه مهارت های دیجیتال.',
        '#talks .talk:nth-child(4) .body h3': '<a class="lnk" href="https://radio.mediametrics.ru/intellectual_capital/75949/" target="_blank" rel="noopener">پخش رادیو Mediametrics ↗</a>',
        '#talks .talk:nth-child(4) .body p': 'برنامه سرمایه فکری: ابزارهای هوش مصنوعی برای پژوهش علمی.',
        '#talks .sub': 'گواهی ها و تقدیرنامه ها',
        '#trust .head h2': 'سازمان های بزرگ به ما اعتماد دارند',
        '.trust-text p:nth-child(1)': 'متخصصان باشگاه هوش مصنوعی در آموزش، آموزش عملی هوش مصنوعی را برای کارکنان <span class="hl">شرکت پدافند هوافضای آلماز-آنتی</span> برگزار می کنند.',
        '.trust-text p:nth-child(2)': 'برنامه ها بر اساس وظایف واقعی کاری طراحی شده اند و تحلیل، آماده سازی اسناد، خودکارسازی کارهای تکراری و استفاده ایمن از هوش مصنوعی را در بر می گیرند.',
        '.trust-text p:nth-child(3)': 'اکنون شش برنامه آموزش حرفه ای برای کارکنان این مجموعه برگزار می کنیم.',
        '.trust-text p:nth-child(4)': 'ما فقط درباره شبکه های عصبی صحبت نمی کنیم؛ برای پیاده سازی آن ها در فرایندهای کاری کمک می کنیم.',
        '#contact .head h2': 'تماس',
        '.contact .big-t': 'درباره آموزش یا پیاده سازی هوش مصنوعی گفتگو کنیم<i>.</i>',
        '.contact .note': 'در تلگرام پیام دهید؛ درباره برنامه ها می گوییم و قالب مناسب اهداف تیم شما را انتخاب می کنیم.',
        '.contact .cta .btn.solid span': 'تلگرام · @smitAnin',
        'footer span:nth-child(1)': '© باشگاه هوش مصنوعی در آموزش',
        'footer span:nth-child(2)': 'آژانس چشم اندازهای نو',
        '.snd-t': 'روشن کردن صدا'
      },
      attr: {
        '.portrait img': { alt: 'دنیس آناتولیویچ شاندالین' },
        '.org:nth-child(1) img': { alt: 'نشان ANV-AI' },
        '.org:nth-child(2) img': { alt: 'نشان باشگاه هوش مصنوعی در آموزش' },
        '.banner img': { alt: 'حفاظت دیجیتال: اکوسیستم پیاده سازی هوش مصنوعی با باشگاه هوش مصنوعی در آموزش و ANV-AI' },
        '#skills .logos > div:nth-child(1) img': { alt: 'وزارت علوم و آموزش عالی فدراسیون روسیه' },
        '#skills .logos > div:nth-child(2) img': { alt: 'شرکت پدافند هوافضای آلماز-آنتی' },
        '#skills .logos > div:nth-child(3) img': { alt: 'آکادمی علوم روسیه' },
        '#skills .logos > div:nth-child(4) img': { alt: 'خودکارسازی صنعت نفت و گاز' },
        '#talks .talk:nth-child(1) .ph:nth-child(1) img': { alt: 'دعوت نامه از وزارت علوم و آموزش عالی روسیه' },
        '#talks .talk:nth-child(1) .ph:nth-child(2) img': { alt: 'سخنرانی در وزارت علوم و آموزش عالی' },
        '#talks .talk:nth-child(2) img': { alt: 'سخنرانی در مرکز ملی روسیه' },
        '#talks .talk:nth-child(3) .ph:nth-child(1) img': { alt: 'گواهی' },
        '#talks .talk:nth-child(3) .ph:nth-child(2) img': { alt: 'سخنرانی در انجمن آکادمی آموزش روسیه' },
        '#talks .talk:nth-child(4) img': { alt: 'پخش رادیو Mediametrics' },
        '.gallery button:nth-child(1) img': { alt: 'گواهی دانشگاه دولتی مسکو لومونوسف' },
        '.gallery button:nth-child(2) img': { alt: 'گواهی مدرسه عالی نوآوری دانشگاه دولتی مسکو' },
        '.gallery button:nth-child(3) img': { alt: 'تقدیرنامه مدرسه عالی مدیریت و نوآوری دانشگاه دولتی مسکو' },
        '.gallery button:nth-child(4) img': { alt: 'گواهی شرکت کننده انجمن جامعه دانشگاهی ۲۰۲۵' },
        '.gallery button:nth-child(5) img': { alt: 'گواهی شرکت کننده کنگره بین المللی دانشگاه دولتی مسکو' },
        '.trust-pic video': { 'aria-label': 'هوش مصنوعی جایگزین تخصص مهندسی نیست. آن را تقویت می کند: آلماز-آنتی و باشگاه هوش مصنوعی در آموزش' },
        '#lb': { 'aria-label': 'نمایش تصویر' },
        '#lb .x': { 'aria-label': 'بستن' }
      }
    }
  };

  var original = { text: {}, attr: {}, title: document.title, description: '' };
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var ogDescription = document.querySelector('meta[property="og:description"]');
  original.ogTitle = ogTitle ? ogTitle.getAttribute('content') : '';
  original.ogDescription = ogDescription ? ogDescription.getAttribute('content') : '';
  var description = document.querySelector('meta[name="description"]');
  if (description) original.description = description.getAttribute('content') || '';

  function rememberOriginal() {
    Object.keys(translations.en.text).forEach(function (selector) {
      var element = document.querySelector(selector);
      if (element) original.text[selector] = element.innerHTML;
    });
    Object.keys(translations.en.attr).forEach(function (selector) {
      var element = document.querySelector(selector);
      if (!element) return;
      original.attr[selector] = {};
      Object.keys(translations.en.attr[selector]).forEach(function (attribute) {
        original.attr[selector][attribute] = element.getAttribute(attribute) || '';
      });
    });
  }

  function setText(values) {
    Object.keys(values).forEach(function (selector) {
      var element = document.querySelector(selector);
      if (element) element.innerHTML = values[selector];
    });
  }

  function setAttributes(values) {
    Object.keys(values).forEach(function (selector) {
      var element = document.querySelector(selector);
      if (!element) return;
      Object.keys(values[selector]).forEach(function (attribute) {
        element.setAttribute(attribute, values[selector][attribute]);
      });
    });
  }

  function soundLabel(language) {
    var video = document.querySelector('.trust-pic video');
    var label = document.querySelector('.snd-t');
    if (!video || !label) return;
    var muted = video.muted;
    if (language === 'en') label.textContent = muted ? 'Turn sound on' : 'Turn sound off';
    if (language === 'fa') label.textContent = muted ? 'روشن کردن صدا' : 'خاموش کردن صدا';
    if (language === 'ru') label.textContent = muted ? 'Включить звук' : 'Выключить звук';
  }

  function updateMetadata(language) {
    var entry = translations[language];
    document.title = entry ? entry.title : original.title;
    if (description) description.setAttribute('content', entry ? entry.description : original.description);
    document.querySelectorAll('meta[property="og:title"]').forEach(function (meta) {
      meta.setAttribute('content', entry ? entry.title : original.ogTitle);
    });
    document.querySelectorAll('meta[property="og:description"]').forEach(function (meta) {
      meta.setAttribute('content', entry ? entry.description : original.ogDescription);
    });
  }

  function applyLanguage(language) {
    if (!supported[language]) language = fallbackLanguage;
    var entry = translations[language];
    setText(entry ? entry.text : original.text);
    setAttributes(entry ? entry.attr : original.attr);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-rtl', language === 'fa');
    updateMetadata(language);
    soundLabel(language);
    var control = document.querySelector('#language');
    if (control) control.value = language;
    try { localStorage.setItem(STORAGE_KEY, language); } catch (error) {}
  }

  rememberOriginal();
  var select = document.querySelector('#language');
  if (select) select.addEventListener('change', function () { applyLanguage(select.value); });
  var saved = fallbackLanguage;
  try { saved = localStorage.getItem(STORAGE_KEY) || fallbackLanguage; } catch (error) {}
  applyLanguage(saved);
  document.querySelectorAll('.snd').forEach(function (button) {
    button.addEventListener('click', function () {
      window.setTimeout(function () { soundLabel(document.documentElement.lang); }, 0);
    });
  });
})();
