<template>
    <div>
        <main class="flex flex-col md:flex-row min-h-screen w-full">
            <!-- Left Section: Immersive Visual -->
            <section class="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden bg-inverse-surface">
                <!-- Animated Shader Placeholder -->
                <!-- Hero Image -->
                <img alt="Premium Motorbike" class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzOKrCG7W1HpJ4x8z44jQ9zaY7F-5LBGTNDxbch4uYNHgTYIXN7YxQD-QCbPushZJhq7Sy_lNrHTXO5qZQlI5PgKOue8-N_FKvoxKhCEYPbNcuDJddl4dJ0BcOVeLkfueOgsI1zoS8l9rnRunucUeICc_nSfRyjIkv2ijjL2dx4x8ck1-6hNEeTwcbS-CfGI3CMVVwN_tMGJ4_0tHc-48Sn8yANy7RmXxgGEsJhmZQi72gSGFjTheCnmDeW4Fgs4DvwE7xWlnvJ7P3"/>
                <!-- Overlay Content -->
                <div class="relative z-10 flex flex-col justify-between p-margin-desktop h-full w-full bg-gradient-to-t from-inverse-surface via-transparent to-transparent">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                            <span class="material-symbols-outlined text-on-primary text-3xl">motorcycle</span>
                        </div>
                        <span class="text-white font-title-lg text-title-lg tracking-tight">MotoRent <span class="font-black text-primary-fixed-dim">Pro</span>
                    </span>
                </div>
                <div class="max-w-md mb-xl">
                    <h1 class="text-white font-display-lg text-display-lg mb-md leading-tight">
                        Experience the <br/>
                        <span class="text-primary-fixed-dim">Ultimate Freedom.</span>
                    </h1>
                    <p class="text-white/70 text-body-lg font-body-lg">
                        Manage your fleet with the precision of a high-performance engine. Premium tools for the next generation of rental management.
                    </p>
                </div>
                <div class="flex gap-gutter items-center">
                    <div class="flex -space-x-4">
                        <img alt="User" class="w-10 h-10 rounded-full border-2 border-inverse-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmyxVhXMRiIuHt0H8Wd5yHweds0-kItD2jXWFHVsbjA2J7eH4sVUHuAKE-UaaaIWTEQvmLcNSgj8f9rDdhHWiXEB3gjs6hCXCwBFzn3MtI8HdVYXrLbBxgiLTs6Q2PoWv0RLKzZ-FnWqVkHuguZYGA8Z-hi5o-p-C4jQnvEYOlB7Dqi8eHv7PMtLA6tg0clFdFjs5UKUIpivuCDQ_TvvinYD2Daf9AKneeHOajb6oPG2A7DoNTW_m5sainQ5lsEHkA8Oj6In2a7WBU"/>
                        <img alt="User" class="w-10 h-10 rounded-full border-2 border-inverse-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAGDCZqwRh8waSzoehHW-Wckayfk17wf_jKWg1Nzzc5PlK1mJbmbg-s5qr67Fj2ZoeA-0Xcamb9GJEgimpMsKtPt2r-PUJzHT2WmIaJP3JxP1yTXRQdeEl0Hkidyd9PrlgF1V_j101dyyfCQiuLnwa2fZY8TtFGZBU0MDmRVJsPJcJEbpIJ_Zl2M-RBJ-51LajqoaL4SI7VwzjhQILwBo1OSv5NQMzIcf50Z0h0Z5PJzbyP1Z2PI9OnhgrE7xPiFlp_adnToL60W13"/>
                        <img alt="User" class="w-10 h-10 rounded-full border-2 border-inverse-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_c33GhXrCdA3gvmAE-fme9_D4GcH5-L_9WxsEfNIqvsshIPGIyBobXPUt2bZS2v1lm50IK2kBKig8ZOgHX_XzybN5ipp6jGXPRg4iALPbErnoLCK3-WjFfmT8COy6lxw_YQRCoyk_oVoEXTWZo8L1FXRGRJ6xWOBtVy6JYGsknxaGzICXrPDa_bbnv3uta_VdFyiXTzeoi_oHFOMS_-szU3Tk5z8wRA0cHW5v_mRFaDqx7N6qDJiG30nOx3HA8T_XKkC1Ad33hhic"/>
                    </div>
                    <p class="text-white/60 text-label-sm font-label-sm">
                        Trusted by 500+ Fleet Managers globally
                    </p>
                </div>
            </div>
        </section>
        <!-- Right Section: Login Form -->
        <section class="flex-1 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface relative">
            <!-- Subtle background decorative element -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -mr-32 -mt-32">
            </div>
            <div class="w-full max-w-md z-10">
                <!-- Mobile Logo -->
                <div class="md:hidden flex items-center gap-2 mb-xl">
                    <span class="material-symbols-outlined text-primary text-3xl">motorcycle</span>
                    <span class="font-bold text-title-lg text-primary">MotoRent Pro</span>
                </div>
                <div class="mb-xl">
                    <h2 class="text-on-surface font-headline-lg text-headline-lg mb-xs">Chào mừng trở lại</h2>
                    <p class="text-on-surface-variant text-body-md font-body-md">Đăng nhập để quản lý đội xe của bạn</p>
                </div>
                <form class="space-y-lg" onsubmit="return false;">
                    <!-- Username/Email Field -->
                    <div class="space-y-unit">
                        <label class="block text-label-md font-label-md text-on-surface-variant ml-1" for="email">Email hoặc Tên đăng nhập</label>
                        <div class="relative group">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person</span>
                            <input class="w-full h-12 pl-[48px] pr-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-body-md font-body-md text-on-surface placeholder:text-outline/60" id="email" placeholder="manager@motorentpro.com" type="email"/>
                        </div>
                    </div>
                    <!-- Password Field -->
                    <div class="space-y-unit">
                        <div class="flex justify-between items-center ml-1">
                            <label class="block text-label-md font-label-md text-on-surface-variant" for="password">Mật khẩu</label>
                            <a class="text-label-sm font-label-sm text-primary hover:underline transition-all" href="#">Quên mật khẩu?</a>
                        </div>
                        <div class="relative group">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                            <input class="w-full h-12 pl-[48px] pr-[48px] bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-body-md font-body-md text-on-surface placeholder:text-outline/60" id="password" placeholder="••••••••••••" type="password"/>
                            <button class="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                                <span class="material-symbols-outlined">visibility</span>
                            </button>
                        </div>
                    </div>
                    <!-- Remember Me -->
                    <div class="flex items-center gap-sm">
                        <input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" id="remember" type="checkbox"/>
                        <label class="text-body-md font-body-md text-on-surface-variant cursor-pointer select-none" for="remember">Duy trì đăng nhập</label>
                    </div>
                    <!-- CTA Button -->
                    <button class="w-full h-12 bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-sm shadow-md btn-hover-effect" type="submit">
                        Đăng nhập
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <!-- Social Login Separator -->
                    <div class="relative flex items-center py-md">
                        <div class="flex-grow border-t border-outline-variant">
                        </div>
                        <span class="flex-shrink mx-md text-label-sm font-label-sm text-outline">hoặc đăng nhập bằng</span>
                        <div class="flex-grow border-t border-outline-variant">
                        </div>
                    </div>
                    <!-- Social Buttons -->
                    <div class="grid grid-cols-2 gap-md">
                        <button class="flex items-center justify-center gap-sm h-12 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors text-label-md font-label-md">
                            <svg class="w-5 h-5" viewbox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor">
                                </path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor">
                                </path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor">
                                </path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor">
                                </path>
                            </svg>
                            Google
                        </button>
                        <button class="flex items-center justify-center gap-sm h-12 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors text-label-md font-label-md">
                            <svg class="w-5 h-5" viewbox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor">
                                </path>
                            </svg>
                            Facebook
                        </button>
                    </div>
                </form>
                <!-- Footer Link -->
                <p class="mt-2xl text-center text-body-md font-body-md text-on-surface-variant">
                    Chưa có tài khoản?
                    <a class="text-primary font-bold hover:underline transition-all ml-unit" href="#">Đăng ký ngay</a>
                </p>
                <!-- System Info (Glassmorphic Toast style) -->
                <div class="mt-3xl p-md rounded-2xl glass-card flex items-start gap-md border border-outline-variant/30">
                    <div class="p-xs bg-primary/10 rounded-lg text-primary">
                        <span class="material-symbols-outlined text-lg">info</span>
                    </div>
                    <div>
                        <p class="text-label-sm font-label-sm text-on-surface font-bold">Quản lý Đội xe 2026</p>
                        <p class="text-[11px] text-on-surface-variant">Hệ thống đang hoạt động ổn định. Phiên bản v4.2.0</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- Simple footer for mobile (hidden on md+) -->
    <footer class="md:hidden w-full py-xl px-margin-mobile border-t border-outline-variant bg-surface-container-lowest">
        <div class="flex flex-col items-center gap-md">
            <p class="text-label-sm font-label-sm text-on-surface-variant">© 2026 MotoRent Pro. All rights reserved.</p>
            <div class="flex gap-lg">
                <a class="text-label-sm font-label-sm text-outline hover:text-primary transition-colors" href="#">Điều khoản</a>
                <a class="text-label-sm font-label-sm text-outline hover:text-primary transition-colors" href="#">Bảo mật</a>
            </div>
        </div>
    </footer>
    <!-- Scripts for interactivity (minimal) -->
    </div>
</template>

<script>
export default {
    name: 'Login',
    mounted() {
        // Toggle password visibility
        const togglePassword = (btn) => {
            const input = btn.previousElementSibling;
            const icon = btn.querySelector('span');
            if (input.type === 'password') {
                input.type = 'text';
                icon.textContent = 'visibility_off';
            } else {
                input.type = 'password';
                icon.textContent = 'visibility';
            }
        };
        
        document.querySelectorAll('button[type="button"]').forEach(btn => {
            if (btn.querySelector('.material-symbols-outlined')?.textContent === 'visibility') {
                btn.addEventListener('click', () => togglePassword(btn));
            }
        });
    }
}
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(229, 231, 235, 0.5);
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}

.btn-hover-effect {
    transition: all 200ms ease-in-out;
}
.btn-hover-effect:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 74, 198, 0.2);
}
.btn-hover-effect:active {
    transform: scale(0.98);
}

/* Hide scrollbar but keep functionality */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
