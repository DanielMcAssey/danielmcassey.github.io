<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
import PortfolioSlot from './partials/PortfolioSlot.vue';

const portfolios = [
    { name: 'Bloods & Beyond', job: 'Software Development', url: 'https://www.bloodsandbeyond.co.uk/', imageUrl: new URL('/src/assets/portfolio/bloods_and_beyond.png', import.meta.url).href, description: 'Developed a comprehensive system for Bloods & Beyond, an "Uber for Phlebotomists", matching users to their closest phlebotomist. This robust platform includes a full CRM, invoicing, payment processing, and automated workflows. The solution now fully manages their operations, significantly streamlining bookings and administration.' },
    { name: 'SLDAS', job: 'Software Development/Design', url: 'https://www.sldas.org.uk/', imageUrl: new URL('/src/assets/portfolio/sldas.png', import.meta.url).href, description: 'Built a new WordPress website for South Liverpool Domestic Abuse Services (SLDAS). This included designing a new logo and establishing comprehensive design guidelines, creating a clear and empathetic online presence for the charity.' },
    { name: 'QAssist', job: 'Software Development', url: 'https://www.qassist.io/', imageUrl: new URL('/src/assets/portfolio/qassist.png', import.meta.url).href, description: 'Built QAssist from scratch, a web-based platform enabling seamless real-time remote control of any machine, globally. This solution eliminates the need for managing diverse IT assets, providing a unified and efficient way to manage desktops, servers, and Kubernetes clusters from anywhere.' },
    { name: 'Design & Prototype', job: 'Software Development/Design', url: 'https://www.designandprototype.co.uk/', imageUrl: new URL('/src/assets/portfolio/design_and_prototype.png', import.meta.url).href, description: 'Engineered and built a bespoke online shop for Design & Prototype, improving their digital presence. This included an updated logo and a full design overhaul, creating a seamless, intuitive experience for their custom design and prototyping services.' },
    { name: 'hurdle', job: 'Software Development/IT Consulting', url: 'https://www.hurdle.live/', imageUrl: new URL('/src/assets/portfolio/hurdle.png', import.meta.url).href, description: 'Built a live training platform from idea stage to a saleable, scalable product. The platform is currently in use by multiple organisations in the public and private sector. I have recently joined the company as Chief Technical Officer.' },
    { name: 'The Hive', job: 'Software Development/Training', url: 'https://www.hiveonline.org.uk/', imageUrl: new URL('/src/assets/portfolio/the_hive.png', import.meta.url).href, description: 'Development of a bespoke Customer Relationship Management (CRM) and outcomes monitoring framework application for a regional arts charity. Delivered training sessions to users.' },
    { name: 'British Pie Awards', job: 'Software Development', url: 'https://www.britishpieawards.co.uk/', imageUrl: new URL('/src/assets/portfolio/bpa.png', import.meta.url).href, description: 'Designed and built an awards entry management system, handling thousands of users entries at any one time. Built-in reporting functionality to give live insight into submissions. Successfully digitizing an existing business process.' },
    { name: 'Open-Source Projects', job: 'Contributed to many open-source projects', url: 'https://github.com/DanielMcAssey', imageUrl: new URL('/src/assets/portfolio/github.png', import.meta.url).href, description: 'You can view my GitHub by clicking on the link above for more information.' },
]
</script>

<template>
    <div>
        <SectionTitle :number="2" title="Portfolio" subtitle="My Latest Work" />
        <div class="grid grid-cols-6 gap-6 mt-12">
            <PortfolioSlot v-for="portfolio in portfolios"
                           :name="portfolio.name"
                           :job="portfolio.job"
                           :description="portfolio.description"
                           :image-url="portfolio.imageUrl"
                           :url="portfolio.url"
                           class="col-span-6" />
        </div>
    </div>
</template>

<style scoped>

</style>
