<template>
    <div>
        <!-- Top Navigation Anchor (Shared Component) -->
        <main class="pt-24 pb-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row gap-lg">
            <!-- Sidebar Navigation -->
            <!-- Main Content Area -->
            <section class="flex-grow space-y-lg">

                <!-- User Details Form (Bento Grid Style) -->
                <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-xl md:p-2xl">
                    <div class="flex items-center justify-between mb-xl">
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Thông tin cá nhân</h2>
                        <span class="bg-secondary-container text-on-secondary-container px-md py-xs rounded-full font-label-sm text-label-sm">Hồ sơ đã xác minh</span>
                    </div>

                    <!-- Status Alerts -->
                    <div v-if="errorMessage" class="mb-lg p-md bg-red-100 text-red-700 rounded-xl flex items-center gap-sm text-body-md">
                        <span class="material-symbols-outlined">error</span>
                        <span>{{ errorMessage }}</span>
                    </div>
                    <div v-if="successMessage" class="mb-lg p-md bg-green-100 text-green-700 rounded-xl flex items-center gap-sm text-body-md">
                        <span class="material-symbols-outlined">check_circle</span>
                        <span>{{ successMessage }}</span>
                    </div>

                    <form class="grid grid-cols-1 md:grid-cols-2 gap-lg" @submit.prevent="handleSave">
                        <!-- Full Name -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Họ và tên</label>
                            <input v-model="form.ho_ten" required class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="text"/>
                        </div>
                        <!-- Email -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Địa chỉ email</label>
                            <input v-model="form.email" required class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="email"/>
                        </div>
                        <!-- Phone -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Số điện thoại</label>
                            <input v-model="form.so_dien_thoai" required class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="tel"/>
                        </div>
                        <!-- ID/Passport -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Số CCCD</label>
                            <input v-model="form.cccd" required class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="text"/>
                        </div>
                        <!-- Address -->
                        <div class="md:col-span-2 space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Địa chỉ</label>
                            <input v-model="form.dia_chi" required class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="text"/>
                        </div>
                        <!-- Action Buttons -->
                        <div class="md:col-span-2 flex flex-col md:flex-row gap-md pt-xl">
                            <button :disabled="loading" class="flex-grow bg-primary hover:bg-surface-tint text-on-primary font-bold h-12 rounded-xl transition-all shadow-md active:scale-95 font-label-md text-label-md disabled:opacity-50" type="submit">
                                {{ loading ? 'Đang lưu...' : 'Lưu thay đổi' }}
                            </button>
                            <button class="flex-grow bg-surface-container-low hover:bg-surface-container-high text-primary border border-primary/20 font-semibold h-12 rounded-xl transition-all active:scale-95 font-label-md text-label-md" type="button" @click="$router.push('/doi-mat-khau')">
                                Đổi mật khẩu
                            </button>
                        </div>
                    </form>
                </div>

            </section>
        </main>

    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'Profile',
    data() {
        return {
            form: {
                ho_ten: '',
                email: '',
                so_dien_thoai: '',
                cccd: '',
                dia_chi: '',
            },
            loading: false,
            errorMessage: '',
            successMessage: '',
        };
    },
    async mounted() {
        await this.loadProfile();

        // Micro-interactions for input focus effects
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('scale-[1.01]');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('scale-[1.01]');
            });
        });
    },
    methods: {
        async loadProfile() {
            try {
                const response = await api.get('/auth/profile');
                if (response.user && response.user.khach_hang) {
                    const kh = response.user.khach_hang;
                    this.form.ho_ten = kh.ho_ten || '';
                    this.form.email = kh.email || '';
                    this.form.so_dien_thoai = kh.so_dien_thoai || '';
                    this.form.cccd = kh.cccd || '';
                    this.form.dia_chi = kh.dia_chi || '';
                }
            } catch (error) {
                this.errorMessage = 'Không thể tải thông tin hồ sơ.';
            }
        },
        async handleSave() {
            this.loading = true;
            this.errorMessage = '';
            this.successMessage = '';
            try {
                await api.put('/khach-hang/profile', this.form);
                this.successMessage = 'Cập nhật thông tin hồ sơ thành công!';
            } catch (error) {
                this.errorMessage = error.message || 'Lỗi khi cập nhật hồ sơ.';
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-panel {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.sidebar-item-active {
    @apply bg-primary-container/10 text-primary font-bold;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.card-lift {
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
}
.card-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
</style>
