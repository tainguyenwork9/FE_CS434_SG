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
                <div v-if="vehicle" class="lg:col-span-5 space-y-lg">
                    <div class="bg-white rounded-2xl p-lg shadow-sm border border-outline-variant/30">
                        <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-lg bg-surface-container">
                            <img class="w-full h-full object-cover" :src="vehicle.hinh_anh || 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80'" :alt="vehicle.ten_xe"/>
                            <div class="absolute top-4 left-4">
                                <span class="px-md py-xs bg-primary-container text-on-primary-container rounded-full font-label-sm text-label-sm shadow-sm">
                                    {{ vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'Có sẵn' : 'Bận' }}
                                </span>
                            </div>
                        </div>
                        <div class="space-y-md">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h2 class="font-title-lg text-title-lg text-on-surface">{{ vehicle.ten_xe }}</h2>
                                    <p class="font-body-md text-body-md text-on-surface-variant">Phân loại: {{ vehicle.danh_muc_xe ? vehicle.danh_muc_xe.ten_danh_muc : 'Xe máy' }}</p>
                                </div>
                                <div class="text-right">
                                    <span class="font-title-lg text-title-lg text-primary">{{ Number(vehicle.gia_thue_ngay).toLocaleString('vi-VN') }}đ</span>
                                    <p class="font-label-sm text-label-sm text-on-surface-variant">/ ngày</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-md pt-md border-t border-outline-variant/20">
                                <div class="flex items-center gap-sm">
                                    <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                                        <span class="material-symbols-outlined text-secondary">palette</span>
                                    </div>
                                    <div>
                                        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Màu sắc</p>
                                        <p class="font-label-md text-label-md text-on-surface">{{ vehicle.mau_sac || 'N/A' }}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-sm">
                                    <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                                        <span class="material-symbols-outlined text-secondary">category</span>
                                    </div>
                                    <div>
                                        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Biển số</p>
                                        <p class="font-label-md text-label-md text-on-surface">{{ vehicle.bien_so || 'Đang cập nhật' }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Booking Form -->
                <div class="lg:col-span-7">
                    <div class="bg-white rounded-2xl p-xl shadow-sm border border-outline-variant/30 sticky top-24">
                        <h2 class="font-title-lg text-title-lg text-on-surface mb-xl">Thông tin đặt xe</h2>

                        <!-- Status Alerts -->
                        <div v-if="errorMessage" class="mb-lg p-md bg-red-100 text-red-700 rounded-xl flex items-center gap-sm text-body-md">
                            <span class="material-symbols-outlined">error</span>
                            <span>{{ errorMessage }}</span>
                        </div>
                        <div v-if="successMessage" class="mb-lg p-md bg-green-100 text-green-700 rounded-xl flex items-center gap-sm text-body-md">
                            <span class="material-symbols-outlined">check_circle</span>
                            <span>{{ successMessage }}</span>
                        </div>

                        <form class="space-y-xl" @submit.prevent="handleBooking">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                                <!-- Pickup Date -->
                                <div class="space-y-xs">
                                    <label class="font-label-md text-label-md text-on-surface-variant block" for="pickup_date">Ngày nhận xe</label>
                                    <div class="relative">
                                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">calendar_today</span>
                                        <input v-model="form.ngay_nhan_du_kien" required class="w-full h-12 pl-12 pr-4 rounded-xl border border-outline-variant bg-white text-on-surface font-body-md input-focus-ring transition-all" id="pickup_date" type="date"/>
                                    </div>
                                </div>
                                <!-- Return Date -->
                                <div class="space-y-xs">
                                    <label class="font-label-md text-label-md text-on-surface-variant block" for="return_date">Ngày trả xe</label>
                                    <div class="relative">
                                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">calendar_month</span>
                                        <input v-model="form.ngay_tra_du_kien" required class="w-full h-12 pl-12 pr-4 rounded-xl border border-outline-variant bg-white text-on-surface font-body-md input-focus-ring transition-all" id="return_date" type="date"/>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-md pt-xl border-t border-outline-variant/20">
                                <div class="flex justify-between items-center">
                                    <span class="font-body-lg text-body-lg text-on-surface-variant">Số ngày thuê:</span>
                                    <span class="font-title-lg text-title-lg text-on-surface">{{ totalDays }} ngày</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center gap-xs">
                                        <span class="font-body-lg text-body-lg text-on-surface-variant">Tiền đặt cọc (Tạm giữ):</span>
                                        <span class="material-symbols-outlined text-sm text-on-surface-variant cursor-help" title="Tiền cọc sẽ được hoàn trả 100% sau khi kiểm tra xe.">info</span>
                                    </div>
                                    <span class="font-title-lg text-title-lg text-on-surface font-bold">{{ Number(form.tien_coc).toLocaleString('vi-VN') }}đ</span>
                                </div>
                                <div class="p-lg bg-primary/5 rounded-2xl border border-primary/10 mt-xl">
                                    <div class="flex justify-between items-center mb-xs">
                                        <span class="font-title-lg text-title-lg text-on-surface font-bold">Tổng tiền thuê</span>
                                        <span class="font-display-sm text-display-sm text-primary">{{ Number(totalPrice).toLocaleString('vi-VN') }}đ</span>
                                    </div>
                                    <p class="font-label-sm text-label-sm text-on-surface-variant">Đã bao gồm thuế VAT và phí dịch vụ.</p>
                                </div>
                            </div>
                            <div class="pt-lg">
                                <button :disabled="loading || totalDays <= 0" class="w-full h-14 bg-primary text-white rounded-xl font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary/90 hover-lift active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
                                    {{ loading ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN THUÊ XE' }}
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

    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'DatThuXe',
    data() {
        return {
            vehicle: null,
            form: {
                ngay_nhan_du_kien: '',
                ngay_tra_du_kien: '',
                tien_coc: 1000000,
                ma_xe: null,
            },
            loading: false,
            errorMessage: '',
            successMessage: '',
        };
    },
    computed: {
        totalDays() {
            if (!this.form.ngay_nhan_du_kien || !this.form.ngay_tra_du_kien) return 0;
            const start = new Date(this.form.ngay_nhan_du_kien);
            const end = new Date(this.form.ngay_tra_du_kien);
            if (end < start) return 0;
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays === 0 ? 1 : diffDays;
        },
        totalPrice() {
            if (!this.vehicle) return 0;
            return this.totalDays * Number(this.vehicle.gia_thue_ngay);
        }
    },
    async mounted() {
        const id = this.$route.query.id;
        this.form.ma_xe = id;
        
        // Set default dates: today & tomorrow
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        this.form.ngay_nhan_du_kien = today.toISOString().split('T')[0];
        this.form.ngay_tra_du_kien = tomorrow.toISOString().split('T')[0];

        if (id) {
            await this.fetchVehicle(id);
        }
    },
    methods: {
        async fetchVehicle(id) {
            try {
                this.vehicle = await api.get(`/xe-may/${id}`);
            } catch (error) {
                this.errorMessage = 'Không thể tải thông tin xe máy.';
            }
        },
        async handleBooking() {
            this.loading = true;
            this.errorMessage = '';
            this.successMessage = '';
            try {
                await api.post('/don-thue', this.form);
                this.successMessage = 'Đặt xe thành công! Đang chuyển hướng sang lịch sử thuê xe...';
                setTimeout(() => {
                    this.$router.push('/lich-su-thu-xe');
                }, 2000);
            } catch (error) {
                this.errorMessage = error.message || 'Lỗi khi tạo đơn đặt xe.';
            } finally {
                this.loading = false;
            }
        }
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
