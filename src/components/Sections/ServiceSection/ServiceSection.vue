<template>
    <section id="services" class="section-padding">
        <div class="container services-container">
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

/* Mobile Responsive */
@media (max-width: 768px) {
    .section-padding {
        padding: 60px 0;
    }
    
    .services-container {
        padding: 0 !important;
        max-width: 100% !important;
    }
    
    .section-header {
        margin: 0 auto 40px !important;
        padding: 0 20px !important;
        text-align: center !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }
    
    .section-title,
    .section-desc,
    .badge {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    
    .services-grid {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 20px;
        padding: 0 30px !important;
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
    }
}

@media (max-width: 620px) {
    .section-padding {
        padding: 40px 0;
    }
    
    .badge {
        font-size: 0.75rem;
    }
    
    .services-container {
        padding: 0 !important;
    }
    
    .section-header {
        padding: 0 16px !important;
        margin: 0 auto 40px !important;
    }
    
    .services-grid {
        padding: 0 20px !important;
    }
}
</style>