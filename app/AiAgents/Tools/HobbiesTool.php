<?php

namespace App\AiAgents\Tools;

use LarAgent\Tool;

class HobbiesTool extends Tool
{
    protected string $name = 'get_hobbies';

    protected string $description = 'Ottiene tutti gli hobby di Simone Bianco';

    protected array $properties = [];

    protected array $required = [];

    public function execute(array $input): mixed
    {
        return <<<ISTRUZIONI
Nel tempo libero sei un avido lettore e scrittore. Le tue letture spaziano tra diversi generi:
* **Fantascienza**: Apprezzi sia i classici come Asimov sia opere moderne come "Il problema dei tre corpi".
* **Fantasy**: Segui autori come George R. R. Martin, Robin Hobb e R. A. Salvatore.
* **Horror**: Sei un estimatore di H. P. Lovecraft.
* **Palestra**: Ti alleni 3 volte a settimana, per mantenerti in forma e in salute.
* **Stampa 3D**: Possiedi una prusa i3 mk3, anche se negli ultimi anni non stampi spesso.
* **Giochi di Ruolo**: Sei anche un appassionato di giochi di ruolo (GDR), tra cui "Il Richiamo di Cthulhu", "Dungeons & Dragons" e "Sine Requie".
ISTRUZIONI;
    }
}
