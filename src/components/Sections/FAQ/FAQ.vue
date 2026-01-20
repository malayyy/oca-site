<template>
    <section id="faq" class="animate-fade-up">
        <SectionTitle :title="'FAQ'" :desc="'Common questions about our HVAC services'" class="title" />
        
        <div class="faq-container">
            <div v-for="(item, index) in faqItems" :key="index" class="faq-item" :class="{ active: activeIndex === index }">
                <button class="faq-question" @click="toggle(index)">
                    <span>{{ item.question }}</span>
                    <span class="icon">{{ activeIndex === index ? '−' : '+' }}</span>
                </button>
                <div class="faq-answer" :style="{ maxHeight: activeIndex === index ? '200px' : '0' }">
                    <p>{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';

const activeIndex = ref(null);

const faqItems = [
    {
        question: "What types of HVAC systems do you service?",
        answer: "We specialize in a wide range of systems including Split ACs, Cassette Units, VRV/VRF Systems, Ductable options, and industrial Chillers."
    },
    {
        question: "Do you offer maintenance contracts?",
        answer: "Yes, we provide comprehensive Annual Maintenance Contracts (AMC) to ensure your systems run efficiently year-round."
    },
    {
        question: "How do I choose the right AC for my space?",
        answer: "Our team provides expert consultancy to assess your specific environment and recommend the most efficient and cost-effective solution."
    },
    {
        question: "What is your response time for repairs?",
        answer: "We pride ourselves on being 'One Call Away' with prompt response times to minimize downtime for your business or home."
    }
];

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
}
</script>

<style scoped>
#faq {
    margin-top: 100px;
}

.faq-container {
    max-width: 800px;
    margin: 40px auto 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.faq-item {
    background: var(--bg-card);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid var(--glass-border);
}

.faq-item.active {
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-color: var(--primary-color);
}

.faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 30px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-main);
    text-align: left;
}

.faq-question .icon {
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: 300;
}

.faq-answer {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer p {
    padding: 0 30px 24px;
    margin: 0;
    color: var(--text-muted);
}
</style>
