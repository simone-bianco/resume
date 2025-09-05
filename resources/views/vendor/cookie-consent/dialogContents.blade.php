<div class="js-cookie-consent cookie-consent fixed bottom-0 inset-x-0 z-50 cookie-consent-bar">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
        <div class="rounded-t-lg border border-surface-700 bg-surface-900/90 backdrop-blur-sm shadow-lg">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3">
                <p class="cookie-consent__message text-surface-100 text-sm leading-6 flex-1">
                    {!! trans('cookie-consent::texts.message') !!}
                </p>
                <div class="flex-shrink-0">
                    <button class="js-cookie-consent-agree cookie-consent__agree inline-flex items-center gap-2 rounded-md bg-surface-0 text-surface-900 hover:bg-surface-100 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-surface-500">
                        {{ trans('cookie-consent::texts.agree') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .cookie-consent-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 9999; /* Assicurati che sia più alto di quello della chat */
    }

</style>
