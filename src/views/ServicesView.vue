<template>
    <MainLayout>
        <section class="page-header animate-fade-up">
            <h1 class="gradient-text">Our Services</h1>
            <p>Comprehensive climate control for every environment.</p>
        </section>

        <ServiceSection />
        
        <div class="decorative-float animate-float">
            <!-- Decorative circle -->
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection.vue';
</script>

<style scoped>
.page-header {
    text-align: center;
    padding: 100px 20px 20px;
}

.decorative-float {
    position: fixed;
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    background: var(--primary-glow);
    border-radius: 50%;
    filter: blur(40px);
    z-index: -1;
}
</style>
