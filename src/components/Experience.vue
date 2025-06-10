<script setup lang="ts">
import SectionTitle from './partials/SectionTitle.vue';
import Timeline from 'primevue/timeline';

const jobs = [
    { period: '2021 - Current', name: 'hurdle', role: 'Chief Technical Officer', description: ['Hurdle is a virtual classroom allowing companies to deliver systems training entirely online.', 'Responsible for day-to-day management of technical operations, including Quality Assurance and Customer Relationship Management.', 'Founding member of the company, with experience in the development and growth of disruptive tech companies.'] },
    { period: '2016 - 2021', name: 'Trelleborg', role: 'Software Manager', description: ['Trelleborg provides marine technology to shipping, gas and oil companies worldwide.', 'Joined in 2016 as a software engineer, building complex safety systems.', 'Promoted to Software Manager, supervising a team of 5 engineers to deliver multi-million pound projects using Agile project management.'] },
    { period: '2015 - 2016', name: 'Ministry of Defence', role: 'Software Engineer', description: ['Worked on critical software projects as part of a geographically dispersed team.'] },
    { period: '2011 - 2014', name: 'University', role: 'Computer Science', description: ['Studied at Liverpool John Moores University\'s School of Computer Science with a focus on Computer Games Technology.', 'Completed a dissertation in N-Body simulation of our solar system.'] },
];
</script>

<template>
    <div>
        <SectionTitle :number="3" title="Experience" subtitle="My Work Experience" />
        <div class="mt-12">
            <Timeline :value="jobs" align="alternate" class="w-full">
                <template #content="slotProps">
                    <div class="text-white pb-6">
                        <p class="text-primary font-bold text-sm">
                            {{ slotProps.item.period }}
                        </p>
                        <h3 class="text-3xl mt-2">{{ slotProps.item.name }}</h3>
                        <h4 class="font-bold mt-6">{{ slotProps.item.role }}</h4>
                        <div class="mt-2 space-y-2 text-white font-text font-light text-sm">
                            <p v-for="descriptionItem in slotProps.item.description">
                                {{ descriptionItem }}
                            </p>
                        </div>
                    </div>
                </template>
            </Timeline>
        </div>
    </div>
</template>

<style scoped>

</style>
