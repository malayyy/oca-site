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
    transition: transform 0.1s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    cursor: pointer;
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(20,20,20,0.4) 100%);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
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
    color: var(--neon-accent);
    text-decoration: none;
    font-weight: 600;
    margin-top: 10px;
    display: inline-block;
    transition: transform 0.2s ease;
}

.service-card:hover .card-link {
    transform: translateX(5px);
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
</style>
