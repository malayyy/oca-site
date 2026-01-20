<template>
    <MainLayout>
        <section class="page-header animate-fade-up">
            <h1 class="gradient-text">Use Cases & Projects</h1>
            <p>Real-world examples of our excellence.</p>
        </section>

        <Projects />
        <CaseStudies />

    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import Projects from '@/components/Sections/Projects/Projects.vue';
import CaseStudies from '@/components/Sections/CaseStudies/CaseStudies.vue';
</script>

<style scoped>
.page-header {
    text-align: center;
    padding: 100px 20px 20px;
}
</style>
