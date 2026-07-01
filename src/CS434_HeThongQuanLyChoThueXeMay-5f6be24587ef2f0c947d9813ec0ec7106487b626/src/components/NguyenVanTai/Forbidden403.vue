<template>
    <div>
        <div class="fixed inset-0 pointer-events-none opacity-40">
            <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full">
            </div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full">
            </div>
        </div>
        <main class="relative z-10 flex flex-col items-center justify-center min-h-screen px-margin-mobile md:px-margin-desktop text-center">
            <div class="max-w-2xl w-full flex flex-col items-center">
                <div class="relative mb-xl group">
                    <div class="absolute inset-0 bg-primary/20 blur-3xl scale-75 group-hover:scale-100 transition-transform duration-700 rounded-full">
                    </div>
                    <img class="w-64 h-64 md:w-80 md:h-80 relative z-20 drop-shadow-2xl animate-float" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMVD9JzBKJJiguey9JEFz0cd2QzPThw5hqajfxVmYB5dEEeZQILc4I3XR3Lf17NDw_xUSSUzdljptS2MIRBNjH_0YMP-GglxWzp4SQuGKo2Q70nWwPhsEXjvukJJR4MukxE7nl-ZTjaBygDFj2HUbG0BXqgXHLMJBcBv6nixqxXvOl2x-4vcUbVsIIFJOl_kVdXSKXInxyDLIaQgsCOTH3JJu64jVKYLXjli9QQ8iGRpMFsgy4zE3af-dq6kWVhOPrM5_SjyvhRkdE"/>
                </div>
                <div class="space-y-md animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 class="font-display-lg text-display-lg md:text-display-lg text-primary tracking-tight">
                        403 - Truy cập bị từ chối
                    </h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
                        Bạn không có quyền truy cập vào trang này. Vui lòng liên hệ quản trị viên hoặc quay lại Dashboard để tiếp tục.
                    </p>
                    <div class="pt-lg flex flex-col sm:flex-row gap-md justify-center items-center">
                        <a class="group flex items-center justify-center gap-sm bg-primary text-on-primary font-label-md text-label-md px-2xl h-12 rounded-xl btn-shadow btn-hover transition-all duration-200 ease-in-out" href="/dashboard">
                            <span class="material-symbols-outlined">dashboard</span>
                            Quay về Dashboard
                        </a>
                        <button class="flex items-center justify-center gap-sm border border-outline text-on-surface-variant font-label-md text-label-md px-2xl h-12 rounded-xl hover:bg-surface-container-low transition-all duration-200 ease-in-out">
                            <span class="material-symbols-outlined">contact_support</span>
                            Liên hệ hỗ trợ
                        </button>
                    </div>
                </div>
                <div class="mt-3xl flex items-center gap-md opacity-60">
                    <div class="h-[1px] w-8 bg-outline-variant">
                    </div>
                    <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">MotoStream Premium</span>
                    <div class="h-[1px] w-8 bg-outline-variant">
                    </div>
                </div>
            </div>
        </main>
        <footer class="fixed bottom-0 left-0 w-full px-margin-desktop py-lg flex justify-center items-center opacity-60">
            <p class="font-label-sm text-label-sm text-on-surface-variant">
                © 2026 MotoStream Mobility. All rights reserved.
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Forbidden403',
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            const floatElement = document.querySelector('.animate-float');
            if (floatElement) {
                let angle = 0;
                function animate() {
                    angle += 0.02;
                    const yOffset = Math.sin(angle) * 15;
                    floatElement.style.transform = `translateY(${yOffset}px)`;
                    requestAnimationFrame(animate);
                }
                animate();
            }
        
            document.querySelectorAll('button, a').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    const ripple = document.createElement('div');
                    ripple.className = 'absolute inset-0 bg-white/10 pointer-events-none opacity-0 transition-opacity duration-300';
                    el.appendChild(ripple);
                    setTimeout(() => ripple.classList.remove('opacity-0'), 10);
                });
                el.addEventListener('mouseleave', () => {
                    const ripple = el.querySelector('div');
                    if (ripple) ripple.remove();
                });
            });
        });
    }
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-effect {
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.8);
}
.btn-shadow {
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.05);
}
.btn-hover:hover {
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
    transform: translateY(-2px);
}
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes slide-in-from-bottom-8 { from { transform: translateY(32px); } to { transform: translateY(0); } }

.animate-in {
    animation-duration: 0.7s;
    animation-fill-mode: both;
}
.fade-in { animation-name: fade-in; }
.slide-in-from-bottom-8 { animation-name: slide-in-from-bottom-8; }

.animate-float {
    transition: transform 0.1s linear;
}
</style>
