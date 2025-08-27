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
            personal: 'Personale',
            freelance: 'Freelance',
        },
        linkPlaceholder: {
            private: 'Link privato',
            legacy: 'Progetto legacy (link non disponibile)'
        },
        groupTitles: {
            dnafactory: 'DNAFactory',
            personal: 'Progetti Personali',
            universita: 'Progetti Universitari'
        },
        items: {
            ammiraglio: {
                title: 'Ammiraglio',
                body: 'Sviluppato un SaaS multitenant (Laravel, Laravel Nova) per la sincronizzazione degli ordini tra Magento e diverse piattaforme e-commerce, automatizzando e ottimizzando i flussi di lavoro aziendali.'
            },
            dieteincloud: {
                title: 'Dieteincloud',
                body: 'Implementato un sistema di sincronizzazione fatture (via SOAP) per un SaaS multitenant (Laravel, Livewire). Il sistema si interfaccia con il Sistema Tessera Sanitaria (STS) e il Sistema di Interscambio nazionale (SdI), a supporto di numerosi professionisti del settore nutrizionale.'
            },
            gruppoedico: {
                title: 'Gruppoedico',
                body: 'Contribuito allo sviluppo di una piattaforma Magento 2 per un consorzio, realizzando funzionalità per la gestione condivisa delle scorte di magazzino e l\'ottimizzazione dei flussi d\'ordine tra i partner.'
            },
            mensa: {
                title: 'Borse di studio del Mensa Institute',
                body: 'Realizzata una piattaforma web completa (Laravel, Vue.js) per il Mensa Institute, finalizzata alla gestione digitale e semplificata del processo di assegnazione delle borse di studio universitarie.'
            },
            editorial_builder: {
                title: 'Editorial Builder',
                body: 'Progettato e sviluppato una piattaforma collaborativa (Laravel, Vue.js) che abilita l\'interazione sinergica tra agenti di intelligenza artificiale e utenti umani all\'interno di sessioni di chat condivise.'
            },
            efarma: {
                title: 'Efarma',
                body: 'Per un grande e-commerce basato su Magento 2, ho sviluppato un microservizio dedicato (Laravel, Nova) per l\'esternalizzazione della gestione fatture e un modulo M2 per l\'elaborazione asincrona degli ordini tramite code.'
            },
            astrolume: {
                title: 'Astrolume',
                body: 'Sviluppato un SaaS (Laravel, Alpine.js) dotato di un sistema di chat avanzato, progettato per migliorare l\'interazione e il coinvolgimento degli utenti sulla piattaforma.'
            },
            hrm: {
                title: 'HRM',
                body: 'Progettato e implementato un sistema di raccomandazione ibrido (Hybrid Recommender System) in collaborazione con l\'azienda, utilizzando un\'architettura basata su Harness e Laravel per il filtraggio avanzato dei prodotti.'
            },
            blog_suggestions_ai: {
                title: 'Blog Suggestions AI',
                body: 'Creato un SaaS (Laravel, Nova) che impiega agenti AI e tecniche RAG per analizzare dinamicamente il contenuto di pagine web e fornire suggerimenti di prodotto contestuali e pertinenti.'
            },
            desk_helper_ai: {
                title: 'Desk Helper AI',
                body: 'Sviluppato una piattaforma interna (Laravel, Nova) che integra la knowledge base aziendale tramite agenti AI, RAG e N8N. Il sistema fornisce insight e supporto automatizzato analizzando dati da progetti, task, ticket e documentazione.'
            },
            restaurant_booking_app: {
                title: 'Applicazione prenotazione ristoranti',
                body: 'Realizzata un\'applicazione Android nativa per la gestione delle prenotazioni di un ristorante, curando l\'intero ciclo di vita del software, dalla progettazione all\'implementazione.'
            },
            resume_ai: {
                title: 'Resume AI',
                body: 'Sviluppato un curriculum vitae interattivo che integra una chatbot, basata su un mio avatar virtuale, per offrire un\'esperienza di candidatura dinamica e innovativa.'
            },
            laravel_rules: {
                title: 'Laravel Rules',
                body: 'Progettato un pacchetto open-source per la gestione centralizzata, dinamica e basata su cache delle regole di validazione di Laravel, migliorando la manutenibilità del codice e la developer experience.'
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
            desc1: 'Corsi a scelta in Intelligenza Artificiale e specializzazione in IT Management',
            desc2: 'Tesi sperimentale in Big Data: "Progettazione e Implementazione di un Sistema di Raccomandazione Ibrido" in collaborazione con DNAFactory',
        },
        freelance: {
            title: 'Web Developer',
            company: 'Freelance',
            desc1: 'Sviluppo di applicazioni web',
        },
        diploma: {
            title: 'Diploma in Informatica – Perito Informatico',
            institution: 'Istituto Galileo Ferraris, Napoli',
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
            email: 'La tua email',
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
