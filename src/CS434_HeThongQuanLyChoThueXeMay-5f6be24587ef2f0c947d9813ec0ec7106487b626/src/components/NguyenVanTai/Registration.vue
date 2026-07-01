<template>
    <div>
        <!-- Hero Background Layer -->
        <div class="fixed inset-0 z-0 overflow-hidden">
            <div class="w-full h-full bg-cover bg-center scale-105 filter blur-sm" data-alt="A high-end cinematic shot of a sleek modern superbike parked in a minimalist, dimly lit architectural space. The lighting is soft and atmospheric, highlighting the carbon fiber details and the deep blue metallic finish of the motorcycle. The background is softly blurred to create depth, maintaining a premium mobility aesthetic with cool tones and high-contrast shadows." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC06mlnCvFv_Vt-92anLhe3r0OhUC63WJWrboRVqcvHxG-5KYQYBtwjzOR38d0qKMj45_UseR9JHvzTUQhI0eFEZILG8GGuZ4fBuoyHwTa8CF2TBPVkwH20ipfx8C9acuJULMBNrLXb7RBoBfmqCKTjXzP994qIVbj6LRjB6lsQEysXuWWNgx08755W6W3acLc1HQDCdJjq_xlZ3uNOUpBiPTn1N2KdWVfnGPWRzuL4CYvauwR_N3POL-PnEfbli373PkzKHAtRm4EF')">
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-surface/40 via-surface/10 to-on-background/20 mix-blend-multiply">
            </div>
        </div>
        <!-- Registration Shell -->
        <main class="relative z-10 w-full max-w-[640px]">
            <div class="glass-card rounded-[16px] shadow-2xl p-lg sm:p-xl flex flex-col gap-xl">
                <!-- Header section -->
                <div class="text-center space-y-sm">
                    <div class="inline-flex items-center justify-center gap-sm mb-md">
                        <div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary">
                            <span class="material-symbols-outlined text-[24px]">motorcycle</span>
                        </div>
                        <span class="text-title-lg font-title-lg font-extrabold text-primary tracking-tight">MotoRent Pro</span>
                    </div>
                    <h1 class="text-headline-lg font-headline-lg text-on-surface">Tạo tài khoản mới</h1>
                    <p class="text-on-surface-variant font-body-md">Trở thành đối tác và quản lý đội xe của bạn chuyên nghiệp hơn.</p>
                </div>
                <!-- Form section -->
                <form class="grid grid-cols-1 md:grid-cols-2 gap-lg" onsubmit="event.preventDefault();">
                    <!-- Full Name -->
                    <div class="flex flex-col gap-xs">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Họ tên</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="Nguyễn Văn A" type="text"/>
                        </div>
                    </div>
                    <!-- Email -->
                    <div class="flex flex-col gap-xs">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Email</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="example@gmail.com" type="email"/>
                        </div>
                    </div>
                    <!-- Phone Number -->
                    <div class="flex flex-col gap-xs">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Số điện thoại</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">phone</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="0901 234 567" type="tel"/>
                        </div>
                    </div>
                    <!-- ID Number (CCCD) -->
                    <div class="flex flex-col gap-xs">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Số CCCD</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">badge</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="12 chữ số" type="text"/>
                        </div>
                    </div>
                    <!-- Address (Full span) -->
                    <div class="flex flex-col gap-xs md:col-span-2">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Địa chỉ</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">location_on</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="Số nhà, đường, phường/xã, quận/huyện..." type="text"/>
                        </div>
                    </div>
                    <!-- Username -->
                    <div class="flex flex-col gap-xs md:col-span-2">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Tên đăng nhập</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">account_circle</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="username123" type="text"/>
                        </div>
                    </div>
                    <!-- Password -->
                    <div class="flex flex-col gap-xs">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Mật khẩu</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="••••••••" type="password"/>
                        </div>
                    </div>
                    <!-- Confirm Password -->
                    <div class="flex flex-col gap-xs">
                        <label class="text-label-sm font-label-sm text-on-surface-variant px-1">Nhập lại mật khẩu</label>
                        <div class="relative group input-focus-ring rounded-[12px] transition-all">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock_reset</span>
                            <input class="w-full h-[48px] pl-11 pr-md bg-surface-container-lowest border border-outline-variant rounded-[12px] text-on-surface font-body-md focus:border-primary focus:ring-0 transition-all" placeholder="••••••••" type="password"/>
                        </div>
                    </div>
                    <!-- Action Button -->
                    <div class="md:col-span-2 mt-md">
                        <button class="w-full h-[48px] bg-primary-container text-on-primary font-label-md rounded-[12px] shadow-lg shadow-primary-container/20 hover:bg-primary transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-sm">
                            Đăng ký
                            <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                </form>
                <!-- Footer Links -->
                <div class="text-center">
                    <p class="text-on-surface-variant text-body-md">
                        Đã có tài khoản?
                        <a class="text-primary font-bold hover:underline ml-1" href="#">Đăng nhập</a>
                    </p>
                </div>
                <!-- Terms -->
                <div class="text-center mt-md">
                    <p class="text-outline text-label-sm">
                        Bằng việc đăng ký, bạn đồng ý với <a class="underline" href="#">Điều khoản dịch vụ</a> và <a class="underline" href="#">Chính sách bảo mật</a> của chúng tôi.
                    </p>
                </div>
            </div>
        </main>
        <!-- Floating Atmosphere Elements -->
        <div class="fixed top-xl right-xl z-20">
            <div class="flex items-center gap-sm bg-white/20 backdrop-blur-md px-md py-sm rounded-full border border-white/30 text-white font-label-md">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse">
                </span>
                Hệ thống trực tuyến
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Registration',
    mounted() {
        // Micro-interaction for input group focus
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('shadow-md');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('shadow-md');
            });
        });
        
        // Simple form animation on load
        window.addEventListener('load', () => {
            const card = document.querySelector('.glass-card');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });
    }
}
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.4);
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.input-focus-ring:focus-within {
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
}
</style>
