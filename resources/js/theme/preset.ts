// file: /path/to/your/preset.js

export default {
    semantic: {
        colorScheme: {
            dark: {
                // Slate è la base per superfici e testi
                surface: {
                    0: '{slate.50}',      // Testo principale, quasi bianco
                    50: '{slate.100}',
                    100: '{slate.200}',
                    200: '{slate.300}',
                    300: '{slate.400}',     // Testo secondario (bio)
                    400: '{slate.500}',
                    500: '{slate.600}',
                    600: '{slate.700}',
                    700: '{slate.800}',     // Sfondo card (più chiaro)
                    800: '{slate.900}',     // Sfondo card (usato nel tuo componente)
                    900: '{slate.900}',     // Sfondo pagina (più scuro)
                    950: '#020617'          // Sfondo pagina (il più scuro in assoluto)
                },
                // Un Ciano/Azzurro acceso che contrasta bene con lo Slate
                primary: {
                    color: '{cyan.400}',
                    contrastColor: '{slate.950}',
                    hoverColor: '{cyan.300}',
                    activeColor: '{cyan.200}'
                },
                border: {
                    color: '{slate.700}',
                    hoverColor: '{slate.600}'
                },
                // Colori di feedback rivisti per il dark mode
                success: { color: '{green.400}', contrastColor: '{slate.950}' },
                info:    { color: '{sky.400}',   contrastColor: '{slate.950}' },
                warn:    { color: '{amber.400}', contrastColor: '{slate.950}' },
                danger:  { color: '{red.400}',   contrastColor: '{slate.950}' }
            }
        }
    }
};
