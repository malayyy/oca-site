<template>
    <MainLayout>
        <article class="blog-detail container animate-fade-up">
            <div class="blog-header">
                <span class="date">{{ post.date }}</span>
                <h1 class="gradient-text">{{ post.title }}</h1>
            </div>
            
            <div class="blog-content glass-panel">
                <!-- AI Generated Content Placeholder -->
                <p class="intro">{{ post.intro }}</p>
                <div v-html="post.content"></div>
                <div class="ai-notice">
                    <small><i>Content generated for demonstration purposes.</i></small>
                </div>
            </div>
            
            <div class="actions">
                <RouterLink :to="{ name: 'blog' }">
                    <BasicButton :text="'← Back to Blog'" :type="2" />
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

// Placeholder data - in a real app this would be an API call
const posts = {
    1: {
        date: "Oct 12, 2025",
        title: "Why Regular AC Maintenance Matters",
        intro: "Skipping your annual AC check-up might seem like a money-saver, but it often leads to costly repairs down the road.",
        content: `
            <h2>The Hidden Cost of Neglect</h2>
            <p>Air conditioning systems are complex machines with moving parts that wear down over time. Without regular maintenance, efficiency drops by 5% every year. This means your unit works harder to cool your home, driving up electricity bills.</p>
            
            <h2>Key Benefits of Servicing</h2>
            <ul>
                <li><strong>Extended Lifespan:</strong> Routine checks can double your unit's life.</li>
                <li><strong>Better Air Quality:</strong> Clean filters mean fewer allergens.</li>
                <li><strong>Warranty Protection:</strong> Most manufacturers require proof of maintenance.</li>
            </ul>
        `
    },
    2: {
        date: "Nov 05, 2025",
        title: "Modern HVAC Trends for 2026",
        intro: "From AI-driven thermostats to eco-friendly refrigerants, the future of climate control is here.",
        content: `
            <h2>Smart Integration</h2>
            <p>IoT-enabled devices are revolutionizing how we control our environment. Smart zones allow you to cool only occupied rooms, reducing waste.</p>
            
            <h2>Sustainability</h2>
            <p>New regulations are pushing for refrigerants with lower Global Warming Potential (GWP). OCA Solutions is at the forefront of this green transition.</p>
        `
    },
    3: {
        date: "Dec 15, 2025",
        title: "Choosing the Right System for Your Office",
        intro: "Commercial spaces have unique needs. Here is how to pick the right system.",
        content: `
            <h2>VRF vs. Chiller Systems</h2>
            <p>Variable Refrigerant Flow (VRF) systems offer superior energy efficiency for medium-sized buildings, while water-cooled chillers remain the gold standard for large high-rises.</p>
        `
    }
};

const post = computed(() => posts[id] || {
    date: "",
    title: "Post Not Found",
    intro: "The requested blog post could not be found.",
    content: ""
});
</script>

<style scoped>
.blog-detail {
    padding: 100px 20px 80px;
    max-width: 800px;
    margin: 0 auto;
}

.blog-header {
    text-align: center;
    margin-bottom: 40px;
}

.date {
    color: var(--text-muted);
    font-size: 0.9rem;
}

h1 {
    font-size: 2.5rem;
    margin-top: 10px;
}

.blog-content {
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 40px;
}

.intro {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 30px;
    color: var(--text-main);
}

.actions {
    display: flex;
    justify-content: center;
}

.ai-notice {
    margin-top: 40px;
    border-top: 1px solid var(--glass-border);
    padding-top: 20px;
    color: var(--text-muted);
}

/* Deep selector for v-html content */
:deep(h2) {
    color: var(--primary-color);
    margin: 30px 0 15px;
}

:deep(p) {
    margin-bottom: 15px;
    line-height: 1.6;
    color: var(--text-muted);
}

:deep(ul) {
    margin-bottom: 20px;
    padding-left: 20px;
}

:deep(li) {
    margin-bottom: 10px;
    color: var(--text-muted);
}
</style>
