<template>
    <div>
        <!-- 1. Header: TopNavBar -->
        <!-- 2. Hero Section -->
        <section class="relative min-h-[921px] flex items-center pt-[72px] overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="w-full h-full bg-cover bg-center" data-alt="A professional high-resolution photography of a premium matte black touring motorbike parked on a scenic coastal mountain road during the golden hour. The warm sunlight reflects off the metallic surfaces of the bike, creating a luxurious and adventurous atmosphere. The background shows soft-focus ocean waves and a winding asphalt path, emphasizing freedom and high-end travel. Modern lighting and crisp details evoke a premium rental service vibe." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAznnnGlFhZBo6ziPKb2pIQPZAGF5qTU3yLjgeRuLcUtRCIQzOXmmMnmrRWil-faX5b0IF8_dopPuafG1F_wQHU5N5h8pnMZc-6-CdBjSiuuhRfCBTDA9TkKYu8nuZjXn0NVMrWIM7T7XBN3fN_7SfkM85kQp1KjFx8Ss13KUGfZKathq3RxtTWzNApgIU7VY7Y4ZUulpXK8ZdYfkWNZFb3MjAWHuECkHZ0yY07M9tEx4IqA2xwSL_tPd_jH2Qa_1pNDYTFSnRVLUKD')">
                </div>
                <div class="absolute inset-0 bg-gradient-to-r from-surface-bright/90 via-surface-bright/40 to-transparent">
                </div>
            </div>
            <div class="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop py-2xl">
                <div class="max-w-2xl space-y-6">
                    <h1 class="text-display-lg font-display-lg text-on-surface leading-tight">Tự do khám phá trên từng cung đường</h1>
                    <p class="text-body-lg font-body-lg text-on-surface-variant opacity-90 max-w-lg">
                        Hệ thống quản lý và cho thuê xe máy hàng đầu. Đa dạng dòng xe, thủ tục nhanh chóng, hành trình trọn vẹn. Khám phá ngay bộ sưu tập xe 2026 của chúng tôi.
                    </p>
                    <div class="pt-4">
                        <button @click="$router.push('/danh-sach-xe')" class="px-8 py-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-0">
                            Thuê ngay
                        </button>
                    </div>
                </div>

            </div>
        </section>
        <!-- 3. Categories -->
        <section class="py-3xl bg-surface">
            <div class="max-w-container-max mx-auto px-margin-desktop">
                <div class="text-center mb-xl">
                    <h2 class="text-headline-lg font-headline-lg text-on-surface">Danh mục xe</h2>
                    <div class="h-1.5 w-16 bg-primary mx-auto mt-4 rounded-full">
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-lg">
                    <!-- Category Item -->
                    <router-link to="/danh-sach-xe" class="group cursor-pointer p-xl bg-surface-container-low border border-outline-variant rounded-[24px] flex flex-col items-center justify-center gap-4 hover-lift hover:bg-primary hover:border-primary transition-all duration-300 text-decoration-none">
                        <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <span class="material-symbols-outlined text-on-primary-container group-hover:text-primary text-[32px]">motorcycle</span>
                        </div>
                        <span class="text-title-lg font-title-lg text-on-surface group-hover:text-white">Xe số</span>
                    </router-link>
                    <router-link to="/danh-sach-xe" class="group cursor-pointer p-xl bg-surface-container-low border border-outline-variant rounded-[24px] flex flex-col items-center justify-center gap-4 hover-lift hover:bg-primary hover:border-primary transition-all duration-300 text-decoration-none">
                        <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <span class="material-symbols-outlined text-on-primary-container group-hover:text-primary text-[32px]">moped</span>
                        </div>
                        <span class="text-title-lg font-title-lg text-on-surface group-hover:text-white">Xe ga</span>
                    </router-link>
                    <router-link to="/danh-sach-xe" class="group cursor-pointer p-xl bg-surface-container-low border border-outline-variant rounded-[24px] flex flex-col items-center justify-center gap-4 hover-lift hover:bg-primary hover:border-primary transition-all duration-300 text-decoration-none">
                        <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <span class="material-symbols-outlined text-on-primary-container group-hover:text-primary text-[32px]">sports_motorsports</span>
                        </div>
                        <span class="text-title-lg font-title-lg text-on-surface group-hover:text-white">Xe côn</span>
                    </router-link>
                    <router-link to="/danh-sach-xe" class="group cursor-pointer p-xl bg-surface-container-low border border-outline-variant rounded-[24px] flex flex-col items-center justify-center gap-4 hover-lift hover:bg-primary hover:border-primary transition-all duration-300 text-decoration-none">
                        <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <span class="material-symbols-outlined text-on-primary-container group-hover:text-primary text-[32px]">electric_bolt</span>
                        </div>
                        <span class="text-title-lg font-title-lg text-on-surface group-hover:text-white">Xe điện</span>
                    </router-link>
                </div>
            </div>
        </section>
        <!-- 4. Featured Bikes -->
        <section class="py-3xl bg-surface-container-lowest">
            <div class="max-w-container-max mx-auto px-margin-desktop">
                <div class="flex justify-between items-end mb-xl">
                    <div>
                        <h2 class="text-headline-lg font-headline-lg text-on-surface">Xe nổi bật</h2>
                        <p class="text-body-md font-body-md text-on-surface-variant mt-2">Lựa chọn hàng đầu từ cộng đồng lái xe</p>
                    </div>
                    <router-link class="text-primary font-label-md text-label-md flex items-center gap-2 hover:underline" to="/danh-sach-xe">
                        Xem tất cả <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </router-link>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    <!-- Dynamic Bike Card -->
                    <div v-for="bike in featuredVehicles" :key="bike.ma_xe || bike.id" class="bg-white rounded-[16px] overflow-hidden border border-outline-variant/30 hover-lift group flex flex-col justify-between">
                        <div>
                            <div class="h-56 relative overflow-hidden bg-surface-container">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" :src="bike.hinh_anh || 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80'" :alt="bike.ten_xe"/>
                                <div class="absolute top-4 left-4 px-3 py-1 text-label-sm font-label-sm rounded-full flex items-center gap-1" :class="[bike.tinh_trang_xe === 'SanSang' || bike.tinh_trang_xe === 'Sẵn Sàng' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700']">
                                    <span class="w-2 h-2 rounded-full" :class="[bike.tinh_trang_xe === 'SanSang' || bike.tinh_trang_xe === 'Sẵn Sàng' ? 'bg-green-500' : 'bg-orange-500']"></span> 
                                    {{ bike.tinh_trang_xe === 'SanSang' || bike.tinh_trang_xe === 'Sẵn Sàng' ? 'Sẵn sàng' : 'Đang bận' }}
                                </div>
                            </div>
                            <div class="p-lg space-y-2">
                                <h3 class="text-title-lg font-title-lg text-on-surface truncate">{{ bike.ten_xe }}</h3>
                                <p class="text-label-sm font-label-sm text-on-surface-variant">{{ bike.danh_muc_xe ? bike.danh_muc_xe.ten_danh_muc : 'Xe máy' }} | {{ bike.mau_sac || 'N/A' }}</p>
                                <div class="flex justify-between items-center border-t border-outline-variant/20 pt-4 mt-2">
                                    <div>
                                        <span class="text-primary font-bold text-title-lg">{{ Number(bike.gia_thue_ngay).toLocaleString('vi-VN') }}đ</span>
                                        <span class="text-label-sm font-label-sm text-on-surface-variant">/ngày</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-lg pt-0">
                            <router-link :to="`/chi-tiet-xe?id=${bike.ma_xe || bike.id}`" class="w-full py-3 bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-200 block text-center text-decoration-none">
                                Xem chi tiết
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 5. Rental Process -->
        <section class="py-3xl bg-surface overflow-hidden relative">
            <div class="absolute -right-24 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl">
            </div>
            <div class="max-w-container-max mx-auto px-margin-desktop relative z-10">
                <div class="text-center mb-2xl">
                    <h2 class="text-headline-lg font-headline-lg text-on-surface">Quy trình thuê xe</h2>
                    <p class="text-body-lg font-body-lg text-on-surface-variant mt-2">Dễ dàng bắt đầu hành trình chỉ với 4 bước đơn giản</p>
                </div>
                <div class="relative">
                    <!-- Line connecting steps (Desktop only) -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/30 -translate-y-1/2 z-0">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-xl relative z-10">
                        <!-- Step 1 -->
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 rounded-2xl bg-white border border-outline-variant shadow-sm flex items-center justify-center relative">
                                <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-on-primary text-label-md font-label-md flex items-center justify-center">1</span>
                                <span class="material-symbols-outlined text-[32px] text-primary">search_check</span>
                            </div>
                            <h4 class="text-title-lg font-title-lg text-on-surface">Chọn xe</h4>
                            <p class="text-body-md font-body-md text-on-surface-variant">Tìm kiếm và lựa chọn chiếc xe ưng ý nhất cho bạn.</p>
                        </div>
                        <!-- Step 2 -->
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 rounded-2xl bg-white border border-outline-variant shadow-sm flex items-center justify-center relative">
                                <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-on-primary text-label-md font-label-md flex items-center justify-center">2</span>
                                <span class="material-symbols-outlined text-[32px] text-primary">event_available</span>
                            </div>
                            <h4 class="text-title-lg font-title-lg text-on-surface">Đặt lịch</h4>
                            <p class="text-body-md font-body-md text-on-surface-variant">Xác nhận thời gian nhận xe và điền thông tin cần thiết.</p>
                        </div>
                        <!-- Step 3 -->
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 rounded-2xl bg-white border border-outline-variant shadow-sm flex items-center justify-center relative">
                                <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-on-primary text-label-md font-label-md flex items-center justify-center">3</span>
                                <span class="material-symbols-outlined text-[32px] text-primary">key</span>
                            </div>
                            <h4 class="text-title-lg font-title-lg text-on-surface">Nhận xe</h4>
                            <p class="text-body-md font-body-md text-on-surface-variant">Nhận xe tại địa điểm đã chọn hoặc dịch vụ giao xe tận nơi.</p>
                        </div>
                        <!-- Step 4 -->
                        <div class="flex flex-col items-center text-center space-y-4">
                            <div class="w-20 h-20 rounded-2xl bg-white border border-outline-variant shadow-sm flex items-center justify-center relative">
                                <span class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-on-primary text-label-md font-label-md flex items-center justify-center">4</span>
                                <span class="material-symbols-outlined text-[32px] text-primary">distance</span>
                            </div>
                            <h4 class="text-title-lg font-title-lg text-on-surface">Bắt đầu hành trình</h4>
                            <p class="text-body-md font-body-md text-on-surface-variant">Tận hưởng hành trình khám phá đầy tự do và thoải mái.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 6. Testimonials -->
        <section class="py-3xl bg-surface-container-low">
            <div class="max-w-container-max mx-auto px-margin-desktop">
                <div class="text-center mb-xl">
                    <h2 class="text-headline-lg font-headline-lg text-on-surface">Đánh giá khách hàng</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
                    <!-- Testimonial 1 -->
                    <div class="bg-white p-xl rounded-[24px] shadow-sm space-y-6 hover-lift border border-outline-variant/10">
                        <div class="flex gap-1">
                            <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1;">star</span>
                            <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1;">star</span>
                            <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1;">star</span>
                            <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1;">star</span>
                            <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                        <p class="text-body-md text-on-surface-variant">Dịch vụ cho thuê xe vô cùng chuyên nghiệp. Xe tay ga chạy êm ái, đầy xăng và mũ bảo hiểm sạch sẽ. Sẽ tiếp tục ủng hộ khi quay lại Hà Nội!</p>
                        <div class="flex items-center gap-md">
                            <div class="w-10 h-10 rounded-full bg-primary-container text-primary font-bold flex items-center justify-center text-label-md">KH</div>
                            <div>
                                <h5 class="font-bold text-on-surface text-label-md">Nguyễn Hoàng Nam</h5>
                                <p class="text-xs text-outline">Khách hàng thuê xe ga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'LandingPage',
    data() {
        return {
            vehicles: [],
            loading: false,
        };
    },
    computed: {
        featuredVehicles() {
            // Get up to 4 motorbikes to feature on landing page
            return this.vehicles.slice(0, 4);
        }
    },
    async mounted() {
        this.loading = true;
        try {
            this.vehicles = await api.get('/xe-may');
        } catch (error) {
            console.error('Lỗi tải danh sách xe:', error);
        } finally {
            this.loading = false;
        }
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; background-color: #faf8ff; }
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.glass-effect { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.hover-lift { transition: all 200ms ease-in-out; }
.hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1); }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #c3c6d7; border-radius: 10px; }
</style>
