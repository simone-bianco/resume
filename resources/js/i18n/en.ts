export default {
    hero: {
        name: 'Simone Bianco',
        title: 'Backend Software Engineer',
        bio:
            'Backend software engineer with over 5 years of ' +
            'experience in building scalable applications and ' +
            'microservices. Specialized in the Laravel framework ' +
            'with experience in Vuejs, and a strong background in ' +
            'REST architectures. Knowledge of state of art ' +
            'techniques for prompt engineering and coding AI tools. ' +
            'Excellent ability to work in a team and a strong focus ' +
            'on achieving project goals.',
        contactLabel: 'Contact me!',
        imageAlt: 'Simone Bianco',
        githubAriaLabel: 'Github',
        linkedinAriaLabel: 'Linkedin',
        apprenticeshipNotice: 'I fall within the categories envisaged by Legislative Decree 81/2015 for hiring under a professional apprenticeship contract for unemployed individuals, which grants contribution relief to the employer.'
    },
    menu: {
        home: 'Home',
        projects: 'Projects',
        thesis: 'Thesis',
        resume: 'Resume',
    },
    projects: {
        sectionTitle: 'Projects',
        categories: {
            dnafactory: 'DNAFactory',
            universita: 'University',
            personale: 'Personal',
            freelance: 'Freelance',
        },
        linkPlaceholder: {
            private: 'Private link',
            legacy: 'Legacy project (link unavailable)'
        },
        items: {
            ammiraglio: {
                title: 'Ammiraglio',
                body: 'A multitenant SaaS (Laravel + Laravel Nova) that synchronizes orders between Magento and a wide range of e-commerce platforms'
            },
            dieteincloud: {
                title: 'Dieteincloud',
                body: 'A multitenant SaaS (Laravel + Livewire + Alpine.js) used by many dietitians to manage patients and diets; I personally implemented invoice synchronization (via SOAP) with both the national invoicing system (TS) and the health card system (SSN)'
            },
            gruppoedico: {
                title: 'Gruppoedico',
                body: 'A Magento 2 platform enabling Gruppoedico consortium partners to manage shared warehouse stock to optimize collaboration and overall profits'
            },
            mensa: {
                title: 'Mensa Institute Scholarships',
                body: 'Platform (Laravel + Vue.js) used by the Mensa Institute to manage university students\' scholarships'
            },
            editorial_builder: {
                title: 'Editorial Builder',
                body: 'Platform (Laravel + Vue.js) that allows AI agents and multiple people to collaborate in the same chats'
            },
            efarma: {
                title: 'Efarma',
                body: 'Large e-commerce (based on Magento 2) selling medicines; I worked on a microservice (Laravel + Laravel Nova) to externalize invoice management and on an M2 module to manage order processing queues'
            },
            astrolume: {
                title: 'Astrolume',
                body: 'SaaS (Laravel + Alpine.js) with advanced chat features'
            },
            hrm: {
                title: 'HRM',
                body: 'Hybrid Recommender System, an architecture based on Harness + Laravel for hybrid product recommendations through hybrid filters (old thesis project with the company, now outdated technologies)'
            },
            blog_suggestions_ai: {
                title: 'Blog Suggestions AI',
                body: 'SaaS (Laravel + Laravel Nova) using agents + RAG to suggest products dynamically based on the content of web pages (e.g., blog)'
            },
            desk_helper_ai: {
                title: 'Desk Helper AI',
                body: 'SaaS (Laravel + Laravel Nova) that uses agents + RAG, plus other advanced techniques and integration with N8N, to ingest all company knowledge (projects, tasks, resources, tickets, codebases, documentation, etc.) and provide support, insights, and solutions'
            },
            restaurant_booking_app: {
                title: 'Restaurant booking app',
                body: 'Android app for reserving tables at a restaurant'
            }
        }
    },
    skills: {
        languages: {
            title: 'Coding',
            items: 'PHP, Javascript, Typescript, HTML, SQL, Python',
        },
        frameworks: {
            title: 'Frameworks',
            items: 'Laravel, Magento 2, Vue.js',
        },
        databases: {
            title: 'Database',
            items: 'MySQL, MongoDB, Typesense',
        },
        tools: {
            title: 'Tools & Platforms',
            items: 'Docker, Git, Nginx, OpenAI API, Junie, MCP Servers, Slack',
        },
        architectures: {
            title: 'Architectures',
            items: 'Microservices, REST APIs, Multitenancy',
        },
        locales: {
            title: 'Languages',
            items: 'Italiano (native), English (Advanced B2)',
        },
    },
    experience: {
        sectionTitle: 'Job Experience',
        dnafactory: {
            company: 'DNAFactory',
            title: 'Backend Software Engineer',
            date: 'June 2019 - July 2025',
            desc1: 'Microservices development with Laravel',
            desc2: 'SaaS development with VILT stack and Multitenancy',
            desc3: 'UML design',
            desc4: 'Relational (MySQL), non-relational (MongoDB), and vector databases (Typesense)',
            desc5: 'Web scraping (Selenium + Python)',
            desc6: 'Magento 2 development',
            desc7: 'Version control (GitHub and Bitbucket)',
            desc8: 'Deployment automation and management (Nginx, Apache2, Forge, Envoyer)',
            desc9: 'REST services',
            desc10: 'Automation of business processes using N8N + AI',
            desc11: 'Integration of OpenaiAI and Ollama APIs agents in SaaS',
            desc12: 'ChatGPT and Gemini prompt engineering',
            desc13: 'AI coding tools (Jetbrain Junie, Github Copilot, Suna, GeminiCLI) integrated with MCP servers',
            desc14: 'RAGS built using vectorial databases',
        },
        masters: {
            title: 'Master’s Degree in Computer Engineering',
            institution: 'University of Naples Federico II',
            date: '2019 - 2022',
            desc1: 'Elective courses in AI and specialization in IT Management',
            desc2: 'Experimental thesis in Big Data: "Design and Implementation of a Hybrid Recommender System" in collaboration with DNAFactory',
        },
        freelance: {
            title: 'Web Developer',
            company: 'Freelance',
            date: '2017 - 2022',
            desc1: 'Development of web applications',
        },
        diploma: {
            title: 'Diploma in Computer Science – IT Specialist',
            institution: 'Galileo Ferraris Institute, Naples',
            date: '2010',
            desc1: 'Strengthening of fundamental coding skills',
            desc2: 'C++, HTML, PHP, CSS, Javascript, Java, MySQL',
        },
    },
    chatBubble: {
        text: 'Welcome! Click to chat with my virtual assistant!'
    },
    chat: {
        title: 'Chat',
        welcome: 'Hello, nice to meet you! Would you like to ask me something?',
        error: "I'm sorry, probably chat tokens limit was reached 😔",
        thinking: 'Thinking...',
        writing: 'Typing...',
        placeholder: 'Type a message to chat',
    }
};
