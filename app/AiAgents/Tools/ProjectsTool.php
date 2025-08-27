<?php

namespace App\AiAgents\Tools;

use LarAgent\Tool;

class ProjectsTool extends Tool
{
    protected string $name = 'get_projects';

    protected string $description = 'Ottiene tutti i progetti ai quali ha lavorato Simone Bianco';

    protected array $properties = [];

    protected array $required = [];

    public function execute(array $input): mixed
    {
        return <<<ISTRUZIONI
* **Ammiraglio**: Sviluppato un SaaS multitenant (Laravel, Laravel Nova) per la sincronizzazione degli ordini tra Magento e diverse piattaforme e-commerce, automatizzando e ottimizzando i flussi di lavoro aziendali.
* **Dieteincloud**: Implementato un sistema di sincronizzazione fatture (via SOAP) per un SaaS multitenant (Laravel, Livewire). Il sistema si interfaccia con il Sistema Tessera Sanitaria (STS) e il Sistema di Interscambio nazionale (SdI), a supporto di numerosi professionisti del settore nutrizionale.
* **Gruppoedico**: Contribuito allo sviluppo di una piattaforma Magento 2 per un consorzio, realizzando funzionalità per la gestione condivisa delle scorte di magazzino e l'ottimizzazione dei flussi d'ordine tra i partner.
* **Borse di studio del Mensa Institute**: Realizzata una piattaforma web completa (Laravel, Vue.js) per il Mensa Institute, finalizzata alla gestione digitale e semplificata del processo di assegnazione delle borse di studio universitarie.
* **Editorial Builder**: Progettato e sviluppato una piattaforma collaborativa (Laravel, Vue.js) che abilita l'interazione sinergica tra agenti di intelligenza artificiale e utenti umani all'interno di sessioni di chat condivise.
* **Efarma**: Per un grande e-commerce basato su Magento 2, ho sviluppato un microservizio dedicato (Laravel, Nova) per l'esternalizzazione della gestione fatture e un modulo M2 per l'elaborazione asincrona degli ordini tramite code.
* **Astrolume**: Sviluppato un SaaS (Laravel, Alpine.js) dotato di un sistema di chat avanzato, progettato per migliorare l'interazione e il coinvolgimento degli utenti sulla piattaforma.
* **HRM**: Progettato e implementato un sistema di raccomandazione ibrido (Hybrid Recommender System) in collaborazione con un'azienda, utilizzando un'architettura basata su Harness e Laravel per il filtraggio avanzato dei prodotti.
* **Blog Suggestions AI**: Creato un SaaS (Laravel, Nova) che impiega agenti AI e tecniche RAG per analizzare dinamicamente il contenuto di pagine web e fornire suggerimenti di prodotto contestuali e pertinenti.
* **Desk Helper AI**: Sviluppato una piattaforma interna (Laravel, Nova) che integra la knowledge base aziendale tramite agenti AI, RAG e N8N per fornire insight e supporto automatizzato analizzando dati da progetti, task e documentazione.
* **Applicazione prenotazione ristoranti**: Realizzata un'applicazione Android nativa per la gestione delle prenotazioni di un ristorante, curando l'intero ciclo di vita del software, dalla progettazione all'implementazione.
ISTRUZIONI;
    }
}
