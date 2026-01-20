<template>
    <MainLayout>
        <HeroHome />
        <LogoCarousel :logos="logos"></LogoCarousel>
        <ServiceSection />
        <Projects />
        <CaseStudies />
        <WorkingProcess />
        <FAQ />
        <ActionContact />
        <!-- <Team /> -->
        <!-- <Testimonials /> -->
        <ContactAccess />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import HeroHome from '@/components/Heroes/HeroHome.vue';
import LogoCarousel from '@/components/Carousel/LogoCarousel/LogoCarousel.vue';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection.vue';
import Projects from '@/components/Sections/Projects/Projects.vue';
import FAQ from '@/components/Sections/FAQ/FAQ.vue';
import ActionContact from '@/components/Sections/ActionContact/ActionContact.vue';
import CaseStudies from '@/components/Sections/CaseStudies/CaseStudies.vue';
import WorkingProcess from '@/components/Sections/WorkingProcess/WorkingProcess.vue';
// import Team from '@/components/Sections/Team/Team.vue';
import Testimonials from '@/components/Sections/Testimonials/Testimonials.vue';
import ContactAccess from '@/components/Sections/ContactAccess/ContactAccess.vue';

// Client Logos
import bobLogo from '@/assets/clients/BOB.png';
import denaLogo from '@/assets/clients/Dena Bank.png';
import policeLogo from '@/assets/clients/Greater Mumbai Police.png';
import navyLogo from '@/assets/clients/Indian Navy.png';
import pnbLogo from '@/assets/clients/Punjab National Bank.png';
import larsenLogo from '@/assets/clients/Larsen Construction.png';

const logos = [
    { logo: `<img src="${bobLogo}" alt="Bank of Baroda" style="height: 50px; width: auto;" />`, id: 'bob' },
    { logo: `<img src="${denaLogo}" alt="Dena Bank" style="height: 50px; width: auto;" />`, id: 'dena' },
    { logo: `<img src="${policeLogo}" alt="Mumbai Police" style="height: 50px; width: auto;" />`, id: 'police' },
    { logo: `<img src="${navyLogo}" alt="Indian Navy" style="height: 50px; width: auto;" />`, id: 'navy' },
    { logo: `<img src="${pnbLogo}" alt="PNB" style="height: 50px; width: auto;" />`, id: 'pnb' },
    { logo: `<img src="${larsenLogo}" alt="L&T" style="height: 50px; width: auto;" />`, id: 'larsen' }
];
</script>

<style scoped>
section {
    margin-top: 70px;
    padding-bottom: 70px;
}

@media screen and (max-width: 620px) {
    section {
        margin-top: 50px;
        padding-bottom: 50px;
    }
    
    section:first-child {
        margin-top: 0;
    }
}
</style>