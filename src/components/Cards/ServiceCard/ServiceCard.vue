<template>
    <div class="service-card" @mousemove="handleMouseMove" @mouseleave="resetTilt" ref="cardRef">
        <div class="card-content">
            <div class="icon-wrapper">
                <i :class="icon"></i>
            </div>
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-desc">Professional installation and maintenance services ensuring optimal performance.</p>
            <RouterLink :to="{ name: 'service-detail', params: { id: index } }" class="card-link">See Details &rarr;</RouterLink>
        </div>
        <div class="card-glow" :style="glowStyle"></div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: { type: String, required: true },
    icon: { type: String, default: 'fa-solid fa-snowflake' },
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
    
    // Subtle tilt
    tiltX.value = (y - centerY) / 30;
    tiltY.value = (centerX - x) / 30;
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
    
    /* User Provided Glass CSS - Modified for Black/Brand */
    background: linear-gradient(
        135deg, 
        rgba(20, 20, 20, 0.6) 0%, 
        rgba(0, 168, 176, 0.15) 100%
    ) !important;
    backdrop-filter: blur(34px) !important;
    -webkit-backdrop-filter: blur(34px) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        inset 0 -1px 0 rgba(255, 255, 255, 0.05),
        inset 0 0 24px 12px rgba(0, 0, 0, 0.2) !important; /* Darker inner shadow */
    overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 168, 176, 0.8), /* Brand Teal Highlight */
    transparent
  );
  z-index: 3;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 168, 176, 0.8), /* Brand Teal Highlight */
    transparent,
    rgba(255, 255, 255, 0.1)
  );
  z-index: 3;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 168, 176, 0.5);
}

.card-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    text-align: center; /* Center text */
    gap: 15px;
    height: 100%;
}

.icon-wrapper {
    width: 60px; /* Slightly larger for icon */
    height: 60px;
    background: var(--primary-color); /* Teal Background */
    border-radius: 16px; /* Similar to screenshot */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem; /* Larger icon */
    color: #fff; /* White Icon */
    margin-bottom: 10px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 168, 176, 0.3); /* Teal glow */
}

.service-card:hover .icon-wrapper {
    transform: scale(1.1);
}

.card-title {
    font-size: 1.5rem;
    color: #ffffff; /* White Title */
    font-weight: 700;
}

.card-desc {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8); /* Muted White Desc */
    flex-grow: 1;
}

.card-link {
    color: var(--primary-color); /* Teal Link */
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
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 1;
    mix-blend-mode: overlay;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .service-card {
        padding: 24px;
        width: 100% !important;
        max-width: 340px !important; /* Slightly reduced max-width for better visual centering on small screens */
        margin: 0 20px !important; /* Ensure margin from screen edges */
        box-sizing: border-box !important;
    }
    
    .card-content {
        align-items: center;
        text-align: center;
    }
    
    .icon-wrapper {
        margin: 0 auto 10px;
        width: 45px;
        height: 45px;
        font-size: 1.25rem;
    }
    
    .card-title {
        font-size: 1.25rem;
    }
}
</style>
