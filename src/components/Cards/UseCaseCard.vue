<template>
    <div class="component use-case-card-btn" :id="id">
        <p id="text">
            {{ text }}
        </p>
        <SimpleLinkButton :to="to" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import SimpleLinkButton from '../Buttons/SimpleLinkButton/SimpleLinkButton.vue';

const props = defineProps({
    id: { type: String, default: 'middle' },
    text: { type: String, default: 'This is a placeholder to be changed!' },
    to: { type: [String, Object], default: null }
});
</script>

<style scoped>
.use-case-card-btn {
    width: 30%;
    min-width: 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
}

#text {
    color: black; /* Strictly black as requested - was var(--white) */
}

#middle {
    padding: 0 50px;
    border-left: 2px solid var(--text-main); /* Was var(--white) */
    border-right: 2px solid var(--text-main); /* Was var(--white) */
}

/* RESPONSIVE */
@media screen and (max-width: 920px) {
    .use-case-card-btn {
        width: 100%;
        min-width: 0px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-between;
    }

    #middle {
        border-left: 0;
        border-right: 0;
        border-top: 2px solid var(--text-main); /* Was var(--white) */
        border-bottom: 2px solid var(--text-main); /* Was var(--white) */
        padding: 40px 0;
    }
}

@media screen and (max-width: 620px) {
    .use-case-card-btn {
        gap: 15px;
    }
    
    #text {
        font-size: 0.95rem;
        line-height: 1.5;
    }
    
    #middle {
        padding: 30px 0;
    }
}
</style>