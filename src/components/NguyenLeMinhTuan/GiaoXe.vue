<template>
    <div>
        <!-- SideNavBar -->
        <!-- TopNavBar -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <div class="max-w-[1200px] mx-auto">
                <!-- Page Header -->
                <div class="mb-xl flex justify-between items-end">
                    <div>
                        <nav class="flex items-center gap-sm text-outline text-label-sm mb-xs">
                            <span>Đơn hàng</span>
                            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span>#ORD-9021</span>
                            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span class="text-primary">Giao xe</span>
                        </nav>
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Giao xe (Handover)</h2>
                    </div>
                    <div class="flex items-center gap-md">
                        <button class="px-lg py-md rounded-xl border border-outline-variant text-on-surface-variant font-label-md hover:bg-surface-container-low transition-all">Hủy bỏ</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
                    <!-- Left Column: Order Summary -->
                    <div class="lg:col-span-4 space-y-lg">
                        <div class="glass-card rounded-xl p-lg shadow-sm">
                            <div class="flex justify-between items-start mb-lg">
                                <span class="px-sm py-xs bg-secondary-container text-on-secondary-container rounded text-[10px] font-bold uppercase tracking-wider">Đang chuẩn bị</span>
                                <h3 class="font-title-lg text-title-lg text-primary">#ORD-9021</h3>
                            </div>
                            <div class="space-y-lg">
                                <div class="flex gap-md">
                                    <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                                        <span class="material-symbols-outlined">person</span>
                                    </div>
                                    <div>
                                        <p class="text-label-sm text-outline">Khách hàng</p>
                                        <p class="font-label-md font-bold">Trần Anh Thư</p>
                                        <p class="text-body-md text-on-surface-variant">+84 908 123 456</p>
                                    </div>
                                </div>
                                <div class="flex gap-md">
                                    <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                                        <span class="material-symbols-outlined">motorcycle</span>
                                    </div>
                                    <div>
                                        <p class="text-label-sm text-outline">Phương tiện</p>
                                        <p class="font-label-md font-bold">Honda SH 150i</p>
                                        <p class="text-body-md text-on-surface-variant">Biển số: 29A-123.45</p>
                                    </div>
                                </div>
                                <div class="flex gap-md">
                                    <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                                        <span class="material-symbols-outlined">date_range</span>
                                    </div>
                                    <div>
                                        <p class="text-label-sm text-outline">Thời gian thuê</p>
                                        <p class="font-label-md font-bold">15/09 - 18/09/2024</p>
                                        <p class="text-body-md text-on-surface-variant">3 ngày (Dự kiến trả: 10:00 AM)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-xl pt-xl border-t border-outline-variant/30">
                                <div class="flex justify-between items-center mb-sm">
                                    <span class="text-body-md text-on-surface-variant">Tổng tiền thuê</span>
                                    <span class="font-label-md font-bold">1.500.000đ</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-body-md text-on-surface-variant">Tiền cọc</span>
                                    <span class="font-label-md font-bold text-tertiary">5.000.000đ</span>
                                </div>
                            </div>
                        </div>
                        <!-- Vehicle Status Visual -->
                        <div class="rounded-xl overflow-hidden shadow-sm relative group">
                            <div class="w-full h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="A studio-quality photograph of a pristine white Honda SH 150i motorbike against a clean, minimalist architectural background. Soft morning light creates gentle reflections on the chrome parts, highlighting the premium maintenance quality of the fleet. Modern, high-end commercial style." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRBLRXayBHH9mtR2Gocm9_PEt9Siu7Pv4G2DTmUWsaJJh8-BQ4D7z4xam1oi4REoiq557Md-ZNn6QysKX2MP9fZP2jF7ZmubEvs2LzpEkDe_5MFgT9nKJ6GsyxpLsymEFYhwQ3rc_hUba-6XUq4DS_KYzrbJJ898Z4FprcmUIVyt2db7W7J01p4kcwTB49VPdbKfDF7LQth7vyP1pllv71a4D85HVA7WTee4tyxs3_yxGI3zsJNwm7zJMx6krJvcav39FZtRK1vWWr')">
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg">
                                <span class="text-white font-bold text-label-md">Tình trạng sẵn sàng</span>
                                <span class="text-white/80 text-body-md">Đã kiểm tra kỹ thuật sáng nay</span>
                            </div>
                        </div>
                    </div>
                    <!-- Right Column: Handover Form -->
                    <div class="lg:col-span-8 space-y-lg">
                        <form class="glass-card rounded-xl p-xl shadow-sm space-y-2xl">
                            <!-- Section: Date and Time -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-xl">
                                <div class="space-y-sm">
                                    <label class="text-label-md font-bold text-on-surface flex items-center gap-xs">
                                        <span class="material-symbols-outlined text-[18px]">event</span>
                                        Ngày giao xe
                                    </label>
                                    <input class="w-full h-12 rounded-xl border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all px-lg" type="date" value="2024-09-15"/>
                                </div>
                                <div class="space-y-sm">
                                    <label class="text-label-md font-bold text-on-surface flex items-center gap-xs">
                                        <span class="material-symbols-outlined text-[18px]">schedule</span>
                                        Giờ giao xe
                                    </label>
                                    <input class="w-full h-12 rounded-xl border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all px-lg" type="time" value="09:00"/>
                                </div>
                            </div>
                            <!-- Section: Checklist -->
                            <div class="space-y-lg">
                                <h4 class="text-label-md font-bold text-on-surface flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-[18px]">fact_check</span>
                                    Danh mục kiểm tra xe
                                </h4>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-md bg-surface-container-low p-lg rounded-xl">
                                    <label class="flex items-center gap-md group cursor-pointer">
                                        <input checked="" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                                        <span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Bình xăng đầy</span>
                                    </label>
                                    <label class="flex items-center gap-md group cursor-pointer">
                                        <input checked="" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                                        <span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Mũ bảo hiểm x2</span>
                                    </label>
                                    <label class="flex items-center gap-md group cursor-pointer">
                                        <input checked="" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                                        <span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Gương chiếu hậu</span>
                                    </label>
                                    <label class="flex items-center gap-md group cursor-pointer">
                                        <input checked="" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                                        <span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Giấy tờ xe (Gốc/Photo)</span>
                                    </label>
                                    <label class="flex items-center gap-md group cursor-pointer">
                                        <input checked="" class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                                        <span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Vệ sinh sạch sẽ</span>
                                    </label>
                                    <label class="flex items-center gap-md group cursor-pointer">
                                        <input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox"/>
                                        <span class="text-body-md text-on-surface group-hover:text-primary transition-colors">Bộ dụng cụ sửa chữa nhỏ</span>
                                    </label>
                                </div>
                            </div>
                            <!-- Section: Photo Upload -->
                            <div class="space-y-lg">
                                <h4 class="text-label-md font-bold text-on-surface flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-[18px]">add_a_photo</span>
                                    Hình ảnh hiện trạng xe
                                </h4>
                                <div class="border-2 border-dashed border-outline-variant rounded-xl p-2xl flex flex-col items-center justify-center bg-surface-container-lowest hover:border-primary/50 transition-all cursor-pointer">
                                    <div class="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-md">
                                        <span class="material-symbols-outlined text-[32px]">upload_file</span>
                                    </div>
                                    <p class="text-label-md font-bold mb-xs">Kéo thả ảnh hoặc nhấn để chọn</p>
                                    <p class="text-body-md text-outline">Hỗ trợ JPG, PNG (Tối đa 10 ảnh)</p>
                                </div>
                                <!-- Placeholder Previews -->
                                <div class="grid grid-cols-4 sm:grid-cols-6 gap-md mt-md">
                                    <div class="aspect-square rounded-lg bg-surface-container-high border border-outline-variant overflow-hidden relative group">
                                        <div class="w-full h-full bg-cover bg-center opacity-80" data-alt="A close-up high-resolution photo of a motorbike odometer showing the current mileage, clear numbers, bright daylight, part of the handlebars visible, sharp focus, professional documentation style." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTjV6bnQIUePNswdDtnlJ2DHU06YyldHhQkfuVH3zStZH0Q7i5yntcOHpbyvRQTdf9FWUIvfwNETC7zkdzyWrn3W4F6QQ6AGmXGEf03vZbwhl3PSpISVu1uRtwrtQu2MnXgKLiT7beN3XwdLl9fMP7btgaJlR0ESrtvsYugikPMNYLJRbMC7nJWYnFyK68SEEEd6s9baayv-loUDbVTu2c1cKq7pqvYagVMqv3flolrvkZ3faoJye1G4wGDju6j1TWZ_elo4KXnS8_')">
                                        </div>
                                        <button class="absolute top-1 right-1 w-6 h-6 bg-error text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" type="button">
                                            <span class="material-symbols-outlined text-[14px]">close</span>
                                        </button>
                                    </div>
                                    <div class="aspect-square rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-outline border-dashed">
                                        <span class="material-symbols-outlined">add</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Section: Notes -->
                            <div class="space-y-sm">
                                <label class="text-label-md font-bold text-on-surface flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-[18px]">edit_note</span>
                                    Ghi chú chi tiết tình trạng xe
                                </label>
                                <textarea class="w-full h-32 rounded-xl border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all p-lg text-body-md resize-none" placeholder="Ghi chú về vết xước (nếu có), tình trạng máy móc hoặc các yêu cầu đặc biệt từ khách hàng...">
                                </textarea>
                            </div>
                            <!-- Final Action -->
                            <div class="pt-xl flex flex-col sm:flex-row gap-lg">
                                <button class="flex-1 h-12 bg-primary text-white rounded-xl font-label-md font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-md" type="submit">
                                    <span class="material-symbols-outlined">check_circle</span>
                                    Xác nhận giao xe
                                </button>
                                <button class="px-xl h-12 rounded-xl border border-primary text-primary font-label-md font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-md" type="button">
                                    <span class="material-symbols-outlined">print</span>
                                    In biên bản
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GiaoXe',
    mounted() {
        // Simple micro-interaction for checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const span = this.nextElementSibling;
                if(this.checked) {
                    span.classList.add('text-primary');
                } else {
                    span.classList.remove('text-primary');
                }
            });
        });
        
        // Hover effect for the main confirm button
        const confirmBtn = document.querySelector('button[type="submit"]');
        if(confirmBtn) {
            confirmBtn.addEventListener('mouseenter', () => {
                confirmBtn.style.boxShadow = '0 20px 25px -5px rgba(0, 74, 198, 0.2)';
            });
            confirmBtn.addEventListener('mouseleave', () => {
                confirmBtn.style.boxShadow = '0 10px 15px -3px rgba(0, 74, 198, 0.1)';
            });
        }
    }
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.sidebar-active {
    color: #004ac6;
    font-weight: 700;
}
</style>
