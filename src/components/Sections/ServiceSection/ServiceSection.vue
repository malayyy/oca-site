<template>
    <section id="services" class="section-padding">
        <div class="container">
            <div class="section-header animate-fade-up">
                <span class="badge">Our Expertise</span>
                <h2 class="section-title">Professional <span class="gradient-text">HVAC Services</span></h2>
                <p class="section-desc">
                    Comprehensive climate control solutions tailored for efficiency and comfort.
                </p>
            </div>

            <div class="services-grid">
                <ServiceCard 
                    v-for="(service, index) in services" 
                    :key="index"
                    :title="service.title"
                    :src="service.img"
                    :index="index"
                    class="animate-fade-up"
                    :style="{ animationDelay: `${index * 100}ms` }"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ServiceCard from '@/components/Cards/ServiceCard/ServiceCard.vue';

// Using placeholders for now, can map real images later if needed
const services = [
    { title: 'Split AC Systems' },
    { title: 'Cassette Units' },
    { title: 'Industrial Chillers' },
    { title: 'VRV/VRF Systems' },
    { title: 'Ductable Units' },
    { title: 'Floor Standing' }
];
</script>

<style scoped>
.section-padding {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 60px;
}

.badge {
    color: var(--neon-accent);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.875rem;
    display: block;
    margin-bottom: 12px;
}

.section-title {
    margin-bottom: 20px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}
</style>