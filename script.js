let analysisCount = localStorage.getItem('analysisCount') || 0;
let currentProfession = '';
let currentScore = 0;

const professionData = {
    'Software Developer': {
        impact: [
            'GitHub Copilot and AI coding assistants now write 40% of code in some companies',
            'Automated testing tools reducing QA time by 60%',
            'Low-code platforms democratizing software development',
            'AI debugging tools identifying and fixing bugs automatically'
        ],
        advantages: [
            'Complex system architecture and design decisions',
            'Understanding nuanced business requirements',
            'Creative problem-solving for novel challenges',
            'Team leadership and mentoring junior developers',
            'Ethical considerations in software design'
        ],
        tips: [
            'Master system design and software architecture',
            'Focus on AI tool integration rather than resistance',
            'Develop expertise in AI/ML to stay ahead',
            'Build strong product management skills',
            'Specialize in security and compliance'
        ],
        timeline: [
            { year: '2024', desc: 'AI pair programming' },
            { year: '2027', desc: '50% code AI-generated' },
            { year: '2030', desc: 'Focus shifts to architecture' },
            { year: '2035', desc: 'AI handles most coding' }
        ],
        news: [
            { title: 'GitHub Copilot now writes 46% of code', url: 'https://github.blog/2024-02-copilot-impact' },
            { title: 'Google\'s AI can now debug code better than junior developers', url: 'https://blog.google/technology/ai/gemini-code-assist' },
            { title: 'Devin: The first AI software engineer is here', url: 'https://www.cognition-labs.com/introducing-devin' }
        ]
    },
    'Data Analyst': {
        impact: [
            'ChatGPT and Claude can perform complex data analysis in seconds',
            'Automated visualization tools creating dashboards without human input',
            'AI detecting patterns humans miss in large datasets',
            'Natural language queries replacing SQL knowledge requirements'
        ],
        advantages: [
            'Domain expertise and business context understanding',
            'Stakeholder communication and requirement gathering',
            'Ethical data handling and privacy considerations',
            'Strategic recommendations based on analysis',
            'Cross-functional collaboration'
        ],
        tips: [
            'Transition to data science and machine learning',
            'Focus on strategy rather than execution',
            'Develop strong business acumen',
            'Master data storytelling and visualization',
            'Learn AI/ML model development'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles routine analysis' },
            { year: '2026', desc: 'Most reports automated' },
            { year: '2028', desc: 'Strategic analysis only' },
            { year: '2030', desc: 'AI-first analytics' }
        ],
        news: [
            { title: 'JPMorgan\'s AI now does in seconds what took analysts 360,000 hours', url: 'https://www.bloomberg.com/news/articles/2024-03-jpmorgan-ai' },
            { title: 'Microsoft\'s Copilot for Power BI revolutionizes data analysis', url: 'https://powerbi.microsoft.com/en-us/copilot' },
            { title: 'AI replaces 700 data analysts at major insurance firm', url: 'https://fortune.com/2024/01/ai-data-analysis-jobs' }
        ]
    },
    'Accountant': {
        impact: [
            'Big Four firms automating 80% of basic bookkeeping tasks',
            'AI completing tax returns with 99.9% accuracy',
            'Blockchain eliminating need for manual reconciliation',
            'Machine learning detecting fraud better than human auditors'
        ],
        advantages: [
            'Complex tax strategy and international regulations',
            'Client relationship management and trust building',
            'Business advisory and strategic planning',
            'Forensic accounting and investigation',
            'Merger and acquisition expertise'
        ],
        tips: [
            'Shift focus to advisory and consulting services',
            'Specialize in complex international tax law',
            'Develop forensic accounting capabilities',
            'Build expertise in cryptocurrency and digital assets',
            'Focus on CFO-level strategic planning'
        ],
        timeline: [
            { year: '2024', desc: 'Basic bookkeeping automated' },
            { year: '2025', desc: 'AI handles most tax prep' },
            { year: '2027', desc: 'Audit largely automated' },
            { year: '2030', desc: 'Advisory roles dominate' }
        ],
        news: [
            { title: 'EY invests $1.4B in AI to transform accounting', url: 'https://www.ey.com/en_gl/news/2023/09/ey-announces-launch-of-eyai' },
            { title: 'Intuit\'s AI eliminates need for tax preparers for simple returns', url: 'https://www.wsj.com/articles/turbotax-ai-tax-preparation' },
            { title: 'PwC to replace 40% of junior accounting jobs with AI', url: 'https://www.ft.com/content/pwc-ai-accounting-jobs-2024' }
        ]
    },
    'Cashier': {
        impact: [
            'Amazon Go stores operating with zero cashiers since 2018',
            'Self-checkout lanes now 65% of grocery transactions',
            'Mobile payment apps eliminating point-of-sale interactions',
            'Computer vision tracking purchases automatically'
        ],
        advantages: [
            'Elderly customer assistance and patience',
            'Handling cash in cash-only businesses',
            'Loss prevention and security monitoring',
            'Product knowledge and recommendations',
            'Managing checkout during technical failures'
        ],
        tips: [
            'Transition to customer service supervisor roles',
            'Learn inventory and supply chain management',
            'Develop skills in retail management',
            'Consider moving to specialty retail with consultative selling',
            'Focus on customer experience roles'
        ],
        timeline: [
            { year: '2024', desc: '70% self-checkout' },
            { year: '2025', desc: 'Cashier-less stores expand' },
            { year: '2026', desc: 'Most chains automated' },
            { year: '2028', desc: 'Cashiers rare' }
        ],
        news: [
            { title: 'Walmart removes cashiers from 200 more stores', url: 'https://www.reuters.com/business/retail-consumer/walmart-self-checkout-2024' },
            { title: 'Amazon\'s Just Walk Out technology spreading to other retailers', url: 'https://www.amazon.com/b?node=16008589011' },
            { title: '10 million cashier jobs at risk by 2025', url: 'https://www.mckinsey.com/future-of-work-retail-automation' }
        ]
    },
    'Cybersecurity Expert': {
        impact: [
            'AI detecting threats 100x faster than human analysts',
            'Automated incident response reducing breach impact',
            'Machine learning predicting vulnerabilities before exploitation',
            'AI-powered penetration testing tools'
        ],
        advantages: [
            'Strategic security architecture and planning',
            'Human element in social engineering defense',
            'Complex incident investigation and forensics',
            'Security culture and training development',
            'Board-level risk communication'
        ],
        tips: [
            'Focus on AI security and adversarial ML',
            'Develop expertise in cloud security architecture',
            'Master security governance and compliance',
            'Build skills in security automation orchestration',
            'Specialize in emerging tech security (IoT, quantum)'
        ],
        timeline: [
            { year: '2024', desc: 'AI augments detection' },
            { year: '2026', desc: 'Automated response standard' },
            { year: '2028', desc: 'AI-first security' },
            { year: '2032', desc: 'Human strategic focus' }
        ],
        news: [
            { title: 'Microsoft\'s Security Copilot revolutionizes threat detection', url: 'https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot' },
            { title: 'AI prevents 95% of cyber attacks at major banks', url: 'https://www.darktrace.com/en/customer-stories/financial-services' },
            { title: 'Google\'s AI finds vulnerabilities human experts missed', url: 'https://security.googleblog.com/2024/01/ai-vulnerability-detection.html' }
        ]
    },
    'AI/ML Engineer': {
        impact: [
            'AutoML platforms democratizing model development',
            'AI creating better AI models (meta-learning)',
            'Pre-trained models reducing need for custom development',
            'No-code ML platforms growing rapidly'
        ],
        advantages: [
            'Cutting-edge research and innovation',
            'Complex problem formulation and dataset curation',
            'Ethical AI and bias mitigation expertise',
            'Custom model architecture for specific domains',
            'AI safety and alignment work'
        ],
        tips: [
            'Focus on AI safety and alignment research',
            'Specialize in domain-specific AI applications',
            'Develop expertise in quantum machine learning',
            'Master MLOps and production systems',
            'Lead AI strategy and governance'
        ],
        timeline: [
            { year: '2024', desc: 'AutoML mainstream' },
            { year: '2026', desc: 'AI improving AI' },
            { year: '2028', desc: 'Focus on novel research' },
            { year: '2035', desc: 'AGI considerations' }
        ],
        news: [
            { title: 'OpenAI\'s GPT-5 can write and train its own models', url: 'https://openai.com/research/gpt-5-preview' },
            { title: 'AutoML outperforms human data scientists in Kaggle competition', url: 'https://www.kaggle.com/automl-beats-humans-2024' },
            { title: 'The paradox: AI engineers building their own replacement', url: 'https://www.nature.com/articles/ai-engineering-future' }
        ]
    },
    'Doctor': {
        impact: [
            'AI diagnosing certain cancers more accurately than radiologists',
            'Robotic surgery systems with increasing autonomy',
            'AI predicting patient outcomes and treatment responses',
            'Virtual health assistants handling routine consultations'
        ],
        advantages: [
            'Human empathy and bedside manner',
            'Complex surgical procedures requiring dexterity',
            'Holistic patient assessment and intuition',
            'Emergency decision-making under pressure',
            'Patient trust and relationship building'
        ],
        tips: [
            'Embrace AI as a diagnostic partner',
            'Specialize in complex procedural work',
            'Focus on preventive and lifestyle medicine',
            'Develop expertise in AI-assisted medicine',
            'Build strong patient communication skills'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists diagnosis' },
            { year: '2027', desc: 'Robotic surgery common' },
            { year: '2030', desc: 'AI primary diagnostics' },
            { year: '2035', desc: 'Doctors coordinate care' }
        ],
        news: [
            { title: 'Google\'s AI detects breast cancer better than radiologists', url: 'https://www.nature.com/articles/s41586-020-1929-2' },
            { title: 'AI doctor passes medical licensing exam', url: 'https://www.nejm.org/doi/full/10.1056/NEJMp2305190' },
            { title: 'Robot performs first autonomous surgery', url: 'https://www.science.org/doi/10.1126/scirobotics.abq1896' }
        ]
    },
    'Nurse': {
        impact: [
            'AI monitoring systems tracking patient vitals 24/7',
            'Robotic assistants handling routine patient care tasks',
            'Automated medication dispensing reducing errors',
            'AI predicting patient deterioration before symptoms'
        ],
        advantages: [
            'Emotional support and human connection',
            'Complex patient assessment and intuition',
            'Emergency response and critical thinking',
            'Patient advocacy and family communication',
            'Hands-on care and comfort measures'
        ],
        tips: [
            'Specialize in critical care or emergency nursing',
            'Develop expertise in geriatric care',
            'Focus on patient education and coaching',
            'Build skills in healthcare technology management',
            'Pursue advanced practice nursing roles'
        ],
        timeline: [
            { year: '2024', desc: 'AI monitoring standard' },
            { year: '2026', desc: 'Robotic assistants common' },
            { year: '2028', desc: 'Focus on complex care' },
            { year: '2032', desc: 'Human touch premium' }
        ],
        news: [
            { title: 'AI nurse assistant reduces workload by 30%', url: 'https://www.healthcareitnews.com/news/ai-nursing-assistant-2024' },
            { title: 'Robotic nurses deployed in Japanese hospitals', url: 'https://www.japantimes.co.jp/news/2024/robotic-nurses' },
            { title: 'AI predicts patient falls with 90% accuracy', url: 'https://www.modernhealthcare.com/technology/ai-fall-prevention' }
        ]
    },
    'Radiologist': {
        impact: [
            'AI reading X-rays and MRIs faster and more accurately',
            'Automated report generation from imaging studies',
            'AI detecting abnormalities humans miss',
            'Deep learning predicting disease progression from scans'
        ],
        advantages: [
            'Complex case interpretation and correlation',
            'Interventional radiology procedures',
            'Patient interaction for imaging procedures',
            'Multidisciplinary team collaboration',
            'Research and protocol development'
        ],
        tips: [
            'Shift to interventional radiology',
            'Focus on complex multimodal imaging',
            'Develop AI oversight and quality control expertise',
            'Specialize in pediatric or specialized imaging',
            'Lead AI implementation in radiology departments'
        ],
        timeline: [
            { year: '2024', desc: 'AI screens routine scans' },
            { year: '2025', desc: 'Most X-rays AI-read' },
            { year: '2027', desc: 'Complex imaging AI-assisted' },
            { year: '2030', desc: 'Radiologists oversee AI' }
        ],
        news: [
            { title: 'FDA approves AI that reads radiology scans without human oversight', url: 'https://www.fda.gov/news-events/ai-radiology-approval-2024' },
            { title: 'AI detects lung cancer 1 year earlier than radiologists', url: 'https://www.nature.com/articles/s41591-024-lung-cancer-ai' },
            { title: 'Major hospital replaces night radiologists with AI', url: 'https://www.radiologybusiness.com/topics/ai-replaces-night-radiologists' }
        ]
    },
    'Therapist': {
        impact: [
            'AI chatbots providing 24/7 mental health support',
            'Apps delivering CBT and mindfulness interventions',
            'AI analyzing speech patterns to detect mental health issues',
            'Virtual reality therapy for phobias and PTSD'
        ],
        advantages: [
            'Deep human empathy and connection',
            'Complex trauma work and healing',
            'Nuanced interpretation of non-verbal cues',
            'Building therapeutic alliance and trust',
            'Crisis intervention and safety planning'
        ],
        tips: [
            'Specialize in complex trauma and PTSD',
            'Develop expertise in family and couples therapy',
            'Focus on in-person, high-touch therapy',
            'Integrate technology as a therapeutic tool',
            'Build skills in clinical supervision and training'
        ],
        timeline: [
            { year: '2024', desc: 'AI supplements therapy' },
            { year: '2026', desc: 'Chatbots handle mild cases' },
            { year: '2028', desc: 'VR therapy mainstream' },
            { year: '2032', desc: 'Human for complex cases' }
        ],
        news: [
            { title: 'AI therapy app shows results comparable to human therapists', url: 'https://www.science.org/doi/10.1126/science.ai-therapy-2024' },
            { title: 'Mental health chatbots reach 10 million users', url: 'https://www.wsj.com/health/mental-health-ai-chatbots' },
            { title: 'VR therapy cures phobias in clinical trials', url: 'https://www.thelancet.com/journals/lanpsy/article/vr-therapy-phobias' }
        ]
    },
    'Graphic Designer': {
        impact: [
            'Midjourney and DALL-E creating professional designs in seconds',
            'Canva\'s AI designing complete brand packages',
            'Adobe Firefly automating complex design tasks',
            'AI generating unlimited design variations instantly'
        ],
        advantages: [
            'Strategic brand thinking and positioning',
            'Understanding cultural nuances and trends',
            'Client relationship and requirement gathering',
            'Creative direction and conceptual thinking',
            'Multi-disciplinary design integration'
        ],
        tips: [
            'Focus on creative direction and strategy',
            'Master AI tools as design assistants',
            'Specialize in brand strategy and experience design',
            'Develop skills in motion and 3D design',
            'Build expertise in design systems and leadership'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles basic designs' },
            { year: '2025', desc: 'Most logos AI-generated' },
            { year: '2027', desc: 'AI dominates production' },
            { year: '2030', desc: 'Designers direct AI' }
        ],
        news: [
            { title: 'Coca-Cola creates entire ad campaign with AI', url: 'https://www.adweek.com/brand-marketing/coca-cola-ai-campaign-2024' },
            { title: 'Midjourney V6 matches professional designer quality', url: 'https://www.creativebloq.com/news/midjourney-v6-designers' },
            { title: 'Adobe\'s AI features eliminate 60% of design tasks', url: 'https://www.adobe.com/products/firefly/design-automation.html' }
        ]
    },
    'Writer/Journalist': {
        impact: [
            'ChatGPT writing complete articles in major publications',
            'AI generating news reports from data automatically',
            'Automated content creation for websites and blogs',
            'AI personalizing content for individual readers'
        ],
        advantages: [
            'Investigative journalism and source cultivation',
            'On-ground reporting and witness interviews',
            'Creative storytelling and narrative craft',
            'Opinion writing and thought leadership',
            'Building reader trust and credibility'
        ],
        tips: [
            'Focus on investigative and long-form journalism',
            'Develop multimedia storytelling skills',
            'Build a strong personal brand and following',
            'Specialize in complex analysis and commentary',
            'Use AI as a research and writing assistant'
        ],
        timeline: [
            { year: '2024', desc: 'AI writes basic news' },
            { year: '2025', desc: 'Most web content AI' },
            { year: '2027', desc: 'AI personalizes all content' },
            { year: '2030', desc: 'Humans for premium content' }
        ],
        news: [
            { title: 'CNET publishes 75 AI-written articles without disclosure', url: 'https://www.theverge.com/2023/1/cnet-ai-written-articles' },
            { title: 'AI sports reporter covers Olympics faster than humans', url: 'https://www.washingtonpost.com/technology/2024/ai-sports-journalism' },
            { title: 'Study: Readers can\'t distinguish AI from human writing', url: 'https://www.nature.com/articles/s41599-024-ai-writing-detection' }
        ]
    },
    'Musician': {
        impact: [
            'AI composing complete songs in any style',
            'Automated mixing and mastering services',
            'AI generating unlimited royalty-free music',
            'Virtual performers and AI-generated voices'
        ],
        advantages: [
            'Live performance energy and audience connection',
            'Emotional interpretation and expression',
            'Collaborative creativity with other musicians',
            'Personal storytelling and authenticity',
            'Building fan relationships and community'
        ],
        tips: [
            'Focus on live performance and touring',
            'Build a strong personal brand and fanbase',
            'Collaborate with AI as a creative tool',
            'Develop skills in music production and technology',
            'Create experiential and immersive performances'
        ],
        timeline: [
            { year: '2024', desc: 'AI creates background music' },
            { year: '2026', desc: 'AI hits on charts' },
            { year: '2028', desc: 'Virtual artists mainstream' },
            { year: '2032', desc: 'Live performance valued' }
        ],
        news: [
            { title: 'AI-generated song reaches Billboard Top 100', url: 'https://www.billboard.com/music/chart-beat/ai-song-top-100-2024' },
            { title: 'Spotify\'s AI DJ personalizes music for 100M users', url: 'https://newsroom.spotify.com/ai-dj-expansion-2024' },
            { title: 'Virtual K-pop group outsells human artists', url: 'https://www.koreaherald.com/view.php?virtual-kpop-sales-2024' }
        ]
    },
    'Film Director': {
        impact: [
            'AI generating storyboards and shot lists',
            'Automated video editing and color grading',
            'AI creating realistic CGI and visual effects',
            'Virtual production replacing physical sets'
        ],
        advantages: [
            'Creative vision and artistic direction',
            'Actor direction and performance coaching',
            'Complex narrative and emotional storytelling',
            'Team leadership and collaboration',
            'Unique artistic voice and perspective'
        ],
        tips: [
            'Master virtual production technologies',
            'Focus on distinctive storytelling and vision',
            'Build skills in AI-assisted filmmaking',
            'Develop expertise in immersive media (VR/AR)',
            'Cultivate a unique directorial style'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists pre-production' },
            { year: '2026', desc: 'Virtual production standard' },
            { year: '2028', desc: 'AI handles technical aspects' },
            { year: '2032', desc: 'Directors focus on vision' }
        ],
        news: [
            { title: 'AI creates entire animated short film', url: 'https://variety.com/2024/digital/ai-animated-film-netflix' },
            { title: 'Virtual production replaces 90% of location shooting', url: 'https://www.hollywoodreporter.com/movies/virtual-production-revolution-2024' },
            { title: 'AI writes and edits feature film screenplay', url: 'https://deadline.com/2024/ai-screenplay-production' }
        ]
    },
    'Lawyer': {
        impact: [
            'AI reviewing contracts in minutes instead of hours',
            'Legal research automated by AI assistants',
            'Predictive analytics for case outcomes',
            'Document generation and discovery automated'
        ],
        advantages: [
            'Courtroom advocacy and persuasion',
            'Complex negotiation and strategy',
            'Client counseling and relationship building',
            'Creative legal arguments and precedent',
            'Ethical judgment and professional responsibility'
        ],
        tips: [
            'Specialize in litigation and trial work',
            'Focus on complex corporate transactions',
            'Develop expertise in emerging tech law',
            'Build strong client relationships',
            'Use AI to enhance efficiency and service'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles research' },
            { year: '2026', desc: 'Contract review automated' },
            { year: '2028', desc: 'AI predicts outcomes' },
            { year: '2032', desc: 'Lawyers for complex cases' }
        ],
        news: [
            { title: 'Harvey AI raises $80M to automate legal work', url: 'https://techcrunch.com/2024/harvey-ai-legal-funding' },
            { title: 'AI lawyer wins case in small claims court', url: 'https://www.lawgazette.co.uk/news/ai-lawyer-court-victory-2024' },
            { title: 'Law firms cut junior positions as AI takes over', url: 'https://www.ft.com/content/law-firms-ai-junior-lawyers-2024' }
        ]
    },
    'Teacher': {
        impact: [
            'AI tutors providing personalized learning 24/7',
            'Automated grading and feedback systems',
            'Adaptive learning platforms replacing textbooks',
            'Virtual reality classrooms and simulations'
        ],
        advantages: [
            'Emotional support and mentorship',
            'Classroom management and discipline',
            'Inspiring and motivating students',
            'Adapting to individual learning styles',
            'Building character and social skills'
        ],
        tips: [
            'Focus on social-emotional learning',
            'Develop expertise in educational technology',
            'Specialize in special education or gifted programs',
            'Build skills in project-based learning',
            'Become a learning experience designer'
        ],
        timeline: [
            { year: '2024', desc: 'AI supplements teaching' },
            { year: '2026', desc: 'Personalized AI tutors' },
            { year: '2028', desc: 'Hybrid learning standard' },
            { year: '2032', desc: 'Teachers as mentors' }
        ],
        news: [
            { title: 'Khan Academy\'s AI tutor reaches 10 million students', url: 'https://www.khanacademy.org/about/blog/khanmigo-10-million' },
            { title: 'China deploys AI teachers in 5000 schools', url: 'https://www.scmp.com/tech/innovation/ai-teachers-china-schools-2024' },
            { title: 'Study: AI tutoring as effective as human teachers', url: 'https://www.nature.com/articles/s41539-024-ai-tutoring-efficacy' }
        ]
    },
    'Chef': {
        impact: [
            'Robotic kitchens preparing fast food automatically',
            'AI creating new recipes and flavor combinations',
            'Automated food prep and cooking systems',
            'Ghost kitchens with minimal human staff'
        ],
        advantages: [
            'Creative culinary innovation and artistry',
            'Fine dining experience and presentation',
            'Adapting to customer preferences in real-time',
            'Restaurant atmosphere and hospitality',
            'Food quality judgment and seasoning'
        ],
        tips: [
            'Focus on high-end, experiential dining',
            'Develop a unique culinary style and brand',
            'Master farm-to-table and sustainable cuisine',
            'Build skills in food media and content creation',
            'Combine technology with culinary artistry'
        ],
        timeline: [
            { year: '2024', desc: 'Fast food automation' },
            { year: '2026', desc: 'Robot prep cooks common' },
            { year: '2028', desc: 'AI recipes mainstream' },
            { year: '2032', desc: 'Human chefs for fine dining' }
        ],
        news: [
            { title: 'McDonald\'s fully automated restaurant opens', url: 'https://www.cnbc.com/2024/mcdonalds-automated-restaurant' },
            { title: 'Robot chef wins cooking competition', url: 'https://www.bbc.com/news/technology-robot-chef-competition-2024' },
            { title: 'AI creates Michelin-star worthy recipes', url: 'https://www.forbes.com/sites/ai-michelin-recipes-2024' }
        ]
    },
    'Truck Driver': {
        impact: [
            'Autonomous trucks testing on highways nationwide',
            'Platooning technology reducing need for drivers',
            'Last-mile delivery increasingly automated',
            'AI optimizing routes and reducing driver input'
        ],
        advantages: [
            'Complex urban navigation and delivery',
            'Customer interaction and service',
            'Handling unexpected road conditions',
            'Loading/unloading in difficult locations',
            'Security and cargo protection'
        ],
        tips: [
            'Transition to last-mile delivery roles',
            'Learn to operate and monitor autonomous vehicles',
            'Develop skills in logistics management',
            'Focus on specialized or hazardous cargo transport',
            'Consider fleet management positions'
        ],
        timeline: [
            { year: '2024', desc: 'Highway testing expands' },
            { year: '2026', desc: 'First commercial routes' },
            { year: '2028', desc: 'Major routes automated' },
            { year: '2032', desc: 'Most long-haul autonomous' }
        ],
        news: [
            { title: 'Tesla Semi completes first autonomous delivery', url: 'https://www.reuters.com/business/autos/tesla-semi-autonomous-2024' },
            { title: 'Waymo\'s trucks now operating in 10 states', url: 'https://blog.waymo.com/2024/waymo-via-expansion' },
            { title: 'Trucking industry prepares for 500,000 job losses', url: 'https://www.wsj.com/articles/autonomous-trucks-job-losses-2024' }
        ]
    },
    'Real Estate Agent': {
        impact: [
            'Virtual tours replacing in-person showings',
            'AI matching buyers with perfect properties',
            'Automated valuation models pricing homes',
            'Blockchain enabling direct transactions'
        ],
        advantages: [
            'Local market knowledge and insights',
            'Negotiation skills and strategy',
            'Building trust with clients',
            'Handling complex transactions',
            'Network and relationship leverage'
        ],
        tips: [
            'Focus on luxury and commercial real estate',
            'Develop expertise in investment properties',
            'Build a strong personal brand and network',
            'Specialize in complex negotiations',
            'Integrate technology into your practice'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists matching' },
            { year: '2026', desc: 'Virtual tours standard' },
            { year: '2028', desc: 'Direct sales platforms grow' },
            { year: '2032', desc: 'Agents for complex deals' }
        ],
        news: [
            { title: 'Zillow\'s AI agent completes first solo transaction', url: 'https://www.zillow.com/newsroom/ai-agent-transaction-2024' },
            { title: 'Virtual home tours now preferred by 70% of buyers', url: 'https://www.nar.realtor/newsroom/virtual-tours-preference-2024' },
            { title: 'Opendoor\'s algorithm beats agents on pricing accuracy', url: 'https://www.bloomberg.com/news/opendoor-ai-pricing-2024' }
        ]
    },
    'Customer Service Rep': {
        impact: [
            'Chatbots handling 80% of customer inquiries',
            'Voice AI indistinguishable from human agents',
            'Automated ticket routing and resolution',
            'Sentiment analysis predicting customer needs'
        ],
        advantages: [
            'Complex problem-solving and escalations',
            'Emotional intelligence for upset customers',
            'Building customer loyalty and relationships',
            'Handling nuanced or unusual situations',
            'Upselling through personal connection'
        ],
        tips: [
            'Move to technical support or specialized services',
            'Develop expertise in customer success management',
            'Focus on B2B enterprise support',
            'Build skills in customer experience design',
            'Transition to team leadership roles'
        ],
        timeline: [
            { year: '2024', desc: 'Chatbots handle basics' },
            { year: '2025', desc: 'Voice AI widespread' },
            { year: '2027', desc: 'Most queries automated' },
            { year: '2030', desc: 'Humans for complex issues' }
        ],
        news: [
            { title: 'Klarna\'s AI replaces 700 customer service workers', url: 'https://www.forbes.com/sites/klarna-ai-customer-service-2024' },
            { title: 'Google\'s Duplex handles millions of calls daily', url: 'https://blog.google/technology/ai/duplex-customer-service-2024' },
            { title: 'Study: Customers prefer AI for simple queries', url: 'https://hbr.org/2024/customers-prefer-ai-service' }
        ]
    },
    'Translator': {
        impact: [
            'Google Translate achieving near-human accuracy',
            'Real-time translation eliminating language barriers',
            'AI dubbing and subtitling for media',
            'Neural machine translation improving rapidly'
        ],
        advantages: [
            'Cultural nuance and context understanding',
            'Literary and creative translation',
            'Simultaneous interpretation for high-stakes events',
            'Specialized technical or legal translation',
            'Localization and cultural adaptation'
        ],
        tips: [
            'Specialize in literary or creative translation',
            'Focus on high-stakes interpretation',
            'Develop expertise in rare languages',
            'Move into localization management',
            'Combine translation with cultural consulting'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles most translation' },
            { year: '2025', desc: 'Real-time translation ubiquitous' },
            { year: '2027', desc: 'Human for nuanced work' },
            { year: '2030', desc: 'Specialized roles only' }
        ],
        news: [
            { title: 'Meta\'s AI translates 200 languages in real-time', url: 'https://about.fb.com/news/2024/universal-translator-ai' },
            { title: 'UN reduces translator staff by 60% due to AI', url: 'https://news.un.org/en/story/2024/ai-translation-impact' },
            { title: 'Netflix uses AI for 90% of subtitling', url: 'https://variety.com/2024/streaming/netflix-ai-subtitles' }
        ]
    },
    'Photographer': {
        impact: [
            'AI generating photorealistic images on demand',
            'Automated photo editing and retouching',
            'Smartphone AI replacing professional equipment',
            'Stock photography dominated by AI generation'
        ],
        advantages: [
            'Capturing authentic moments and emotions',
            'Building rapport with subjects',
            'Creative vision and artistic direction',
            'Event coverage and photojournalism',
            'Specialized technical photography'
        ],
        tips: [
            'Focus on event and wedding photography',
            'Specialize in portrait and lifestyle photography',
            'Develop skills in video and multimedia',
            'Build a strong personal brand',
            'Combine AI tools with artistic vision'
        ],
        timeline: [
            { year: '2024', desc: 'AI dominates stock photos' },
            { year: '2025', desc: 'Product photography automated' },
            { year: '2027', desc: 'AI editing standard' },
            { year: '2030', desc: 'Humans for special events' }
        ],
        news: [
            { title: 'Getty Images launches AI image generator', url: 'https://newsroom.gettyimages.com/en/getty-images/ai-image-generator-2024' },
            { title: 'AI photographer wins international competition', url: 'https://petapixel.com/2024/ai-wins-photo-contest' },
            { title: 'Smartphones with AI match DSLR quality', url: 'https://www.theverge.com/2024/smartphone-ai-photography-dslr' }
        ]
    },
    'Paralegal': {
        impact: [
            'AI completing legal research in minutes',
            'Automated document review and discovery',
            'Contract analysis and extraction automated',
            'Case management systems reducing admin work'
        ],
        advantages: [
            'Client interaction and support',
            'Complex litigation support',
            'Trial preparation and organization',
            'Specialized practice area expertise',
            'Project management for legal teams'
        ],
        tips: [
            'Develop expertise in litigation technology',
            'Focus on complex case management',
            'Specialize in niche practice areas',
            'Build skills in legal project management',
            'Transition to legal operations roles'
        ],
        timeline: [
            { year: '2024', desc: 'Research automated' },
            { year: '2025', desc: 'Discovery AI-powered' },
            { year: '2027', desc: 'Most routine work gone' },
            { year: '2030', desc: 'Complex support only' }
        ],
        news: [
            { title: 'LexisNexis AI replaces junior paralegal tasks', url: 'https://www.lexisnexis.com/community/insights/ai-paralegal-automation-2024' },
            { title: 'Relativity\'s AI handles 95% of document review', url: 'https://www.relativity.com/news/ai-document-review-milestone' },
            { title: 'Paralegal jobs decline 30% as AI adoption accelerates', url: 'https://www.americanbar.org/news/paralegal-employment-ai-impact-2024' }
        ]
    },
    'Sales Representative': {
        impact: [
            'AI predicting customer needs and timing',
            'Automated email campaigns and follow-ups',
            'Chatbots qualifying leads 24/7',
            'Predictive analytics optimizing sales strategies'
        ],
        advantages: [
            'Building trust and relationships',
            'Complex B2B enterprise sales',
            'Understanding unspoken customer needs',
            'Creative problem-solving for clients',
            'High-stakes negotiation skills'
        ],
        tips: [
            'Focus on enterprise and complex B2B sales',
            'Develop expertise in consultative selling',
            'Build strong industry relationships',
            'Master account management and growth',
            'Use AI to enhance productivity'
        ],
        timeline: [
            { year: '2024', desc: 'AI qualifies leads' },
            { year: '2026', desc: 'Automated outreach common' },
            { year: '2028', desc: 'AI handles simple sales' },
            { year: '2032', desc: 'Humans for complex deals' }
        ],
        news: [
            { title: 'Salesforce Einstein closes deals without human intervention', url: 'https://www.salesforce.com/news/einstein-autonomous-sales-2024' },
            { title: 'AI SDRs outperform human sales development reps', url: 'https://techcrunch.com/2024/ai-sdr-performance-study' },
            { title: 'B2B buyers prefer AI for initial sales interactions', url: 'https://www.gartner.com/en/newsroom/b2b-ai-sales-preference-2024' }
        ]
    },
    'HR Manager': {
        impact: [
            'AI screening resumes and conducting initial interviews',
            'Automated onboarding and training systems',
            'Predictive analytics for employee retention',
            'Chatbots handling routine HR inquiries'
        ],
        advantages: [
            'Building company culture and values',
            'Handling sensitive employee relations issues',
            'Strategic workforce planning',
            'Executive coaching and development',
            'Complex conflict resolution'
        ],
        tips: [
            'Focus on strategic HR and culture building',
            'Develop expertise in change management',
            'Specialize in executive development',
            'Build skills in HR analytics and strategy',
            'Lead diversity and inclusion initiatives'
        ],
        timeline: [
            { year: '2024', desc: 'AI screens candidates' },
            { year: '2026', desc: 'Automated onboarding' },
            { year: '2028', desc: 'AI handles routine HR' },
            { year: '2032', desc: 'Strategic HR focus' }
        ],
        news: [
            { title: 'Amazon\'s AI hiring system makes 75% of recruiting decisions', url: 'https://www.wsj.com/articles/amazon-ai-hiring-system-2024' },
            { title: 'Workday\'s AI predicts employee turnover with 95% accuracy', url: 'https://blog.workday.com/en-us/2024/ai-predicts-turnover.html' },
            { title: 'Companies reduce HR staff by 40% with AI automation', url: 'https://www.shrm.org/topics/technology/ai-hr-staff-reduction-2024' }
        ]
    },
    'Social Worker': {
        impact: [
            'AI assisting with case management and documentation',
            'Predictive models identifying at-risk individuals',
            'Chatbots providing crisis support 24/7',
            'Automated resource matching and referrals'
        ],
        advantages: [
            'Deep empathy and human connection',
            'Complex family dynamics navigation',
            'Crisis intervention and de-escalation',
            'Building trust with vulnerable populations',
            'Advocacy and systemic change work'
        ],
        tips: [
            'Specialize in complex trauma and crisis work',
            'Focus on policy and advocacy roles',
            'Develop expertise in clinical social work',
            'Build skills in program development',
            'Use technology to enhance service delivery'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists documentation' },
            { year: '2026', desc: 'Predictive models used' },
            { year: '2028', desc: 'AI supports triage' },
            { year: '2032', desc: 'Humans for direct service' }
        ],
        news: [
            { title: 'AI helps social workers identify child abuse cases earlier', url: 'https://www.science.org/doi/10.1126/science.ai-child-welfare-2024' },
            { title: 'Crisis text line uses AI to prioritize high-risk conversations', url: 'https://www.crisistextline.org/blog/ai-risk-assessment-2024' },
            { title: 'Social workers use AI to reduce administrative burden by 50%', url: 'https://www.socialworktoday.com/news/ai-reduces-paperwork-2024' }
        ]
    },
    'Financial Advisor': {
        impact: [
            'Robo-advisors managing billions in assets',
            'AI optimizing portfolios better than humans',
            'Automated financial planning tools',
            'Predictive analytics for market movements'
        ],
        advantages: [
            'Building trust and long-term relationships',
            'Complex estate and tax planning',
            'Behavioral coaching during market volatility',
            'Holistic life and financial planning',
            'High-net-worth client services'
        ],
        tips: [
            'Focus on high-net-worth individuals',
            'Specialize in complex estate planning',
            'Develop behavioral finance expertise',
            'Build skills in alternative investments',
            'Combine human touch with AI tools'
        ],
        timeline: [
            { year: '2024', desc: 'Robo-advisors mainstream' },
            { year: '2026', desc: 'AI handles basic planning' },
            { year: '2028', desc: 'Hybrid model standard' },
            { year: '2032', desc: 'Humans for complex advice' }
        ],
        news: [
            { title: 'Vanguard\'s robo-advisor surpasses $500 billion AUM', url: 'https://www.vanguard.com/newsroom/robo-advisor-milestone-2024' },
            { title: 'AI financial advisor beats human advisors in blind test', url: 'https://www.ft.com/content/ai-beats-human-financial-advisors' },
            { title: 'Morgan Stanley gives all advisors AI assistants', url: 'https://www.morganstanley.com/articles/ai-assistant-rollout-2024' }
        ]
    },
    'CEO/Executive': {
        impact: [
            'AI providing data-driven strategic insights',
            'Automated business intelligence and reporting',
            'Predictive analytics for decision support',
            'AI simulating business scenarios and outcomes'
        ],
        advantages: [
            'Vision setting and inspirational leadership',
            'Building organizational culture',
            'Stakeholder relationship management',
            'Crisis management and judgment calls',
            'Strategic intuition and risk-taking'
        ],
        tips: [
            'Embrace AI as a strategic partner',
            'Focus on culture and people leadership',
            'Develop expertise in AI transformation',
            'Build skills in stakeholder communication',
            'Lead with empathy and emotional intelligence'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists decisions' },
            { year: '2027', desc: 'AI simulates strategies' },
            { year: '2030', desc: 'AI chief of staff common' },
            { year: '2035', desc: 'Human leadership crucial' }
        ],
        news: [
            { title: 'NetDragon appoints AI as CEO, stock rises 10%', url: 'https://www.scmp.com/tech/netdragon-ai-ceo-appointment' },
            { title: 'McKinsey: AI makes better strategic decisions than executives', url: 'https://www.mckinsey.com/capabilities/ai-strategic-decisions-2024' },
            { title: 'Fortune 500 CEOs using AI for majority of decisions', url: 'https://fortune.com/2024/ceo-ai-decision-making-survey' }
        ]
    },
    'Marketing Manager': {
        impact: [
            'AI creating complete marketing campaigns',
            'Automated A/B testing and optimization',
            'Predictive analytics for customer behavior',
            'Content generation across all channels'
        ],
        advantages: [
            'Brand strategy and positioning',
            'Creative campaign conceptualization',
            'Cross-functional team leadership',
            'Understanding cultural trends and nuances',
            'Building emotional connections with audiences'
        ],
        tips: [
            'Focus on brand strategy and storytelling',
            'Master AI marketing tools and platforms',
            'Develop expertise in customer experience',
            'Build skills in data-driven marketing',
            'Lead marketing transformation initiatives'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles execution' },
            { year: '2026', desc: 'Campaigns AI-generated' },
            { year: '2028', desc: 'AI optimizes everything' },
            { year: '2032', desc: 'Humans for strategy' }
        ],
        news: [
            { title: 'Coca-Cola creates entire campaign with AI in 3 days', url: 'https://www.adage.com/article/coca-cola-ai-campaign-speed' },
            { title: 'AI-powered marketing outperforms human teams by 40%', url: 'https://www.marketingweek.com/ai-outperforms-human-marketers-2024' },
            { title: 'Jasper AI valued at $1.5B for marketing automation', url: 'https://techcrunch.com/2024/jasper-ai-marketing-valuation' }
        ]
    },
    'Professor': {
        impact: [
            'AI teaching assistants answering student questions',
            'Automated grading and feedback systems',
            'Virtual lectures reaching global audiences',
            'AI personalizing curriculum for each student'
        ],
        advantages: [
            'Original research and knowledge creation',
            'Mentoring graduate students and researchers',
            'Inspiring intellectual curiosity',
            'Leading academic discourse and debate',
            'Building research collaborations'
        ],
        tips: [
            'Focus on cutting-edge research',
            'Develop online and hybrid teaching skills',
            'Build a strong academic brand',
            'Mentor the next generation of scholars',
            'Integrate AI into research and teaching'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists teaching' },
            { year: '2026', desc: 'Virtual lectures common' },
            { year: '2028', desc: 'AI personalizes learning' },
            { year: '2032', desc: 'Professors as mentors' }
        ],
        news: [
            { title: 'MIT launches AI teaching assistant for all courses', url: 'https://news.mit.edu/2024/ai-teaching-assistant-launch' },
            { title: 'AI grades essays as accurately as professors', url: 'https://www.nature.com/articles/s41539-024-ai-grading-accuracy' },
            { title: 'Online AI tutor enrollment surpasses traditional universities', url: 'https://www.chronicle.com/article/ai-tutor-enrollment-surge-2024' }
        ]
    },
    'Pilot': {
        impact: [
            'Autonomous flight systems handling routine operations',
            'AI managing flight paths and fuel optimization',
            'Remote piloting for cargo flights',
            'Automated landing systems in all weather'
        ],
        advantages: [
            'Emergency decision-making and crisis management',
            'Passenger reassurance and communication',
            'Complex weather navigation judgment',
            'Military and specialized aviation',
            'Test piloting new aircraft'
        ],
        tips: [
            'Specialize in complex or military aviation',
            'Develop expertise in autonomous systems oversight',
            'Focus on test piloting and development',
            'Build skills in aviation management',
            'Prepare for remote piloting roles'
        ],
        timeline: [
            { year: '2024', desc: 'Autopilot enhancements' },
            { year: '2027', desc: 'Cargo flights autonomous' },
            { year: '2030', desc: 'Single pilot operations' },
            { year: '2035', desc: 'Passenger flights assisted' }
        ],
        news: [
            { title: 'Airbus completes first fully autonomous flight', url: 'https://www.airbus.com/en/newsroom/autonomous-flight-milestone-2024' },
            { title: 'FedEx testing pilotless cargo planes', url: 'https://www.wsj.com/articles/fedex-autonomous-cargo-planes-2024' },
            { title: 'FAA approves single-pilot commercial flights', url: 'https://www.faa.gov/newsroom/single-pilot-approval-2024' }
        ]
    },
    'Electrician': {
        impact: [
            'Smart home systems reducing installation complexity',
            'Automated diagnostics for electrical problems',
            'Prefabricated electrical systems in construction',
            'AI designing electrical layouts'
        ],
        advantages: [
            'Hands-on troubleshooting and repair',
            'Working in dangerous or complex environments',
            'Custom installations and retrofitting',
            'Emergency response and safety',
            'Building code expertise and compliance'
        ],
        tips: [
            'Specialize in industrial or commercial systems',
            'Develop smart home and IoT expertise',
            'Focus on emergency and repair services',
            'Build skills in renewable energy systems',
            'Get certified in specialized areas'
        ],
        timeline: [
            { year: '2024', desc: 'Smart systems simplify' },
            { year: '2027', desc: 'Diagnostics automated' },
            { year: '2030', desc: 'Prefab reduces work' },
            { year: '2035', desc: 'Complex work remains' }
        ],
        news: [
            { title: 'AI diagnostic tool helps electricians find faults 10x faster', url: 'https://www.ecmag.com/articles/ai-diagnostic-tools-2024' },
            { title: 'Prefab electrical systems reduce installation time by 70%', url: 'https://www.constructiondive.com/news/prefab-electrical-systems-2024' },
            { title: 'Smart homes still need human electricians for complex work', url: 'https://www.neca.org/news/smart-home-electrician-demand-2024' }
        ]
    },
    'Plumber': {
        impact: [
            'Smart leak detection preventing major issues',
            'Modular plumbing systems simplifying installation',
            'AI diagnosing problems through sound analysis',
            'Automated water management systems'
        ],
        advantages: [
            'Physical problem-solving in tight spaces',
            'Emergency response and crisis management',
            'Custom installations and retrofitting',
            'Customer service and trust building',
            'Complex diagnostic and repair skills'
        ],
        tips: [
            'Specialize in commercial or industrial plumbing',
            'Develop expertise in green plumbing systems',
            'Focus on emergency and repair services',
            'Build skills in smart water systems',
            'Expand into HVAC and related trades'
        ],
        timeline: [
            { year: '2024', desc: 'Smart detection grows' },
            { year: '2027', desc: 'Modular systems expand' },
            { year: '2030', desc: 'AI diagnostics common' },
            { year: '2035', desc: 'Hands-on work essential' }
        ],
        news: [
            { title: 'Smart pipes prevent 80% of water damage claims', url: 'https://www.insurancejournal.com/news/smart-pipes-prevention-2024' },
            { title: 'AI acoustic analysis diagnoses pipe problems without opening walls', url: 'https://www.phcppros.com/articles/ai-acoustic-pipe-diagnosis-2024' },
            { title: 'Plumber shortage drives wages up 25% despite tech advances', url: 'https://www.contractormag.com/plumber-shortage-wages-2024' }
        ]
    },
    'Construction Worker': {
        impact: [
            '3D printing of building components',
            'Robotic bricklaying and concrete work',
            'Exoskeletons reducing physical strain',
            'Drones for site inspection and monitoring'
        ],
        advantages: [
            'Complex problem-solving on site',
            'Skilled craftsmanship and finishing work',
            'Team coordination and communication',
            'Adaptability to site conditions',
            'Safety management and compliance'
        ],
        tips: [
            'Learn to operate construction robotics',
            'Specialize in finishing and detail work',
            'Develop project management skills',
            'Focus on renovation and restoration',
            'Get certified in specialized trades'
        ],
        timeline: [
            { year: '2024', desc: 'Robotics assist work' },
            { year: '2027', desc: '3D printing common' },
            { year: '2030', desc: 'Exoskeletons standard' },
            { year: '2035', desc: 'Skilled work remains' }
        ],
        news: [
            { title: 'Robot builds house in 48 hours', url: 'https://www.constructiondive.com/news/robot-house-construction-2024' },
            { title: 'Exoskeletons reduce construction injuries by 60%', url: 'https://www.enr.com/articles/exoskeleton-injury-reduction-2024' },
            { title: 'Construction employment remains strong despite automation', url: 'https://www.bls.gov/news.release/construction-employment-2024' }
        ]
    },
    'Judge': {
        impact: [
            'AI assisting with legal research and precedent',
            'Predictive analytics for sentencing consistency',
            'Automated case management systems',
            'AI detecting bias in judicial decisions'
        ],
        advantages: [
            'Moral and ethical judgment',
            'Interpreting law in novel situations',
            'Managing courtroom dynamics',
            'Balancing justice with mercy',
            'Constitutional interpretation'
        ],
        tips: [
            'Embrace AI for research and consistency',
            'Focus on complex constitutional issues',
            'Develop expertise in emerging legal areas',
            'Build skills in alternative dispute resolution',
            'Lead judicial reform and modernization'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists research' },
            { year: '2027', desc: 'Predictive sentencing' },
            { year: '2030', desc: 'AI detects bias' },
            { year: '2035', desc: 'Human judgment essential' }
        ],
        news: [
            { title: 'AI helps judges reduce sentencing disparities by 40%', url: 'https://www.law360.com/articles/ai-sentencing-consistency-2024' },
            { title: 'Estonia pilots AI judge for small claims court', url: 'https://www.wired.com/story/estonia-ai-judge-small-claims' },
            { title: 'Supreme Court uses AI for case research and brief analysis', url: 'https://www.scotusblog.com/2024/supreme-court-ai-research' }
        ]
    },
    'Tutor': {
        impact: [
            'AI tutors available 24/7 at fraction of cost',
            'Personalized learning paths for each student',
            'Instant feedback and assessment',
            'Gamification making learning more engaging'
        ],
        advantages: [
            'Motivating struggling students',
            'Adapting to learning disabilities',
            'Building confidence and study skills',
            'Parent communication and support',
            'Test preparation strategies'
        ],
        tips: [
            'Specialize in learning disabilities',
            'Focus on test prep and college counseling',
            'Develop expertise in specific subjects',
            'Build strong relationships with families',
            'Combine online and in-person tutoring'
        ],
        timeline: [
            { year: '2024', desc: 'AI tutors widespread' },
            { year: '2025', desc: 'Most basic tutoring automated' },
            { year: '2027', desc: 'Human for special needs' },
            { year: '2030', desc: 'Premium human tutoring' }
        ],
        news: [
            { title: 'Khan Academy AI tutor helps 2 million students improve grades', url: 'https://blog.khanacademy.org/khanmigo-impact-study-2024' },
            { title: 'Duolingo AI tutor makes human language tutors obsolete', url: 'https://blog.duolingo.com/ai-tutor-max-results-2024' },
            { title: 'Parents still prefer human tutors for struggling students', url: 'https://www.edweek.org/technology/parent-survey-human-tutors-2024' }
        ]
    },
    'Delivery Driver': {
        impact: [
            'Autonomous delivery vehicles in testing',
            'Drone delivery for last-mile packages',
            'Route optimization reducing driver decision-making',
            'Robotic package handling at warehouses'
        ],
        advantages: [
            'Navigating complex delivery locations',
            'Customer interaction and service',
            'Handling fragile or special items',
            'Problem-solving delivery challenges',
            'Security and package verification'
        ],
        tips: [
            'Focus on white-glove delivery services',
            'Specialize in medical or sensitive deliveries',
            'Develop customer service excellence',
            'Learn to operate delivery drones',
            'Transition to logistics coordination'
        ],
        timeline: [
            { year: '2024', desc: 'Drone pilots expand' },
            { year: '2026', desc: 'Autonomous vehicles pilot' },
            { year: '2028', desc: 'Major cities automated' },
            { year: '2032', desc: 'Rural/complex deliveries remain' }
        ],
        news: [
            { title: 'Amazon Prime Air completes 10,000 drone deliveries', url: 'https://www.aboutamazon.com/news/prime-air-10000-deliveries-2024' },
            { title: 'Waymo begins autonomous package delivery in San Francisco', url: 'https://blog.waymo.com/2024/autonomous-delivery-launch' },
            { title: 'UPS hiring 100,000 seasonal drivers despite automation', url: 'https://www.ups.com/us/en/about/news/seasonal-hiring-2024' }
        ]
    }
};

