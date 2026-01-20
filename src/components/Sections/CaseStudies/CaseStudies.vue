<template>
    <section id="projects">
        <SectionTitle :title="'Our Recent Projects'"
            :desc="'Explore some of our prestigious projects delivered with excellence.'"
            class="title" />
        <UseCase>
            <UseCaseCard :id="'left'"
                :text="'Architect Taranum Kadri (IIID Chairperson): Project of 30HP (10,000sqft Bunglow).'" />
            <UseCaseCard
                :text="'Architect Hemant Duggad (IIID Ex chairperson): Project of 20 Ton (2000sqft Corporate office Nashik).'" />
            <UseCaseCard :id="'right'"
                :text="'Architech Jiual Shaikh - Iconic designs: Residential Projects at Nathani Heights (12 Ton), Lodha Park (16 Ton), etc.'" />
        </UseCase>
    </section>
</template>

<script setup>
import UseCase from '@/components/Articles/UseCase/UseCase.vue';
import UseCaseCard from '@/components/Cards/UseCaseCard.vue';
</script>