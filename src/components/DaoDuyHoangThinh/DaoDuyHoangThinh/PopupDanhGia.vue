<template>
    <div>

        <main class="pt-32 pb-2xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
                <div class="flex items-center gap-md">
                    <button
                        class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
                        @click="$router.back()">
                        <span class="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Chi tiết
                        đơn thuê <span class="text-primary">#{{ order ? order.ma_don_thue : '...' }}</span>
                    </h1>
                </div>

            </div>

            <section class="glass-card rounded-xl p-lg mb-xl relative overflow-hidden" v-if="order">
                <div class="absolute top-0 left-0 w-full h-1 bg-surface-container-highest">
                    <div class="h-full transition-all duration-500"
                        :class="order.trang_thai_don === 'DaHuy' ? 'bg-error' : 'bg-primary'"
                        :style="{ width: getTimelineProgress(order.trang_thai_don) + '%' }">
                    </div>
                </div>
                <div class="flex justify-between items-start relative pt-2">
                    <!-- Step 1 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center mb-sm shadow-md transition-colors"
                            :class="isStepActive(order.trang_thai_don, 1) ? (order.trang_thai_don === 'DaHuy' ? 'bg-error text-on-error' : 'bg-primary text-on-primary') : 'bg-surface-container text-outline border-2 border-dashed border-outline-variant'">
                            <span class="material-symbols-outlined">check</span>
                        </div>
                        <span class="font-label-md text-label-md font-bold"
                            :class="isStepActive(order.trang_thai_don, 1) ? (order.trang_thai_don === 'DaHuy' ? 'text-error' : 'text-primary') : 'text-on-surface-variant'">Đã
                            đặt</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">{{ formatDateTime(order.ngay_dat)
                            }}</span>
                    </div>
                    <!-- Step 2 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center mb-sm shadow-md transition-colors"
                            :class="isStepActive(order.trang_thai_don, 2) ? 'bg-primary text-on-primary' : 'bg-surface-container text-outline border-2 border-dashed border-outline-variant'">
                            <span class="material-symbols-outlined">verified</span>
                        </div>
                        <span class="font-label-md text-label-md font-bold"
                            :class="isStepActive(order.trang_thai_don, 2) ? 'text-primary' : 'text-on-surface-variant'">Đã
                            duyệt</span>
                    </div>
                    <!-- Step 3 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center mb-sm shadow-md transition-colors"
                            :class="[isStepActive(order.trang_thai_don, 3) ? 'bg-primary text-on-primary' : 'bg-surface-container text-outline border-2 border-dashed border-outline-variant', order.trang_thai_don === 'DangThue' ? 'animate-pulse' : '']">
                            <span class="material-symbols-outlined"
                                :style="{ fontVariationSettings: isStepActive(order.trang_thai_don, 3) ? `'FILL' 1` : `'FILL' 0` }">directions_bike</span>
                        </div>
                        <span class="font-label-md text-label-md font-bold"
                            :class="isStepActive(order.trang_thai_don, 3) ? 'text-primary' : 'text-on-surface-variant'">Đang
                            thuê</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">Từ {{
                            formatDateTime(order.ngay_nhan_du_kien) }}</span>
                    </div>
                    <!-- Step 4 -->
                    <div class="flex flex-col items-center text-center w-1/4">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center mb-sm shadow-md transition-colors"
                            :class="isStepActive(order.trang_thai_don, 4) ? (order.trang_thai_don === 'DaHuy' ? 'bg-error text-on-error' : 'bg-primary text-on-primary') : 'bg-surface-container text-outline border-2 border-dashed border-outline-variant'">
                            <span class="material-symbols-outlined">{{ order.trang_thai_don === 'DaHuy' ? 'cancel' :
                                'assignment_return' }}</span>
                        </div>
                        <span class="font-label-md text-label-md font-bold"
                            :class="isStepActive(order.trang_thai_don, 4) ? (order.trang_thai_don === 'DaHuy' ? 'text-error' : 'text-primary') : 'text-on-surface-variant'">{{
                                order.trang_thai_don === 'DaHuy' ? 'Đã huỷ' : 'Đã trả' }}</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant">{{ order.trang_thai_don ===
                            'DaHuy' ? '' : 'Dự kiến ' + formatDateTime(order.ngay_tra_du_kien) }}</span>
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
                            <img class="w-full h-full object-cover"
                                :src="order && order.xe_may && order.xe_may.hinh_anh ? order.xe_may.hinh_anh : 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwdhMVGbZYt-E3YUpmSe97OQBzueg5PkNgATXyDRGckqSAPM1Pe2lc7LuCPQIAbsHANtXcCjgg9RV34Ea9CE_fh7KBgNJISjQbvR_bT80qD1PYdgSPz2GXQiGRBAfnC8hwoIUARudNvTH_Wajs7SETuExm1S61w3vz8eebIaHn3boFMpxx3pqluG_9grXY1Z_JP6W14pcVEikg5W_dPtHTFxM_EIMkQpyPq7-celDu6kZv2mUWN4iLYSqjGPSHLuEU5J1Cgsqe_pR'"
                                alt="Vehicle Image" />
                        </div>
                        <div class="p-lg md:w-1/2 flex flex-col justify-between">
                            <div v-if="order && order.xe_may">
                                <div class="flex justify-between items-start mb-sm">
                                    <span
                                        class="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg text-label-sm font-label-sm">{{
                                            order.xe_may.danh_muc ? order.xe_may.danh_muc.ten_danh_muc : 'Xe cho thuê'
                                        }}</span>
                                    <span class="text-primary font-bold text-title-lg">{{ order.xe_may.bien_so_xe
                                        }}</span>
                                </div>
                                <h2 class="font-title-lg text-title-lg text-on-surface mb-xs">{{ order.xe_may.ten_xe }}
                                </h2>
                                <p class="font-body-md text-on-surface-variant mb-md">Màu {{ order.xe_may.mau_sac ||
                                    'N/A' }}</p>
                                <div class="grid grid-cols-2 gap-md">
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-outline">calendar_today</span>
                                        <div>
                                            <p class="text-[10px] uppercase font-bold text-outline">Đời xe</p>
                                            <p class="font-label-md">{{ order.xe_may.nam_san_xuat || 'N/A' }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-outline">speed</span>
                                        <div>
                                            <p class="text-[10px] uppercase font-bold text-outline">Tình trạng</p>
                                            <p class="font-label-md">{{ order.xe_may.tinh_trang_xe || 'Tốt' }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-lg pt-md border-t border-outline-variant/30">
                                <button
                                    class="w-full py-sm bg-surface-container-low text-primary font-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all">Xem
                                    thông tin chi tiết xe</button>
                            </div>
                        </div>
                    </div>
                    <!-- Logistics Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        <!-- Giao xe -->
                        <div class="glass-card rounded-xl p-lg border-l-4 border-l-primary" v-if="order">
                            <div class="flex items-center gap-md mb-md">
                                <div class="p-sm bg-primary-fixed rounded-xl">
                                    <span class="material-symbols-outlined text-primary">hail</span>
                                </div>
                                <h3 class="font-title-lg text-on-surface">Giao xe</h3>
                            </div>
                            <div class="space-y-md">
                                <div class="flex items-start gap-sm">
                                    <span
                                        class="material-symbols-outlined text-outline text-[20px] mt-xs">location_on</span>
                                    <p class="font-body-md text-on-surface-variant">{{ order.dia_diem_giao_xe || 'Tại cửa hàng' }}</p>
                                </div>
                                <div class="flex items-center gap-sm">
                                    <span class="material-symbols-outlined text-outline text-[20px]">schedule</span>
                                    <p class="font-body-md text-on-surface-variant">{{ formatDateTime(order.ngay_dat) }}
                                    </p>
                                </div>
                                <div class="p-md bg-surface-container rounded-xl flex items-center justify-between"
                                    v-if="order.giao_xe">
                                    <div class="flex items-center gap-sm">
                                        <div
                                            class="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[12px] font-bold">
                                            NV</div>
                                        <div>
                                            <p class="text-label-sm">Nhân viên giao xe</p>
                                            <p class="text-[10px] text-on-surface-variant">Phụ trách giao xe</p>
                                        </div>
                                    </div>
                                    <button class="text-primary">
                                        <span class="material-symbols-outlined">call</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Nhận xe -->
                        <div class="glass-card rounded-xl p-lg border-l-4 border-l-outline-variant" v-if="order">
                            <div class="flex items-center gap-md mb-md">
                                <div class="p-sm bg-surface-variant rounded-xl">
                                    <span
                                        class="material-symbols-outlined text-on-surface-variant">assignment_return</span>
                                </div>
                                <h3 class="font-title-lg text-on-surface">Nhận xe (Dự kiến)</h3>
                            </div>
                            <div class="space-y-md">
                                <div class="flex items-start gap-sm">
                                    <span
                                        class="material-symbols-outlined text-outline text-[20px] mt-xs">location_on</span>
                                    <p class="font-body-md text-on-surface-variant">{{ order.dia_diem_nhan_xe || 'Tại cửa hàng' }}</p>
                                </div>
                                <div class="flex items-center gap-sm">
                                    <span class="material-symbols-outlined text-outline text-[20px]">schedule</span>
                                    <p class="font-body-md text-on-surface-variant">{{
                                        formatDateTime(order.ngay_tra_du_kien) }}</p>
                                </div>
                                <div class="border-t border-dashed border-outline-variant/50 pt-md">
                                    <p class="text-label-sm font-bold mb-xs">Checklist thu hồi:</p>
                                    <ul class="text-[12px] space-y-1 text-on-surface-variant">
                                        <li class="flex items-center gap-xs">
                                            <span
                                                class="material-symbols-outlined text-[14px]">check_box_outline_blank</span>
                                            Kiểm tra ngoại quan xe
                                        </li>
                                        <li class="flex items-center gap-xs">
                                            <span
                                                class="material-symbols-outlined text-[14px]">check_box_outline_blank</span>
                                            Đối chiếu Odometer
                                        </li>
                                        <li class="flex items-center gap-xs">
                                            <span
                                                class="material-symbols-outlined text-[14px]">check_box_outline_blank</span>
                                            Thu hồi 02 chìa khóa/remote
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right Column: Customer & Summary -->
                <div class="lg:col-span-4 flex flex-col gap-lg">
                    <!-- Customer Info Card -->
                    <div class="glass-card rounded-xl p-lg" v-if="order && order.khach_hang">
                        <h3 class="font-title-lg text-on-surface mb-md">Thông tin khách hàng</h3>
                        <div class="flex items-center gap-md mb-lg">
                            <div
                                class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-display-sm">
                                {{ order.khach_hang.ho_ten ? order.khach_hang.ho_ten.charAt(0).toUpperCase() : 'KH' }}
                            </div>
                            <div>
                                <p class="font-title-lg text-on-surface">{{ order.khach_hang.ho_ten }}</p>
                                <p class="font-body-md text-on-surface-variant">Hạng thành viên: Thành viên</p>
                            </div>
                        </div>
                        <div class="space-y-md">
                            <div class="flex justify-between items-center">
                                <span class="text-on-surface-variant text-body-md">Số điện thoại</span>
                                <span class="font-label-md">{{ order.khach_hang.so_dien_thoai || 'N/A' }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-on-surface-variant text-body-md">Email</span>
                                <span class="font-label-md">{{ order.khach_hang.email || 'N/A' }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-on-surface-variant text-body-md">CCCD/Hộ chiếu</span>
                                <span class="font-label-md">{{ order.khach_hang.cccd || 'N/A' }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-on-surface-variant text-body-md">GPLX</span>
                                <span class="font-label-md">{{ order.khach_hang.gplx || 'N/A' }}</span>
                            </div>
                        </div>
                        <button
                            class="w-full mt-lg py-sm border border-primary text-primary font-label-md rounded-xl hover:bg-primary-fixed transition-all">Sửa
                            thông tin</button>
                    </div>
                    <!-- Rental Summary Card -->
                    <div class="glass-card rounded-xl p-lg bg-surface-container-low border-none" v-if="order">
                        <h3 class="font-title-lg text-on-surface mb-md">Tổng kết đơn thuê</h3>
                        <div class="space-y-md mb-xl">
                            <div class="flex justify-between">
                                <span class="text-on-surface-variant text-body-md">Giá thuê</span>
                                <span class="font-label-md">{{ formatCurrency(order.tong_tien_thue) }}</span>
                            </div>
                            <div class="flex justify-between text-tertiary" v-if="order.khuyen_mai">
                                <span class="text-body-md">Giảm giá</span>
                                <span class="font-label-md">-{{ formatCurrency(order.giam_gia || 0) }}</span>
                            </div>
                            <div class="pt-md border-t border-outline-variant flex justify-between items-end">
                                <div>
                                    <p class="text-on-surface-variant text-[12px] font-bold uppercase">Tổng thanh toán
                                    </p>
                                    <p class="font-display-sm text-primary">{{ formatCurrency(order.tong_tien_thue) }}
                                    </p>
                                </div>
                                <span
                                    :class="order.thanh_toan ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'"
                                    class="px-md py-1 rounded-full text-[12px] font-bold">
                                    {{ order.thanh_toan ? 'Đã thanh toán' : 'Chưa thanh toán' }}
                                </span>
                            </div>
                            <div class="flex justify-between items-center p-md bg-white rounded-xl">
                                <div class="flex items-center gap-sm">
                                    <span class="material-symbols-outlined text-tertiary">account_balance_wallet</span>
                                    <span class="text-body-md">Tiền cọc (Hoàn lại)</span>
                                </div>
                                <span class="font-title-lg text-on-surface">{{ formatCurrency(order.tien_coc || 0)
                                    }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-sm">
                            <button
                                class="w-full py-md bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all">Gia
                                hạn thuê xe</button>
                            <p class="text-center text-[12px] text-on-surface-variant italic">Gia hạn tối thiểu 6 tiếng
                                trước giờ trả xe dự kiến</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            :class="[showRatingModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']">
            <div class="glass-card bg-white dark:bg-surface-dim w-full max-w-md mx-margin-mobile p-lg rounded-xl relative shadow-2xl transform transition-transform duration-300"
                :class="[showRatingModal ? 'scale-100' : 'scale-95']">
                <button class="absolute top-md right-md p-xs rounded-full hover:bg-surface-container transition-colors"
                    @click="showRatingModal = false">
                    <span class="material-symbols-outlined text-on-surface-variant">close</span>
                </button>
                <div class="text-center mb-lg">
                    <h2 class="font-headline-lg text-headline-lg-mobile text-on-surface mb-xs">Đánh giá trải nghiệm của
                        bạn</h2>
                    <p class="text-body-md text-on-surface-variant">Ý kiến của bạn giúp chúng tôi cải thiện dịch vụ tốt
                        hơn</p>
                </div>

                <!-- Rating Alerts -->
                <div v-if="errorMessage" class="mb-md p-sm bg-red-100 text-red-700 rounded-lg text-body-md">
                    {{ errorMessage }}
                </div>
                <div v-if="successMessage" class="mb-md p-sm bg-green-100 text-green-700 rounded-lg text-body-md">
                    {{ successMessage }}
                </div>

                <div class="flex justify-center gap-sm mb-lg">
                    <button v-for="star in 5" :key="star" class="star-btn group transition-transform active:scale-90"
                        type="button" @click="selectRating(star)">
                        <span class="material-symbols-outlined text-[40px] transition-colors"
                            :class="[star <= currentRating ? 'text-yellow-500' : 'text-outline']"
                            :style="{ fontVariationSettings: star <= currentRating ? `'FILL' 1` : `'FILL' 0` }">star</span>
                    </button>
                </div>
                <div class="mb-lg">
                    <label class="block font-label-md text-on-surface mb-xs">Nhận xét của bạn</label>
                    <textarea v-model="noi_dung"
                        class="w-full p-md rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[120px] font-body-md"
                        placeholder="Chia sẻ cảm nhận của bạn về chuyến đi này...">
                                </textarea>
                </div>
                <button :disabled="loading"
                    class="w-full py-md bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-50"
                    @click="submitRating">
                    {{ loading ? 'Đang gửi...' : 'Gửi đánh giá' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'PopupDanhGia',
    data() {
        return {
            order: null,
            showRatingModal: false,
            currentRating: 0,
            noi_dung: '',
            loading: false,
            errorMessage: '',
            successMessage: '',
        };
    },
    async mounted() {
        const id = this.$route.query.id;
        if (id) {
            await this.fetchOrderDetail(id);
        }
    },
    methods: {
        async fetchOrderDetail(id) {
            try {
                this.order = await api.get(`/don-thue/${id}`);
                // If order is completed (DaHoanThanh) and has no review yet, prompt rating modal
                if (this.order && this.order.trang_thai_don === 'DaHoanThanh' && !this.order.danh_gia) {
                    setTimeout(() => {
                        this.showRatingModal = true;
                    }, 1000);
                }
            } catch (error) {
                console.error('Lỗi tải chi tiết đơn thuê:', error);
            }
        },
        selectRating(val) {
            this.currentRating = val;
        },
        async submitRating() {
            if (this.currentRating === 0) {
                alert('Vui lòng chọn số sao đánh giá');
                return;
            }
            this.loading = true;
            this.errorMessage = '';
            this.successMessage = '';
            try {
                await api.post('/danh-gia', {
                    diem_so: this.currentRating,
                    noi_dung: this.noi_dung,
                    ma_don_thue: this.order.ma_don_thue || this.order.id,
                });
                this.successMessage = 'Đánh giá thành công! Cảm ơn bạn đã phản hồi.';
                setTimeout(() => {
                    this.showRatingModal = false;
                    this.fetchOrderDetail(this.order.ma_don_thue || this.order.id);
                }, 1500);
            } catch (error) {
                this.errorMessage = error.message || 'Lỗi khi gửi đánh giá.';
            } finally {
                this.loading = false;
            }
        },
        getTimelineProgress(status) {
            switch (status) {
                case 'ChoDuyet': return 25;
                case 'DaDuyet': return 50;
                case 'DangThue': return 75;
                case 'DaHoanThanh': return 100;
                case 'DaHuy': return 100;
                default: return 0;
            }
        },
        isStepActive(status, step) {
            const progress = this.getTimelineProgress(status);
            return progress >= (step * 25);
        },
        getStatusText(status) {
            const statusMap = {
                'ChoDuyet': 'Chờ duyệt',
                'DaDuyet': 'Đã duyệt',
                'DangThue': 'Đang thuê',
                'DaHoanThanh': 'Đã trả xe',
                'DaHuy': 'Đã hủy',
            };
            return statusMap[status] || status;
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
        formatDate(dateString) {
            if (!dateString) return 'N/A';
            const d = new Date(dateString);
            return d.toLocaleDateString('vi-VN');
        },
        formatDateTime(dateString) {
            if (!dateString) return 'N/A';
            const d = new Date(dateString);
            return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} • ${d.toLocaleDateString('vi-VN')}`;
        }
    }
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}

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
