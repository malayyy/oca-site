<template>
    <section id="projects" class="animate-fade-up">
        <SectionTitle :title="'Our Work'" :desc="'A selection of our recent HVAC implementations'" class="title" />
        
        <div class="projects-grid">
            <div v-for="(project, index) in projects" :key="index" class="project-card">
                <div class="image-wrapper">
                    <div class="placeholder-img" :style="{ background: project.color }"></div>
                </div>
                <div class="content">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.category }}</p>
                    <RouterLink :to="{ name: 'project-detail', params: { id: index + 1 } }" class="learn-more">
                        See Details →
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';

const projects = [
    { title: "Corporate Office Tower", category: "VRV System Installation", color: "linear-gradient(135deg, #00a8b0, #008f96)" },
    { title: "Industrial Warehouse", category: "Chiller System", color: "linear-gradient(135deg, #00a8b0, #b9ff66)" },
    { title: "Luxury Residence", category: "Split & Cassette Units", color: "linear-gradient(135deg, #008f96, #00a8b0)" },
    { title: "Retail Complex", category: "Ductable AC Maintenance", color: "linear-gradient(135deg, #00a8b0, #ffffff)" }
];
</script>

<style scoped>
#projects {
    margin-top: 100px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.project-card {
    /* User Provided Glass CSS (Light) */
    background: rgba(255, 255, 255, 0.23) !important;
    backdrop-filter: blur(34px) !important;
    -webkit-backdrop-filter: blur(34px) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        inset 0 0 24px 12px rgba(255, 255, 255, 1.2) !important;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
    border-color: rgba(0, 168, 176, 0.5); /* Teal border on hover */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
    height: 250px;
    width: 100%;
    overflow: hidden;
}

.placeholder-img {
    width: 100%;
    height: 100%;
    opacity: 0.8;
}

.content {
    padding: 25px;
}

.content h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: var(--text-main); /* Revert to Black */
}

.content p {
    font-size: 1rem;
    color: var(--text-muted); /* Revert to Muted Black */
    margin-bottom: 15px;
}

.learn-more {
    color: var(--primary-color); /* Kept primary for contrast/visibility */
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-block;
    cursor: pointer; /* Ensure pointer */
    position: relative;
    z-index: 10; /* Ensure clickable */
}

.learn-more:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    #projects {
        margin-top: 60px;
        padding: 0 20px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 30px;
    }
    
    .project-card {
        max-width: 100%;
    }
    
    .content {
        text-align: center;
        padding: 20px;
    }
    
    .content h3 {
        font-size: 1.2rem;
    }
    
    .content p {
        font-size: 0.95rem;
    }
}

@media (max-width: 620px) {
    #projects {
        margin-top: 40px;
    }
    
    .image-wrapper {
        height: 200px;
    }
}
</style>
