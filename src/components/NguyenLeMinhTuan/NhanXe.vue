<template>
    <div>
        <!-- SideNavBar -->
        <!-- Main Content Canvas -->
        <div class="space-y-xl">
            <!-- TopAppBar -->
            <!-- Content Area -->
            <div class="p-margin-desktop max-w-[1440px] mx-auto">
                <div class="flex justify-between items-end mb-8">
                    <div>
                        <h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Nhận xe (Vehicle Return)</h2>
                        <p class="text-on-surface-variant body-md max-w-lg">Vui lòng kiểm tra tình trạng xe và hoàn tất các thủ tục tài chính để kết thúc đơn hàng.</p>
                    </div>
                    <div class="flex gap-3">
                        <button class="px-6 py-3 rounded-xl border border-outline text-on-surface font-medium hover:bg-surface-container transition-all flex items-center gap-2">
                            <span class="material-symbols-outlined text-xl">print</span>
                            Biên bản nhận xe
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <!-- Left Column: Order Summary -->
                    <div class="lg:col-span-4 space-y-8">
                        <div class="glass-card rounded-2xl p-6 overflow-hidden relative">
                            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl">
                            </div>
                            <h3 class="text-title-lg font-bold text-on-surface mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">assignment</span>
                                Order Information
                            </h3>
                            <div class="space-y-5 relative z-10">
                                <div class="flex justify-between items-center pb-4 border-b border-outline-variant/30">
                                    <span class="text-outline body-md">Booking ID</span>
                                    <span class="font-bold text-on-surface">#ORD-9021</span>
                                </div>
                                <div class="flex items-start gap-4 pb-4 border-b border-outline-variant/30">
                                    <img class="w-12 h-12 rounded-xl object-cover shadow-md" data-alt="A detailed portrait of a Vietnamese woman in her late 20s, with long dark hair, wearing a stylish denim jacket. She has a warm, confident expression. The lighting is soft and natural, suggesting an outdoor setting with greenery in the blurred background. Modern lifestyle photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqoUoiRrr4fFyD4G1lwO2-Vd5Pxn9L8vDpv3nKFeEP4_HbOW8WdqoezterJYfVQibqwynHd5rnUdANCbcL1bdqW0yeIKhUD5NYlgJ7cRBrRhOcwdeenmhbeSq1CZVK_WJRG2eBCEW7zhtp1Xw3MK2FvpK6P0rMk7Yfnrz5FuIIzQgncM28BL_JArYvDsC29UKZ25qB6Q_FyRq2-JEzmYSCAy2qDTxNkXc3_ope-5u1qqLDJsZIzBNdOMlaJX-nY3Tt1wWDNDD4pIL7"/>
                                    <div>
                                        <p class="text-outline text-xs uppercase font-bold tracking-widest">Khách hàng</p>
                                        <p class="font-bold text-on-surface text-lg">Trần Anh Thư</p>
                                        <p class="text-xs text-outline">Verified Customer • Gold Member</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4 pb-4 border-b border-outline-variant/30">
                                    <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <span class="material-symbols-outlined">motorcycle</span>
                                    </div>
                                    <div>
                                        <p class="text-outline text-xs uppercase font-bold tracking-widest">Phương tiện</p>
                                        <p class="font-bold text-on-surface">Honda SH 150i</p>
                                        <p class="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded inline-block mt-1">29A-123.45</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                        <span class="material-symbols-outlined">event_note</span>
                                    </div>
                                    <div>
                                        <p class="text-outline text-xs uppercase font-bold tracking-widest">Thời gian thuê</p>
                                        <p class="font-bold text-on-surface">15/09 - 18/09/2024</p>
                                        <p class="text-xs text-on-surface-variant italic">3 ngày (Trễ 2 giờ)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card rounded-2xl p-6">
                            <h3 class="text-label-md font-bold text-outline mb-6 uppercase tracking-widest">Return Timeline</h3>
                            <div class="relative flex justify-between">
                                <!-- Timeline Background Lines -->
                                <div class="absolute top-[14px] left-[15%] right-[15%] h-1 bg-surface-variant -z-10">
                                    <div class="h-full bg-primary w-[75%] transition-all duration-1000">
                                    </div>
                                </div>
                                <div class="flex flex-col items-center gap-2 group">
                                    <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs ring-4 ring-primary/20">
                                        <span class="material-symbols-outlined text-sm">check</span>
                                    </div>
                                    <span class="text-[10px] font-bold text-primary text-center">Đã đặt</span>
                                </div>
                                <div class="flex flex-col items-center gap-2 group">
                                    <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs ring-4 ring-primary/20">
                                        <span class="material-symbols-outlined text-sm">check</span>
                                    </div>
                                    <span class="text-[10px] font-bold text-primary text-center">Đã duyệt</span>
                                </div>
                                <div class="flex flex-col items-center gap-2 group">
                                    <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs ring-4 ring-primary/20">
                                        <span class="material-symbols-outlined text-sm">check</span>
                                    </div>
                                    <span class="text-[10px] font-bold text-primary text-center">Đang thuê</span>
                                </div>
                                <div class="flex flex-col items-center gap-2 group">
                                    <div class="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary text-xs animate-pulse ring-4 ring-primary/10">
                                        <span class="material-symbols-outlined text-sm">flag</span>
                                    </div>
                                    <span class="text-[10px] font-bold text-on-surface text-center">Đang nhận xe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Right Column: Process Details -->
                    <div class="lg:col-span-8 space-y-8 pb-20">
                        <!-- Photo Upload Section -->
                        <div class="glass-card rounded-2xl p-8">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-title-lg font-bold text-on-surface">Tình trạng xe khi nhận (Return Condition)</h3>
                                <span class="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-1 rounded">Bắt buộc</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <label class="text-label-md font-bold text-on-surface-variant block">Documentation Photos</label>
                                    <div class="border-2 border-dashed border-outline-variant hover:border-primary hover:bg-primary/5 transition-all rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer group h-[240px]">
                                        <div class="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-outline group-hover:bg-primary/20 group-hover:text-primary transition-all">
                                            <span class="material-symbols-outlined text-3xl">add_a_photo</span>
                                        </div>
                                        <div class="text-center">
                                            <p class="font-bold text-on-surface group-hover:text-primary transition-colors">Tải ảnh lên hoặc kéo thả</p>
                                            <p class="text-xs text-outline mt-1">Tối thiểu 4 ảnh (Trước, Sau, 2 bên, ODO)</p>
                                        </div>
                                        <input class="hidden" type="file"/>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <label class="text-label-md font-bold text-on-surface-variant block">Checklist</label>
                                    <div class="space-y-3">
                                        <label class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant">
                                            <input class="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
                                            <span class="text-on-surface body-md">Đầy bình xăng (Full fuel)</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant">
                                            <input class="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
                                            <span class="text-on-surface body-md">Xe đã rửa sạch (Cleaned)</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant">
                                            <input class="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
                                            <span class="text-on-surface body-md">Mũ bảo hiểm (2 chiếc)</span>
                                        </label>
                                        <label class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant">
                                            <input class="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
                                            <span class="text-on-surface body-md">Giấy tờ &amp; Bộ dụng cụ</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 space-y-2">
                                <label class="text-label-md font-bold text-on-surface-variant block">Chi tiết tình trạng xe &amp; Ghi chú</label>
                                <textarea class="w-full rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder-outline text-on-surface body-md p-4" placeholder="Nhập các vết trầy xước mới, hư hỏng hoặc các lưu ý đặc biệt khác..." rows="4">
                                </textarea>
                            </div>
                        </div>
                        <!-- Additional Costs Section -->
                        <div class="glass-card rounded-2xl p-8 border-l-4 border-l-error">
                            <h3 class="text-title-lg font-bold text-on-surface mb-6">Chi phí phát sinh (Additional Costs)</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-label-md font-bold text-on-surface-variant block">Lý do phát sinh</label>
                                    <select class="w-full h-12 rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-on-surface appearance-none">
                                        <option value="">Chọn lý do...</option>
                                        <option value="late">Trả xe muộn (Late return)</option>
                                        <option value="damage">Trầy xước/Hư hỏng (Damage)</option>
                                        <option value="fuel">Thiếu xăng (Low fuel)</option>
                                        <option value="cleaning">Phí vệ sinh (Cleaning fee)</option>
                                        <option value="other">Lý do khác...</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-label-md font-bold text-on-surface-variant block">Số tiền (VND)</label>
                                    <div class="relative">
                                        <input class="w-full h-12 rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 pr-12 text-right font-bold text-error" placeholder="0" type="number"/>
                                        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-outline font-bold">đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Summary Section -->
                        <div class="glass-card rounded-2xl overflow-hidden shadow-xl border-none">
                            <div class="bg-primary p-8 text-on-primary">
                                <div class="flex justify-between items-center mb-8">
                                    <h3 class="text-title-lg font-bold">Tổng kết thanh toán</h3>
                                    <div class="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md uppercase tracking-wider">Mã GD: #TXN-4422</div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center text-on-primary/80">
                                        <span class="body-md">Tiền thuê xe (3 ngày)</span>
                                        <span class="font-medium">1,200,000 đ</span>
                                    </div>
                                    <div class="flex justify-between items-center text-on-primary/80">
                                        <span class="body-md">Phí phát sinh (Phí trễ 2h)</span>
                                        <span class="font-medium">+ 150,000 đ</span>
                                    </div>
                                    <div class="flex justify-between items-center text-on-primary/80 pb-4 border-b border-white/20">
                                        <span class="body-md">Tiền cọc đã nhận</span>
                                        <span class="font-medium">- 1,000,000 đ</span>
                                    </div>
                                    <div class="flex justify-between items-center pt-2">
                                        <div class="flex items-center gap-2">
                                            <span class="text-xl font-bold">Còn lại cần thu</span>
                                            <span class="material-symbols-outlined text-sm">info</span>
                                        </div>
                                        <span class="text-3xl font-black">350,000 đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-surface-container-high p-8 flex justify-end items-center gap-6">
                                <button class="text-on-surface-variant font-bold hover:text-primary transition-colors py-3 px-6">
                                    Hủy bỏ
                                </button>
                                <button class="bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center gap-2">
                                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                    Hoàn tất nhận xe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NhanXe',
    mounted() {
        // Micro-interaction for inputs
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.closest('.glass-card').style.boxShadow = '0 20px 25px -5px rgba(15, 23, 42, 0.1)';
                input.parentElement.closest('.glass-card').style.transform = 'translateY(-2px)';
            });
            input.addEventListener('blur', () => {
                input.parentElement.closest('.glass-card').style.boxShadow = '0 4px 6px -1px rgba(15, 23, 42, 0.05)';
                input.parentElement.closest('.glass-card').style.transform = 'translateY(0)';
            });
        });
        
        // Simplified Drag & Drop Visuals
        const dropzone = document.querySelector('.border-dashed');
        if (dropzone) {
            ['dragenter', 'dragover'].forEach(eventName => {
                dropzone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    dropzone.classList.add('bg-primary/10', 'border-primary');
                }, false);
            });
        
            ['dragleave', 'drop'].forEach(eventName => {
                dropzone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    dropzone.classList.remove('bg-primary/10', 'border-primary');
                }, false);
            });
        }
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; background-color: #faf8ff; }
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.05); }
.timeline-step::after { content: ''; position: absolute; top: 12px; left: 100%; width: 100%; height: 2px; background: #e1e2ed; z-index: -1; }
.timeline-step:last-child::after { display: none; }
.active-timeline-step::after { background: #004ac6; }
</style>
