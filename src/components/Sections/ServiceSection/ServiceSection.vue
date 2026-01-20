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

            <!-- Background Elements for Glassmorphism -->
            <div class="bg-blob blob-1"></div>
            <div class="bg-blob blob-2"></div>
            <div class="bg-blob blob-3"></div>

            <div class="services-grid">
                <ServiceCard 
                    v-for="(service, index) in services" 
                    :key="index"
                    :title="service.title"
                    :icon="service.icon"
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
    { title: 'Split AC Systems', icon: 'fa-solid fa-snowflake' },
    { title: 'Cassette Units', icon: 'fa-solid fa-fan' },
    { title: 'Industrial Chillers', icon: 'fa-solid fa-industry' },
    { title: 'VRV/VRF Systems', icon: 'fa-solid fa-server' },
    { title: 'Ductable Units', icon: 'fa-solid fa-wind' },
    { title: 'Floor Standing', icon: 'fa-solid fa-building' }
];
</script>

<style scoped>
.section-padding {
    padding: 100px 0;
    position: relative; /* Anchors the absolute blobs */
    overflow: hidden; /* Prevents scrollbars from blobs */
    background-color: #f8f9fa; /* Slight off-white to make white glass pop */
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
    grid-template-columns: repeat(3, 1fr); /* Fixed 3 columns as requested */
    gap: 30px;
    position: relative;
    z-index: 2;
}

.bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 1;
    opacity: 0.6;
}

.blob-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
    top: -10%;
    left: -10%;
    opacity: 0.4; /* Increased from 0.15 */
}

.blob-2 {
    width: 700px; /* Larger */
    height: 700px;
    background: radial-gradient(circle, #000000 0%, transparent 80%); /* Stronger black gradient */
    bottom: -20%;
    right: -20%;
    opacity: 0.2; /* Increased from 0.1 */
}

.blob-3 {
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--neon-accent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(120px);
    opacity: 0.25; /* Increased from 0.1 */
    z-index: 0;
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
        padding: 0 !important; /* Removed side padding to allow full centering */
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