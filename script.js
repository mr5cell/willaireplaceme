let analysisCount = localStorage.getItem('analysisCount') || 0;
let currentProfession = '';
let currentScore = 0;

const professionData = {
    'Software Developer': {
        impact: [
            'Code generation and automation tools',
            'Automated testing and debugging',
            'AI pair programming assistants'
        ],
        advantages: [
            'Complex problem-solving and system design',
            'Understanding business context and requirements',
            'Creative solutions and innovation',
            'Team collaboration and mentoring'
        ],
        tips: [
            'Focus on architecture and system design',
            'Develop strong domain expertise',
            'Learn to work with AI tools, not against them',
            'Emphasize soft skills and leadership'
        ],
        timeline: [
            { year: '2025', desc: 'AI assists' },
            { year: '2030', desc: 'Co-pilots mainstream' },
            { year: '2035', desc: 'Partial automation' }
        ]
    },
    'Data Analyst': {
        impact: [
            'Automated data cleaning and preprocessing',
            'AI-driven insights and pattern recognition',
            'Report generation and visualization'
        ],
        advantages: [
            'Domain knowledge and context understanding',
            'Strategic thinking and business acumen',
            'Stakeholder communication',
            'Ethical considerations in data use'
        ],
        tips: [
            'Move towards data science and ML',
            'Focus on strategic analysis',
            'Develop business domain expertise',
            'Learn advanced statistical methods'
        ],
        timeline: [
            { year: '2025', desc: 'Heavy automation' },
            { year: '2028', desc: 'AI-first analysis' },
            { year: '2032', desc: 'Strategic roles only' }
        ]
    },
    'Accountant': {
        impact: [
            'Automated bookkeeping and reconciliation',
            'AI tax preparation and filing',
            'Automated financial reporting'
        ],
        advantages: [
            'Complex tax strategy and planning',
            'Client relationships and trust',
            'Regulatory compliance expertise',
            'Business advisory services'
        ],
        tips: [
            'Shift to advisory and consulting',
            'Specialize in complex tax law',
            'Develop forensic accounting skills',
            'Focus on strategic financial planning'
        ],
        timeline: [
            { year: '2024', desc: 'Basic tasks automated' },
            { year: '2027', desc: 'Most routine work gone' },
            { year: '2030', desc: 'Advisory focus' }
        ]
    },
    'Cashier': {
        impact: [
            'Self-checkout systems expanding',
            'Automated payment processing',
            'AI-powered inventory management'
        ],
        advantages: [
            'Customer service for complex issues',
            'Security and loss prevention',
            'Handling unusual situations',
            'Personal touch for elderly customers'
        ],
        tips: [
            'Transition to customer service roles',
            'Learn inventory management systems',
            'Develop supervisory skills',
            'Consider retail management'
        ],
        timeline: [
            { year: '2024', desc: 'Self-checkout dominant' },
            { year: '2026', desc: 'Cashier-less stores' },
            { year: '2028', desc: 'Niche roles only' }
        ]
    }
};

function getDefaultData(profession, score) {
    const baseData = {
        impact: ['Task automation increasing', 'AI tools becoming prevalent', 'Role evolution required'],
        advantages: ['Human judgment and intuition', 'Emotional intelligence', 'Complex decision making', 'Adaptability'],
        tips: ['Stay updated with technology', 'Develop unique human skills', 'Consider adjacent roles', 'Embrace lifelong learning'],
        timeline: [
            { year: '2025', desc: 'Initial impact' },
            { year: '2030', desc: 'Significant change' },
            { year: '2035', desc: 'Role transformed' }
        ]
    };
    
    if (score > 70) {
        baseData.impact.push('High automation risk identified');
        baseData.tips.unshift('Consider career pivot soon');
    } else if (score < 30) {
        baseData.advantages.push('Low automation risk');
        baseData.tips.unshift('Focus on skill enhancement');
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
    
    const explanations = {
        low: 'Your profession requires significant human skills that are difficult for AI to replicate. While AI may assist in some tasks, the core of your work remains uniquely human.',
        moderate: 'AI will likely transform how you work rather than replace you entirely. Many routine tasks may be automated, but your expertise and human judgment remain valuable.',
        high: 'Many aspects of your current role are susceptible to automation. This presents both challenges and opportunities for career evolution.'
    };
    
    let explanation = vulnerabilityScore < 30 ? explanations.low : 
                     vulnerabilityScore < 60 ? explanations.moderate : 
                     explanations.high;
    
    document.getElementById('vulnerability-explanation').textContent = explanation;
    
    const data = professionData[profession] || getDefaultData(profession, vulnerabilityScore);
    
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