<template>
    <MainLayout>
        <section class="page-header animate-fade-up">
            <h1 class="gradient-text">Insights & Blog</h1>
            <p>Latest updates from the HVAC world.</p>
        </section>

        <div class="container blog-grid">
            <article class="blog-post glass-panel animate-float" v-for="i in 3" :key="i" :style="{ animationDelay: `${i * 0.2}s` }">
                <div class="post-image"></div>
                <div class="post-content">
                    <span class="date">{{ ['Oct 12, 2025', 'Nov 05, 2025', 'Dec 15, 2025'][i-1] }}</span>
                    <h3>{{ ['Why Regular AC Maintenance Matters', 'Modern HVAC Trends for 2026', 'Choosing the Right System'][i-1] }}</h3>
                    <p>{{ ['Learn how simple maintenance can save you thousands...', 'From AI-driven thermostats to eco-friendly refrigerants...', 'Commercial spaces have unique needs...'][i-1] }}</p>
                    <RouterLink :to="{ name: 'blog-post', params: { id: i } }" class="read-more">Read More →</RouterLink>
                </div>
            </article>
        </div>

    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style scoped>
.page-header {
    text-align: center;
    padding: 100px 20px 60px;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding-bottom: 80px;
}

.blog-post {
    border-radius: 20px;
    overflow: hidden;
    background: var(--bg-card);
    transition: transform 0.3s;
}

.blog-post:hover {
    transform: translateY(-5px);
}

.post-image {
    height: 200px;
    background: linear-gradient(135deg, var(--primary-glow), var(--bg-dark));
}

.post-content {
    padding: 24px;
}

.date {
    font-size: 0.8rem;
    color: var(--text-muted);
}

h3 {
    margin: 10px 0;
    color: var(--text-main);
}

p {
    font-size: 0.9rem;
    margin-bottom: 20px;
}

.read-more {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
}
</style>
