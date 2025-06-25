// Debug: Verify file is loaded
console.log('=== language.js loaded ===');

// Language translations
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.tours': 'Tours',
        'nav.singapore': 'Singapore',
        'nav.contact': 'Contact',
        'nav.logo': 'Singapore Explorer',
        
        // Hero Section
        'hero.title': 'Discover the Best of Singapore',
        'hero.subtitle': 'Experience the city like a local with our expert-guided tours',
        
        // Contact Page
        'contact.title': 'Contact Us - SingaporeExplorer',
        'contact.hero.title': 'Get In Touch',
        'contact.hero.subtitle': 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
        'contact.form.title': 'Send Us a Message',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your Message',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Information',
        'contact.info.address.title': 'Our Office',
        'contact.info.address': '101 Beach Road, #01-01, Singapore 189703',
        'contact.info.phone.title': 'Phone',
        'contact.info.email.title': 'Email',
        'contact.info.hours.title': 'Working Hours',
        'working.hours.weekdays': 'Mon-Fri: 9:00am - 6:00pm',
        'working.hours.weekends': 'Weekends: 10:00am - 4:00pm',
        'working.hours.holidays': 'Public Holidays: Closed',
        'contact.map.title': 'Find Us on the Map',
        'contact.faq.title': 'Frequently Asked Questions',
        'contact.faq.q1': 'What is your cancellation policy?',
        'contact.faq.a1': 'You can cancel your booking up to 48 hours before the tour for a full refund. Cancellations made within 48 hours are non-refundable.',
        'contact.faq.q2': 'Do you offer private tours?',
        'contact.faq.a2': 'Yes, we offer private tours for individuals and groups. Please contact us for more information and pricing.',
        'contact.faq.q3': 'What should I bring on the tour?',
        'contact.faq.a3': 'We recommend bringing comfortable walking shoes, sunscreen, a hat, and a reusable water bottle.',
        'contact.cta.title': 'Ready to Explore Singapore?',
        'contact.cta.subtitle': 'Book your tour today and experience the best of Singapore with our expert guides.',
        'contact.cta.button': 'View Tours',
        'footer.about.title': 'About SingaporeExplorer',
        'footer.about.text': 'Discover the best of Singapore with our expert-led tours. We offer unique experiences that showcase the rich culture and history of this amazing city.',
        'footer.links.title': 'Quick Links',
        'footer.contact.title': 'Contact Us',
        'hero.button': 'Explore Tours',
        
        // Tours Page
        'tours.page.title': 'Our Tours',
        'tours.page.subtitle': 'Explore Singapore with our curated selection of unique and immersive tours. Whether you\'re a foodie, culture buff, or adventure seeker, there\'s something for everyone!',
        'tours.book': 'Book now',
        'tours.city.title': 'City Highlights Tour',
        'tours.city.desc': 'Experience Singapore\'s iconic landmarks including Marina Bay Sands, Gardens by the Bay, and Merlion Park. Perfect for first-time visitors!',
        'tours.city.duration': '4 hours',
        'tours.city.price': 'from S$85',
        'tours.food.title': 'Hawker Food Adventure',
        'tours.food.desc': 'Embark on a culinary journey through Singapore\'s famous hawker centers. Sample local favorites like Hainanese chicken rice, laksa, and chili crab.',
        'tours.food.duration': '3 hours',
        'tours.food.price': 'from S$62',
        'tours.night.title': 'Night Safari Experience',
        'tours.night.desc': 'Explore the world\'s first nocturnal wildlife park. Enjoy a tram ride and see amazing animals in their natural habitats.',
        'tours.night.duration': '4 hours',
        'tours.night.price': 'from S$63',
        'tours.kampong.title': 'Kampong Glam & Arab Street',
        'tours.kampong.desc': 'Discover the vibrant Malay-Arab quarter, Sultan Mosque, and trendy boutiques. Includes a traditional kueh tasting.',
        'tours.kampong.duration': '3.5 hours',
        'tours.kampong.price': 'from S$60',

        'tours.food.price': 'SGD 90',
        'tours.nature.title': 'Nature & Gardens',
        'tours.nature.desc': 'Immerse yourself in Singapore\'s beautiful green spaces',
        'tours.nature.duration': '5 hours',
        'tours.nature.price': 'SGD 150',
        'tours.heritage.title': 'Heritage Walk',
        'tours.heritage.desc': 'Discover the rich cultural heritage of Singapore',
        'tours.heritage.duration': '3.5 hours',
        'tours.heritage.price': 'SGD 100',
        'tours.viewAll': 'View All Tours',
        
        // Why Choose Us
        'why.title': 'Why Choose Us',
        'why.experts': 'Local Experts',
        'why.experts.desc': 'Our guides are Singaporeans who know every corner of the city',
        'why.small': 'Small Groups',
        'why.small.desc': 'Enjoy personalized attention in our small group tours',
        'why.flexible': 'Flexible Options',
        'why.flexible.desc': 'Customize your experience with our flexible tour options',
        
        // Testimonials
        'testimonials.title': 'What Our Travelers Say',
        'testimonial.1.text': '"The best way to experience Singapore! Our guide was incredibly knowledgeable and showed us places we would never have found on our own."',
        'testimonial.1.author': 'Sarah J.',
        'testimonial.1.location': 'New York, USA',
        'testimonial.2.text': '"The food tour was the highlight of our trip. We got to try so many delicious local dishes we wouldn\'t have known about otherwise."',
        'testimonial.2.author': 'David K.',
        'testimonial.2.location': 'London, UK',
        
        // CTA
        'cta.title': 'Ready to Explore Singapore?',
        'cta.subtitle': 'Book your tour today and discover the real Singapore with us',
        'cta.button': 'Book Now',
        
        // Footer
        'footer.about': 'Your trusted local guide to experiencing the best of Singapore\'s culture, food, and attractions.',
        'footer.links': 'Quick Links',
        'footer.contact': 'Contact Us',
        'footer.follow': 'Follow Us',
        'footer.copyright': '© 2023 SingaporeExplorer. All rights reserved.',
        'footer.address': '123 Orchard Road, Singapore 238867',
        'footer.phone': '+65 6123 4567',
        'footer.email': 'info@singaporeexplorer.com'
    },
    zh: {
        // Tours Page
        'tours.page.title': '我们的旅游套餐',
        'tours.page.subtitle': '通过我们精心策划的独特体验，探索新加坡。不论你是美食家、文化爱好者还是冒险家，总有适合你的行程！',
        'tours.book': '立即预订',
        'tours.city.title': '城市精华游',
        'tours.city.desc': '游览新加坡标志性地标，包括滨海湾金沙、滨海湾花园和鱼尾狮公园。非常适合初次来访者！',
        'tours.city.duration': '4小时',
        'tours.city.price': 'S$85 起',
        'tours.food.title': '小贩美食探险',
        'tours.food.desc': '在新加坡著名的小贩中心开启美食之旅，品尝海南鸡饭、叻沙和辣椒螃蟹等地道美食。',
        'tours.food.duration': '3小时',
        'tours.food.price': 'S$62 起',
        'tours.night.title': '夜间野生动物园体验',
        'tours.night.desc': '探索世界首个夜间野生动物园，乘坐游览车近距离观赏夜行动物。',
        'tours.night.duration': '4小时',
        'tours.night.price': 'S$63 起',
        'tours.kampong.title': '甘榜格南与阿拉伯街',
        'tours.kampong.desc': '探索多彩的马来-阿拉伯街区、苏丹回教堂和时尚精品店。包含传统糕点品尝。',
        'tours.kampong.duration': '3.5小时',
        'tours.kampong.price': 'S$60 起',
        // Navigation
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.tours': '旅游套餐',
        
        // About Page
        'about.hero.title': '关于新加坡探索者',
        'about.hero.subtitle': '您值得信赖的本地向导，带您发现真正的新加坡',
        
        // Story Section
        'about.story.title': '我们的故事',
        'about.story.text1': '新加坡探索者成立于2015年，由一群热爱新加坡的本地人创立。我们相信，通过真正热爱家乡的当地人的视角，是体验新加坡的最佳方式。',
        'about.story.text2': '我们的专业导游团队不仅仅是导游，他们还是故事讲述者、历史学家和新加坡文化的热情大使。每个旅游行程都经过精心设计，展示新加坡的真实面貌，从隐藏的瑰宝到标志性地标。',
        
        // Values Section
        'about.values.title': '我们的使命与价值观',
        'value.passion': '热情',
        'value.passion.text': '我们热衷于与来自世界各地的游客分享新加坡丰富的历史和文化。',
        'value.authenticity': '真实',
        'value.authenticity.text': '我们的旅游项目展示真正的新加坡 - 隐藏的瑰宝、当地故事和真实体验。',
        'value.community': '社区',
        'value.community.text': '我们与当地社区紧密合作，确保可持续旅游和真实体验。',
        'value.excellence': '卓越',
        'value.excellence.text': '我们努力在旅游的每个方面追求卓越，从规划到执行。',
        
        // Team Section
        'team.title': '认识我们的团队',
        'team.member1.name': '陈莎拉',
        'team.member1.role': '首席导游兼创始人',
        'team.member2.name': '李明伟',
        'team.member2.role': '文化专家',
        'team.member3.name': '林美玲',
        'team.member3.role': '美食导游',
        'team.member4.name': '王建国',
        'team.member4.role': '历史学家',
        
        // Buttons
        'btn.meetTeam': '认识我们的团队',
        'btn.viewAllTours': '查看所有旅游套餐',
        'btn.contactUs': '联系我们',
        'btn.readMore': '阅读更多',
        'btn.bookNow': '立即预订',
        
        // Testimonials
        'testimonials.title': '游客评价',
        'testimonial.1.text': '体验新加坡的最佳方式！我们的导游知识渊博，带我们去了很多自己找不到的地方。',
        'testimonial.1.author': '莎拉·J',
        'testimonial.1.location': '美国纽约',
        'testimonial.2.text': '美食之旅太棒了！我们品尝了许多当地美食，还了解了它们背后的历史。强烈推荐！',
        'testimonial.2.author': '迈克尔·T',
        'testimonial.2.location': '英国伦敦',
        'testimonial.3.text': '夜间动物园是我们旅行的亮点！近距离观赏动物是一次难忘的体验。导游们非常专业。',
        'testimonial.3.author': '艾莎·K',
        'testimonial.3.location': '阿联酋迪拜',
        'testimonial.4.text': '唐人街的遗产之旅非常有趣。我们的导游讲述了关于新加坡历史的许多有趣故事。五星推荐！',
        'testimonial.4.author': '大卫·L',
        'testimonial.4.location': '澳大利亚悉尼',
        'testimonial.5.text': '滨海湾花园的游览令人叹为观止。导游对植物和建筑的了解让这次体验更加特别。',
        'testimonial.5.author': '玛丽亚·G',
        'testimonial.5.location': '西班牙马德里',
        'testimonial.6.text': '日落时分的游船是欣赏新加坡天际线的完美方式。导游对城市历史的解说既有趣又引人入胜。',
        'testimonial.6.author': '詹姆斯·W',
        'testimonial.6.location': '加拿大多伦多',
        
        // Team Member Bios
        'team.member1.bio': '拥有超过15年经验，莎拉领导着我们的专业导游团队。',
        'team.member2.bio': '马克是我们新加坡美食的专家。',
        'team.member3.bio': '丽娜通过她引人入胜的导览，让新加坡丰富的历史重现生机。',
        
        // Working Hours
        'working.hours.title': '工作时间',
        'working.hours.weekdays': '周一至周五: 9:00 - 18:00',
        'working.hours.weekends': '周末: 10:00 - 16:00',
        'working.hours.holidays': '公共假期: 休息',
        
        // Why Choose Us
        'why.title': '为什么选择我们',
        'why.experts': '当地专家',
        'why.experts.desc': '我们的导游是熟悉城市每个角落的新加坡人',
        'why.small': '小团游',
        'why.small.desc': '在我们的小团游中享受个性化关注',
        'why.flexible': '灵活选择',
        'why.flexible.desc': '通过我们灵活的旅游选项定制您的体验',
        
        // Values
        'value.passion': '热情',
        'value.passion.text': '我们热衷于与来自世界各地的游客分享新加坡丰富的历史和文化。',
        'value.authenticity': '真实',
        'value.authenticity.text': '我们的旅游项目展示真正的新加坡 - 隐藏的瑰宝、当地故事和真实体验。',
        'value.community': '社区',
        'value.community.text': '我们与当地社区紧密合作，确保可持续旅游和真实体验。',
        'value.excellence': '卓越',
        'value.excellence.text': '我们努力在旅游的每个方面追求卓越，从规划到执行。',
        'nav.singapore': '新加坡',
        'nav.contact': '联系我们',
        'nav.logo': '新加坡探索者',
        
        // Hero Section
        'hero.title': '探索新加坡的精华',
        'hero.subtitle': '与我们的专业导游一起，像当地人一样体验这座城市',
        'hero.button': '探索旅游套餐',
        
        // Contact Page
        'contact.title': '联系我们 - 新加坡探索者',
        'contact.hero.title': '联系我们',
        'contact.hero.subtitle': '我们期待您的来信。请发送消息给我们，我们将尽快回复您。',
        'contact.form.title': '发送消息',
        'contact.form.name': '姓名',
        'contact.form.email': '电子邮箱',
        'contact.form.subject': '主题',
        'contact.form.message': '您的留言',
        'contact.form.submit': '发送消息',
        'contact.info.title': '联系方式',
        'contact.info.address.title': '我们的办公室',
        'contact.info.address': '新加坡海滩路101号#01-01，邮编189703',
        'contact.info.phone.title': '电话',
        'contact.info.email.title': '电子邮箱',
        'contact.info.hours.title': '工作时间',
        'contact.map.title': '在地图上找到我们',
        'contact.faq.title': '常见问题',
        'contact.faq.q1': '取消政策是什么？',
        'contact.faq.a1': '您可以在旅行开始前48小时取消预订并获得全额退款。48小时内的取消将不予退款。',
        'contact.faq.q2': '你们提供私人旅行团吗？',
        'contact.faq.a2': '是的，我们为个人和团体提供私人旅行团服务。请联系我们获取更多信息和价格。',
        'contact.faq.q3': '旅行时需要带什么？',
        'contact.faq.a3': '我们建议您携带舒适的步行鞋、防晒霜、帽子和可重复使用的水瓶。',
        'contact.cta.title': '准备好探索新加坡了吗？',
        'contact.cta.subtitle': '立即预订旅行，与我们的专业导游一起体验新加坡的精华。',
        'contact.cta.button': '查看旅行套餐',
        'footer.about.title': '关于新加坡探索者',
        'footer.about.text': '通过我们专业的导游服务，发现新加坡的精华。我们提供独特的体验，展示这座神奇城市丰富的文化和历史。',
        'footer.links.title': '快速链接',
        'footer.contact.title': '联系我们',
        
        // Tours Section
        'tours.popular': '热门旅游',
        'tours.city.title': '城市亮点之旅',
        'tours.city.desc': '探索新加坡的标志性地标和隐藏的瑰宝',
        'tours.city.duration': '4小时',
        'tours.city.price': '120新元起',
        'tours.food.title': '美食探险',
        'tours.food.desc': '品尝新加坡著名的小贩中心美食',
        'tours.food.duration': '3小时',
        'tours.food.price': '90新元起',
        'tours.nature.title': '自然与花园',
        'tours.nature.desc': '沉浸在新加坡美丽的绿色空间中',
        'tours.nature.duration': '5小时',
        'tours.nature.price': '150新元起',
        'tours.heritage.title': '文化遗产之旅',
        'tours.heritage.desc': '探索新加坡丰富的文化遗产',
        'tours.heritage.duration': '3.5小时',
        'tours.heritage.price': '100新元起',
        'tours.viewAll': '查看所有旅游',
        
        // Why Choose Us
        'why.title': '为何选择我们',
        'why.experts': '当地专家',
        'why.experts.desc': '我们的导游是熟悉城市每个角落的新加坡人',
        'why.small': '小团旅游',
        'why.small.desc': '在我们的小型旅游团中享受个性化关注',
        'why.flexible': '灵活选择',
        'why.flexible.desc': '根据您的喜好定制您的体验',
        
        // Testimonials
        'testimonials.title': '旅客评价',
        'testimonial.1.text': '"体验新加坡的最佳方式！我们的导游知识渊博，带我们去了很多自己永远找不到的地方。"',
        'testimonial.1.author': '莎拉·J',
        'testimonial.1.location': '美国纽约',
        'testimonial.2.text': '"美食之旅是我们旅行的亮点。我们品尝到了很多自己不会知道的美味当地菜肴。"',
        'testimonial.2.author': '大卫·K',
        'testimonial.2.location': '英国伦敦',
        
        // CTA
        'cta.title': '准备好探索新加坡了吗？',
        'cta.subtitle': '立即预订，与我们一起发现真正的新加坡',
        'cta.button': '立即预订',
        
        // Footer
        'footer.about': '您值得信赖的本地向导，带您体验新加坡最佳的文化、美食和景点。',
        'footer.links': '快速链接',
        'footer.contact': '联系我们',
        'footer.follow': '关注我们',
        'footer.copyright': '© 2023 新加坡探索者 版权所有',
        'footer.address': '新加坡乌节路123号，邮编238867',
        'footer.phone': '+65 6123 4567',
        'footer.email': 'info@singaporeexplorer.com'
    }
};

