<template>
    <div class="component logo-carousel">
        <div class="marquee">
            <div class="marquee-content">
                <picture class="logo" v-for="(logo, index) in logos" :key="`original-${index}`" v-html="logo.logo"></picture>
            </div>
            <div class="marquee-content" aria-hidden="true">
                <picture class="logo" v-for="(logo, index) in logos" :key="`duplicate-${index}`" v-html="logo.logo"></picture>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    logos: { type: Array, required: true },
});
</script>

<style scoped>
.logo-carousel {
    margin-bottom: 125px;
    overflow: hidden;
    position: relative;
    padding: 30px 0;
    background: transparent;
}

/* Gradient fade on edges */
.logo-carousel::before,
.logo-carousel::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
}

.logo-carousel::before {
    left: 0;
    background: linear-gradient(to right, var(--bg-dark), transparent);
}

.logo-carousel::after {
    right: 0;
    background: linear-gradient(to left, var(--bg-dark), transparent);
}

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
}

.marquee-content {
    display: flex;
    align-items: center;
    gap: 80px;
    padding-right: 80px;
    animation: marquee 30s linear infinite;
    flex-shrink: 0;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.7;
}

:deep(svg),
:deep(img) {
    height: 50px;
    width: auto;
    filter: grayscale(100%);
    transition: all 0.3s ease;
}

.logo:hover {
    transform: scale(1.15);
    opacity: 1;
}

.logo:hover :deep(svg),
.logo:hover :deep(img) {
    filter: grayscale(0%);
}

/* Smooth infinite scroll animation */
@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

/* Pause on hover for interactivity */
.marquee:hover .marquee-content {
    animation-play-state: paused;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .logo-carousel {
        margin-bottom: 80px;
        padding: 20px 0;
    }

    .logo-carousel::before,
    .logo-carousel::after {
        width: 50px;
    }

    .marquee-content {
        gap: 50px;
        padding-right: 50px;
        animation: marquee 25s linear infinite;
    }

    :deep(svg),
    :deep(img) {
        height: 40px;
    }
}

@media (max-width: 620px) {
    .logo-carousel {
        margin-bottom: 60px;
        padding: 15px 0;
    }

    .marquee-content {
        gap: 40px;
        padding-right: 40px;
        animation: marquee 20s linear infinite;
    }

    :deep(svg),
    :deep(img) {
        height: 35px;
    }
}
</style>

