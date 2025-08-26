<?php

namespace App\Console\Commands;

use App\Facades\ContactNotification;
use App\Models\PendingNotification;
use Illuminate\Console\Command;

class NotificationSend extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notifications:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('🚀 Avvio invio notifiche in pending...');

        $total = 0;
        $ok = 0;
        $fail = 0;

        PendingNotification::query()
            ->orderBy('id')
            ->chunkById(100, function ($pendings) use (&$total, &$ok, &$fail) {
                foreach ($pendings as $pending) {
                    $total++;
                    try {
                        $sent = ContactNotification::sendRecapEmail($pending->id);
                        if ($sent) {
                            $ok++;
                            $this->line("  ✓ Inviata pending #{$pending->id} (sessione {$pending->session_id})");
                        } else {
                            $fail++;
                            $this->warn("  ! Fallita pending #{$pending->id} (sessione {$pending->session_id})");
                        }
                    } catch (\Throwable $e) {
                        $fail++;
                        $this->error("  ✗ Errore pending #{$pending->id}: " . $e->getMessage());
                    }
                }
            });

        $this->newLine();
        $this->info("✅ Completato. Totale: {$total} • Successi: {$ok} • Errori: {$fail}");

        return $fail > 0 ? Command::FAILURE : Command::SUCCESS;
    }
}
