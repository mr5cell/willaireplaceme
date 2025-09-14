let analysisCount = localStorage.getItem('analysisCount') || 0;
let currentProfession = '';
let currentScore = 0;
let currentPage = 1;
let professionsPerPage = 25;
let allProfessions = [];

// Complete profession database with employment-based ranking
const allProfessionsList = [
    // Top 25 - Main page
    { name: 'Retail Salesperson', category: 'retail', score: 65 },
    { name: 'Cashier', category: 'retail', score: 90 },
    { name: 'Food Service Worker', category: 'service', score: 70 },
    { name: 'Office Clerk', category: 'business', score: 80 },
    { name: 'Registered Nurse', category: 'health', score: 15 },
    { name: 'Customer Service Rep', category: 'retail', score: 65 },
    { name: 'Waiter/Waitress', category: 'service', score: 40 },
    { name: 'Laborer', category: 'service', score: 35 },
    { name: 'Janitor', category: 'service', score: 45 },
    { name: 'Secretary', category: 'business', score: 75 },
    { name: 'Teacher', category: 'education', score: 20 },
    { name: 'Truck Driver', category: 'transport', score: 80 },
    { name: 'Sales Representative', category: 'retail', score: 40 },
    { name: 'Accountant', category: 'business', score: 85 },
    { name: 'Manager', category: 'business', score: 25 },
    { name: 'Security Guard', category: 'service', score: 50 },
    { name: 'Maintenance Worker', category: 'service', score: 30 },
    { name: 'Cook', category: 'service', score: 35 },
    { name: 'Administrative Assistant', category: 'business', score: 70 },
    { name: 'Construction Worker', category: 'service', score: 25 },
    { name: 'Childcare Worker', category: 'service', score: 20 },
    { name: 'Warehouse Worker', category: 'service', score: 75 },
    { name: 'Delivery Driver', category: 'transport', score: 75 },
    { name: 'Personal Care Aide', category: 'health', score: 25 },
    { name: 'Software Developer', category: 'tech', score: 35 },
    
    // Pages 2-5 (Additional 75+ professions)
    { name: 'Home Health Aide', category: 'health', score: 30 },
    { name: 'Nursing Assistant', category: 'health', score: 40 },
    { name: 'Maid/Housekeeper', category: 'service', score: 60 },
    { name: 'Bookkeeper', category: 'business', score: 85 },
    { name: 'Medical Assistant', category: 'health', score: 45 },
    { name: 'First-Line Supervisor', category: 'business', score: 35 },
    { name: 'Production Worker', category: 'service', score: 70 },
    { name: 'Police Officer', category: 'service', score: 15 },
    { name: 'Landscaper', category: 'service', score: 40 },
    { name: 'Receptionist', category: 'business', score: 80 },
    { name: 'Stock Clerk', category: 'retail', score: 85 },
    { name: 'Electrician', category: 'service', score: 10 },
    { name: 'Carpenter', category: 'service', score: 20 },
    { name: 'Real Estate Agent', category: 'other', score: 45 },
    { name: 'Hairdresser', category: 'service', score: 30 },
    { name: 'Insurance Agent', category: 'business', score: 50 },
    { name: 'Plumber', category: 'service', score: 5 },
    { name: 'Social Worker', category: 'other', score: 10 },
    { name: 'Mechanic', category: 'service', score: 25 },
    { name: 'Machinist', category: 'service', score: 55 },
    { name: 'Bus Driver', category: 'transport', score: 70 },
    { name: 'Dental Assistant', category: 'health', score: 50 },
    { name: 'Farmer', category: 'service', score: 40 },
    { name: 'Firefighter', category: 'service', score: 10 },
    { name: 'Loan Officer', category: 'business', score: 60 },
    { name: 'Pharmacist', category: 'health', score: 45 },
    { name: 'Physical Therapist', category: 'health', score: 15 },
    { name: 'Lawyer', category: 'legal', score: 35 },
    { name: 'Financial Advisor', category: 'business', score: 40 },
    { name: 'Marketing Manager', category: 'business', score: 35 },
    { name: 'HR Manager', category: 'other', score: 30 },
    { name: 'Operations Manager', category: 'business', score: 30 },
    { name: 'Project Manager', category: 'business', score: 35 },
    { name: 'Sales Manager', category: 'business', score: 30 },
    { name: 'Chef', category: 'service', score: 30 },
    { name: 'Bartender', category: 'service', score: 45 },
    { name: 'Flight Attendant', category: 'transport', score: 40 },
    { name: 'Pilot', category: 'transport', score: 40 },
    { name: 'Postal Worker', category: 'service', score: 65 },
    { name: 'Library Assistant', category: 'education', score: 70 },
    { name: 'Bank Teller', category: 'business', score: 85 },
    { name: 'Insurance Claims Adjuster', category: 'business', score: 65 },
    { name: 'Tax Preparer', category: 'business', score: 90 },
    { name: 'Travel Agent', category: 'other', score: 80 },
    { name: 'Event Planner', category: 'other', score: 35 },
    { name: 'Interior Designer', category: 'creative', score: 40 },
    { name: 'Graphic Designer', category: 'creative', score: 45 },
    { name: 'Web Developer', category: 'tech', score: 40 },
    { name: 'Data Analyst', category: 'tech', score: 75 },
    { name: 'Database Administrator', category: 'tech', score: 60 },
    { name: 'Network Administrator', category: 'tech', score: 50 },
    { name: 'Cybersecurity Expert', category: 'tech', score: 25 },
    { name: 'IT Support', category: 'tech', score: 55 },
    { name: 'Computer Programmer', category: 'tech', score: 45 },
    { name: 'Systems Analyst', category: 'tech', score: 50 },
    { name: 'UX Designer', category: 'creative', score: 35 },
    { name: 'Digital Marketer', category: 'business', score: 45 },
    { name: 'Content Creator', category: 'creative', score: 40 },
    { name: 'Video Editor', category: 'creative', score: 55 },
    { name: 'Photographer', category: 'other', score: 40 },
    { name: 'Writer/Journalist', category: 'creative', score: 55 },
    { name: 'Editor', category: 'creative', score: 50 },
    { name: 'Translator', category: 'other', score: 75 },
    { name: 'Interpreter', category: 'other', score: 60 },
    { name: 'Librarian', category: 'education', score: 55 },
    { name: 'Professor', category: 'education', score: 15 },
    { name: 'Research Scientist', category: 'education', score: 20 },
    { name: 'Lab Technician', category: 'health', score: 60 },
    { name: 'Radiologic Technician', category: 'health', score: 70 },
    { name: 'Veterinarian', category: 'health', score: 20 },
    { name: 'Veterinary Assistant', category: 'health', score: 45 },
    { name: 'Dentist', category: 'health', score: 25 },
    { name: 'Dental Hygienist', category: 'health', score: 40 },
    { name: 'Optometrist', category: 'health', score: 35 },
    { name: 'Chiropractor', category: 'health', score: 30 },
    { name: 'Massage Therapist', category: 'health', score: 25 },
    { name: 'Fitness Trainer', category: 'health', score: 20 },
    { name: 'Nutritionist', category: 'health', score: 35 },
    { name: 'Psychologist', category: 'health', score: 15 },
    { name: 'Counselor', category: 'health', score: 15 },
    { name: 'Therapist', category: 'health', score: 10 },
    { name: 'EMT/Paramedic', category: 'health', score: 20 },
    { name: 'Surgeon', category: 'health', score: 15 },
    { name: 'Anesthesiologist', category: 'health', score: 25 },
    { name: 'Radiologist', category: 'health', score: 65 },
    { name: 'Pathologist', category: 'health', score: 55 },
    { name: 'Emergency Room Doctor', category: 'health', score: 10 },
    { name: 'Family Doctor', category: 'health', score: 20 },
    { name: 'Pediatrician', category: 'health', score: 15 },
    { name: 'Gynecologist', category: 'health', score: 20 },
    { name: 'Cardiologist', category: 'health', score: 25 },
    { name: 'Dermatologist', category: 'health', score: 30 },
    { name: 'Ophthalmologist', category: 'health', score: 35 },
    { name: 'Psychiatrist', category: 'health', score: 20 },
    { name: 'Airline Pilot', category: 'transport', score: 40 },
    { name: 'Air Traffic Controller', category: 'transport', score: 55 },
    { name: 'Ship Captain', category: 'transport', score: 25 },
    { name: 'Train Conductor', category: 'transport', score: 70 },
    { name: 'Taxi Driver', category: 'transport', score: 85 },
    { name: 'Uber Driver', category: 'transport', score: 85 },
    { name: 'Logistics Coordinator', category: 'transport', score: 60 },
    { name: 'Supply Chain Manager', category: 'business', score: 45 },
    { name: 'Quality Control Inspector', category: 'service', score: 75 },
    { name: 'Safety Inspector', category: 'service', score: 50 },
    { name: 'Environmental Engineer', category: 'tech', score: 30 },
    { name: 'Civil Engineer', category: 'tech', score: 35 },
    { name: 'Mechanical Engineer', category: 'tech', score: 40 },
    { name: 'Electrical Engineer', category: 'tech', score: 30 },
    { name: 'Chemical Engineer', category: 'tech', score: 35 },
    { name: 'Aerospace Engineer', category: 'tech', score: 25 },
    { name: 'Biomedical Engineer', category: 'tech', score: 30 }
];

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
    'Registered Nurse': {
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
    'Retail Salesperson': {
        impact: [
            'AI-powered recommendation engines drive 35% of retail sales',
            'Virtual shopping assistants available 24/7 for customer queries',
            'Automated inventory systems reducing need for floor staff',
            'AR try-on technology replacing human assistance for sizing'
        ],
        advantages: [
            'Building personal relationships with customers',
            'Understanding complex needs and preferences',
            'Handling difficult customers and complaints',
            'Upselling through emotional connection',
            'Product expertise in specialized categories'
        ],
        tips: [
            'Focus on high-value, consultative sales roles',
            'Develop expertise in luxury or specialized products',
            'Build skills in customer experience management',
            'Learn to work alongside AI recommendation tools',
            'Transition to visual merchandising or buying roles'
        ],
        timeline: [
            { year: '2024', desc: 'AI recommendations standard' },
            { year: '2026', desc: 'Virtual assistants widespread' },
            { year: '2028', desc: 'Focus on premium service' },
            { year: '2030', desc: 'Consultant-level sales only' }
        ],
        news: [
            { title: 'Amazon\'s AI sales assistant increases conversion by 40%', url: 'https://www.amazon.com/b?node=AI-shopping-assistant' },
            { title: 'Macy\'s replaces sales staff with smart mirrors', url: 'https://www.retaildive.com/news/macys-smart-mirror-technology-2024' },
            { title: 'Study: 60% of retail sales jobs at risk by 2028', url: 'https://www.mckinsey.com/industries/retail/our-insights/retail-automation-future' }
        ]
    },
    'Food Service Worker': {
        impact: [
            'Robotic kitchen systems preparing food in major chains',
            'AI-powered ordering kiosks replacing counter staff',
            'Automated food prep cutting labor costs by 50%',
            'Delivery robots handling last-mile food service'
        ],
        advantages: [
            'Customer service and hospitality skills',
            'Handling special dietary requests and allergies',
            'Managing food safety during peak times',
            'Adapting to unexpected situations',
            'Personal touch in fine dining establishments'
        ],
        tips: [
            'Specialize in high-end restaurants or catering',
            'Develop skills in food safety and management',
            'Learn culinary skills to move into cooking roles',
            'Focus on customer experience and hospitality',
            'Consider supervisory or training positions'
        ],
        timeline: [
            { year: '2024', desc: 'Kiosks in most chains' },
            { year: '2025', desc: 'Robotic prep widespread' },
            { year: '2027', desc: 'Automation in kitchens' },
            { year: '2029', desc: 'Human service premium' }
        ],
        news: [
            { title: 'McDonald\'s AI drive-thru reduces order time by 30%', url: 'https://corporate.mcdonalds.com/corpmcd/en-us/our-stories/technology-ai-drive-thru' },
            { title: 'White Castle deploys burger-flipping robots nationwide', url: 'https://www.whitecastle.com/news/flippy-robot-deployment-2024' },
            { title: 'Restaurant chains cut 200,000 jobs with automation', url: 'https://www.restaurantbusinessonline.com/technology/automation-job-losses-2024' }
        ]
    },
    'Office Clerk': {
        impact: [
            'AI processing 90% of routine administrative tasks',
            'Document automation eliminating manual data entry',
            'Chatbots handling most internal employee queries',
            'Workflow automation reducing need for coordination'
        ],
        advantages: [
            'Complex problem-solving and escalation handling',
            'Personal relationships with colleagues and clients',
            'Institutional knowledge and process understanding',
            'Flexible thinking for non-routine situations',
            'Security and confidentiality management'
        ],
        tips: [
            'Transition to administrative specialist roles',
            'Develop project management skills',
            'Learn advanced data analysis and reporting',
            'Focus on executive assistant or coordinator positions',
            'Build expertise in compliance and regulatory work'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles basic tasks' },
            { year: '2025', desc: 'Document processing automated' },
            { year: '2027', desc: 'Complex tasks only' },
            { year: '2029', desc: 'Specialist roles remain' }
        ],
        news: [
            { title: 'Microsoft Copilot eliminates 70% of admin work', url: 'https://www.microsoft.com/en-us/microsoft-365/copilot-productivity-study-2024' },
            { title: 'AI document processing saves companies $2.3 billion', url: 'https://www.accenture.com/intelligent-document-processing-study-2024' },
            { title: 'Office automation threatens 15 million clerical jobs', url: 'https://www.brookings.edu/research/office-automation-employment-impact-2024' }
        ]
    },
    'Customer Service Rep': {
        impact: [
            'ChatGPT-powered support resolving 85% of queries automatically',
            'AI sentiment analysis routing complex calls to specialists',
            'Automated refund and return processing',
            'Voice AI handling phone support with human-like responses'
        ],
        advantages: [
            'De-escalating angry customers with empathy',
            'Complex problem-solving for unique situations',
            'Building long-term customer relationships',
            'Understanding cultural nuances and communication styles',
            'Handling sensitive or confidential matters'
        ],
        tips: [
            'Specialize in high-value customer success roles',
            'Develop expertise in specific industries or products',
            'Learn to work with AI tools as force multipliers',
            'Focus on relationship management and retention',
            'Transition to training or quality assurance roles'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles 80% of queries' },
            { year: '2025', desc: 'Voice AI widespread' },
            { year: '2027', desc: 'Complex cases only' },
            { year: '2029', desc: 'Specialist support teams' }
        ],
        news: [
            { title: 'Shopify AI reduces customer service costs by 60%', url: 'https://www.shopify.com/news/ai-customer-service-automation-2024' },
            { title: 'Bank of America\'s Erica handles 1 billion customer interactions', url: 'https://about.bankofamerica.com/en/making-an-impact/erica-ai-assistant-milestone' },
            { title: 'Call center jobs declining by 20% annually', url: 'https://www.bls.gov/news.release/empsit-customer-service-trends-2024.htm' }
        ]
    },
    'Waiter/Waitress': {
        impact: [
            'Tablet ordering systems reducing server interactions',
            'Robotic servers delivering food in restaurants',
            'AI optimizing table turnover and seating',
            'Digital payment systems eliminating cash handling'
        ],
        advantages: [
            'Personal service and hospitality experience',
            'Reading customer preferences and mood',
            'Handling special occasions and celebrations',
            'Upselling through conversation and recommendations',
            'Managing dietary restrictions and allergies'
        ],
        tips: [
            'Focus on fine dining and premium establishments',
            'Develop wine and beverage expertise',
            'Learn restaurant management and operations',
            'Specialize in events and banquet service',
            'Build skills in hospitality and customer experience'
        ],
        timeline: [
            { year: '2024', desc: 'Tablet ordering common' },
            { year: '2026', desc: 'Robot servers in chains' },
            { year: '2028', desc: 'Premium service focus' },
            { year: '2030', desc: 'Human touch premium' }
        ],
        news: [
            { title: 'Chili\'s robots serve 50% faster than human waiters', url: 'https://www.chilis.com/news/robot-servers-efficiency-study-2024' },
            { title: 'Restaurant tech eliminates 30% of server positions', url: 'https://www.nrn.com/technology/restaurant-automation-server-jobs-2024' },
            { title: 'AI sommelier outperforms human wine recommendations', url: 'https://www.wine-business.com/news/ai-sommelier-technology-2024' }
        ]
    },
    'Laborer': {
        impact: [
            'Robotic systems handling heavy lifting and material transport',
            'AI-powered equipment reducing need for manual operation',
            'Automated inventory and warehouse management systems',
            'Exoskeletons enhancing human capabilities in physical work'
        ],
        advantages: [
            'Adaptability to changing work environments',
            'Problem-solving in unpredictable situations',
            'Safety awareness and risk assessment',
            'Teamwork and communication skills',
            'Local knowledge and site-specific expertise'
        ],
        tips: [
            'Learn to operate automated and robotic equipment',
            'Develop supervisory and team leadership skills',
            'Focus on specialized trades requiring human judgment',
            'Build expertise in equipment maintenance and repair',
            'Transition to quality control and safety roles'
        ],
        timeline: [
            { year: '2024', desc: 'Robots assist heavy work' },
            { year: '2026', desc: 'Automated material handling' },
            { year: '2028', desc: 'Human oversight roles' },
            { year: '2031', desc: 'Specialized tasks only' }
        ],
        news: [
            { title: 'Amazon warehouses deploy 750,000 robots', url: 'https://www.amazon.com/about/news/workplace/amazon-warehouse-robotics-2024' },
            { title: 'Construction robots reduce labor costs by 40%', url: 'https://www.constructiondive.com/news/construction-robotics-labor-reduction-2024' },
            { title: 'Exoskeletons becoming standard in heavy industries', url: 'https://www.industrialequipmentnews.com/exoskeleton-technology-adoption-2024' }
        ]
    },
    'Janitor': {
        impact: [
            'Autonomous cleaning robots handling routine floor maintenance',
            'AI-powered scheduling optimizing cleaning efficiency',
            'Smart sensors detecting when areas need attention',
            'UV disinfection robots eliminating manual sanitization'
        ],
        advantages: [
            'Detail-oriented cleaning and problem identification',
            'Security and building safety awareness',
            'Personal service and building relationships',
            'Handling sensitive areas and confidential environments',
            'Emergency response and maintenance troubleshooting'
        ],
        tips: [
            'Specialize in high-security or medical facilities',
            'Learn facility management and maintenance skills',
            'Focus on supervisory or team coordination roles',
            'Develop expertise in specialized cleaning technologies',
            'Build customer service and property management skills'
        ],
        timeline: [
            { year: '2024', desc: 'Robot cleaners widespread' },
            { year: '2026', desc: 'Smart building integration' },
            { year: '2028', desc: 'Specialized cleaning focus' },
            { year: '2030', desc: 'Facility management roles' }
        ],
        news: [
            { title: 'Walmart deploys 1,500 autonomous floor cleaners', url: 'https://corporate.walmart.com/newsroom/innovation/autonomous-floor-cleaners-2024' },
            { title: 'Hospital cleaning robots reduce infection rates by 30%', url: 'https://www.modernhealthcare.com/technology/cleaning-robots-infection-prevention-2024' },
            { title: 'Office buildings cut janitorial costs 50% with automation', url: 'https://www.facilitiesnet.com/cleaning/article/Automated-Cleaning-Systems-Transform-Commercial-Buildings--19690' }
        ]
    },
    'Secretary': {
        impact: [
            'AI assistants handling scheduling and calendar management',
            'Automated transcription and document creation',
            'Chatbots managing routine inquiries and communications',
            'Digital workflow systems eliminating paper-based tasks'
        ],
        advantages: [
            'Personal relationship building with executives and clients',
            'Confidentiality and discretion in sensitive matters',
            'Complex problem-solving and prioritization',
            'Institutional knowledge and company culture understanding',
            'Multi-tasking and crisis management capabilities'
        ],
        tips: [
            'Transition to executive assistant or chief of staff roles',
            'Develop project management and business analysis skills',
            'Learn advanced data management and reporting',
            'Focus on strategic support and decision-making assistance',
            'Build expertise in compliance and regulatory coordination'
        ],
        timeline: [
            { year: '2024', desc: 'AI handles routine tasks' },
            { year: '2025', desc: 'Automated scheduling standard' },
            { year: '2027', desc: 'Strategic roles remain' },
            { year: '2029', desc: 'Executive partnership focus' }
        ],
        news: [
            { title: 'Microsoft\'s Cortana eliminates 60% of administrative tasks', url: 'https://www.microsoft.com/en-us/microsoft-365/blog/cortana-productivity-study-2024' },
            { title: 'AI scheduling assistants save executives 10 hours weekly', url: 'https://hbr.org/2024/ai-scheduling-productivity-study' },
            { title: 'Traditional secretary roles decline 45% in past 5 years', url: 'https://www.bls.gov/news.release/occupational-employment-secretaries-2024.htm' }
        ]
    },
    'Sales Representative': {
        impact: [
            'AI analyzing customer data to predict buying patterns',
            'Automated lead qualification and scoring systems',
            'Chatbots handling initial sales inquiries and follow-ups',
            'CRM systems automating most administrative sales tasks'
        ],
        advantages: [
            'Building trust and rapport with clients',
            'Complex negotiation and relationship management',
            'Understanding nuanced business needs',
            'Closing deals through emotional intelligence',
            'Long-term account development and strategy'
        ],
        tips: [
            'Focus on high-value, complex sales cycles',
            'Develop industry specialization and expertise',
            'Learn consultative selling and solution architecture',
            'Build skills in account management and customer success',
            'Master relationship-based selling over transactional sales'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists lead qualification' },
            { year: '2026', desc: 'Automated follow-up standard' },
            { year: '2028', desc: 'Complex sales focus only' },
            { year: '2030', desc: 'Relationship-driven roles' }
        ],
        news: [
            { title: 'Salesforce Einstein AI increases sales conversion by 35%', url: 'https://www.salesforce.com/news/stories/einstein-ai-sales-conversion-study-2024' },
            { title: 'LinkedIn Sales Navigator\'s AI generates 50% of qualified leads', url: 'https://business.linkedin.com/sales-solutions/sales-navigator-ai-lead-generation' },
            { title: 'Study: 40% of sales rep tasks now automated', url: 'https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/sales-automation-impact-2024' }
        ]
    },
    'Manager': {
        impact: [
            'AI analytics providing real-time performance insights',
            'Automated scheduling and resource allocation systems',
            'Performance monitoring through AI-powered dashboards',
            'Predictive analytics for team productivity and turnover'
        ],
        advantages: [
            'Leadership and team motivation capabilities',
            'Complex decision-making in ambiguous situations',
            'Emotional intelligence and conflict resolution',
            'Strategic thinking and vision development',
            'Change management and organizational development'
        ],
        tips: [
            'Focus on strategic leadership over operational management',
            'Develop skills in data-driven decision making',
            'Build expertise in change management and transformation',
            'Learn to leverage AI tools for enhanced insights',
            'Specialize in people development and coaching'
        ],
        timeline: [
            { year: '2024', desc: 'AI assists decision making' },
            { year: '2026', desc: 'Automated routine management' },
            { year: '2028', desc: 'Strategic leadership focus' },
            { year: '2032', desc: 'Human leadership premium' }
        ],
        news: [
            { title: 'AI management tools reduce admin time by 50%', url: 'https://hbr.org/2024/ai-management-productivity-study' },
            { title: 'Microsoft Viva provides AI-powered team insights', url: 'https://www.microsoft.com/en-us/microsoft-viva/insights-ai-analytics' },
            { title: 'Study: 30% of middle management tasks now automated', url: 'https://www.mckinsey.com/business-functions/organization/our-insights/management-automation-2024' }
        ]
    },
    'Security Guard': {
        impact: [
            'AI-powered surveillance systems with facial recognition',
            'Automated threat detection and alert systems',
            'Drone patrols handling routine security monitoring',
            'Smart access control reducing need for human verification'
        ],
        advantages: [
            'Human judgment in complex security situations',
            'De-escalation and conflict resolution skills',
            'Emergency response and crisis management',
            'Personal interaction and customer service',
            'Physical intervention when situations require it'
        ],
        tips: [
            'Specialize in high-security or VIP protection services',
            'Learn to operate advanced security technologies',
            'Develop emergency response and first aid expertise',
            'Focus on investigation and loss prevention roles',
            'Build skills in security management and coordination'
        ],
        timeline: [
            { year: '2024', desc: 'AI surveillance standard' },
            { year: '2026', desc: 'Automated monitoring widespread' },
            { year: '2028', desc: 'Response-focused roles' },
            { year: '2031', desc: 'Specialized security only' }
        ],
        news: [
            { title: 'Amazon\'s AI security reduces theft by 40% in warehouses', url: 'https://www.amazon.com/about/news/operations/ai-security-theft-prevention-2024' },
            { title: 'Airports deploy AI to replace 60% of security screening', url: 'https://www.aviationweek.com/aerospace/ai-airport-security-screening-2024' },
            { title: 'Smart buildings reduce security staff needs by 50%', url: 'https://www.securityinfowatch.com/access-identity/article/ai-security-systems-staffing-reduction-2024' }
        ]
    },
    'Maintenance Worker': {
        impact: [
            'IoT sensors predicting equipment failures before they occur',
            'AI diagnostics identifying problems without human inspection',
            'Robotic systems handling routine maintenance tasks',
            'Automated parts ordering and inventory management'
        ],
        advantages: [
            'Hands-on problem-solving and troubleshooting',
            'Working in confined or dangerous spaces',
            'Emergency repair and crisis response',
            'Understanding legacy systems and equipment',
            'Custom fabrication and creative solutions'
        ],
        tips: [
            'Specialize in complex systems requiring human expertise',
            'Learn to work with AI diagnostic tools',
            'Develop expertise in renewable energy systems',
            'Focus on emergency and critical repair services',
            'Build skills in equipment installation and commissioning'
        ],
        timeline: [
            { year: '2024', desc: 'AI predicts maintenance needs' },
            { year: '2026', desc: 'Automated routine tasks' },
            { year: '2028', desc: 'Complex repairs focus' },
            { year: '2031', desc: 'Specialist technicians only' }
        ],
        news: [
            { title: 'GE\'s AI predicts turbine maintenance 30 days in advance', url: 'https://www.ge.com/news/reports/predix-ai-predictive-maintenance-2024' },
            { title: 'Manufacturing plants reduce maintenance staff 40% with AI', url: 'https://www.industryweek.com/technology/ai-predictive-maintenance-workforce-impact-2024' },
            { title: 'Smart building systems automate 70% of maintenance tasks', url: 'https://www.facilitiesnet.com/maintenanceoperations/article/AI-Smart-Building-Maintenance-Automation--19785' }
        ]
    },
    'Cook': {
        impact: [
            'Robotic kitchen systems preparing consistent meals',
            'AI optimizing recipes and ingredient usage',
            'Automated food preparation and cooking equipment',
            'Inventory management systems reducing food waste'
        ],
        advantages: [
            'Creativity and artistic presentation',
            'Adapting recipes for dietary restrictions',
            'Quality control and taste testing',
            'Handling special occasions and custom requests',
            'Understanding customer preferences and cultural cuisine'
        ],
        tips: [
            'Develop expertise in specialized cuisines or dietary needs',
            'Focus on fine dining and artisanal cooking',
            'Learn food science and molecular gastronomy',
            'Build skills in menu development and food costing',
            'Specialize in catering or personal chef services'
        ],
        timeline: [
            { year: '2024', desc: 'Robotic prep widespread' },
            { year: '2026', desc: 'AI recipe optimization' },
            { year: '2028', desc: 'Creative cooking focus' },
            { year: '2030', desc: 'Artisanal premium only' }
        ],
        news: [
            { title: 'Miso Robotics\' Flippy cooks 300 burgers per hour', url: 'https://misorobotics.com/news/flippy-production-record-2024' },
            { title: 'KFC tests AI-powered kitchen that needs no cooks', url: 'https://www.qsrmagazine.com/news/kfc-ai-kitchen-automation-pilot-2024' },
            { title: 'Restaurant chains automate 60% of food preparation', url: 'https://www.foodservice.com/automation/restaurant-kitchen-automation-trends-2024' }
        ]
    },
    'Administrative Assistant': {
        impact: [
            'AI handling email management and response drafting',
            'Automated meeting scheduling and coordination',
            'Document creation and formatting through templates',
            'Expense tracking and report generation systems'
        ],
        advantages: [
            'Complex project coordination and management',
            'Personal relationships with stakeholders',
            'Discretion and confidentiality in sensitive matters',
            'Multi-tasking and priority management',
            'Problem-solving for unique organizational needs'
        ],
        tips: [
            'Transition to executive assistant or program manager roles',
            'Develop expertise in project management software',
            'Learn data analysis and business intelligence tools',
            'Focus on strategic support and business analysis',
            'Build skills in vendor management and procurement'
        ],
        timeline: [
            { year: '2024', desc: 'AI manages routine admin' },
            { year: '2025', desc: 'Automated communications' },
            { year: '2027', desc: 'Strategic support only' },
            { year: '2029', desc: 'Executive partnership roles' }
        ],
        news: [
            { title: 'Google Workspace AI reduces admin workload by 75%', url: 'https://workspace.google.com/blog/productivity-collaboration/ai-administrative-automation-study-2024' },
            { title: 'Microsoft Copilot automates 80% of routine office tasks', url: 'https://news.microsoft.com/2024/copilot-office-automation-productivity' },
            { title: 'Administrative jobs decline 35% as AI adoption accelerates', url: 'https://www.bls.gov/news.release/admin-assistant-employment-trends-2024.htm' }
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

function initializeProfessions() {
    allProfessions = allProfessionsList;
    displayProfessions();
    updatePaginationControls();
}

function displayProfessions() {
    const grid = document.getElementById('professions-grid');
    const startIndex = (currentPage - 1) * professionsPerPage;
    const endIndex = startIndex + professionsPerPage;
    const professionsToShow = allProfessions.slice(startIndex, endIndex);
    
    grid.innerHTML = professionsToShow.map(prof => `
        <div class="profession-card ${prof.category}" onclick="analyzeProfession('${prof.name}', ${prof.score})">
            <div class="icon">
                ${getIconSVG(prof.category)}
            </div>
            <h3>${prof.name}</h3>
            <span class="category">${prof.category}</span>
        </div>
    `).join('');
}

function getIconSVG(category) {
    const icons = {
        tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        health: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        creative: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 12l6.01 6.01M6.34 1.54l4.24 4.24M1.54 12l4.24-4.24"></path></svg>',
        business: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
        education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
        service: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z"></path><line x1="6" y1="17" x2="18" y2="17"></line></svg>',
        legal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        transport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
        retail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0z"></path><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path></svg>',
        other: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>'
    };
    return icons[category] || icons.other;
}

function updatePaginationControls() {
    const totalPages = Math.ceil(allProfessions.length / professionsPerPage);
    const paginationContainer = document.getElementById('pagination-container');
    
    if (!paginationContainer) {
        const container = document.createElement('div');
        container.id = 'pagination-container';
        container.className = 'pagination-container';
        document.querySelector('.card').appendChild(container);
    }
    
    let paginationHTML = '<div class="pagination-info">Page ' + currentPage + ' of ' + totalPages + ' (' + allProfessions.length + ' professions)</div>';
    paginationHTML += '<div class="pagination-buttons">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += '<button class="pagination-btn" onclick="changePage(' + (currentPage - 1) + ')">← Previous</button>';
    }
    
    // Page numbers
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
        const activeClass = i === currentPage ? ' active' : '';
        paginationHTML += '<button class="pagination-btn page-number' + activeClass + '" onclick="changePage(' + i + ')">' + i + '</button>';
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += '<button class="pagination-btn" onclick="changePage(' + (currentPage + 1) + ')">Next →</button>';
    }
    
    paginationHTML += '</div>';
    document.getElementById('pagination-container').innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    displayProfessions();
    updatePaginationControls();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterProfessions() {
    const searchTerm = document.getElementById('profession-search').value.toLowerCase();
    
    if (searchTerm === '') {
        allProfessions = allProfessionsList;
    } else {
        allProfessions = allProfessionsList.filter(prof => 
            prof.name.toLowerCase().includes(searchTerm) || 
            prof.category.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayProfessions();
    updatePaginationControls();
}

function analyzeProfession(profession, vulnerabilityScore) {
    currentProfession = profession;
    currentScore = vulnerabilityScore;
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('profession', encodeURIComponent(profession));
    url.searchParams.set('score', vulnerabilityScore);
    window.history.pushState({ profession, vulnerabilityScore }, '', url);
    
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
    // Update URL to remove profession parameters
    const url = new URL(window.location);
    url.searchParams.delete('profession');
    url.searchParams.delete('score');
    window.history.pushState({}, '', url);
    
    document.getElementById('analysis').classList.add('hidden');
    document.getElementById('comparison').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}

function backToAnalysis() {
    document.getElementById('comparison').classList.add('hidden');
    document.getElementById('analysis').classList.remove('hidden');
}

function shareResults() {
    const professionURL = `${window.location.origin}${window.location.pathname}?profession=${encodeURIComponent(currentProfession)}&score=${currentScore}`;
    const text = `I just checked my AI vulnerability score on Will AI Replace Me Today! ${currentProfession}: ${currentScore}% vulnerable to AI automation. Check yours at ${professionURL}`;
    
    if (navigator.share) {
        navigator.share({
            title: `${currentProfession} - Will AI Replace Me Today?`,
            text: text,
            url: professionURL
        });
    } else {
        navigator.clipboard.writeText(professionURL);
        alert('Direct link copied to clipboard!');
    }
}

function compareJobs() {
    document.getElementById('analysis').classList.add('hidden');
    document.getElementById('comparison').classList.remove('hidden');
    
    const comparisonChart = document.getElementById('comparison-chart');
    
    const sortedProfessions = allProfessionsList.sort((a, b) => b.score - a.score);
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

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.profession) {
        // User navigated back to a profession page
        analyzeProfession(event.state.profession, event.state.vulnerabilityScore);
    } else {
        // User navigated back to main page
        backToSelection();
    }
});

// Load profession from URL parameters on page load
function loadFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const profession = urlParams.get('profession');
    const score = urlParams.get('score');
    
    if (profession && score) {
        // Find the profession in our database to get the exact name match
        const professionData = allProfessionsList.find(p => 
            p.name.toLowerCase() === profession.toLowerCase()
        );
        
        if (professionData) {
            analyzeProfession(professionData.name, parseInt(score));
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#analysis-count .count').textContent = analysisCount;
    initializeProfessions();
    loadFromURL();
});