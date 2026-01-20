<template>
    <div class="component logo-carousel running">
        <!-- Row 1: Moving Left -->
        <div class="layer">
            <div class="logo-container slide-left">
                <picture class="logo" v-for="(logo, index) in logos" :key="index" v-html="logo.logo" :id="`logo-r1-${index}`"></picture>
            </div>
            <div class="logo-container slide-left">
                <picture class="logo" v-for="(logo, index) in logos" :key="index+'-copy'" v-html="logo.logo" :id="`logo-r1-c-${index}`"></picture>
            </div>
        </div>

        <!-- Row 2: Moving Right -->
        <div class="layer">
            <div class="logo-container slide-right">
                <picture class="logo" v-for="(logo, index) in logosReversed" :key="index" v-html="logo.logo" :id="`logo-r2-${index}`"></picture>
            </div>
            <div class="logo-container slide-right">
                <picture class="logo" v-for="(logo, index) in logosReversed" :key="index+'-copy'" v-html="logo.logo" :id="`logo-r2-c-${index}`"></picture>
            </div>
        </div>

        <!-- Row 3: Moving Left (Slower/Different) -->
        <div class="layer">
            <div class="logo-container slide-left slow">
                <picture class="logo" v-for="(logo, index) in logos" :key="index" v-html="logo.logo" :id="`logo-r3-${index}`"></picture>
            </div>
            <div class="logo-container slide-left slow">
                <picture class="logo" v-for="(logo, index) in logos" :key="index+'-copy'" v-html="logo.logo" :id="`logo-r3-c-${index}`"></picture>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    logos: { type: Array, required: true },
});

const logosReversed = computed(() => [...props.logos].reverse());
</script>

<style scoped>
.logo-carousel {
    margin-bottom: 125px;
    display: flex;
    flex-direction: column;
    gap: 50px; /* Increased gap between rows */
    overflow: hidden;
    position: relative;
    padding: 20px 0;
    -webkit-mask-image: linear-gradient(to left, transparent 0%, black 10% 90%, transparent 100%);
    mask-image: linear-gradient(to left, transparent 0%, black 10% 90%, transparent 100%);
}

.layer {
    display: flex;
    width: max-content; /* Ensure container fits content */
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 80px; /* Space between logos */
    padding-right: 80px; /* Match gap for seamless loop */
}

.slide-left {
    animation: slide 30s linear infinite;
}

.slide-left.slow {
    animation: slide 40s linear infinite;
}

.slide-right {
    animation: slide_right 35s linear infinite;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    /* Make logos bigger */
    transform: scale(1.5); 
    opacity: 0.8;
}

/* Deep selector to target the SVG inside the v-html if needed */
:deep(svg) {
    height: 40px; /* Base height, scaled up by transform */
    width: auto;
    filter: grayscale(100%); /* Optional: keep them grayscale until hover */
    transition: all 0.3s ease;
}

/* Hover effects */
.logo:hover {
    transform: scale(1.6);
    opacity: 1;
}

.logo:hover :deep(svg) {
    filter: grayscale(0%);
    fill: var(--primary-color); 
}

/* ANIMATIONS */
@keyframes slide {
    from { transform: translateX(0%); }
    to { transform: translateX(-100%); }
}

@keyframes slide_right {
    from { transform: translateX(-100%); }
    to { transform: translateX(0%); }
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .logo-carousel {
        margin-bottom: 80px;
        gap: 35px;
        padding: 15px 0;
    }
    
    .logo-container {
        gap: 50px;
        padding-right: 50px;
    }
    
    .logo {
        transform: scale(1.2);
    }
    
    :deep(svg), :deep(img) {
        height: 35px;
    }
    
    .logo:hover {
        transform: scale(1.3);
    }
}

@media (max-width: 620px) {
    .logo-carousel {
        margin-bottom: 60px;
        gap: 25px;
    }
    
    .logo-container {
        gap: 40px;
        padding-right: 40px;
    }
    
    .logo {
        transform: scale(1);
    }
    
    :deep(svg), :deep(img) {
        height: 30px;
    }
    
    .logo:hover {
        transform: scale(1.1);
    }
}
</style>

