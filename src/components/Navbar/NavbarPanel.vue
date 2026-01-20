<template>
    <nav class="component side-panel" :class="{ show: isOpen }" v-if="isMobile">
        <Hamburger @click="emits('closeNavbarPanel')" />
        <ul id="links" v-if="isMobile">
            <li class="link">
                <RouterLink :to="{ name: 'about' }" @click="emits('closeNavbarPanel')"><NavLinkButton :text="'About'" /></RouterLink>
            </li>
            <li class="link">
                <RouterLink :to="{ name: 'services' }" @click="emits('closeNavbarPanel')"><NavLinkButton :text="'Services'" /></RouterLink>
            </li>
            <li class="link">
                <RouterLink :to="{ name: 'use-cases' }" @click="emits('closeNavbarPanel')"><NavLinkButton :text="'Use Cases'" /></RouterLink>
            </li>
            <li class="link">
                <RouterLink :to="{ name: 'pricing' }" @click="emits('closeNavbarPanel')"><NavLinkButton :text="'Pricing'" /></RouterLink>
            </li>
            <li class="link">
                <RouterLink :to="{ name: 'blog' }" @click="emits('closeNavbarPanel')"><NavLinkButton :text="'Blog'" /></RouterLink>
            </li>
            <li class="link">
                <BasicButton :text="'Request a quote'" :type="1" />
            </li>
        </ul>
    </nav>
</template>

<script setup>
import Hamburger from '../Buttons/Hamburger/Hamburger.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';

const props = defineProps({
    isMobile: Boolean,
    isOpen: Boolean
});

const emits = defineEmits(['closeNavbarPanel']);
</script>

<style scoped>
.side-panel {
    --width: 320px;

    border-left: 5px solid var(--primary-color);
    background-color: #ffffff;
    width: calc(var(--width) - 60px);
    height: calc(100dvh - 50px);
    padding: 50px 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: calc((var(--width) * -1) - 5px);
    transition: 0.2s;
    z-index: 50;
}

.side-panel.show {
    right: 0px;
}

#links {
    padding-top: 30px;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}

/* RESPONSIVE */
@media screen and (max-width: 620px) {
    .side-panel {
        --width: calc(100% - 5px);
    }
}
</style>