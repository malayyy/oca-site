<template>
    <div class="component logo-carousel">
        <div class="marquee-wrapper">
             <!-- Duplicate the logo set multiple times for seamless scrolling on wide screens -->
            <div class="marquee-content slide-left">
                <div class="logo-item" v-for="(logo, index) in displayLogos" :key="'g1-'+index" v-html="logo.logo"></div>
                 <div class="logo-item" v-for="(logo, index) in displayLogos" :key="'g2-'+index" v-html="logo.logo"></div>
                 <div class="logo-item" v-for="(logo, index) in displayLogos" :key="'g3-'+index" v-html="logo.logo"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    logos: { type: Array, required: true },
});

// If the logo list is short, we might want to double it up in the prop itself,
// but for now, we just repeat the loop in the template.
const displayLogos = computed(() => props.logos);
</script>

<style scoped>
.logo-carousel {
    margin-bottom: 80px;
    padding: 40px 0;
    overflow: hidden;
    position: relative;
    background: transparent;
    -webkit-mask-image: linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%);
    mask-image: linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%);
}

.marquee-wrapper {
    display: flex;
    overflow: hidden;
    width: 100%;
}

.marquee-content {
    display: flex;
    gap: 80px; /* Space between logos */
    padding-right: 80px; /* Match gap */
    width: max-content;
    will-change: transform;
}

.logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.7;
}

/* Deep selector for SVGs/Images passed via v-html */
:deep(svg), :deep(img) {
    height: 45px;
    width: auto;
    /* filter: grayscale(100%) contrast(0%) brightness(0%); Removed for full color */
    transition: all 0.3s ease;
}

/* Hover effects */
.logo-item:hover {
    opacity: 1;
    transform: scale(1.1);
}

.logo-item:hover :deep(svg),
.logo-item:hover :deep(img) {
    filter: none; /* Restore original colors on hover */
}

.slide-left {
    animation: scroll 40s linear infinite;
}

/* Pause animation on hover for better UX */
.logo-carousel:hover .slide-left {
    animation-play-state: paused;
}

@keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-33.33%); } /* Move by 1/3 since we have 3 sets */
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .logo-carousel {
        margin-bottom: 60px;
        padding: 20px 0;
    }
    
    .marquee-content {
        gap: 50px;
        padding-right: 50px;
    }
    
    :deep(svg), :deep(img) {
        height: 35px;
    }
}

@media (max-width: 480px) {
    .marquee-content {
        gap: 40px;
        padding-right: 40px;
    }
    
    :deep(svg), :deep(img) {
        height: 30px;
    }
}
</style>

