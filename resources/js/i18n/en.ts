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
        contact: 'Contact me',
    },
    projects: {
        sectionTitle: 'I Worked on...',
        categories: {
            dnafactory: 'DNAFactory',
            universita: 'University',
            personale: 'Personal',
            personal: 'Personal',
            freelance: 'Freelance',
        },
        linkPlaceholder: {
            private: 'Private link',
            legacy: 'Legacy project (link unavailable)'
        },
        groupTitles: {
            dnafactory: 'DNAFactory',
            personal: 'Personal Projects',
            universita: 'University Projects'
        },
        items: {
            ammiraglio: {
                title: 'Ammiraglio',
                body: 'Engineered a multitenant SaaS platform using Laravel and Laravel Nova to synchronize orders between Magento and various e-commerce platforms, automating and optimizing business workflows.'
            },
            dieteincloud: {
                title: 'Dieteincloud',
                body: 'Implemented a robust invoice synchronization system (via SOAP) for a multitenant SaaS (Laravel, Livewire). The system interfaces with the national health card (SSN) and invoicing (TS) systems, serving numerous nutrition professionals.'
            },
            gruppoedico: {
                title: 'Gruppoedico',
                body: 'Contributed to a Magento 2 platform for a business consortium by developing features for shared warehouse stock management and order flow optimization, enhancing collaboration and profitability among partners.'
            },
            mensa: {
                title: 'Mensa Institute Scholarships',
                body: 'Built a comprehensive web platform (Laravel, Vue.js) for the Mensa Institute to digitally manage and streamline the university scholarship application and award process.'
            },
            editorial_builder: {
                title: 'Editorial Builder',
                body: 'Designed and developed a collaborative platform (Laravel, Vue.js) enabling synergistic interaction between AI agents and human users within shared chat sessions.'
            },
            efarma: {
                title: 'Efarma',
                body: 'For a large Magento 2 e-commerce site, I developed a dedicated microservice (Laravel, Nova) to externalize invoice management and an M2 module to handle asynchronous order processing through queues.'
            },
            astrolume: {
                title: 'Astrolume',
                body: 'Developed a SaaS application (Laravel, Alpine.js) featuring an advanced chat system designed to enhance user interaction and engagement on the platform.'
            },
            hrm: {
                title: 'HRM',
                body: 'Designed and implemented a Hybrid Recommender System as part of a university-company collaboration, leveraging a Harness and Laravel architecture for advanced product filtering.'
            },
            blog_suggestions_ai: {
                title: 'Blog Suggestions AI',
                body: 'Created a SaaS product (Laravel, Nova) that employs AI agents and RAG techniques to dynamically analyze web page content and provide relevant, context-aware product suggestions.'
            },
            desk_helper_ai: {
                title: 'Desk Helper AI',
                body: 'Developed an internal enterprise platform (Laravel, Nova) integrating the company\'s knowledge base using AI agents, RAG, and N8N. The system provides automated support by analyzing data from projects, tasks, and documentation.'
            },
            restaurant_booking_app: {
                title: 'Restaurant Booking App',
                body: 'Developed a native Android application for managing restaurant reservations, overseeing the entire software development lifecycle from design to implementation.'
            },
            resume_ai: {
                title: 'Resume AI',
                body: 'Created an interactive resume featuring an integrated chatbot powered by a virtual avatar of myself, offering a dynamic and innovative candidate experience.'
            },
            laravel_rules: {
                title: 'Laravel Rules',
                body: 'Engineered an open-source package for centralized, dynamic, and cached management of Laravel validation rules, improving code maintainability and the overall developer experience.'
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
            items: 'Italian (native), English (Advanced B2)',
        },
    },
    experience: {
        sectionTitle: 'Job Experience',
        dnafactory: {
            company: 'DNAFactory',
            title: 'Backend Software Engineer',
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
            desc11: 'Integration of OpenAI and Ollama APIs agents in SaaS',
            desc12: 'ChatGPT and Gemini prompt engineering',
            desc13: 'AI coding tools (Jetbrain Junie, Github Copilot, Suna, GeminiCLI) integrated with MCP servers',
            desc14: 'RAGS built using vectorial databases',
        },
        masters: {
            title: 'Master’s Degree in Computer Engineering',
            institution: 'University of Naples Federico II',
            desc1: 'Elective courses in AI and specialization in IT Management',
            desc2: 'Experimental thesis in Big Data: "Design and Implementation of a Hybrid Recommender System" in collaboration with DNAFactory',
        },
        freelance: {
            title: 'Web Developer',
            company: 'Freelance',
            desc1: 'Development of web applications',
        },
        diploma: {
            title: 'Diploma in Computer Science – IT Specialist',
            institution: 'Galileo Ferraris Institute, Naples',
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
    },
    contact: {
        sectionTitle: 'Contact me',
        labels: {
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
        },
        placeholders: {
            firstName: 'Your first name',
            lastName: 'Your last name',
            email: 'your@email.com',
            phone: '+39 333 1234567',
            message: 'Write your message here...'
        },
        actions: { submit: 'Send' },
        flash: {
            success: 'Thanks! Your message has been sent successfully ✅',
            error: 'Oops! Something went wrong while sending your message. Please try again later.'
        }
    }
};
