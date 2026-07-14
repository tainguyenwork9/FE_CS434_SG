<template>
    <div>
        <!-- TopNavBar -->
        <div class="space-y-xl">
            <!-- Header & Back -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
                <div class="flex items-center gap-md">
                    <button class="p-sm rounded-full hover:bg-surface-container transition-colors" onclick="window.history.back()">
                        <span class="material-symbols-outlined text-primary">arrow_back</span>
                    </button>
                    <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Chi tiết đơn thuê <span class="text-primary">#MR-8821</span>
                    </h1>
                </div>

            </div>
            <!-- Timeline Section -->
            <section class="glass-card rounded-xl p-lg mb-xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-surface-container-highest">
                    <div class="h-full bg-primary" style="width: 75%">
                    </div>
                </div>
                <div class="flex justify-between items-start relative pt-2">
                    <!-- Step 1 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center mb-sm shadow-md">
                            <span class="material-symbols-outlined">check</span>
                        </div>
                        <span class="font-label-md text-label-md text-primary font-bold">Đã đặt</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">10:30, 20/05/2026</span>
                    </div>
                    <!-- Step 2 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center mb-sm shadow-md">
                            <span class="material-symbols-outlined">verified</span>
                        </div>
                        <span class="font-label-md text-label-md text-primary font-bold">Đã duyệt</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">14:15, 20/05/2026</span>
                    </div>
                    <!-- Step 3 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center mb-sm shadow-md animate-pulse">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">directions_bike</span>
                        </div>
                        <span class="font-label-md text-label-md text-primary font-bold">Đang thuê</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">Từ 08:00, 22/05</span>
                    </div>
                    <!-- Step 4 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full bg-surface-container text-outline flex items-center justify-center mb-sm border-2 border-dashed border-outline-variant">
                            <span class="material-symbols-outlined">assignment_return</span>
                        </div>
                        <span class="font-label-md text-label-md text-on-surface-variant">Đã trả</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">Dự kiến 25/05</span>
                    </div>
                </div>
            </section>
            <!-- Main Info Grid (Bento Style) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-lg">
                <!-- Left Column: Vehicle & Summary -->
                <div class="lg:col-span-8 flex flex-col gap-lg">
                    <!-- Vehicle Card -->
                    <div class="glass-card rounded-xl overflow-hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 h-64 md:h-auto">
                            <img class="w-full h-full object-cover" data-alt="A professional studio photograph of a sleek 2026 Honda SH 160i motorbike in pearl white. The lighting is soft and cinematic, highlighting the metallic finish and modern curves of the vehicle. The background is a clean, minimalist gray studio set, reflecting the high-end premium service of MotoRent Pro. Sharp focus on the emblem and the premium leather seat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwdhMVGbZYt-E3YUpmSe97OQBzueg5PkNgATXyDRGckqSAPM1Pe2lc7LuCPQIAbsHANtXcCjgg9RV34Ea9CE_fh7KBgNJISjQbvR_bT80qD1PYdgSPz2GXQiGRBAfnC8hwoIUARudNvTH_Wajs7SETuExm1S61w3vz8eebIaHn3boFMpxx3pqluG_9grXY1Z_JP6W14pcVEikg5W_dPtHTFxM_EIMkQpyPq7-celDu6kZv2mUWN4iLYSqjGPSHLuEU5J1Cgsqe_pR"/>
                        </div>
                        <div class="p-lg md:w-1/2 flex flex-col justify-between">
                            <div>
                                <div class="flex justify-between items-start mb-sm">
                                    <span class="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg text-label-sm font-label-sm">Xe tay ga cao cấp</span>
                                    <span class="text-primary font-bold text-title-lg">29-A1 123.45</span>
                                </div>
                                <h2 class="font-title-lg text-title-lg text-on-surface mb-xs">Honda SH 160i</h2>
                                <p class="font-body-md text-on-surface-variant mb-md">Phiên bản Thể thao 2026 • Màu Trắng Ngọc Trai</p>
                                <div class="grid grid-cols-2 gap-md">
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-outline">calendar_today</span>
                                        <div>
                                            <p class="text-[10px] uppercase font-bold text-outline">Đời xe</p>
                                            <p class="font-label-md">2026</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-outline">speed</span>
                                        <div>
                                            <p class="text-[10px] uppercase font-bold text-outline">Odometer</p>
                                            <p class="font-label-md">1,250 km</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-lg pt-md border-t border-outline-variant/30">
                                <button class="w-full py-sm bg-surface-container-low text-primary font-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all">Xem thông tin chi tiết xe</button>
                            </div>
                        </div>
                    </div>
                    <!-- Logistics Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        <!-- Giao xe -->
                        <div class="glass-card rounded-xl p-lg border-l-4 border-l-primary">
                            <div class="flex items-center gap-md mb-md">
                                <div class="p-sm bg-primary-fixed rounded-xl">
                                    <span class="material-symbols-outlined text-primary">hail</span>
                                </div>
                                <h3 class="font-title-lg text-on-surface">Giao xe</h3>
                            </div>
                            <div class="space-y-md">
                                <div class="flex items-start gap-sm">
                                    <span class="material-symbols-outlined text-outline text-[20px] mt-xs">location_on</span>
                                    <p class="font-body-md text-on-surface-variant">123 Nguyễn Văn Linh, Phường Nam Dương, Quận Hải Châu, TP. Đà Nẵng</p>
                                </div>
                                <div class="flex items-center gap-sm">
                                    <span class="material-symbols-outlined text-outline text-[20px]">schedule</span>
                                    <p class="font-body-md text-on-surface-variant">08:00 • 22/05/2026</p>
                                </div>
                                <div class="p-md bg-surface-container rounded-xl flex items-center justify-between">
                                    <div class="flex items-center gap-sm">
                                        <div class="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[12px] font-bold">NV</div>
                                        <div>
                                            <p class="text-label-sm">Nguyễn Văn Nhân</p>
                                            <p class="text-[10px] text-on-surface-variant">Nhân viên bàn giao</p>
                                        </div>
                                    </div>
                                    <button class="text-primary">
                                        <span class="material-symbols-outlined">call</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Nhận xe -->
                        <div class="glass-card rounded-xl p-lg border-l-4 border-l-outline-variant">
                            <div class="flex items-center gap-md mb-md">
                                <div class="p-sm bg-surface-variant rounded-xl">
                                    <span class="material-symbols-outlined text-on-surface-variant">assignment_return</span>
                                </div>
                                <h3 class="font-title-lg text-on-surface">Nhận xe (Dự kiến)</h3>
                            </div>
                            <div class="space-y-md">
                                <div class="flex items-start gap-sm">
                                    <span class="material-symbols-outlined text-outline text-[20px] mt-xs">location_on</span>
                                    <p class="font-body-md text-on-surface-variant">Trụ sở MotoRent Pro - 456 Trần Phú, Quận Hải Châu, TP. Đà Nẵng</p>
                                </div>
                                <div class="flex items-center gap-sm">
                                    <span class="material-symbols-outlined text-outline text-[20px]">schedule</span>
                                    <p class="font-body-md text-on-surface-variant">18:00 • 25/05/2026</p>
                                </div>
                                <div class="border-t border-dashed border-outline-variant/50 pt-md">
                                    <p class="text-label-sm font-bold mb-xs">Checklist thu hồi:</p>
                                    <ul class="text-[12px] space-y-1 text-on-surface-variant">
                                        <li class="flex items-center gap-xs">
                                            <span class="material-symbols-outlined text-[14px]">check_box_outline_blank</span> Kiểm tra ngoại quan xe</li>
                                            <li class="flex items-center gap-xs">
                                                <span class="material-symbols-outlined text-[14px]">check_box_outline_blank</span> Đối chiếu Odometer</li>
                                                <li class="flex items-center gap-xs">
                                                    <span class="material-symbols-outlined text-[14px]">check_box_outline_blank</span> Thu hồi 02 chìa khóa/remote</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Right Column: Customer & Summary -->
                            <div class="lg:col-span-4 flex flex-col gap-lg">
                                <!-- Customer Info Card -->
                                <div class="glass-card rounded-xl p-lg">
                                    <h3 class="font-title-lg text-on-surface mb-md">Thông tin khách hàng</h3>
                                    <div class="flex items-center gap-md mb-lg">
                                        <div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-display-sm">A</div>
                                        <div>
                                            <p class="font-title-lg text-on-surface">Nguyen Van A</p>
                                            <p class="font-body-md text-on-surface-variant">Hạng thành viên: Gold</p>
                                        </div>
                                    </div>
                                    <div class="space-y-md">
                                        <div class="flex justify-between items-center">
                                            <span class="text-on-surface-variant text-body-md">Số điện thoại</span>
                                            <span class="font-label-md">0901 234 567</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="text-on-surface-variant text-body-md">Email</span>
                                            <span class="font-label-md">vana.nguyen@email.com</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="text-on-surface-variant text-body-md">CCCD/Hộ chiếu</span>
                                            <span class="font-label-md">0010 9200 1234</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="text-on-surface-variant text-body-md">GPLX</span>
                                            <span class="font-label-md">1234 5678 9012 (A1)</span>
                                        </div>
                                    </div>
                                    <button class="w-full mt-lg py-sm border border-primary text-primary font-label-md rounded-xl hover:bg-primary-fixed transition-all">Sửa thông tin</button>
                                </div>
                                <!-- Rental Summary Card -->
                                <div class="glass-card rounded-xl p-lg bg-surface-container-low border-none">
                                    <h3 class="font-title-lg text-on-surface mb-md">Tổng kết đơn thuê</h3>
                                    <div class="space-y-md mb-xl">
                                        <div class="flex justify-between">
                                            <span class="text-on-surface-variant text-body-md">Giá thuê (3 ngày)</span>
                                            <span class="font-label-md">1.500.000đ</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-on-surface-variant text-body-md">Bảo hiểm chuyến đi</span>
                                            <span class="font-label-md">150.000đ</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-on-surface-variant text-body-md">Phí giao xe tận nơi</span>
                                            <span class="font-label-md">50.000đ</span>
                                        </div>
                                        <div class="flex justify-between text-tertiary">
                                            <span class="text-body-md">Giảm giá (GOLD20)</span>
                                            <span class="font-label-md">-300.000đ</span>
                                        </div>
                                        <div class="pt-md border-t border-outline-variant flex justify-between items-end">
                                            <div>
                                                <p class="text-on-surface-variant text-[12px] font-bold uppercase">Tổng thanh toán</p>
                                                <p class="font-display-sm text-primary">1.400.000đ</p>
                                            </div>
                                            <span class="bg-primary-container text-on-primary-container px-md py-1 rounded-full text-[12px] font-bold">Đã thanh toán</span>
                                        </div>
                                        <div class="flex justify-between items-center p-md bg-white rounded-xl">
                                            <div class="flex items-center gap-sm">
                                                <span class="material-symbols-outlined text-tertiary">account_balance_wallet</span>
                                                <span class="text-body-md">Tiền cọc (Hoàn lại)</span>
                                            </div>
                                            <span class="font-title-lg text-on-surface">5.000.000đ</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-sm">
                                        <button class="w-full py-md bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all">Gia hạn thuê xe</button>
                                        <p class="text-center text-[12px] text-on-surface-variant italic">Gia hạn tối thiểu 6 tiếng trước giờ trả xe dự kiến</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    </div>
</template>

<script>
export default {
    name: 'ChiTietDonThue',
    mounted() {
        // Simple micro-interaction for active cards
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousedown', () => {
                card.style.transform = 'scale(0.98) translateY(0)';
            });
            card.addEventListener('mouseup', () => {
                card.style.transform = 'translateY(-2px)';
            });
        });
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 231, 235, 0.5);
    transition: all 200ms ease-in-out;
}
.glass-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
.timeline-line {
    background: linear-gradient(90deg, #2563eb 0%, #2563eb 66%, #e1e2ed 66%, #e1e2ed 100%);
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