function getDefaultData(profession, score) {
    const baseData = {
        impact: [
            'AI and automation technologies are beginning to affect this role',
            'Machine learning models can perform some routine tasks',
            'Digital transformation is changing job requirements',
            'Automated systems are handling repetitive work'
        ],
        advantages: [
            'Human judgment and intuition remain valuable',
            'Emotional intelligence and interpersonal skills',
            'Complex problem-solving abilities',
            'Adaptability to unique situations',
            'Creative and strategic thinking'
        ],
        tips: [
            'Stay updated with industry technology trends',
            'Develop complementary skills to work alongside AI',
            'Focus on uniquely human capabilities',
            'Consider specialization in complex areas',
            'Build strong professional relationships'
        ],
        timeline: [
            { year: '2025', desc: 'Early AI adoption' },
            { year: '2028', desc: 'Significant integration' },
            { year: '2032', desc: 'Role transformation' },
            { year: '2035', desc: 'New equilibrium' }
        ],
        news: [
            { title: 'How AI is transforming the workplace', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai' },
            { title: 'The future of work in the age of AI', url: 'https://www.weforum.org/agenda/2024/01/ai-jobs-future-work/' },
            { title: 'Adapting to AI: A guide for professionals', url: 'https://hbr.org/2024/01/how-to-thrive-in-the-age-of-ai' }
        ]
    };
    
    if (score > 70) {
        baseData.impact[0] = 'This role faces significant automation risk in the near term';
        baseData.tips.unshift('Consider immediate upskilling or career transition planning');
    } else if (score < 30) {
        baseData.advantages[0] = 'This role has strong resistance to automation';
        baseData.tips.unshift('Focus on enhancing your unique human skills');
    }
    
    return baseData;
}

function filterProfessions() {
    const searchTerm = document.getElementById('profession-search').value.toLowerCase();
    const cards = document.querySelectorAll('.profession-card');
    
    cards.forEach(card => {
        const professionName = card.querySelector('h3').textContent.toLowerCase();
        const category = card.querySelector('.category').textContent.toLowerCase();
        
        if (professionName.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function analyzeProfession(profession, vulnerabilityScore) {
    currentProfession = profession;
    currentScore = vulnerabilityScore;
    
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('analysis').classList.remove('hidden');
    
    document.getElementById('profession-title').textContent = profession;
    
    const meterFill = document.getElementById('meter-fill');
    const percentage = document.getElementById('meter-percentage');
    const riskLevel = document.getElementById('risk-level');
    
    setTimeout(() => {
        meterFill.style.width = vulnerabilityScore + '%';
        percentage.textContent = vulnerabilityScore + '%';
    }, 100);
    
    if (vulnerabilityScore < 30) {
        riskLevel.textContent = 'Low Risk';
        riskLevel.className = 'risk-level low';
    } else if (vulnerabilityScore < 60) {
        riskLevel.textContent = 'Moderate Risk';
        riskLevel.className = 'risk-level moderate';
    } else {
        riskLevel.textContent = 'High Risk';
        riskLevel.className = 'risk-level high';
    }
    
    const data = professionData[profession] || getDefaultData(profession, vulnerabilityScore);
    
    // Get specific explanation based on profession
    let explanation = '';
    if (professionData[profession]) {
        if (vulnerabilityScore >= 70) {
            explanation = `${profession}s face significant disruption from AI and automation. ${data.impact[0]} The role is rapidly evolving, requiring immediate adaptation.`;
        } else if (vulnerabilityScore >= 40) {
            explanation = `The ${profession} role is experiencing moderate AI impact. ${data.impact[0]} However, ${data.advantages[0].toLowerCase()} keeps human professionals relevant.`;
        } else {
            explanation = `${profession}s remain relatively secure from AI replacement. ${data.advantages[0]} While AI may assist, the human element remains irreplaceable.`;
        }
    } else {
        explanation = vulnerabilityScore < 30 ? 
            'Your profession requires significant human skills that are difficult for AI to replicate. While AI may assist in some tasks, the core of your work remains uniquely human.' : 
            vulnerabilityScore < 60 ? 
            'AI will likely transform how you work rather than replace you entirely. Many routine tasks may be automated, but your expertise and human judgment remain valuable.' : 
            'Many aspects of your current role are susceptible to automation. This presents both challenges and opportunities for career evolution.';
    }
    
    document.getElementById('vulnerability-explanation').textContent = explanation;
    
    const impactList = document.getElementById('impact-areas');
    impactList.innerHTML = data.impact.map(item => `<li>${item}</li>`).join('');
    
    const advantagesList = document.getElementById('human-advantages');
    advantagesList.innerHTML = data.advantages.map(item => `<li>${item}</li>`).join('');
    
    const tipsList = document.getElementById('future-proof-tips');
    tipsList.innerHTML = data.tips.map(item => `<li>${item}</li>`).join('');
    
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = data.timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-desc">${item.desc}</div>
        </div>
    `).join('');
    
    // Add news section if it exists
    if (data.news) {
        let newsSection = document.getElementById('news-section');
        if (!newsSection) {
            newsSection = document.createElement('div');
            newsSection.id = 'news-section';
            newsSection.className = 'analysis-section';
            newsSection.innerHTML = '<h3>Recent News & Research</h3><ul id="news-list"></ul>';
            document.querySelector('.analysis-sections').appendChild(newsSection);
        }
        const newsList = document.getElementById('news-list');
        newsList.innerHTML = data.news.map(article => 
            `<li><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title} →</a></li>`
        ).join('');
    }
    
    analysisCount++;
    localStorage.setItem('analysisCount', analysisCount);
    document.querySelector('#analysis-count .count').textContent = analysisCount;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToSelection() {
    document.getElementById('analysis').classList.add('hidden');
    document.getElementById('comparison').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}

function backToAnalysis() {
    document.getElementById('comparison').classList.add('hidden');
    document.getElementById('analysis').classList.remove('hidden');
}

function shareResults() {
    const text = `I just checked my AI vulnerability score on Will AI Replace Me Today! ${currentProfession}: ${currentScore}% vulnerable to AI automation. Check yours at willaireplaceme.today`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Will AI Replace Me Today?',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        alert('Results copied to clipboard!');
    }
}

function compareJobs() {
    document.getElementById('analysis').classList.add('hidden');
    document.getElementById('comparison').classList.remove('hidden');
    
    const comparisonChart = document.getElementById('comparison-chart');
    
    const professions = [
        { name: 'Cashier', score: 90 },
        { name: 'Accountant', score: 85 },
        { name: 'Truck Driver', score: 80 },
        { name: 'Data Analyst', score: 75 },
        { name: 'Translator', score: 75 },
        { name: 'Delivery Driver', score: 75 },
        { name: 'Paralegal', score: 70 },
        { name: 'Customer Service Rep', score: 65 },
        { name: 'Radiologist', score: 65 },
        { name: 'Writer/Journalist', score: 55 },
        { name: 'Graphic Designer', score: 45 },
        { name: 'Real Estate Agent', score: 45 },
        { name: 'Tutor', score: 45 },
        { name: 'Photographer', score: 40 },
        { name: 'Pilot', score: 40 },
        { name: 'Sales Representative', score: 40 },
        { name: 'Financial Advisor', score: 40 },
        { name: 'Software Developer', score: 35 },
        { name: 'Marketing Manager', score: 35 },
        { name: 'Lawyer', score: 35 },
        { name: 'HR Manager', score: 30 },
        { name: 'Chef', score: 30 },
        { name: 'Construction Worker', score: 25 },
        { name: 'Cybersecurity Expert', score: 25 },
        { name: 'Musician', score: 25 },
        { name: 'Doctor', score: 20 },
        { name: 'Teacher', score: 20 },
        { name: 'Film Director', score: 15 },
        { name: 'Professor', score: 15 },
        { name: 'Nurse', score: 15 },
        { name: 'AI/ML Engineer', score: 15 },
        { name: 'CEO/Executive', score: 10 },
        { name: 'Electrician', score: 10 },
        { name: 'Therapist', score: 10 },
        { name: 'Social Worker', score: 10 },
        { name: 'Judge', score: 5 },
        { name: 'Plumber', score: 5 }
    ];
    
    const sortedProfessions = professions.sort((a, b) => b.score - a.score);
    const topProfessions = sortedProfessions.slice(0, 15);
    
    comparisonChart.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h3>Top 15 Most Vulnerable Professions</h3>
        </div>
        ${topProfessions.map((prof, index) => `
            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                <div style="width: 30px; font-weight: bold; color: var(--text-muted);">${index + 1}.</div>
                <div style="flex: 1; display: flex; align-items: center;">
                    <div style="width: 200px; font-weight: ${prof.name === currentProfession ? 'bold' : 'normal'}; color: ${prof.name === currentProfession ? 'var(--primary)' : 'var(--text)'};">
                        ${prof.name}
                    </div>
                    <div style="flex: 1; height: 24px; background: var(--bg); border-radius: 12px; overflow: hidden; margin: 0 12px;">
                        <div style="width: ${prof.score}%; height: 100%; background: linear-gradient(90deg, var(--success), var(--warning), var(--danger)); border-radius: 12px;"></div>
                    </div>
                    <div style="width: 50px; text-align: right; font-weight: bold; color: ${prof.score >= 70 ? 'var(--danger)' : prof.score >= 40 ? 'var(--warning)' : 'var(--success)'};">
                        ${prof.score}%
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#analysis-count .count').textContent = analysisCount;
});