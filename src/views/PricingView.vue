<template>
    <MainLayout>
        <section class="page-header animate-fade-up">
            <h1 class="gradient-text">Pricing & Plans</h1>
            <p>Transparent pricing for maintenance and installation.</p>
        </section>

        <div class="container pricing-grid">
            <div class="pricing-card glass-panel animate-float" style="animation-delay: 0s;">
                <h3>Basic AMC</h3>
                <div class="price">Contact for Quote</div>
                <ul>
                    <li>Regular Servicing</li>
                    <li>Breakdown Support</li>
                    <li>Standard Response Time</li>
                </ul>
                <div class="btn-wrapper">
                    <BasicButton :text="'Get Quote'" :type="1" />
                </div>
            </div>

            <div class="pricing-card glass-panel animate-float" style="animation-delay: 0.5s; border-color: var(--primary-color);">
                <h3>Premium AMC</h3>
                <div class="price">Best Value</div>
                <ul>
                    <li>Priority Support</li>
                    <li>Preventive Maintenance</li>
                    <li>Spare Parts Discounts</li>
                </ul>
                 <div class="btn-wrapper">
                    <BasicButton :text="'Get Quote'" :type="1" />
                </div>
            </div>
            
            <div class="pricing-card glass-panel animate-float" style="animation-delay: 1s;">
                <h3>Project Installation</h3>
                <div class="price">Custom</div>
                <ul>
                    <li>Site Survey</li>
                    <li>System Design</li>
                    <li>Professional Installation</li>
                </ul>
                 <div class="btn-wrapper">
                    <BasicButton :text="'Consult Us'" :type="1" />
                </div>
            </div>
        </div>
        
        <ContactAccess />

    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ContactAccess from '@/components/Sections/ContactAccess/ContactAccess.vue';
import BasicButton from '@/components/Buttons/BasicButton/BasicButton.vue';
</script>

<style scoped>
.page-header {
    text-align: center;
    padding: 100px 20px 60px;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding-bottom: 80px;
}

.pricing-card {
    padding: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--bg-card);
}

.price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

li {
    color: var(--text-muted);
}

li::before {
    content: '✓';
    color: var(--neon-accent);
    margin-right: 10px;
}

.btn-wrapper {
    margin-top: auto;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .pricing-card {
        margin-right: 40px !important;
    }
}

@media (max-width: 620px) {
    .pricing-card {
        margin-right: 40px !important;
    }
}
</style>
