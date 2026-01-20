<template>
    <MainLayout>
        <article class="project-detail container animate-fade-up">
            <div class="project-header">
                <span class="category">{{ project.category }}</span>
                <h1 class="gradient-text">{{ project.title }}</h1>
            </div>
            
            <div class="project-content glass-panel">
                <div class="placeholder-hero" :style="{ background: project.color }"></div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <label>Client</label>
                        <span>{{ project.client }}</span>
                    </div>
                    <div class="info-item">
                        <label>Date</label>
                        <span>{{ project.date }}</span>
                    </div>
                </div>

                <h2>Project Overview</h2>
                <p>{{ project.desc }}</p>
                
                <h2>The Challenge</h2>
                <p>{{ project.challenge }}</p>

                <h2>Our Solution</h2>
                <p>{{ project.solution }}</p>
            </div>
            
            <div class="actions">
                <RouterLink :to="{ name: 'use-cases' }">
                    <BasicButton :text="'← Back to Projects'" :type="2" />
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

// Placeholder data
const projects = {
    1: {
        title: "Corporate Office Tower",
        category: "VRV System Installation",
        client: "Axis Corporation",
        date: "Jan 2025",
        color: "linear-gradient(45deg, #00a8b0, #b9ff66)",
        desc: "A full-scale HVAC implementation for a 20-story corporate tower located in the business district.",
        challenge: "The client needed a highly energy-efficient system that could handle variable occupancy loads across different floors while maintaining a sleek aesthetic.",
        solution: "We installed a state-of-the-art VRV system with intelligent zoning. This allows inactive floors to reduce power consumption automatically. We also integrated the HVAC controls with the building management system (BMS) for centralized monitoring."
    },
    2: {
        title: "Industrial Warehouse",
        category: "Chiller System",
        client: "LogiTech Solutions",
        date: "Sep 2024",
        color: "linear-gradient(45deg, #FF6B6B, #FFE66D)",
        desc: "Cooling solution for a 50,000 sq. ft. pharmaceutical storage facility.",
        challenge: "Strict temperature control was mandatory to preserve temperature-sensitive medications. Any fluctuation could result in significant inventory loss.",
        solution: "We deployed a redundant water-cooled chiller system with N+1 backup. Custom ducting ensured uniform air distribution, eradicating hot spots. The system includes 24/7 remote monitoring to alert technicians of any deviation."
    },
    3: {
        title: "Luxury Residence",
        category: "Split & Cassette Units",
        client: "Private Residence",
        date: "Dec 2024",
        color: "linear-gradient(45deg, #4ECDC4, #556270)",
        desc: "High-end climate control for a sprawling luxury villa.",
        challenge: "The interior design required the AC units to be virtually invisible and silent.",
        solution: "We utilized slim-line cassette units concealed within false ceilings and ducted split systems for the main living areas. The result is whisper-quiet cooling that blends seamlessly with the decor."
    },
     4: {
        title: "Retail Complex",
        category: "Ductable AC Maintenance",
        client: "Metro Mall",
        date: "ongoing",
        color: "linear-gradient(45deg, #A8E6CF, #DCEDC1)",
        desc: "Comprehensive maintenance contract for a busy shopping mall.",
        challenge: "High footfall generates significant heat load and dust accumulation, straining the system.",
        solution: "We implemented a proactive maintenance schedule, performing deep cleaning and filter replacements during off-hours. This has improved air quality and reduced emergency breakdowns by 40%."
    }
};

const project = computed(() => projects[id] || {
    title: "Project Not Found",
    category: "",
    color: "#ccc",
    desc: "The requested project details are not available."
});
</script>

<style scoped>
.project-detail {
    padding: 100px 20px 80px;
    max-width: 800px;
    margin: 0 auto;
}

.project-header {
    text-align: center;
    margin-bottom: 40px;
}

.category {
    background: var(--primary-color);
    color: var(--text-dark);
    padding: 4px 12px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
}

h1 {
    font-size: 2.5rem;
    margin-top: 15px;
}

.project-content {
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 40px;
}

.placeholder-hero {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    margin-bottom: 30px;
    opacity: 0.9;
}

.info-grid {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 20px;
}

.info-item {
    display: flex;
    flex-direction: column;
}

.info-item label {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.info-item span {
    font-weight: 600;
    color: var(--text-main);
    font-size: 1.1rem;
}

h2 {
    color: var(--text-main);
    margin: 30px 0 15px;
    font-size: 1.5rem;
}

p {
    margin-bottom: 20px;
    line-height: 1.7;
    color: var(--text-muted);
}

.actions {
    display: flex;
    justify-content: center;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .project-detail {
        padding: 80px 20px 60px;
    }
    
    .project-header {
        margin-bottom: 30px;
    }
    
    .project-content {
        padding: 30px 20px;
    }
}

@media (max-width: 620px) {
    .project-detail {
        padding: 70px 16px 50px;
    }
    
    .project-content {
        padding: 25px 20px;
    }
}
</style>
