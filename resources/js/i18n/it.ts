export default {
    hero: {
        name: 'Simone Bianco',
        title: 'Ingegnere Software Backend',
        bio:
            'Ingegnere del software backend con oltre 5 anni di ' +
            'esperienza nella creazione di applicazioni scalabili e ' +
            'microservizi. Specializzato nel framework Laravel ' +
            'con conoscenze di Vue.js e un solido background in ' +
            'architetture REST. Adozione di tecniche all\'avanguardia ' +
            'dell\'ingegneria dei prompt e integrazione di tool di coding AI. ' +
            'Eccellente capacità di lavorare in team e forte orientamento ' +
            'al raggiungimento degli obiettivi di progetto.',
        contactLabel: 'Contattami!',
        imageAlt: 'Simone Bianco',
        githubAriaLabel: 'Github',
        linkedinAriaLabel: 'Linkedin',
        apprenticeshipNotice: 'Rientro nelle categorie previste dal D.Lgs. 81/2015 per l\'assunzione con contratto di apprendistato professionalizzante per disoccupati, che offre sgravi contributivi all\'azienda.'
    },
    menu: {
        home: 'Home',
        projects: 'Progetti',
        thesis: 'Tesi di Laurea',
        resume: 'Curriculum',
        contact: 'Contattami',
    },
    projects: {
        sectionTitle: 'Ho Lavorato a...',
        categories: {
            dnafactory: 'DNAFactory',
            universita: 'Università',
            personale: 'Personale',
            freelance: 'Freelance',
        },
        linkPlaceholder: {
            private: 'Link privato',
            legacy: 'Progetto legacy (link non disponibile)'
        },
        items: {
            ammiraglio: {
                title: 'Ammiraglio',
                body: 'Un SaaS multitenant (laravel + laravel nova), il quale permette di sincronizzare gli ordini tra Magento e una vasta gamma di piattaforme e-commerce'
            },
            dieteincloud: {
                title: 'Dieteincloud',
                body: 'Un SaaS multitenant (laravel + livewire + alpinejs), utilizzato da numerosi dietologi per gestire pazienti e diete; ho implementato (personalmente) tutta la parte di sincronizzazione delle fatture (tramite SOAP) sia con il sistema di fatturazione nazionale (TS) che con il sistema di tessera sanitaria (SSN)'
            },
            gruppoedico: {
                title: 'Gruppoedico',
                body: 'Una piattaforma Magento 2 che consente ai partner del consorzio Gruppoedico di gestire le scorte condivise dei loro magazzini e gli ordini provenienti dallo store, al fine di ottimizzare la collaborazione e i profitti dell\'intero collettivo'
            },
            mensa: {
                title: 'Borse di studio del Mensa Institute',
                body: 'Piattaforma (laravel + vue.js) usata dal Mensa Institute per gestire le borse di studio degli studenti universitari'
            },
            editorial_builder: {
                title: 'Editorial Builder',
                body: 'Piattaforma (laravel + vue.js) che consente a agent ai e più persone di collaborare nelle stesse chat'
            },
            efarma: {
                title: 'Efarma',
                body: 'Grande e-commerce (basato su Magento 2) che vende farmaci; ho lavorato a un microservizio (laravel + laravel nova) per esternalizzare la gestione delle fatture e a un modulo m2 per gestire queue di processing degli ordini'
            },
            astrolume: {
                title: 'Astrolume',
                body: 'SaaS (laravel + alpinejs) con funzionalità di chat avanzate'
            },
            hrm: {
                title: 'HRM',
                body: 'Hybrid Recommender System, architettura basata su Harness + Laravel per raccomandazioni ibride di prodotti tramite filtri ibridi (progetto vecchio di laurea in collaborazione con l\'azienda, tecnologie sorpassate ormai)'
            },
            blog_suggestions_ai: {
                title: 'Blog Suggestions AI',
                body: 'SaaS (laravel + laravel nova) che usa agents + RAG per suggerire prodotti dinamicamente in base al contenuto di pagine web (es. blog)'
            },
            desk_helper_ai: {
                title: 'Desk Helper AI',
                body: 'Piattaforma aziendale (laravel + laravel nova) che usa agents + RAG, più altre tecniche avanzate e interazione con N8N, per integrare nella propria KB tutte le conoscenze aziendali (progetti, task, risorse, tickets, codebases, documentazioni, etc...) e fornire supporto, insights e soluzioni'
            },
            restaurant_booking_app: {
                title: 'Applicazione prenotazione ristoranti',
                body: 'App android per la prenotazione di posti in un ristorante'
            }
        }
    },
    skills: {
        languages: {
            title: 'Coding',
            items: 'PHP, Javascript, Typescript, HTML, SQL, Python',
        },
        frameworks: {
            title: 'Framework',
            items: 'Laravel, Magento 2, Vue.js',
        },
        databases: {
            title: 'Database',
            items: 'MySQL, MongoDB, Typesense',
        },
        tools: {
            title: 'Strumenti e Piattaforme',
            items: 'Docker, Git, Nginx, OpenAI API, Junie, MCP Servers, Slack',
        },
        architectures: {
            title: 'Architetture',
            items: 'Microservizi, REST API, Multitenancy',
        },
        locales: {
            title: 'Lingue',
            items: 'Italiano (madrelingua), Inglese (Avanzato B2)',
        },
    },
    experience: {
        sectionTitle: 'Esperienza Lavorativa e Educazione',
        dnafactory: {
            company: 'DNAFactory',
            title: 'Ingegnere Software Backend',
            date: 'Giugno 2019 - Luglio 2025',
            desc1: 'Sviluppo di microservizi con Laravel',
            desc2: 'Sviluppo SaaS con stack VILT e Multitenancy',
            desc3: 'Progettazione UML',
            desc4: 'Database relazionali (MySQL), non relazionali (MongoDB) e vettoriali (Typesense)',
            desc5: 'Web scraping (Selenium + Python)',
            desc6: 'Sviluppo Magento 2',
            desc7: 'Controllo di versione (GitHub e Bitbucket)',
            desc8: 'Automazione e gestione del deployment (Nginx, Apache2, Forge, Envoyer)',
            desc9: 'Servizi REST',
            desc10: 'Automazione di processi di business usando N8N + AI',
            desc11: 'Integrazione di agenti API OpenAI e Ollama in SaaS',
            desc12: 'Ingegneria di prompt per ChatGPT e Gemini',
            desc13: 'Tool di AI coding (Jetbrain Junie, Github Copilot, Suna, GeminiCLI) integrati con server MCP',
            desc14: 'Sviluppo di RAGS (Retrieval-Augmented Generation) utilizzando database vettoriali',
        },
        masters: {
            title: 'Laurea Magistrale in Ingegneria Informatica',
            institution: 'Università degli Studi di Napoli Federico II',
            date: '2019 - 2022',
            desc1: 'Corsi a scelta in Intelligenza Artificiale e specializzazione in IT Management',
            desc2: 'Tesi sperimentale in Big Data: "Progettazione e Implementazione di un Sistema di Raccomandazione Ibrido" in collaborazione con DNAFactory',
        },
        freelance: {
            title: 'Web Developer',
            company: 'Freelance',
            date: '2017 - 2022',
            desc1: 'Sviluppo di applicazioni web',
        },
        diploma: {
            title: 'Diploma in Informatica – Perito Informatico',
            institution: 'Istituto Galileo Ferraris, Napoli',
            date: '2010',
            desc1: 'Consolidamento delle competenze di programmazione fondamentali',
            desc2: 'C++, HTML, PHP, CSS, Javascript, Java, MySQL',
        },
    },
    chatBubble: {
        text: 'Benvenuto! Clicca qui per chattare con il mio avatar virtuale!'
    },
    chat: {
        title: 'Chat',
        welcome: 'Ciao, piacere di conoscerti! Vuoi chiedermi qualcosa?',
        error: 'Mi dispiace, forse è finito il budget allocato alla chat 😔',
        thinking: 'Sto pensando...',
        writing: 'Sto scrivendo...',
        placeholder: 'Scrivi un messaggio per chattare',
    },
    contact: {
        sectionTitle: 'Contattami',
        labels: {
            firstName: 'Nome',
            lastName: 'Cognome',
            email: 'Email',
            phone: 'Telefono',
            message: 'Messaggio',
        },
        placeholders: {
            firstName: 'Il tuo nome',
            lastName: 'Il tuo cognome',
            email: 'tua@email.com',
            phone: '+39 333 1234567',
            message: 'Scrivi qui il tuo messaggio...'
        },
        actions: { submit: 'Invia' },
        flash: {
            success: 'Grazie! Il tuo messaggio è stato inviato con successo ✅',
            error: 'Ops! Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.'
        }
    }
};
