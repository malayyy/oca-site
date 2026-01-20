<template>
    <InfoCardTemplate class="--_card-template" :class="{ 'type-2': isExpanded }">
        <article class="component qna-card" :class="{ expand: isExpanded }">
            <div class="top">
                <div class="text">
                    <h1 id="num" v-if="num">{{ num }}</h1>
                    <h3 id="title">{{ title }}</h3>
                </div>
                <button class="action" @click="Expand()">
                    <span class="expand-line" id="horizontal" :class="{ expand: isExpanded }"></span>
                    <span class="expand-line" id="vertical" :class="{ expand: isExpanded }"></span>
                </button>
            </div>
            <div class="bottom">
                <p class="text">{{ msg }}</p>
            </div>
        </article>
    </InfoCardTemplate>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import InfoCardTemplate from './InfoCardTemplate.vue';

const props = defineProps({
    num: { type: Number },
    title: { type: String, default: 'Question Title', required: true },
    msg: { type: String, default: 'Answer for the question' }
});

const isExpanded = ref(false);

function Expand() {
    isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.--_card-template {
    width: 100%;
    height: 100%;
}

.qna-card {
    --padding: 40px 60px;

    width: 100%;
    height: 90px;
    padding: var(--padding);
    overflow: hidden;
}

.qna-card.expand {
    height: 100%;
}

.text {
    display: flex;
    gap: 25px;
    align-items: center;
}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.action {
    aspect-ratio: 1;
    background-color: var(--gray);
    border: 2px solid var(--secondary-color);
    border-radius: 50%;
    height: 60px;
    padding: 0;
    position: relative;
}

.expand-line {
    background-color: var(--secondary-color);
    height: 5px;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
}

.expand-line#vertical {
    transform: translate(-50%, -50%) rotate(90deg);
}

.expand-line.expand#vertical {
    transform: translate(-50%, -50%) rotate(0);
}

.bottom {
    /* border: 2px solid red; */
    border-top: 2px solid var(--secondary-color);
    min-height: max-content;
    margin-top: 40px;
    padding-top: 40px;
}

/* RESPONSIVE */
@media screen and (max-width: 768px) {
    .qna-card {
        --padding: 25px 30px;
        height: 70px;
    }
    
    .text {
        gap: 15px;
        flex-wrap: wrap;
    }
    
    #num {
        font-size: 1.2rem;
    }
    
    #title {
        font-size: 1rem;
        word-wrap: break-word;
        flex: 1;
    }
    
    .action {
        height: 50px;
        min-width: 50px;
    }
    
    .expand-line {
        height: 4px;
        width: 28px;
    }
    
    .bottom {
        margin-top: 30px;
        padding-top: 30px;
    }
}

@media screen and (max-width: 620px) {
    .qna-card {
        --padding: 20px 25px;
        height: 60px;
    }

    .action {
        height: 40px;
        min-width: 40px;
    }

    .expand-line {
        height: 3px;
        width: 25px;
    }
    
    #num {
        font-size: 1rem;
    }
    
    #title {
        font-size: 0.9rem;
    }
    
    .bottom {
        margin-top: 25px;
        padding-top: 25px;
    }
    
    .bottom .text {
        font-size: 0.9rem;
    }
}
</style>