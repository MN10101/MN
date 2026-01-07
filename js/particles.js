/**
 * Author: Mahmoud Najmeh
 * Date: 07/01/2026
 * ADVANCED PARTICLE SYSTEM
 * Mahcine Name: particles.js
 * Description: Enhanced particle system with adaptive configuration and performance optimizations.
 * Features:
 * - Adaptive particle count based on screen size
 * - Performance monitoring
 * - Memory leak prevention
 * - Dynamic configuration based on device
 * - Error handling & fallbacks
 */

class ParticleSystemManager {
    constructor() {
        this.particlesInstance = null;
        this.config = null;
        this.isMobile = this.detectMobile();
        this.isHighDPI = window.devicePixelRatio > 1;
        
        this.init();
    }

    detectMobile() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    getAdaptiveConfig() {
        const baseConfig = {
            particles: {
                number: {
                    value: this.isMobile ? 40 : 80,
                    density: {
                        enable: true,
                        value_area: this.isHighDPI ? 1000 : 800
                    }
                },
                color: {
                    value: ['#3b82f6', '#6db33f', '#3776ab', '#8b5cf6', '#10b981']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 20,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3b82f6',
                    opacity: 0.4,
                    width: 1,
                    shadow: {
                        enable: false,
                        blur: 5,
                        color: '#000000'
                    }
                },
                move: {
                    enable: true,
                    speed: this.isMobile ? 1.5 : 2.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: {
                        enable: true,
                        mode: ['repulse', 'bubble']
                    },
                    onclick: {
                        enable: true,
                        mode: ['push', 'remove']
                    },
                    onresize: {
                        enable: true,
                        density_auto: true,
                        density_area: 800
                    }
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 6
                    },
                    remove: {
                        particles_nb: 3
                    },
                    trail: {
                        delay: 0.005,
                        quantity: 1
                    }
                },
                detect_on: 'canvas'
            },
            retina_detect: true,
            fps_limit: 60,
            pause_on_blur: true,
            background: {
                color: 'transparent'
            }
        };

        // Performance optimization for mobile
        if (this.isMobile) {
            baseConfig.particles.number.value = 30;
            baseConfig.particles.move.speed = 1;
            baseConfig.fps_limit = 30;
            baseConfig.particles.line_linked.distance = 100;
        }

        // Visuals for desktop
        if (!this.isMobile && this.isHighDPI) {
            baseConfig.particles.number.value = 120;
            baseConfig.particles.opacity.value = 0.8;
            baseConfig.particles.line_linked.width = 1.5;
        }

        return baseConfig;
    }

    init() {
        try {
            if (typeof particlesJS === 'undefined') {
                console.warn('Particles.js not loaded. Using fallback animation.');
                this.createFallbackAnimation();
                return;
            }

            // Check if canvas container exists
            const container = document.getElementById('particles-js');
            if (!container) {
                console.error('Particles container not found');
                return;
            }

            // Set adaptive configuration
            this.config = this.getAdaptiveConfig();
            
            // Initialize particles
            this.particlesInstance = particlesJS('particles-js', this.config);
            
            // Performance monitoring
            this.setupPerformanceMonitoring();
            
            // Handle responsive behavior
            this.setupResponsiveBehavior();
            
            // Prevent memory leaks
            this.setupCleanupListeners();
            
            console.log('🎯 Particle System initialized with advanced configuration');
            console.log(`📱 Device: ${this.isMobile ? 'Mobile' : 'Desktop'}`);
            console.log(`🖥️ DPI: ${this.isHighDPI ? 'High' : 'Normal'}`);
            console.log(`⚡ Particles: ${this.config.particles.number.value}`);
            
        } catch (error) {
            console.error('Failed to initialize particle system:', error);
            this.createFallbackAnimation();
        }
    }

    setupPerformanceMonitoring() {
        // Monitor FPS in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            let frameCount = 0;
            let lastTime = performance.now();
            let hasWarnedLowFPS = false; 

            const monitorFPS = () => {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    if (fps < 30) {
                        if (!hasWarnedLowFPS) {
                            console.warn(`⚠️ Low FPS detected: ${fps}. Consider reducing particle count.`);
                            hasWarnedLowFPS = true;
                        }
                    } else if (fps >= 40) {
                        // Reset warning only if performance recovers significantly
                        hasWarnedLowFPS = false;
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(monitorFPS);
            };
            
            requestAnimationFrame(monitorFPS);
        }
    }

    setupResponsiveBehavior() {
        let resizeTimeout;
        
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (this.particlesInstance && this.particlesInstance.pJS && this.particlesInstance.pJS.fn.vendors.destroy) {
                    // Destroy and recreate with new config
                    this.particlesInstance.pJS.fn.vendors.destroy();
                    this.config = this.getAdaptiveConfig();
                    this.particlesInstance = particlesJS('particles-js', this.config);
                    console.log('🔄 Particle system reconfigured for new screen size');
                }
            }, 250);
        };

        window.addEventListener('resize', handleResize);
        this.resizeHandler = handleResize;
    }

    setupCleanupListeners() {
        // Handle page visibility
        const handleVisibilityChange = () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // Store for cleanup
        this.visibilityHandler = handleVisibilityChange;
    }

    createFallbackAnimation() {
        const container = document.getElementById('particles-js');
        if (!container) return;
        
        // Simple CSS-based fallback
        container.style.background = `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(107, 114, 128, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
        `;
        container.style.animation = 'gradientShift 15s ease infinite';
        
        // CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
        `;
        document.head.appendChild(style);
    }

    pause() {
        if (this.particlesInstance && this.particlesInstance.pJS && this.particlesInstance.pJS.fn.pauseAnimation) {
            this.particlesInstance.pJS.fn.pauseAnimation();
        }
    }

    resume() {
        if (this.particlesInstance && this.particlesInstance.pJS && this.particlesInstance.pJS.fn.resumeAnimation) {
            this.particlesInstance.pJS.fn.resumeAnimation();
        }
    }

    destroy() {
        // Clean up event listeners
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
        if (this.visibilityHandler) {
            document.removeEventListener('visibilitychange', this.visibilityHandler);
        }
        
        // Destroy particles instance
        if (this.particlesInstance && this.particlesInstance.pJS && this.particlesInstance.pJS.fn.vendors.destroy) {
            this.particlesInstance.pJS.fn.vendors.destroy();
            this.particlesInstance = null;
        }
        
        console.log('🧹 Particle system cleaned up');
    }
}

// Initialize particle system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.particleSystem = new ParticleSystemManager();
});

