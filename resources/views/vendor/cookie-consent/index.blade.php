@if($cookieConsentConfig['enabled'] && ! $alreadyConsentedWithCookies)

    @include('cookie-consent::dialogContents')

    <script>
        // Preload translations for dynamic language switching (en/it supported here)
        window.__cookieConsentTranslations = {
            "en": {
                "message": {!! json_encode(trans('cookie-consent::texts.message', [], 'en')) !!},
                "agree": {!! json_encode(trans('cookie-consent::texts.agree', [], 'en')) !!}
            },
            "it": {
                "message": {!! json_encode(trans('cookie-consent::texts.message', [], 'it')) !!},
                "agree": {!! json_encode(trans('cookie-consent::texts.agree', [], 'it')) !!}
            }
        };

        window.laravelCookieConsent = (function () {

            const COOKIE_VALUE = 1;
            const COOKIE_DOMAIN = '{{ config('session.domain') ?? request()->getHost() }}';

            function consentWithCookies() {
                setCookie('{{ $cookieConsentConfig['cookie_name'] }}', COOKIE_VALUE, {{ $cookieConsentConfig['cookie_lifetime'] }});
                hideCookieDialog();
            }

            function cookieExists(name) {
                return (document.cookie.split('; ').indexOf(name + '=' + COOKIE_VALUE) !== -1);
            }

            function hideCookieDialog() {
                const dialogs = document.getElementsByClassName('js-cookie-consent');

                for (let i = 0; i < dialogs.length; ++i) {
                    dialogs[i].style.display = 'none';
                }
            }

            function setCookie(name, value, expirationInDays) {
                const date = new Date();
                date.setTime(date.getTime() + (expirationInDays * 24 * 60 * 60 * 1000));
                document.cookie = name + '=' + value
                    + ';expires=' + date.toUTCString()
                    + ';domain=' + COOKIE_DOMAIN
                    + ';path=/{{ config('session.secure') ? ';secure' : null }}'
                    + '{{ config('session.same_site') ? ';samesite='.config('session.same_site') : null }}';
            }

            function updateTexts(lang) {
                try {
                    const map = window.__cookieConsentTranslations || {};
                    const locale = lang || document.documentElement.getAttribute('lang') || '{{ app()->getLocale() }}';
                    const t = map[locale];
                    if (!t) return;

                    const msgs = document.getElementsByClassName('cookie-consent__message');
                    for (let i = 0; i < msgs.length; ++i) {
                        msgs[i].innerHTML = t.message; // message may contain HTML
                    }

                    const agrees = document.getElementsByClassName('js-cookie-consent-agree');
                    for (let i = 0; i < agrees.length; ++i) {
                        agrees[i].textContent = t.agree;
                    }
                } catch (e) {
                    // no-op
                }
            }

            if (cookieExists('{{ $cookieConsentConfig['cookie_name'] }}')) {
                hideCookieDialog();
            }

            const buttons = document.getElementsByClassName('js-cookie-consent-agree');

            for (let i = 0; i < buttons.length; ++i) {
                buttons[i].addEventListener('click', consentWithCookies);
            }

            // Listen for language change events from the SPA and update texts live
            window.addEventListener('language:changed', function (e) {
                const lang = e && e.detail ? e.detail : undefined;
                updateTexts(lang);
            });

            return {
                consentWithCookies: consentWithCookies,
                hideCookieDialog: hideCookieDialog,
                updateTexts: updateTexts,
            };
        })();
    </script>

@endif
