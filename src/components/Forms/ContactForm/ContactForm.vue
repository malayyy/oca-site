<template>
    <div class="component contact-form animate-fade-up">
        <div class="glass-bg"></div>
        <div class="wrapper">
            <div id="options">
                <div class="radio-group">
                    <button type="button" 
                        class="option-btn" 
                        :class="{ active: reason === 'general' }" 
                        @click="reason = 'general'">
                        General Inquiry
                    </button>
                    <button type="button" 
                        class="option-btn" 
                        :class="{ active: reason === 'quote' }" 
                        @click="reason = 'quote'">
                        Get a Quote
                    </button>
                </div>
            </div>

            <form action="#" @submit.prevent="handleSubmit">
                <div class="form-grid">
                    <div class="input-group">
                        <label>Name</label>
                        <input type="text" v-model="name" placeholder="John Doe" class="premium-input" :class="{ filled: name.length > 0 }" required />
                    </div>
                    
                    <div class="input-group">
                        <label>Email</label>
                        <input type="email" v-model="email" placeholder="john@example.com" class="premium-input" :class="{ filled: email.length > 0 }" required />
                    </div>
                </div>

                <div class="input-group">
                    <label>Phone Number</label>
                    <input type="tel" v-model="phone" placeholder="+91 1234567890" class="premium-input" :class="{ filled: phone.length > 0 }" required />
                </div>

                <div class="input-group">
                    <label>Address</label>
                    <input type="text" v-model="address" placeholder="Location..." class="premium-input" :class="{ filled: address.length > 0 }" />
                </div>

                <div class="input-group full-width">
                    <label>Message</label>
                    <textarea v-model="message" placeholder="How can we help you?" class="premium-input text-area" :class="{ filled: message.length > 0 }" required></textarea>
                </div>

                <div id="action">
                    <button type="submit" class="submit-btn" :disabled="loading">
                        <span v-if="!loading">Send Message</span>
                        <span v-else class="spinner"></span>
                    </button>
                </div>

                <div v-if="feedback" class="feedback-toast" :class="{ error: isError, success: !isError }">
                    {{ feedback }}
                </div>
            </form>
        </div>

        <!-- Decorative SVG integrated with dark theme -->
        <div class="decoration">
            <svg viewBox="0 0 692 649" fill="none" class="form-svg">
                <path d="M366.641 162.061L387.068 0.5..." stroke="var(--primary-color)" stroke-opacity="0.1" />
                <circle cx="50" cy="50" r="250" fill="var(--primary-color)" fill-opacity="0.05" filter="url(#blur)" />
                <defs>
                    <filter id="blur">
                        <feGaussianBlur stdDeviation="40" />
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/libs/supabaseClient';

const name = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const message = ref('');
const reason = ref('general');
const feedback = ref('');
const isError = ref(false);
const loading = ref(false);

async function handleSubmit() {
    loading.value = true;
    feedback.value = '';
    
    if (!name.value || !email.value || !message.value) {
        feedback.value = 'Please fill in all required fields.';
        isError.value = true;
        loading.value = false;
        return;
    }

    try {
        const { data, error } = await supabase
            .from('customers')
            .insert([
                { 
                    name: name.value, 
                    email: email.value, 
                    phone: phone.value,
                    address: address.value, 
                    service_interest: reason.value,
                    status: 'new'
                },
            ]);

        if (error) throw error;

        feedback.value = 'Message sent successfully!';
        isError.value = false;
        
        // Reset form
        name.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        message.value = '';
        
        // Clear success message after 3 seconds
        setTimeout(() => feedback.value = '', 3000);

    } catch (error) {
        console.error('Error submitting form:', error);
        feedback.value = 'Failed to send message. Please try again.';
        isError.value = true;
    } finally {
        loading.value = false;
    }
}
</script>

<style scoped>
.component.contact-form {
    position: relative;
    padding: 60px;
    border-radius: 40px;
    overflow: hidden;
    margin-top: 40px;
}

.glass-bg {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    z-index: 0;
}

@media (max-width: 768px) {
    .glass-bg {
        border-radius: 30px;
    }
}

.wrapper {
    position: relative;
    z-index: 2;
    max-width: 600px;
}

/* Radio Group */
.radio-group {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    background: rgba(0,0,0,0.2);
    padding: 5px;
    border-radius: 100px;
    display: inline-flex;
}

.option-btn {
    background: transparent;
    border: none;
    color: var(--text-muted);
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.option-btn.active {
    background: var(--primary-color);
    color: var(--text-dark);
    font-weight: 600;
}

/* Form Styles */
.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.input-group {
    margin-bottom: 25px;
    position: relative;
}

.input-group label {
    display: block;
    margin-bottom: 10px;
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 500;
}

.premium-input {
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 16px 20px;
    color: var(--text-main);
    font-size: 1rem;
    font-family: var(--font-body);
    transition: all 0.3s ease;
    outline: none;
}

.premium-input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(0, 168, 176, 0.1);
    background: rgba(0, 0, 0, 0.4);
}

.premium-input.text-area {
    min-height: 150px;
    resize: vertical;
}

/* Submit Button */
.submit-btn {
    width: 100%;
    padding: 18px;
    background: var(--text-main);
    color: var(--text-dark);
    border: none;
    border-radius: 14px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
    background: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 168, 176, 0.2);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Feedback */
.feedback-toast {
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
    opacity: 0;
    animation: fadeInUp 0.3s forwards;
}

.feedback-toast.success {
    background: rgba(185, 255, 102, 0.1);
    color: var(--neon-accent);
    border: 1px solid rgba(185, 255, 102, 0.2);
}

.feedback-toast.error {
    background: rgba(255, 50, 50, 0.1);
    color: #ff5555;
    border: 1px solid rgba(255, 50, 50, 0.2);
}

/* Decoration */
.decoration {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.form-svg {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    height: 120%;
    width: auto;
    opacity: 0.5;
}

@media (max-width: 768px) {
    .form-grid { 
        grid-template-columns: 1fr; 
    }
    
    .component.contact-form { 
        padding: 30px 15px !important;
        margin: 30px auto 0 !important;
        width: 90% !important;
        max-width: 600px !important;
    }
    
    .wrapper {
        max-width: 100%;
    }
    
    .decoration { 
        display: none; 
    }
    
    .radio-group { 
        width: 100%; 
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row !important;
        gap: 10px;
    }
    
    .option-btn {
        padding: 10px 20px;
        font-size: 0.95rem;
        flex: 1;
        min-width: 140px;
    }
    
    .input-group {
        margin-bottom: 20px;
    }
    
    .premium-input {
        padding: 14px 18px;
        font-size: 0.95rem;
    }
    
    .submit-btn {
        padding: 16px;
        font-size: 1rem;
    }
}

@media (max-width: 620px) {
    .component.contact-form {
        padding: 25px 12px !important;
        border-radius: 30px;
        margin: 30px auto 0 !important;
        width: 90% !important;
        max-width: 100% !important;
    }
    
    .radio-group {
        flex-direction: row !important;
        width: 100%;
        gap: 8px;
    }
    
    .option-btn {
        flex: 1;
        padding: 12px 16px;
        font-size: 0.9rem;
        min-width: 120px;
    }
    
    .premium-input {
        padding: 12px 16px;
        font-size: 0.9rem;
    }
    
    .premium-input.text-area {
        min-height: 120px;
    }
    
    .submit-btn {
        padding: 14px;
        font-size: 0.95rem;
    }
}
</style>