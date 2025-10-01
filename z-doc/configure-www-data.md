# Guida Definitiva: Abilitare Accesso SSH/SFTP per `www-data` su Server Linux (Debian/Ubuntu)

Questa guida ti mostra come configurare l'utente di sistema `www-data` per permettergli di accedere al server tramite SFTP (per il trasferimento file) e SSH (per il terminale), confinandolo per sicurezza nella directory `/var/www`.

### Avviso di Sicurezza Fondamentale

> L'utente `www-data` è quello con cui gira il tuo server web (Apache/Nginx). Abilitargli un accesso diretto con password è una pratica **potenzialmente rischiosa**. L'approccio **più sicuro** è sempre quello di creare un utente dedicato (es. `webmaster`), aggiungerlo al gruppo `www-data` (`sudo usermod -aG www-data webmaster`) e usare quello per connetterti.
>
> Procedi con questa guida se sei consapevole dei rischi e hai bisogno di questa configurazione specifica.

### Prerequisiti

* Un server con sistema operativo Debian o Ubuntu.
* Accesso al server con un utente che abbia privilegi `sudo` o come `root`.

-----

### Step 1: Impostare una Password per `www-data`

Di default, l'utente `www-data` non ha una password. Dobbiamo crearne una sicura.

```bash
sudo passwd www-data
```

Ti verrà chiesto di digitare e confermare la nuova password.

### Step 2: Abilitare la Shell di Login

Per motivi di sicurezza, agli utenti di sistema viene assegnata una "non-shell" per impedire il login. Dobbiamo sostituirla con una shell vera.

1.  **Verifica la shell attuale (opzionale):**

    ```bash
    grep www-data /etc/passwd
    ```

    Probabilmente vedrai `/usr/sbin/nologin` o `/bin/false` alla fine della riga.

2.  **Imposta la shell corretta (`/bin/bash`):**

    ```bash
    sudo usermod -s /bin/bash www-data
    ```

3.  **Verifica di nuovo:**

    ```bash
    grep www-data /etc/passwd
    ```

    Ora la riga deve terminare con `/bin/bash`.

### Step 3: Configurare il Server SSH (`sshd_config`)

Ora diremo a SSH come trattare l'utente `www-data`, "imprigionandolo" nella cartella `/var/www` (tecnica chiamata *chroot*).

1.  **Apri il file di configurazione del server SSH:**

    ```bash
    sudo nano /etc/ssh/sshd_config
    ```

2.  **Aggiungi questo blocco di codice alla fine del file:**

    ```ini
    # --- CONFIGURAZIONE SPECIFICA PER L'UTENTE WWW-DATA ---
    Match User www-data

        # "Imprigiona" l'utente nella sua cartella radice. Non potrà uscire da /var/www.
        ChrootDirectory /var/www

        # Opzione A (Consigliata: SOLO SFTP):
        # Forza l'uso del protocollo SFTP e impedisce l'accesso alla shell (terminale).
        # Decommenta la riga seguente per questa modalità.
        # ForceCommand internal-sftp

        # Opzione B (SSH + SFTP):
        # Se la riga ForceCommand è commentata (con #), l'utente potrà usare sia SFTP che SSH.

        # Disabilita funzionalità non necessarie per una maggiore sicurezza.
        PermitTunnel no
        AllowAgentForwarding no
        AllowTcpForwarding no
        X11Forwarding no
    ```

    **Scegli se vuoi solo SFTP (più sicuro) o anche la shell SSH**, commentando o de-commentando la riga `ForceCommand internal-sftp`.

3.  **Salva il file e riavvia il servizio SSH** per applicare le modifiche:

    ```bash
    sudo systemctl restart ssh
    ```

### Step 4: Impostare i Permessi Corretti per il Chroot

SSH è molto severo sui permessi della directory di chroot. Questa deve appartenere all'utente `root`.

1.  **Imposta `root` come proprietario di `/var/www`:**

    ```bash
    sudo chown root:root /var/www
    sudo chmod 755 /var/www
    ```

2.  **Imposta `www-data` come proprietario delle cartelle dei tuoi siti**, in modo che possa scriverci:

    ```bash
    # Esempio per la cartella /var/www/html
    sudo chown -R www-data:www-data /var/www/html
    sudo chmod -R 775 /var/www/html
    ```

-----

## Sezione Troubleshooting: Come Risolvere gli Errori Incontrati

Se qualcosa va storto, ecco la soluzione ai problemi che abbiamo affrontato.

### Errore 1: La connessione si blocca, `Packet length too large` o `Stream closed`

* **Causa:** Il server sta inviando un "Messaggio del Giorno" (MOTD) o altro testo all'avvio della sessione. I client SFTP non se lo aspettano, interpretano il testo come dati corrotti e chiudono la connessione.
* **Soluzione Definitiva:** Disabilitare il MOTD tramite il sistema PAM.
    1.  Apri il file: `sudo nano /etc/pam.d/sshd`
    2.  Trova e commenta (aggiungendo un `#` all'inizio) tutte le righe che contengono `pam_motd.so`.
    3.  Salva e riavvia SSH: `sudo systemctl restart ssh`.

### Errore 2: `This account is currently not available`

* **Causa:** L'utente `www-data` ha ancora la shell impostata su `/usr/sbin/nologin`.
* **Soluzione:** Esegui il comando dello **Step 2** di questa guida per impostare la shell corretta:
  ```bash
  sudo usermod -s /bin/bash www-data
  ```

### Errore 3: `Bad configuration option` quando si usa `ssh` dal server

* **Causa:** Hai accidentalmente modificato il file di configurazione del **client** (`/etc/ssh/ssh_config`) invece di quello del **server** (`/etc/ssh/sshd_config`).
* **Soluzione:** Ripristina il contenuto di default del file `/etc/ssh/ssh_config` (puoi trovare un template standard online cercando "default ssh\_config ubuntu").

A questo punto, la tua configurazione è completa, testata e funzionante. Ce l'hai fatta\!
