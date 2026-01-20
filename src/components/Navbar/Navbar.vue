<template>
    <nav id="navbar" :class="{ 'scrolled': isScrolled, 'mobile': isMobile }">
        <div class="container nav-wrapper">
            <div id="left">
                <RouterLink :to="{ name: 'home' }" class="logo-link">
                    <Logo :dark="!isScrolled" class="nav-logo" />
                    <!-- Optional: Add text logo if needed -->
                    <span class="logo-text gradient-text">One Call Away</span>
                </RouterLink>
            </div>
            
            <div id="right">
                <!-- Desktop Links -->
                <ul id="links" v-if="!isMobile">
                    <li v-for="(link, index) in navLinks" :key="index" class="link-item">
                        <RouterLink :to="{ name: link.route }" class="nav-link" active-class="active">
                            {{ link.text }}
                        </RouterLink>
                    </li>
                    <li class="link-item cta">
                        <a href="tel:+918888886434" class="cta-button">
                            <span>Call Now</span>
                        </a>
                    </li>
                </ul>

                <!-- Mobile Trigger -->
                <button class="menu-trigger" v-if="isMobile" @click="emit('openNavbarPanel')" aria-label="Menu">
                    <div class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </div>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Logo from '../Logo/Logo.vue';

const props = defineProps({
    isMobile: { type: Boolean, default: false }
});

const emit = defineEmits([ 'openNavbarPanel' ]);

const isScrolled = ref(false);

const navLinks = [
    { text: 'About', route: 'about' },
    { text: 'Services', route: 'services' },
    { text: 'Use Cases', route: 'use-cases' },
    { text: 'Pricing', route: 'pricing' },
    { text: 'Blog', route: 'blog' },
];

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    height: var(--header-height);
    display: flex;
    align-items: center;
    background: transparent;
}

#navbar.scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--glass-border);
    height: 70px;
    box-shadow: 0 4px 20px -5px rgba(0,0,0,0.1);
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo Area */
.logo-link {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.logo-text {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
    color: var(--text-main);
}

/* Links */
#links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 0;
    padding: 0;
}

.nav-link {
    color: var(--text-main);
    text-decoration: none;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
    position: relative;
    padding: 8px 0;
}

.nav-link.active {
    color: var(--primary-color);
    font-weight: 600;
}


.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link:hover::after {
    width: 100%;
}

/* CTA Button */
.cta-button {
    background: var(--text-main);
    color: var(--text-dark);
    padding: 10px 24px;
    border-radius: 100px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    display: inline-block;
}

.cta-button:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 168, 176, 0.3);
}

/* Mobile Toggle */
.menu-trigger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.hamburger-box {
    width: 24px;
    height: 20px;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -1px;
    width: 24px;
    height: 2px;
    background-color: var(--text-main);
    border-radius: 4px;
    position: absolute;
    transition: background-color 0.2s;
}

.hamburger-inner::before,
.hamburger-inner::after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--text-main);
    border-radius: 4px;
    position: absolute;
    transition: transform 0.2s;
}

.hamburger-inner::before { top: -8px; }
.hamburger-inner::after { bottom: -8px; }

/* Mobile Navbar Specifics */
@media (max-width: 768px) {
    .nav-wrapper {
        padding: 0 10px; /* Tighter padding for mobile */
    }
    
    .logo-text {
        font-size: 1.1rem; /* Slightly smaller logo text */
    }
    
    .menu-trigger {
        padding: 5px; /* Reduce padding to align better */
    }
}
</style>