<template>
    <div>
        <!-- SideNavBar Anchor -->
        <!-- Main Content Area -->
        <main class="flex-1 flex flex-col min-w-0 overflow-y-auto">
            <!-- TopAppBar Anchor -->
            <!-- Screen Content: Change Password -->
            <section class="flex-1 flex items-center justify-center p-gutter md:p-3xl bg-surface-container-low relative">
                <!-- Background Decorative Element (Subtle Gradient) -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]">
                    </div>
                    <div class="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]">
                    </div>
                </div>
                <div class="w-full max-w-[560px] z-10 animate-fade-in">
                    <!-- Back Button -->
                    <button class="mb-gutter flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md group" onclick="history.back()">
                        <span class="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Quay lại
                    </button>
                    <!-- Password Change Card -->
                    <div class="glass-card rounded-xl p-gutter md:p-xl shadow-sm border border-outline-variant/30">
                        <div class="mb-xl">
                            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Đổi mật khẩu</h2>
                            <p class="font-body-md text-body-md text-on-surface-variant">Vui lòng nhập mật khẩu hiện tại và mật khẩu mới để cập nhật bảo mật.</p>
                        </div>
                        <form class="space-y-lg" onsubmit="event.preventDefault();">
                            <!-- Current Password -->
                            <div class="space-y-xs">
                                <label class="font-label-sm text-label-sm text-on-surface-variant px-xs">Mật khẩu cũ</label>
                                <div class="relative group">
                                    <input class="w-full h-12 px-md pr-xl rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body-md text-body-md outline-none" id="current-password" placeholder="••••••••" type="password"/>
                                    <button class="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" onclick="togglePassword('current-password')" type="button">
                                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </div>
                            <!-- New Password -->
                            <div class="space-y-xs">
                                <label class="font-label-sm text-label-sm text-on-surface-variant px-xs">Mật khẩu mới</label>
                                <div class="relative group">
                                    <input class="w-full h-12 px-md pr-xl rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body-md text-body-md outline-none" id="new-password" placeholder="••••••••" type="password"/>
                                    <button class="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" onclick="togglePassword('new-password')" type="button">
                                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </div>
                            <!-- Confirm Password -->
                            <div class="space-y-xs">
                                <label class="font-label-sm text-label-sm text-on-surface-variant px-xs">Xác nhận mật khẩu</label>
                                <div class="relative group">
                                    <input class="w-full h-12 px-md pr-xl rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body-md text-body-md outline-none" id="confirm-password" placeholder="••••••••" type="password"/>
                                    <button class="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" onclick="togglePassword('confirm-password')" type="button">
                                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </div>
                            <!-- Security Requirements Hint -->
                            <div class="bg-surface-container-low p-md rounded-lg border border-outline-variant/30 mt-sm">
                                <h4 class="font-label-sm text-label-sm text-on-surface-variant mb-xs flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-[14px]">info</span>
                                    Yêu cầu mật khẩu:
                                </h4>
                                <ul class="text-[12px] text-on-surface-variant space-y-1 list-disc list-inside">
                                    <li>Tối thiểu 8 ký tự</li>
                                    <li>Bao gồm ít nhất một chữ hoa và một số</li>
                                </ul>
                            </div>
                            <!-- Submit Button -->
                            <button class="w-full h-12 bg-primary text-on-primary font-label-md text-label-md rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98] transition-all duration-200 mt-xl" type="submit">
                                Cập nhật mật khẩu
                            </button>
                        </form>
                    </div>
                    <!-- Assistance Note -->
                    <p class="text-center mt-xl font-label-sm text-label-sm text-on-surface-variant">
                        Bạn gặp sự cố? <a class="text-primary font-bold hover:underline" href="#">Liên hệ bộ phận IT</a>
                    </p>
                </div>
            </section>

        </main>
    </div>
</template>

<script>
export default {
    name: 'DoiMatKhau',
    mounted() {
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const button = input.nextElementSibling;
            const icon = button.querySelector('.material-symbols-outlined');
        
            if (input.type === 'password') {
                input.type = 'text';
                icon.innerText = 'visibility_off';
            } else {
                input.type = 'password';
                icon.innerText = 'visibility';
            }
        }
        
        // Add small interaction for the primary button
        const submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.addEventListener('click', function() {
            this.innerHTML = '<span class="flex items-center gap-md justify-center"><span class="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></span> Đang cập nhật...</span>';
            setTimeout(() => {
                this.innerHTML = 'Cập nhật mật khẩu';
            }, 1500);
        });
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
