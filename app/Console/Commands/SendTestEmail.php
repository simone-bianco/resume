<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendTestEmail extends Command
{
    /**
     * @var string
     */
    protected $signature = 'email:test:send {to? : Indirizzo email del destinatario} {--subject= : Oggetto dell\'email} {--from= : Indirizzo mittente}';

    /**
     * @var string
     */
    protected $description = 'Invia una email di test molto semplice per verificare la configurazione SMTP';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $to = $this->argument('to') ?: 'simone9292@live.com';
        $subject = $this->option('subject') ?: 'SMTP Test - ' . config('app.name', 'Laravel');
        $fromAddress = $this->option('from') ?: (string) (config('mail.from.address') ?? 'no-reply@localhost');
        $fromName = (string) (config('mail.from.name') ?? config('app.name', 'Laravel'));

        $this->info("Invio email di test a: {$to}");

        $body = "Ciao,\n\nQuesta è un'email di test inviata tramite Artisan per verificare la configurazione SMTP.\n\n" .
            'Data/Ora: ' . now()->toDateTimeString() . "\n" .
            'Ambiente: ' . app()->environment() . "\n\n" .
            'Se la ricevi, SMTP è configurato correttamente.' . "\n";

        try {
            Mail::raw($body, function ($message) use ($to, $subject, $fromAddress, $fromName) {
                $message->to($to)
                    ->subject($subject)
                    ->from($fromAddress, $fromName);
            });

            $this->info('Email di test inviata con successo.');
            return self::SUCCESS;
        } catch (\Throwable $e) {
            $this->error('Invio fallito: ' . $e->getMessage());
            if (function_exists('report')) {
                report($e);
            }
            return self::FAILURE;
        }
    }
}
