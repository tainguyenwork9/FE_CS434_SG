<template>
    <div>
        <!-- Header Navigation Shell (Contextual Filter Applied) -->
        <main class="pt-32 pb-3xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
            <!-- Booking Journey Header -->
            <div class="mb-xl">
                <button class="flex items-center gap-xs text-secondary hover:text-primary transition-colors mb-sm" onclick="history.back()">
                    <span class="material-symbols-outlined">arrow_back</span>
                    <span class="font-label-md text-label-md">Quay lại danh sách xe</span>
                </button>
                <h1 class="font-headline-lg text-headline-lg text-on-surface">Hoàn tất đặt xe của bạn</h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                <!-- Left Column: Vehicle Summary -->
                <div class="lg:col-span-5 space-y-lg">
                    <div class="bg-white rounded-2xl p-lg shadow-sm border border-outline-variant/30">
                        <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-lg">
                            <img class="w-full h-full object-cover" data-alt="A pristine metallic silver Honda SH 160i scooter parked in a bright, modern studio setting with soft high-key lighting. The motorcycle's sleek design is highlighted by subtle reflections. The background is a clean, minimal white gallery space with a slight blue tint in the shadows to match the premium brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn94U9AHFW4kPKfztWeQpJUao-8A_aSTz9L4bfruSS-Bd_ZXlZbWqgc95nQvoJ8OhVVDBuPU3NgP90V87XVB-wVxJSEbRPxk9IPy3NPTSSskuxGms5Wp2dKrSsPXKkmfRb8mqtILiBPZPuKAAAlexQBdb-DMlMugSiBGuG2GDyoIIdG2tyPkX53UgHSZzfAEs7G0GPv8Gfkv95BgeB8N-CuOiD4gVib_KFBk3772G2oBPkVUY_7cJgz3aEeL-css-2h0g_gZjv_D5O"/>
                            <div class="absolute top-4 left-4">
                                <span class="px-md py-xs bg-primary-container text-on-primary-container rounded-full font-label-sm text-label-sm shadow-sm">Có sẵn</span>
                            </div>
                        </div>
                        <div class="space-y-md">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h2 class="font-title-lg text-title-lg text-on-surface">Honda SH 160i (2024)</h2>
                                    <p class="font-body-md text-body-md text-on-surface-variant">Dòng xe tay ga cao cấp</p>
                                </div>
                                <div class="text-right">
                                    <span class="font-title-lg text-title-lg text-primary">250.000đ</span>
                                    <p class="font-label-sm text-label-sm text-on-surface-variant">/ ngày</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-md pt-md border-t border-outline-variant/20">
                                <div class="flex items-center gap-sm">
                                    <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                                        <span class="material-symbols-outlined text-secondary">settings_input_component</span>
                                    </div>
                                    <div>
                                        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Động cơ</p>
                                        <p class="font-label-md text-label-md text-on-surface">160cc PGM-FI</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-sm">
                                    <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                                        <span class="material-symbols-outlined text-secondary">category</span>
                                    </div>
                                    <div>
                                        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Phân loại</p>
                                        <p class="font-label-md text-label-md text-on-surface">Scooter / Premium</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-md bg-surface-container-low rounded-xl border border-outline-variant/10">
                                <h3 class="font-label-md text-label-md text-on-surface font-semibold mb-sm flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-sm">verified_user</span>
                                    Gói bảo hiểm đi kèm
                                </h3>
                                <p class="font-body-md text-body-md text-on-surface-variant">Đã bao gồm bảo hiểm cơ bản và hỗ trợ kỹ thuật tận nơi 24/7 trong khu vực nội thành.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right Column: Booking Form -->
                <div class="lg:col-span-7">
                    <div class="bg-white rounded-2xl p-xl shadow-sm border border-outline-variant/30 sticky top-24">
                        <h2 class="font-title-lg text-title-lg text-on-surface mb-xl">Thông tin đặt xe</h2>
                        <form class="space-y-xl" id="bookingForm">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                                <!-- Pickup Date -->
                                <div class="space-y-xs">
                                    <label class="font-label-md text-label-md text-on-surface-variant block" for="pickup_date">Ngày nhận xe</label>
                                    <div class="relative">
                                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">calendar_today</span>
                                        <input class="w-full h-12 pl-12 pr-4 rounded-xl border border-outline-variant bg-white text-on-surface font-body-md input-focus-ring transition-all" id="pickup_date" type="date" value="2024-05-20"/>
                                    </div>
                                </div>
                                <!-- Return Date -->
                                <div class="space-y-xs">
                                    <label class="font-label-md text-label-md text-on-surface-variant block" for="return_date">Ngày trả xe</label>
                                    <div class="relative">
                                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">calendar_month</span>
                                        <input class="w-full h-12 pl-12 pr-4 rounded-xl border border-outline-variant bg-white text-on-surface font-body-md input-focus-ring transition-all" id="return_date" type="date" value="2024-05-23"/>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-md pt-xl border-t border-outline-variant/20">
                                <div class="flex justify-between items-center">
                                    <span class="font-body-lg text-body-lg text-on-surface-variant">Số ngày thuê:</span>
                                    <span class="font-title-lg text-title-lg text-on-surface" id="totalDays">3 ngày</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center gap-xs">
                                        <span class="font-body-lg text-body-lg text-on-surface-variant">Tiền đặt cọc (Tạm giữ):</span>
                                        <span class="material-symbols-outlined text-sm text-on-surface-variant cursor-help" title="Tiền cọc sẽ được hoàn trả 100% sau khi kiểm tra xe.">info</span>
                                    </div>
                                    <span class="font-title-lg text-title-lg text-on-surface font-bold">5.000.000đ</span>
                                </div>
                                <div class="p-lg bg-primary/5 rounded-2xl border border-primary/10 mt-xl">
                                    <div class="flex justify-between items-center mb-xs">
                                        <span class="font-title-lg text-title-lg text-on-surface font-bold">Tổng tiền thuê</span>
                                        <span class="font-display-sm text-display-sm text-primary" id="totalPrice">750.000đ</span>
                                    </div>
                                    <p class="font-label-sm text-label-sm text-on-surface-variant">Đã bao gồm thuế VAT và phí dịch vụ.</p>
                                </div>
                            </div>
                            <div class="pt-lg">
                                <button class="w-full h-14 bg-primary text-white rounded-xl font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary/90 hover-lift active:scale-[0.98] transition-all shadow-lg shadow-primary/20" type="submit">
                                    XÁC NHẬN THUÊ XE
                                    <span class="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p class="text-center mt-md font-label-sm text-label-sm text-on-surface-variant">
                                    Bằng cách nhấn xác nhận, bạn đồng ý với <a class="text-primary hover:underline" href="#">Điều khoản &amp; Chính sách</a> của MotoRent.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Section: Essential Information -->
            <section class="mt-3xl grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div class="p-lg glass-card rounded-2xl flex gap-md">
                    <div class="text-primary">
                        <span class="material-symbols-outlined text-3xl">task_alt</span>
                    </div>
                    <div>
                        <h4 class="font-label-md text-label-md font-bold mb-xs">Thủ tục nhanh chóng</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Chỉ cần CCCD/GPLX bản gốc để đối chiếu khi nhận xe.</p>
                    </div>
                </div>
                <div class="p-lg glass-card rounded-2xl flex gap-md">
                    <div class="text-primary">
                        <span class="material-symbols-outlined text-3xl">security</span>
                    </div>
                    <div>
                        <h4 class="font-label-md text-label-md font-bold mb-xs">Bảo mật thanh toán</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Hỗ trợ thanh toán qua VNPay, MoMo, Visa/Mastercard.</p>
                    </div>
                </div>
                <div class="p-lg glass-card rounded-2xl flex gap-md">
                    <div class="text-primary">
                        <span class="material-symbols-outlined text-3xl">support_agent</span>
                    </div>
                    <div>
                        <h4 class="font-label-md text-label-md font-bold mb-xs">Hỗ trợ 24/7</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Hotline cứu hộ và chăm sóc khách hàng hoạt động xuyên suốt.</p>
                    </div>
                </div>
            </section>
        </main>
        <footer class="w-full py-3xl px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-lg bg-surface-container-lowest border-t border-outline-variant/20 mt-3xl">
            <div class="font-title-lg text-title-lg font-bold text-on-surface">MotoRent Global</div>
            <div class="flex flex-wrap justify-center gap-xl">
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Fleet Guide</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Locations</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
            </div>
            <div class="font-body-md text-body-md text-on-surface-variant opacity-80">© 2026 MotoRent Global. All rights reserved.</div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'DatThuXe',
    mounted() {
        const dailyRate = 250000;
        const pickupInput = document.getElementById('pickup_date');
        const returnInput = document.getElementById('return_date');
        const totalDaysEl = document.getElementById('totalDays');
        const totalPriceEl = document.getElementById('totalPrice');
        
        function formatCurrency(amount) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'đ');
        }
        
        function calculateTotal() {
            const pickupDate = new Date(pickupInput.value);
            const returnDate = new Date(returnInput.value);
        
            if (pickupDate && returnDate && returnDate >= pickupDate) {
                const diffTime = Math.abs(returnDate - pickupDate);
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays === 0) diffDays = 1; // Minimum 1 day
        
                const totalPrice = diffDays * dailyRate;
        
                totalDaysEl.textContent = `${diffDays} ngày`;
                totalPriceEl.textContent = formatCurrency(totalPrice);
        
                // Animate change
                totalPriceEl.classList.remove('scale-105');
                void totalPriceEl.offsetWidth; // Trigger reflow
                totalPriceEl.classList.add('scale-105', 'transition-transform');
                setTimeout(() => totalPriceEl.classList.remove('scale-105'), 200);
            } else {
                totalDaysEl.textContent = '---';
                totalPriceEl.textContent = '---';
            }
        }
        
        pickupInput.addEventListener('change', calculateTotal);
        returnInput.addEventListener('change', calculateTotal);
        
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Yêu cầu đặt xe của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại trong giây lát.');
        });
        
        // Initialize
        calculateTotal();
    }
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
    background-color: #F8FAFC;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 231, 235, 0.5);
}
.input-focus-ring:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    border-color: #2563eb;
}
.hover-lift {
    transition: all 0.2s ease-in-out;
}
.hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
</style>
