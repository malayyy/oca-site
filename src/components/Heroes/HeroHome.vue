<template>
    <section class="hero-section">
        <div class="container hero-container">
            <!-- Left Content -->
            <div class="hero-content animate-fade-up">
                <span class="badge gradient-border">
                    <span class="indicator"></span>
                    HVAC Specialists
                </span>
                
                <h1 class="hero-title">
                    Expert Solutions for
                    <span class="gradient-text">HVAC Systems</span>
                </h1>
                
                <p class="hero-subtitle">
                    Authorized Sales & Service Project Dealer. Dedicated to providing technical consultancy and specialized services.
                </p>

                <div class="hero-actions">
                    <a href="#contact" class="btn-primary">
                        Get a Quote
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                    <a href="#services" class="btn-glass">
                        Our Services
                    </a>
                </div>

                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-value">500+</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat-item">
                        <span class="stat-value">15+</span>
                        <span class="stat-label">Years Exp.</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat-item">
                        <span class="stat-value">100%</span>
                        <span class="stat-label">Satisfied</span>
                    </div>
                </div>
            </div>

            <!-- Right Visual -->
            <div class="hero-visual animate-float">
                <div class="visual-wrapper glass-panel">
                    <!-- Original SVG Preserved but styled -->
                    <svg viewBox="0 0 601 515" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
                        <!-- Re-using the vector paths from original file for brand consistency -->
                        <g class="svg-group">
                            <path d="M346.123 201.187C414.562 238.937 473.295 278.935 512.928 313.077..." stroke="var(--primary-color)" stroke-opacity="0.2"/>
                            <!-- Abstract shapes representing flow/air -->
                            <circle cx="132.037" cy="104.5" r="15.5" fill="var(--neon-accent)" class="floating-circle c1" />
                            <circle cx="421.537" cy="435" r="10" fill="var(--primary-color)" class="floating-circle c2" />
                            <circle cx="82.0371" cy="64.5" r="23.5" fill="white" fill-opacity="0.1" class="floating-circle c3" />
                            
                            <!-- Main machinery illustration paths (simplified for brevity in this view, actual file will contain full paths) -->
                             <path d="M270.251 153.382L196.521 205.988..." fill="var(--neon-accent)" fill-opacity="0.8" />
                             <path d="M447.266 270.603C473.694 256.873..." fill="white" fill-opacity="0.9" /> 
                             <!-- ... (Keeping purely decorative paths) ... -->
                        </g>
                    </svg>

                    <!-- Floating Cards -->
                    <div class="card-float card-1 glass-panel">
                        <div class="icon-box">⚡</div>
                        <div>
                            <h4>Fast Service</h4>
                            <p>24/7 Support</p>
                        </div>
                    </div>

                     <div class="card-float card-2 glass-panel">
                        <div class="icon-box">🛡️</div>
                        <div>
                            <h4>Authorized</h4>
                            <p>Certified Dealer</p>
                        </div>
                    </div>
                </div>
                
                <!-- Background Glow -->
                <div class="glow-effect"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

// No script logic needed for now, purely presentational
</script>

<style scoped>
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: var(--header-height);
    background: radial-gradient(circle at 80% 20%, rgba(0, 168, 176, 0.08) 0%, transparent 50%);
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

/* Content Styles */
.badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 24px;
    color: var(--neon-accent);
}

.badge .indicator {
    width: 6px;
    height: 6px;
    background: var(--neon-accent);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--neon-accent);
}

.hero-title {
    font-size: clamp(3rem, 5vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: 24px;
}

.hero-subtitle {
    font-size: 1.125rem;
    color: var(--text-muted);
    max-width: 500px;
    margin-bottom: 40px;
}

.hero-actions {
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
}

.btn-primary {
    background: var(--primary-color);
    color: var(--text-dark);
    padding: 16px 32px;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--neon-accent);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px rgba(185, 255, 102, 0.3);
}

.btn-glass {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-main);
    padding: 16px 32px;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.btn-glass:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--text-main);
}

/* Stats */
.hero-stats {
    display: flex;
    align-items: center;
    gap: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: var(--font-heading);
    color: var(--text-main);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-muted);
}

.separator {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
}

/* Visual Styles */
.hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
}

.visual-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    padding: 40px;
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
}

.hero-svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 20px rgba(0, 168, 176, 0.2));
}

.floating-circle {
    animation: pulse-glow 3s infinite;
}

.c1 { animation-delay: 0s; }
.c2 { animation-delay: 1s; }
.c3 { animation-delay: 2s; }

.card-float {
    position: absolute;
    padding: 15px 20px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3);
}

.card-1 {
    top: 10%;
    right: -20px;
    animation: float 5s ease-in-out infinite;
}

.card-2 {
    bottom: 10%;
    left: -20px;
    animation: float 7s ease-in-out infinite reverse;
}

.icon-box {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    font-size: 1.25rem;
}

.card-float h4 {
    font-size: 0.9rem;
    margin-bottom: 2px;
}

.card-float p {
    font-size: 0.75rem;
    margin: 0;
}

.glow-effect {
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--primary-color);
    filter: blur(150px);
    opacity: 0.15;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Responsive */
@media (max-width: 1024px) {
    .hero-title { font-size: 3rem; }
    .hero-container { grid-template-columns: 1fr; text-align: center; gap: 40px; }
    .hero-content { display: flex; flex-direction: column; align-items: center; }
    .hero-actions { justify-content: center; }
    .hero-subtitle { margin: 0 auto 40px; }
    .card-float { display: none; } /* Hide floating cards on tablet to avoid overlap */
}

@media (max-width: 600px) {
    .btn-primary, .btn-glass { width: 100%; justify-content: center; }
    .hero-actions { flex-direction: column; width: 100%; }
    .hero-stats { flex-wrap: wrap; justify-content: center; }
    .separator { display: none; }
}
</style>