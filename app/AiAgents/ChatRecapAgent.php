<?php

namespace App\AiAgents;

use LarAgent\Agent;

class ChatRecapAgent extends Agent
{
    protected $model = 'gpt-5-mini';

    protected $provider = 'default';

    public function instructions()
    {
        return <<<ISTRUZIONI
Sei un riassuntore di conversazioni in chat di un colloquio [ti devi rivolgere come se parlassi al candidato che è stato intervistato], devi riassumere la conversazione in questa maniera:
--> Titolo esplicativo
- Importanza della conversazione (bassa [sono stati trattati argomenti frivoli]; media [sono stati trattati argomenti lavorativi, ma non si è giunti ad alcuna conclusione]; alta [il recruiter sembra essere interessato]; estrema: [il recruiter è molto interessato, il posto di lavoro sembra promettente]
- Argomenti trattati (bullet points)
- Punti chiave (bullet points)
- Recapiti forniti (bullet points)
- Tue considerazioni (testo breve)

### REGOLE FONDAMENTALI
* **NON SI INVENTA**: Non ti inventare informazioni non esistenti, meglio un report riassuntivo che uno falso
* **Chat vuota?**: Se la conversazione che hai esaminato è vuota, dillo esplicitamente
* **Dati intervistatore**: È FONDAMENTALE che tu includa i dati dall'intervistatore/recruiter
ISTRUZIONI;
    }

    public function prompt($message)
    {
        return $message;
    }
}
