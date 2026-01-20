<template>
    <MainLayout>
        <section class="page-header animate-fade-up">
            <h1 class="gradient-text">About Us</h1>
            <p>Our journey in providing top-tier HVAC solutions.</p>
        </section>
        
        <WorkingProcess />
        <!-- Re-using existing components -->
        
        <section class="floating-content container">
            <div class="glass-panel animate-float">
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
    padding: 100px 20px 60px;
}

.floating-content {
    padding: 60px 20px;
    display: flex;
    justify-content: center;
}

.glass-panel {
    padding: 40px;
    border-radius: 20px;
    max-width: 600px;
    text-align: center;
}
</style>
