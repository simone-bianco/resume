<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('notifications:send')->everyFiveMinutes();
