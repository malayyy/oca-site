<template>
    <div class="component simple-action-card">
        <div class="container">
            <div class="action-info">
                <h3 id="text">{{ title }}</h3>
                <p id="desc">
                    {{ desc }}
                </p>
                <div @click="scrollToContact">
                    <BasicButton :text="'Get your free proposal'" :type="2" />
                </div>
            </div>
            <picture id="icon" v-html="icon">
            </picture>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { type: String, required: true }
});

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<style scoped>
.simple-action-card {
    height: auto;
    min-height: 350px;
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
}

.simple-action-card::before {
    content: '';
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease;
}

.container {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 100%;
    border-radius: 30px;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 50px;
    box-sizing: border-box;
}

.action-info {
    max-width: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    z-index: 2;
}

#text {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000000;
    line-height: 1.2;
    margin-bottom: 10px;
}

#desc {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-muted);
    max-width: 550px;
    margin-bottom: 10px;
}

#icon {
    position: absolute;
    top: -30px;
    right: 0;
    transition: 0.2s;
    z-index: 1;
}

/* LISTENERS */
.simple-action-card:hover::before {
    height: 200px;
}

#icon:hover {
    transform: translateY(-10px);
}

/* RESPONSIVE */
@media screen and (max-width: 1220px) {
    #icon {
        right: -80px;
    }
}

@media screen and (max-width: 930px) {
    .simple-action-card {
        min-height: auto;
    }

    #icon {
        margin-left: 0;
        position: relative;
        top: 0;
        right: 0;
    }

    .container {
        padding: 40px;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .action-info {
        max-width: 100%;
        align-items: center;
        text-align: center;
    }

    #text {
        font-size: 2rem;
    }

    #desc {
        max-width: 100%;
    }

    #icon:hover {
        transform: translateY(0);
    }
}

@media screen and (max-width: 768px) {
    .simple-action-card {
        width: calc(100% - 40px) !important;
        margin: 0 20px !important;
        box-sizing: border-box !important;
    }

    .container {
        padding: 35px 25px;
    }

    #text {
        font-size: 1.75rem;
    }

    #desc {
        font-size: 1rem;
    }
}

@media screen and (max-width: 620px) {
    .simple-action-card {
        width: calc(100% - 32px) !important;
        margin: 0 16px !important;
    }

    .container {
        padding: 30px 20px;
    }

    #text {
        font-size: 1.5rem;
    }

    #desc {
        font-size: 0.95rem;
        line-height: 1.6;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding: 25px 18px;
    }

    #text {
        font-size: 1.35rem;
    }

    #icon {
        display: none;
    }
}
</style>