<template>
    <div class="service-card glass-panel" @mousemove="handleMouseMove" @mouseleave="resetTilt" ref="cardRef">
        <div class="card-content">
            <div class="icon-wrapper">
                <h3>{{ title.charAt(0) }}</h3>
            </div>
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-desc">Professional installation and maintenance services ensuring optimal performance.</p>
            <RouterLink :to="{ name: 'service-detail', params: { id: index } }" class="card-link">Learn More &rarr;</RouterLink>
        </div>
        <div class="card-glow" :style="glowStyle"></div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: { type: String, required: true },
    src: { type: String, default: '' },
    index: { type: Number, default: 0 }
});

const cardRef = ref(null);
const tiltX = ref(0);
const tiltY = ref(0);
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e) => {
    if (!cardRef.value) return;
    
    const rect = cardRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.value = x;
    mouseY.value = y;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    tiltX.value = (y - centerY) / 20;
    tiltY.value = (centerX - x) / 20;
};

const resetTilt = () => {
    tiltX.value = 0;
    tiltY.value = 0;
    mouseX.value = -100;
    mouseY.value = -100;
};

const glowStyle = computed(() => ({
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`,
    opacity: mouseX.value > -1 ? 1 : 0
}));
</script>

<style scoped>
.service-card {
    position: relative;
    padding: 30px;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    cursor: pointer;

    /* Pure Glassmorphism Effect */
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px 0 rgba(0, 168, 176, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.15);
}

.card-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
}

.icon-wrapper {
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 5px;
}

.card-title {
    font-size: 1.5rem;
    color: var(--text-main);
}

.card-desc {
    font-size: 0.95rem;
    color: var(--text-muted);
    flex-grow: 1;
}

.card-link {
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    margin-top: 10px;
    display: inline-block;
    transition: transform 0.2s ease, color 0.2s ease;
}

.service-card:hover .card-link {
    transform: translateX(5px);
    color: var(--primary-color);
}

.card-glow {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(0, 168, 176, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 1;
}
/* Mobile Responsive */
@media (max-width: 768px) {
    .service-card {
        padding: 25px;
        width: 90% !important;
        max-width: 450px !important;
        margin: 0 auto !important;
    }
    
    .card-content {
        align-items: center;
        text-align: center;
    }
    
    .icon-wrapper {
        margin: 0 auto 15px;
    }
    
    .card-title {
        font-size: 1.25rem;
        text-align: center;
    }
    
    .card-desc {
        text-align: center;
    }
    
    .card-link {
        text-align: center;
    }
}

@media (max-width: 620px) {
    .service-card {
        padding: 20px;
        width: 90% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
    }
    
    .card-title {
        font-size: 1.15rem;
    }
}
</style>
