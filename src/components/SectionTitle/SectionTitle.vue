<template>
    <div class="component section-title" :class="{ 'no-desc': desc === '' }">
        <h2 id="title">{{ title }}</h2>
        <div class="container">
            <p id="desc">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: { type: String, default: 'Section Title' },
    desc: { type: String, default: 'Section Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
});
</script>

<style scoped>
.component {
    display: flex;
    align-items: center;
    gap: 40px;
}

.component.no-desc {
    gap: 0
}

#title {
    flex-shrink: 0;
    font-size: clamp(2rem, 5vw, 2.5rem);
    color: var(--text-main);
    width: max-content;
    padding: 0;
    margin: 0;
}

#desc {
    max-width: 600px;
    font-size: 1rem;
    color: var(--text-muted);
}

/* RESPONSIVE */
@media screen and (max-width: 800px) {
    .component {
        flex-direction: column;
        align-items: start;
    }
}

@media screen and (max-width: 620px) {
    .component {

        margin-bottom: 40px;
        gap: 20px;
        align-items: center;
        text-align: center;
    }

    #title {
        width: auto
    }
}
</style>