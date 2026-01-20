<template>
    <MainLayout>
        <article class="service-detail container animate-fade-up">
            <div class="service-header">
                <span class="badge">Our Expertise</span>
                <h1 class="gradient-text">{{ service.title }}</h1>
            </div>
            
            <div class="service-content glass-panel">
                <div class="hero-placeholder" :style="{ background: service.color }"></div>

                <div class="overview">
                    <h2>Service Overview</h2>
                    <p>{{ service.desc }}</p>
                </div>

                <div class="features-grid">
                    <div class="feature-card" v-for="(feature, i) in service.features" :key="i">
                        <h4>{{ feature.title }}</h4>
                        <p>{{ feature.desc }}</p>
                    </div>
                </div>

                <div class="cta-section">
                    <h3>Ready to upgrade your system?</h3>
                    <p>Contact our experts for a personalized consultation.</p>
                    <a href="tel:+918888886434">
                        <BasicButton :text="'Call Now'" :type="1" />
                    </a>
                </div>
            </div>
            
            <div class="actions">
                <RouterLink :to="{ name: 'services' }">
                    <BasicButton :text="'← Back to Services'" :type="2" />
                </RouterLink>
            </div>
        </article>
    </MainLayout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import BasicButton from '@/components/Buttons/BasicButton/BasicButton.vue';

const route = useRoute();
const id = route.params.id;

// Placeholder content for services
const services = {
    0: {
        title: "Split AC Systems",
        color: "linear-gradient(45deg, #00a8b0, #b9ff66)",
        desc: "Ideal for individual rooms and small offices, our Split AC solutions offer quiet operation and energy efficiency.",
        features: [
            { title: "Energy Efficient", desc: "Inverter technology reduces power consumption by up to 30%." },
            { title: "Quiet Operation", desc: "Indoor units operate as low as 19dB for undisturbed comfort." },
            { title: "Air Purification", desc: "Built-in filters remove dust, allergens, and odors." }
        ]
    },
    1: {
        title: "Cassette Units",
        color: "linear-gradient(45deg, #FF6B6B, #FFE66D)",
        desc: "Perfect for large open spaces, cassette units are mounted in the ceiling to distribute air evenly in four directions.",
        features: [
            { title: "360° Airflow", desc: "Uniform cooling ensures no hot or cold spots in the room." },
            { title: "Space Saving", desc: "Ceiling-mounted design frees up wall and floor space." },
            { title: "Aesthetics", desc: "Sleek design blends seamlessly with modern interiors." }
        ]
    },
    2: {
        title: "Industrial Chillers",
        color: "linear-gradient(45deg, #4ECDC4, #556270)",
        desc: "Heavy-duty cooling solutions for manufacturing plants, data centers, and large commercial buildings.",
        features: [
            { title: "High Capacity", desc: "Capable of handling massive heat loads with stability." },
            { title: "Precision Control", desc: "Maintain exact temperatures for critical processes." },
            { title: "Durability", desc: "Built to withstand harsh industrial environments." }
        ]
    },
    3: {
        title: "VRV/VRF Systems",
        color: "linear-gradient(45deg, #A8E6CF, #DCEDC1)",
        desc: "Variable Refrigerant Volume systems allow for individual zone control, ideal for hotels and office towers.",
        features: [
            { title: "Zone Control", desc: "Set different temperatures for different rooms simultaneously." },
            { title: "Energy Savings", desc: "Only cools occupied zones, significantly reducing waste." },
            { title: "Modular Design", desc: "Easily scalable to fit building expansion needs." }
        ]
    },
    4: {
        title: "Ductable Units",
        color: "linear-gradient(45deg, #FF9A9E, #FECFEF)",
        desc: "Concealed cooling solutions that deliver air through ducts, providing a clean and invisible aesthetic.",
        features: [
            { title: "Invisible Cooling", desc: "Only vents are visible, maintaining the interior design." },
            { title: "Centralized Control", desc: "Manage the entire climate from a single thermostat." },
            { title: "High Static Pressure", desc: "Efficiently pushes air through long duct runs." }
        ]
    },
    5: {
        title: "Floor Standing",
        color: "linear-gradient(45deg, #a18cd1, #fbc2eb)",
        desc: "Powerful portable units effective for areas where wall or ceiling mounting isn't feasible, like lobbies or events.",
        features: [
            { title: "Powerful Airflow", desc: "Throws air efficiently across large halls." },
            { title: "Easy Installation", desc: "Requires minimal structural modification." },
            { title: "Mobility", desc: "Can be repositioned if needs change." }
        ]
    }
};

const service = computed(() => services[id] || {
    title: "Service Not Found",
    color: "#ccc",
    desc: "The requested service details are not available.",
    features: []
});
</script>

<style scoped>
.service-detail {
    padding: 100px 20px 80px;
    max-width: 900px;
    margin: 0 auto;
}

.service-header {
    text-align: center;
    margin-bottom: 40px;
}

.badge {
    color: var(--primary-color);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    display: block;
}

h1 {
    font-size: 2.5rem;
    margin-top: 10px;
}

.service-content {
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 40px;
}

.hero-placeholder {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    margin-bottom: 40px;
    opacity: 0.9;
}

.overview {
    margin-bottom: 50px;
}

h2 {
    color: var(--text-main);
    margin-bottom: 20px;
}

p {
    line-height: 1.7;
    color: var(--text-muted);
    font-size: 1.05rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.feature-card {
    background: rgba(255, 255, 255, 0.5);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
}

.feature-card h4 {
    color: var(--primary-color);
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.feature-card p {
    font-size: 0.95rem;
    margin: 0;
}

.cta-section {
    text-align: center;
    background: var(--primary-color);
    padding: 40px;
    border-radius: 16px;
    color: white;
}

.cta-section h3 {
    color: white;
    margin-bottom: 10px;
}

.cta-section p {
    color: rgba(255,255,255,0.9);
    margin-bottom: 25px;
}

.actions {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.actions a {
    text-decoration: none;
}

.actions :deep(button) {
    background: transparent;
    color: #000000;
    border: 2px solid #000000;
    padding: 14px 40px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.actions :deep(button:hover) {
    background: #000000;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .service-detail {
        padding: 80px 20px 60px;
        text-align: center;
    }
    
    .service-header {
        margin-bottom: 30px;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .service-content {
        padding: 30px 20px;
        text-align: center;
    }
    
    .hero-placeholder {
        height: 200px;
        margin-bottom: 30px;
    }
    
    .overview {
        margin-bottom: 40px;
        text-align: center;
    }
    
    .overview h2 {
        text-align: center;
    }
    
    .overview p {
        text-align: center;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 40px;
    }
    
    .feature-card {
        text-align: center;
    }
    
    .cta-section {
        padding: 30px 20px;
    }

    .actions :deep(button) {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
}

@media (max-width: 620px) {
    .service-detail {
        padding: 70px 16px 50px;
    }

    h1 {
        font-size: 1.75rem;
    }

    .service-content {
        padding: 25px 20px;
        margin-right: 0;
    }

    .hero-placeholder {
        height: 180px;
    }

    .cta-section {
        padding: 25px 16px;
    }

    .actions :deep(button) {
        width: 100%;
        max-width: 260px;
        padding: 12px 30px;
        font-size: 0.95rem;
    }
}
</style>
