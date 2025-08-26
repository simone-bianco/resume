<?php

namespace App\Console\Commands;

use App\Proxies\TelegramProxy;
use Illuminate\Console\Command;

class SendTestTelegramMessage extends Command
{
    /**
     * @var string
     */
    protected $signature = 'telegram:test:send';

    /**
     * @var string
     */
    protected $description = 'Invia un messaggio di test al bot telegram';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        /** @var TelegramProxy $proxy */
        $proxy = app(TelegramProxy::class);

        $proxy->sendMessage(config('telegram.chat_id'), 'Ciao, mi ricevi?');
    }
}