// Function to set the language
function setLanguage(lang) {
    console.log('===== setLanguage called with:', lang, '=====');
    
    try {
        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
        console.log('Saved language preference to localStorage');
        
        // Update UI
        const langButtons = document.querySelectorAll('.lang-btn');
        console.log('Found language buttons:', langButtons.length);
        
        langButtons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            console.log(`Button ${btn.dataset.lang} active:`, isActive);
        });
        
        // Force a reflow to ensure all elements are in the DOM
        document.body.offsetHeight;
        
        // Update content
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Found elements with data-i18n:', elements.length);
        
        if (elements.length === 0) {
            console.warn('No elements with data-i18n attribute found!');
        }
        
        let translatedCount = 0;
        
        elements.forEach((element, index) => {
            const key = element.getAttribute('data-i18n');
            if (!key) {
                console.warn('Element has data-i18n but no key:', element);
                return;
            }
            
            console.log(`[${index}] Processing element with key:`, key);
            console.log('Element HTML before:', element.outerHTML);
            
            // Check if translation exists for this key and language
            if (translations[lang] && translations[lang][key] !== undefined) {
                const translation = translations[lang][key];
                console.log('Translation found:', translation);
                
                try {
                    // Special handling for elements that contain HTML
                    if (element.hasAttribute('data-i18n-html')) {
                        element.innerHTML = translation;
                    } 
                    // Handle logo text
                    else if (element.classList.contains('logo')) {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = translation;
                        const textNode = document.createTextNode(tempDiv.textContent || '');
                        element.innerHTML = '';
                        element.appendChild(textNode);
                        
                        // If there's a span in the translation, add it
                        const spanMatch = translation.match(/<span>(.*?)<\/span>/);
                        if (spanMatch) {
                            const span = document.createElement('span');
                            span.textContent = spanMatch[1];
                            element.appendChild(span);
                        }
                    } 
                    // Handle input placeholders
                    else if (element.hasAttribute('placeholder')) {
                        element.placeholder = translation;
                    }
                    // Default case - set text content
                    else {
                        element.textContent = translation;
                    }
                    
                    translatedCount++;
                    console.log('Element updated successfully');
                } catch (error) {
                    console.error('Error updating element:', error);
                }
            } else {
                console.warn('No translation found for key:', key, 'in language:', lang);
                console.log('Available keys:', Object.keys(translations[lang] || {}));
            }
            
            console.log('Element HTML after:', element.outerHTML);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update text direction if needed
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        console.log(`===== Language set to: ${lang} =====`);
        console.log(`Translated ${translatedCount} of ${elements.length} elements`);
        
    } catch (error) {
        console.error('Error in setLanguage:', error);
    }
}

// Initialize language
function initLanguage() {
    console.log('Initializing language...');
    
    // Check for saved language preference or use browser language
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = (navigator.language || 'en').split('-')[0];
    const defaultLang = savedLang || (['zh', 'en'].includes(browserLang) ? browserLang : 'en');
    
    console.log('Language settings:', { savedLang, browserLang, defaultLang });
    
    // Set initial language
    setLanguage(defaultLang);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    
    langButtons.forEach(btn => {
        console.log('Adding click handler for button:', btn.dataset.lang);
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Language button clicked:', btn.dataset.lang);
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Trigger a small delay to ensure all elements are in the DOM
    setTimeout(() => {
        console.log('Running delayed language check...');
        setLanguage(defaultLang);
    }, 100);
}

// Function to initialize everything after DOM is loaded
function initializeApp() {
    // Initialize language first
    initLanguage();
    
    // Initialize any other components that depend on translations
    if (typeof initOtherComponents === 'function') {
        initOtherComponents();
    }
}

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // `DOMContentLoaded` has already fired
    initializeApp();
}
