<template>
    <MainLayout>
        <section class="service-detail-container" v-if="service">
            <div class="service-header animate-fade-up">
                <span class="badge">Service Details</span>
                <h2>{{ service.title }}</h2>
            </div>
            
            <div class="service-content container">
                <div class="glass-panel detail-card">
                    <p class="description">
                        Comprehensive installation, maintenance, and repair services for {{ service.title }}. 
                        We ensure energy efficiency and long-term reliability for your climate control systems.
                    </p>
                    <div class="features-list">
                        <div class="feature-item">
                            <span class="check">✓</span> Professional Installation
                        </div>
                        <div class="feature-item">
                            <span class="check">✓</span> 24/7 Support
                        </div>
                        <div class="feature-item">
                            <span class="check">✓</span> Annual Maintenance
                        </div>
                    </div>
                </div>
                
                <div class="cta-section animate-fade-up">
                    <h3>Ready to upgrade your system?</h3>
                    <p>Contact our expert team today for a free consultation.</p>
                    <RouterLink to="/" class="no-decoration">
                        <BasicButton :text="'← Back to Services'" :type="2" :pill="true" />
                    </RouterLink>
                </div>
            </div>
        </section>
        <div v-else class="loading">Loading...</div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import BasicButton from '@/components/Buttons/BasicButton/BasicButton.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const service = ref(null);

// Placeholder data - in real app, fetch by ID
const services = [
    { title: 'Split AC Systems' },
    { title: 'Cassette Units' },
    { title: 'Industrial Chillers' },
    { title: 'VRV/VRF Systems' },
    { title: 'Ductable Units' },
    { title: 'Floor Standing' }
];

onMounted(() => {
    const id = route.params.id;
    if (services[id]) {
        service.value = services[id];
    }
});
</script>

<style scoped>
.service-detail-container {
    padding-top: 50px;
    padding-bottom: 100px;
}

.service-header {
    text-align: center;
    margin-bottom: 60px;
}

.badge {
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 10px;
}

.detail-card {
    padding: 60px;
    border-radius: 20px;
    margin-bottom: 60px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
}

.description {
    font-size: 1.25rem;
    margin-bottom: 40px;
    line-height: 1.6;
    color: var(--text-main);
}

.features-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}

.check {
    color: var(--primary-color);
    font-weight: bold;
}

.cta-section {
    text-align: center;
    background-color: var(--primary-color); /* Brand Color Background */
    padding: 60px;
    border-radius: 20px;
    color: var(--text-dark);
}

.cta-section h3 {
    color: var(--text-dark);
    margin-bottom: 15px;
}

.cta-section p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.no-decoration {
    text-decoration: none;
}

.loading {
    display: flex; 
    justify-content: center; 
    padding: 100px; 
    font-size: 1.5rem;
    color: var(--text-muted);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .service-detail-container {
        padding-top: 30px;
        padding-bottom: 60px;
    }

    .detail-card {
        padding: 30px;
        margin-bottom: 40px;
    }
    
    .cta-section {
        padding: 40px 20px;
    }
    
    .features-list {
        grid-template-columns: 1fr;
    }
}
</style>
