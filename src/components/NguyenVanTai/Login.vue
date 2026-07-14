<template>
    <div>
        <main class="flex flex-col md:flex-row min-h-screen w-full">
            <!-- Left Section: Immersive Visual -->
            <section class="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden bg-inverse-surface">
                <!-- Animated Shader Placeholder -->
                <!-- Hero Image -->
                <img alt="Xe máy cao cấp" class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzOKrCG7W1HpJ4x8z44jQ9zaY7F-5LBGTNDxbch4uYNHgTYIXN7YxQD-QCbPushZJhq7Sy_lNrHTXO5qZQlI5PgKOue8-N_FKvoxKhCEYPbNcuDJddl4dJ0BcOVeLkfueOgsI1zoS8l9rnRunucUeICc_nSfRyjIkv2ijjL2dx4x8ck1-6hNEeTwcbS-CfGI3CMVVwN_tMGJ4_0tHc-48Sn8yANy7RmXxgGEsJhmZQi72gSGFjTheCnmDeW4Fgs4DvwE7xWlnvJ7P3"/>
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
                        Trải nghiệm <br/>
                        <span class="text-primary-fixed-dim">Tự do tuyệt đối.</span>
                    </h1>
                    <p class="text-white/70 text-body-lg font-body-lg">
                        Quản lý đội xe với sự chính xác của một cỗ máy hiệu suất cao. Công cụ chuyên nghiệp cho thế hệ quản lý cho thuê xe tiếp theo.
                    </p>
                </div>

            </div>
        </section>
        <!-- Right Section: Login Form -->
        <section class="flex-1 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface relative overflow-hidden">
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
                <!-- Error Message Alert -->
                <div v-if="errorMessage" class="mb-lg p-md bg-red-100 text-red-700 rounded-xl flex items-center gap-sm text-body-md">
                    <span class="material-symbols-outlined">error</span>
                    <span>{{ errorMessage }}</span>
                </div>

                <form class="space-y-lg" @submit.prevent="handleLogin">
                    <!-- Username Field -->
                    <div class="space-y-unit">
                        <label class="block text-label-md font-label-md text-on-surface-variant ml-1" for="username">Tên đăng nhập</label>
                        <div class="relative group">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person</span>
                            <input v-model="email" required class="w-full h-12 pl-[48px] pr-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-body-md font-body-md text-on-surface placeholder:text-outline/60" id="username" placeholder="Nhập tên đăng nhập" type="text"/>
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
                            <input v-model="password" required class="w-full h-12 pl-[48px] pr-[48px] bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-body-md font-body-md text-on-surface placeholder:text-outline/60" id="password" placeholder="••••••••••••" type="password"/>
                            <button class="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button" @click="togglePasswordVisibility">
                                <span class="material-symbols-outlined">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                            </button>
                        </div>
                    </div>
                    <!-- Remember Me -->
                    <div class="flex items-center gap-sm">
                        <input v-model="rememberMe" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" id="remember" type="checkbox"/>
                        <label class="text-body-md font-body-md text-on-surface-variant cursor-pointer select-none" for="remember">Duy trì đăng nhập</label>
                    </div>
                    <!-- CTA Button -->
                    <button class="w-full h-12 bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-sm shadow-md btn-hover-effect disabled:opacity-50" type="submit" :disabled="loading">
                        <span v-if="loading">Đang đăng nhập...</span>
                        <span v-else class="flex items-center justify-center gap-sm">
                            Đăng nhập
                            <span class="material-symbols-outlined">arrow_forward</span>
                        </span>
                    </button>
                </form>
                <!-- Footer Link -->
                <p class="mt-2xl text-center text-body-md font-body-md text-on-surface-variant">
                    Chưa có tài khoản?
                    <router-link class="text-primary font-bold hover:underline transition-all ml-unit" to="/register">Đăng ký ngay</router-link>
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
            <p class="text-label-sm font-label-sm text-on-surface-variant">© 2026 MotoRent Pro. Bảo lưu mọi quyền.</p>
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
import { api } from '../../services/api';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            showPassword: false,
            rememberMe: false,
            loading: false,
            errorMessage: '',
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
            const input = document.getElementById('password');
            if (input) {
                input.type = this.showPassword ? 'text' : 'password';
            }
        },
        async handleLogin() {
            this.loading = true;
            this.errorMessage = '';
            try {
                const response = await api.post('/auth/login', {
                    ten_dang_nhap: this.email,
                    mat_khau: this.password,
                });
                
                api.setToken(response.access_token, this.rememberMe);
                api.setUser(response.user, this.rememberMe);
                
                if (response.vai_tro === 'QuanTriVien') {
                    this.$router.push('/admin/dashboard');
                } else {
                    this.$router.push('/');
                }
            } catch (error) {
                this.errorMessage = error.message || 'Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.';
            } finally {
                this.loading = false;
            }
        }
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
