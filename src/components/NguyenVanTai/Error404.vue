<template>
    <div>
        <!-- TopNavBar Implementation -->
        <!-- Note: This matches the "TopNavBar" JSON spec exactly -->
        <!-- Main Canvas: 404 Error Content -->
        <main class="min-h-screen flex flex-col items-center justify-center pt-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
            <!-- Hero Illustration Section -->
            <div class="relative w-full max-w-2xl flex justify-center mb-xl animate-fade-in">
                <!-- Decorative background blur -->
                <div class="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150 -z-10">
                </div>
                <!-- Placeholder for image-based asset (User specified image_34) -->
                <div class="relative w-full aspect-square md:aspect-video flex items-center justify-center">
                    <img class="max-w-full h-auto object-contain drop-shadow-2xl hover-lift transition-custom duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1bAD84Lrryp_CWIFiCPi19whvF3aNC89kYnh-YeeeSuBgK-13O28bqSGC6OIendImX8UXTq7AjLsRXvmh99HLSYlQ0QvULd8mWQVhMiLUVM7FMeeeHGOLM142vNvWbrZT5zaeb7AuPfmsdvM5ZXYlROHJDJ36l3TW_7_6lRX7zWl3k283B6MXltEr7xKGxTDXhk0fYDP-_ZsB1HuoGiTuTHKNKrNRuRDZ0nhVW6kPmn2PFETCpcD5TMJ-eGOEQdIsLtg9yqyrMNmq"/>
                </div>
            </div>
            <!-- Error Text Content -->
            <div class="text-center space-y-md max-w-lg mx-auto">
                <div class="space-y-sm">
                    <h1 class="font-display-lg text-display-lg md:text-display-lg text-primary tracking-tighter">404</h1>
                    <h2 class="font-headline-lg text-headline-lg text-on-surface font-extrabold">Không tìm thấy trang.</h2>
                </div>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                    Có vẻ như đường dẫn này không tồn tại hoặc đã bị gỡ bỏ.
                </p>
                <div class="pt-xl">
                    <a class="inline-flex items-center justify-center h-12 px-2xl bg-primary text-on-primary font-label-md text-label-md rounded-xl hover:bg-primary/90 hover-lift active:scale-95 transition-custom shadow-sm" href="/">
                        Quay về Trang chủ
                    </a>
                </div>
            </div>
            <!-- Decorative floating elements -->
            <div class="absolute top-1/4 left-10 md:left-24 opacity-10 pointer-events-none">
                <span class="material-symbols-outlined text-[120px] text-primary rotate-12">directions_bike</span>
            </div>
            <div class="absolute bottom-1/4 right-10 md:right-24 opacity-10 pointer-events-none">
                <span class="material-symbols-outlined text-[120px] text-primary -rotate-12">map</span>
            </div>
        </main>
        <!-- Footer Implementation -->
        <!-- Note: This matches the "Footer" JSON spec exactly -->
        <footer class="w-full py-xl px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/20">
            <div class="flex flex-col items-center md:items-start gap-xs mb-md md:mb-0">
                <span class="font-title-lg text-title-lg font-bold text-on-surface">MotoRent Pro</span>
                <p class="font-body-md text-body-md text-on-surface-variant">© 2026 MotoRent Pro. Bảo lưu mọi quyền.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-lg">
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Điều khoản dịch vụ</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Chính sách bảo mật</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Liên hệ hỗ trợ</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Error404',
    mounted() {
        // Subtle mouse parallax effect for the illustration
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            const illustration = document.querySelector('img[src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1bAD84Lrryp_CWIFiCPi19whvF3aNC89kYnh-YeeeSuBgK-13O28bqSGC6OIendImX8UXTq7AjLsRXvmh99HLSYlQ0QvULd8mWQVhMiLUVM7FMeeeHGOLM142vNvWbrZT5zaeb7AuPfmsdvM5ZXYlROHJDJ36l3TW_7_6lRX7zWl3k283B6MXltEr7xKGxTDXhk0fYDP-_ZsB1HuoGiTuTHKNKrNRuRDZ0nhVW6kPmn2PFETCpcD5TMJ-eGOEQdIsLtg9yqyrMNmq"]');
            if (illustration) {
                illustration.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        // Fade-in animation controller
        window.addEventListener('load', () => {
            const elements = document.querySelectorAll('.animate-fade-in');
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    }
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-effect {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.transition-custom {
    transition: all 200ms ease-in-out;
}
.hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
/* Utility animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Active navigation state determined by JSON (No active tab for 404 typically, but logic applied if needed) */
.nav-active {
    color: #004ac6;
    border-bottom: 2px solid #004ac6;
    padding-bottom: 4px;
}
</style>
