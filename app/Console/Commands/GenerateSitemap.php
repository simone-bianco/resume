<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap for the curriculum website.';

    public function handle()
    {
        $this->info('Generating sitemap with definitive routes...');

        Sitemap::create()
            // Pagina Principale
            ->add(Url::create(route('home'))
                ->setPriority(1.0)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))

            // Pagina Progetti
            ->add(Url::create(route('projects'))
                ->setPriority(0.9)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))

            // Pagina Curriculum/Resume
            ->add(Url::create(route('resume'))
                ->setPriority(0.9)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY))

            // Pagina Tesi
            ->add(Url::create(route('thesis'))
                ->setPriority(0.8)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY))

            // Pagina Contatti
            ->add(Url::create(route('contact'))
                ->setPriority(0.7)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY))

            ->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully!');

        return self::SUCCESS;
    }
}
