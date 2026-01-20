<template>
    <div class="component logo">
        <picture id="logo-container">
            <img :src="logoSrc" alt="OCA Solutions Logo" id="logo" :class="{ 'white-logo': !dark }" />
        </picture>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import logoImg from '@/assets/logo.png';

const props = defineProps({
    dark: { type: Boolean, default: true },
});

const logoSrc = logoImg;
</script>

<style scoped>
.component.logo {
    display: flex;
    align-items: center;
}

#logo-container {
    background-color: var(--primary-color);
    padding: 8px 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 168, 176, 0.3);
}

#logo {
    height: 35px; /* Slightly smaller to fit in the box */
    width: auto;
    filter: brightness(0) invert(1); /* Ensure logo is white on teal background */
}

</style>