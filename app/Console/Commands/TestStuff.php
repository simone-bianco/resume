<?php

namespace App\Console\Commands;

use App\AiAgents\AvatarChatAgent;
use App\AiAgents\ChatRecapAgent;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class TestStuff extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:stuff';

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
        dd(asset('apple-touch-icon.png'));
        $recap = ChatRecapAgent::for(Str::uuid())
            ->message('si è parlato di stack')
            ->respond();
        dd($recap);
        AvatarChatAgent::for('8ZbB8QowQHhoWVrrdeLTzf6jGbOHUy6kuaaW14uq')->respond('ciao');
        dd(AvatarChatAgent::for('8ZbB8QowQHhoWVrrdeLTzf6jGbOHUy6kuaaW14uq')->chatHistory()->getMessages());
    }
}
