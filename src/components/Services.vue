<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
import ServiceSlot from './partials/ServiceSlot.vue';

const services = [
    { name: 'Software Development', description: ['Developing bespoke web apps and/or software to meet your businesses needs.', 'Improving business processes with efficient software solutions.', 'Working with businesses all the way from charities to SMEs to established companies, no project is too big or too small.'] },
    { name: 'IT Consulting', description: ['Show you how to use technological solutions to meet your businesses goals.', 'Advising on how to digitize your processes, jargon busting and recommending the right IT products for you.', 'Show you how to use technological solutions to meet your businesses goals.'] },
    { name: 'Network Engineering', description: ['Design, advise on and implement new networks.', 'Identify and provide equipment inline with project requirements and budget.', 'Create and migrate small to large scale deployments, with experience of roll-outs across NHS Trusts.'] },
    { name: 'Dev Ops', description: ['Implement robust and scalable CI/CD pipelines from scratch.', 'Migrate old CI/CD processes into a more modern and cloud based process.', 'Advise and work with your IT teams to improve your CI/CD pipelines.'] },
];
</script>

<template>
    <div>
        <SectionTitle :number="1" title="Services" subtitle="Services available to you" />
        <div class="grid grid-cols-6 gap-6 mt-12">
            <ServiceSlot v-for="service in services" :name="service.name" :description="service.description" class="col-span-6 md:col-span-3" />
        </div>
    </div>
</template>

<style scoped>

</style>
