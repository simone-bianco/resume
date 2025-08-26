<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recap conversazione – {{ $appName }}</title>
</head>
<body style="margin:0;padding:0;background-color:#0b1018;color:#e5e7eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#0b1018;">
    <tr>
        <td align="center" style="padding:24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:720px;background-color:#0f172a;border:1px solid #1f2937;border-radius:12px;overflow:hidden;">
                <tr>
                    <td style="padding:24px 24px 8px 24px;background:linear-gradient(180deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.00) 100%);border-bottom:1px solid #1f2937;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:10px;height:10px;border-radius:50%;background-color:#60a5fa;"></div>
                            <h1 style="margin:0;font-size:18px;line-height:1.4;color:#f8fafc;">Recap conversazione</h1>
                        </div>
                        <p style="margin:8px 0 0 22px;font-size:12px;color:#9ca3af;">
                            {{ $appName }} • Sessione: <span style="color:#93c5fd;">{{ $sessionId }}</span> • Inviato: {{ $sentAt->format('d/m/Y H:i') }}
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding:24px;">
                        <div style="border:1px solid #334155;background:linear-gradient(180deg,#0b1220,#0f172a);border-radius:12px;padding:16px 18px;margin:0 0 20px 0;">
                            <div style="font-size:12px;color:#93c5fd;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:6px;">Recap</div>
                            <div style="font-size:14px;line-height:1.6;color:#e5e7eb;">
                                {!! nl2br(e($recap ?? '')) !!}
                            </div>
                        </div>

                        <p style="margin:0 0 16px 0;color:#cbd5e1;font-size:14px;">Di seguito trovi il riepilogo della conversazione tra il visitatore e l'avatar.</p>

                        <!-- Conversation -->
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                            @forelse($conversation as $message)
                                @php
                                    $isUser = $message['role'] === 'user';
                                @endphp
                                <tr>
                                    <td style="padding:6px 0;">
                                        <div style="display:flex;{{ $isUser ? 'justify-content:flex-end;' : 'justify-content:flex-start;' }}">
                                            <div style="max-width:85%;padding:12px 14px;border-radius:12px;{{ $isUser ? 'background-color:#1e293b;border:1px solid #334155;color:#e5e7eb;' : 'background-color:#0b1220;border:1px solid #1f2937;color:#e5e7eb;' }}">
                                                <div style="font-size:11px;margin-bottom:6px;color:{{ $isUser ? '#93c5fd' : '#a78bfa' }};text-transform:uppercase;letter-spacing:0.04em;">
                                                    {{ $isUser ? 'Visitatore' : 'Avatar' }}
                                                </div>
                                                <div style="font-size:14px;line-height:1.6;">
                                                    {!! nl2br(e($message['content'])) !!}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td style="padding:8px 0;">
                                        <div style="text-align:center;color:#9ca3af;font-size:14px;padding:16px;border:1px dashed #334155;border-radius:10px;background-color:#0b1220;">
                                            Nessun messaggio trovato per questa conversazione.
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding:16px 24px;border-top:1px solid #1f2937;background-color:#0c1424;">
                        <p style="margin:0;font-size:12px;color:#94a3b8;">
                            Email generata automaticamente da {{ $appName }}. Rispondi a questa email per proseguire il contatto.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
