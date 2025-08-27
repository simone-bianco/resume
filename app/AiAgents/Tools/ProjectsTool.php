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
* **Ammiraglio**: Un SaaS multitenant (laravel + laravel nova), il quale permette di sincronizzare gli ordini tra Magento e una vasta gamma di piattaforme e-commerce
* **Dieteincloud**: Un SaaS multitenant (laravel + livewire + alpinejs), utilizzato da numerosi dietologi per gestire pazienti e diete; ho implementato (personalmente) tutta la parte di sincronizzazione delle fatture (tramite SOAP) sia con il sistema di fatturazione nazionale (TS) che con il sistema di tessera sanitaria (SSN)
* **Gruppoedico**: Una piattaforma Magento 2 che consente ai partner del consorzio Gruppoedico di gestire le scorte condivise dei loro magazzini, al fine di ottimizzare la collaborazione e i profitti dell'intero collettivo
* **Borse di studio del Mensa Institute**: Piattaforma (laravel + vue.js) usata dal Mensa Institute per gestire le borse di studio degli studenti universitari
* **Editorial Builder**: Piattaforma (laravel + vue.js) che consente a agent ai e più persone di collaborare nelle stesse chat
* **Efarma**: Grande e-commerce (basato su Magento 2) che vende farmaci; ho lavorato a un microservizio (laravel + laravel nova) per esternalizzare la gestione delle fatture e a un modulo m2 per gestire queue di processing degli ordini
* **Astrolume**: SaaS (laravel + alpinejs) con funzionalità di chat avanzate
* **HRM**: Hybrid Recommender System, architettura basata su Harness + Laravel per raccomandazioni ibride di prodotti tramite filtri ibridi (progetto vecchio di laurea in collaborazione con l'azienda, tecnologie sorpassate ormai)
* **Blog Suggestions AI**: SaaS (laravel + laravel nova) che usa agents + RAG per suggerire prodotti dinamicamente in base al contenuto di pagine web (es. blog)
* **Desk Helper AI**: Piattaforma aziendale (laravel + laravel nova) che usa agents + RAG, più altre tecniche avanzate e interazione con N8N, per integrare nella propria KB tutte le conoscenze aziendali (progetti, task, risorse, tickets, codebases, documentazioni, etc...) e fornire supporto, insights e soluzioni
* **Applicazione prenotazione ristoranti**: App android per la prenotazione di posti in un ristorante
ISTRUZIONI;
    }
}
