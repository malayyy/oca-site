<template>
    <footer>
        <div id="navigations">
            <picture id="icon">
                <Logo :dark="false" />
            </picture>
            <ul id="links">
                <li class="link">
                    <RouterLink :to="{ name: 'about' }"><NavLinkButton :text="'About'" :type="2" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'services' }"><NavLinkButton :text="'Services'" :type="2" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'use-cases' }"><NavLinkButton :text="'Use Cases'" :type="2" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'pricing' }"><NavLinkButton :text="'Pricing'" :type="2" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'blog' }"><NavLinkButton :text="'Blog'" :type="2" /></RouterLink>
                </li>
            </ul>
        </div>

        <div id="contacts">
            <div id="physical-info">
                <div class="contact-item">
                     <span class="contact-label">Email</span>
                     <span class="contact-value"><a href="mailto:info.ocasolutions@gmail.com" style="color: inherit; text-decoration: none;">info.ocasolutions@gmail.com</a></span>
                </div>
                <div class="contact-item">
                     <span class="contact-label">Phone</span>
                     <span class="contact-value"><a href="tel:+918888886434" style="color: inherit; text-decoration: none;">+91-88888-86434</a></span>
                </div>
                <div class="contact-item">
                     <span class="contact-label">Address</span>
                     <span class="contact-value">F38, Express Zone, Western Express Highway, Opp. Reliance Energy, ITT Bhatti, Malad east, Mumbai, Maharashtra 400097</span>
                </div>
            </div>
            <div id="virtual-info">
                 <p style="color: var(--text-muted); font-size: 1.2rem; line-height: 1.6;">Dedicated to provide technical consultancy and specialized services in the field of HVAC.</p>
            </div>
        </div>

        <div id="rights">
            <p id="copyright">
                © 2026 OCA Solutions Pvt. Ltd. All Rights Reserved.
            </p>
            <RouterLink :to="{ name: 'privacy-policy' }" style="text-decoration: none;">
                <NavLinkButton :text="'Privacy Policy'" :type="2" />
            </RouterLink>
        </div>
    </footer>
</template>

<script setup>
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import { ref } from 'vue';

const width = ref(0);

width.value = window.innerWidth;

window.addEventListener('resize', (e) => {
    WidthMobile();
});

function WidthMobile() {
    width.value = window.innerWidth;

    if (width.value < 1040) return true;
    return false;
};
</script>

<style scoped>
/* FOOTER STYLES */
footer {
    background-color: var(--bg-card);
    border-top: 1px solid var(--glass-border);
    margin-top: 70px;
    padding: 80px 24px 40px;
    border-radius: 45px 45px 0 0;
}

#navigations {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 60px;
}

#links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px 30px;
}

#contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
}

#physical-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.contact-label {
    background-color: var(--primary-color);
    color: var(--text-dark);
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    width: fit-content;
}

.contact-value {
    font-size: 1.2rem;
    color: var(--text-main);
    font-weight: 500;
}

.contact-value a:hover {
    color: var(--primary-color);
}

#virtual-info {
    background: white;
    padding: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    border: 1px solid var(--glass-border);
}

#rights {
    border-top: 1px solid var(--glass-border);
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* RESPONSIVE */
@media screen and (max-width: 999px) {
    #contacts {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media screen and (max-width: 768px) {
    footer {
        padding: 40px 20px 25px;
        text-align: left;
        border-radius: 30px 30px 0 0;
    }

    #navigations {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 35px;
    }
    
    #icon {
        margin-bottom: 5px;
    }
    
    #links {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    #links .link {
        font-size: 0.85rem !important;
    }
    
    #contacts {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-bottom: 30px;
    }
    
    #physical-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .contact-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    
    .contact-label {
        font-size: 0.7rem !important;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--text-muted);
    }
    
    .contact-value {
        font-size: 0.85rem !important;
        line-height: 1.4;
    }
    
    .contact-value a {
        font-size: 0.85rem !important;
    }
    
    #virtual-info {
        padding: 20px 0;
    }
    
    #virtual-info p {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
    }
    
    #rights {
        flex-direction: column;
        gap: 12px;
        padding-top: 20px;
        align-items: flex-start;
    }
    
    #copyright {
        font-size: 0.75rem !important;
    }
    
    #rights a {
        font-size: 0.75rem !important;
    }
}

@media screen and (max-width: 620px) {
    footer {
        padding: 40px 16px 25px;
    }
    
    #navigations {
        margin-bottom: 40px;
    }
    
    #contacts {
        gap: 30px;
        margin-bottom: 40px;
    }
    
    .contact-label {
        font-size: 0.75rem !important;
        padding: 3px 10px;
        font-weight: 600;
    }
    
    .contact-value {
        font-size: 0.85rem !important;
        line-height: 1.4;
    }
    
    .contact-value a {
        font-size: 0.85rem !important;
    }
    
    #virtual-info {
        padding: 25px 18px;
    }
    
    #virtual-info p {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
    }
    
    #rights {
        font-size: 0.75rem !important;
    }
    
    #copyright {
        font-size: 0.75rem !important;
    }
    
    #rights a {
        font-size: 0.75rem !important;
    }
}
</style>