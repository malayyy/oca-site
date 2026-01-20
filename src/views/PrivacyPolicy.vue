<template>
    <MainLayout>
        <div class="privacy-policy">
            <h1>Privacy Policy – OCA Solutions</h1>
            <p class="intro">
                At OCA Solutions, we value your privacy and are committed to protecting the information you share with us.
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us through our forms.
            </p>
            <p class="intro">By using this website, you agree to the practices described in this policy.</p>

            <section>
                <h2>1. Information We Collect</h2>
                <p>We may collect the following information when you interact with our website:</p>
                <ul>
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Service or project-related details submitted through contact forms</li>
                    <li>Basic technical information such as IP address, browser type, and device information for analytics purposes</li>
                </ul>
                <p>We do not collect sensitive personal information such as passwords, banking details, or financial data.</p>
            </section>

            <section>
                <h2>2. How We Use Your Information</h2>
                <p>The information collected is used only to:</p>
                <ul>
                    <li>Respond to enquiries and requests</li>
                    <li>Provide quotations and service-related communication</li>
                    <li>Coordinate HVAC and air conditioning projects</li>
                    <li>Improve website functionality and user experience</li>
                </ul>
                <p>We do not use your information for unsolicited marketing or spam.</p>
            </section>

            <section>
                <h2>3. Cookies</h2>
                <p>Our website may use basic cookies to analyze website traffic and improve performance.</p>
                <p>You can disable cookies through your browser settings.</p>
            </section>

            <section>
                <h2>4. Information Sharing</h2>
                <p>OCA Solutions does not sell, rent, or trade user information to third parties.</p>
                <p>Information may be shared only when required by law or with authorized partners for service delivery.</p>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>We implement reasonable measures to protect your information. However, complete internet security cannot be guaranteed.</p>
            </section>

            <section>
                <h2>6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. OCA Solutions is not responsible for their privacy practices.</p>
            </section>

            <section>
                <h2>7. User Rights</h2>
                <p>You may request access, correction, or deletion of your personal data by contacting us.</p>
            </section>

            <section>
                <h2>8. Policy Updates</h2>
                <p>This Privacy Policy may be updated periodically. Continued use of the website indicates acceptance of changes.</p>
            </section>

            <section>
                <h2>9. Contact Information</h2>
                <p>For any questions regarding this Privacy Policy, contact:</p>
                <p>Email: <a href="mailto:info@ocasolutions.in">info@ocasolutions.in</a></p>
            </section>
        </div>
        <ContactAccess />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import ContactAccess from '@/components/Sections/ContactAccess/ContactAccess.vue';
</script>

<style scoped>
.privacy-policy {
    padding: 60px 10%;
    margin-top: 40px;
    color: var(--secondary-color);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
}

h2 {
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 15px;
    background-color: var(--primary-color);
    padding: 5px 15px;
    border-radius: 8px;
    display: inline-block;
}

p, ul {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 15px;
}

ul {
    padding-left: 20px;
    list-style-type: disc;
}

li {
    margin-bottom: 5px;
}

a {
    color: var(--secondary-color);
    text-decoration: underline;
}

@media screen and (max-width: 768px) {
    .privacy-policy {
        padding: 40px 5%;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }
}
</style>
