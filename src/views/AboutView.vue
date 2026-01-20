<template>
    <MainLayout>
        <section class="page-header animate-fade-up">
            <h1 class="gradient-text">About Us</h1>
            <p class="subtitle">Our journey in providing top-tier HVAC solutions.</p>
        </section>
        
        <WorkingProcess />
        <!-- Re-using existing components -->
        
        <section class="floating-content container">
            <div class="glass-panel animate-float vision-card">
                <h3>Our Vision</h3>
                <p>To redefine comfort through innovation and sustainable climate control solutions.</p>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import WorkingProcess from '@/components/Sections/WorkingProcess/WorkingProcess.vue';
</script>

<style scoped>
.page-header {
    text-align: center;
    padding: 80px 20px 40px;
}

.subtitle {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 20px auto 0;
    color: var(--text-muted);
}

.floating-content {
    padding: 60px 20px;
    display: flex;
    justify-content: center;
}

.glass-panel {
    padding: 50px;
    border-radius: 24px;
    max-width: 700px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.6);
}

.vision-card h3 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: var(--primary-color);
}

.vision-card p {
    font-size: 1.2rem;
    line-height: 1.6;
}
</style>
