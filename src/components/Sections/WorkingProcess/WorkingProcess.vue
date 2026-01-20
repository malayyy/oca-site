<template>
    <section id="working-process">

        <SectionTitle :title="'Why Choose OCA'"
            :desc="'We are dedicated to providing the best HVAC solutions with safety and reliability.'"
            class="title" />
        <div class="processes">
            <QnACard v-for="(process, index) in processes" :num="index+1" :title="process.title" :msg="process.msg" />
        </div>
    </section>
</template>

<script setup>
import QnACard from '@/components/Cards/QnACard.vue';

const processes = [
    {
        title: 'HVAC Consultancy',
        msg: 'We provide expert technical consultancy to help you choose the appropriate air conditioning system for any environment.'
    },
    {
        title: 'HVAC Specialist',
        msg: 'Our specialized services ensure that your HVAC systems are designed and installed to meet the highest standards.'
    },
    {
        title: 'In-House Design & Installation Team',
        msg: 'We have a dedicated in-house team for design and installation, ensuring seamless execution of projects.'
    },
    {
        title: 'Robust After-Sales Service',
        msg: 'We believe in building long-term relationships with our clients through reliable and robust after-sales support.'
    },
    {
        title: 'Designated Safety Officers',
        msg: 'Safety is our priority. We have designated safety officers to ensure highest safety standards during installation and maintenance.'
    },
    {
        title: 'Advanced Equipments',
        msg: 'We use advanced equipment for superior installation and maintenance of HVAC systems.'
    },
];


</script>

<style scoped>
.processes {
    display: flex;
    flex-direction: column;
    gap: 35px;
}
</style>