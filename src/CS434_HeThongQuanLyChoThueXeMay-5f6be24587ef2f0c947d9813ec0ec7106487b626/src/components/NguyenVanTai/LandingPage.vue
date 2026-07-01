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
                        <button class="px-8 py-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-0">
                            Thuê ngay
                        </button>
                    </div>
                </div>
                <!-- Glassmorphism Search Bar -->
                <div class="mt-16 w-full max-w-4xl glass-effect border border-white/40 p-lg rounded-[24px] shadow-2xl flex flex-col md:flex-row gap-lg items-end">
                    <div class="flex-1 space-y-2 w-full">
                        <label class="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                            <span class="material-symbols-outlined text-[18px]">location_on</span> Địa điểm
                        </label>
                        <input class="w-full h-12 px-4 rounded-xl border border-outline-variant bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline" placeholder="Bạn muốn nhận xe ở đâu?" type="text"/>
                    </div>
                    <div class="flex-1 space-y-2 w-full">
                        <label class="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                            <span class="material-symbols-outlined text-[18px]">calendar_today</span> Ngày nhận &amp; trả
                        </label>
                        <input class="w-full h-12 px-4 rounded-xl border border-outline-variant bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline" placeholder="Chọn thời gian" type="text"/>
                    </div>
                    <div class="flex-1 space-y-2 w-full">
                        <label class="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                            <span class="material-symbols-outlined text-[18px]">motorcycle</span> Loại xe
                        </label>
                        <select class="w-full h-12 px-4 rounded-xl border border-outline-variant bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-on-surface appearance-none">
                            <option>Tất cả các loại</option>
                            <option>Xe tay ga</option>
                            <option>Xe số</option>
                            <option>Xe côn tay</option>
                            <option>Xe điện</option>
                        </select>
                    </div>
                    <button class="h-12 w-full md:w-auto px-10 bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
                        <span class="material-symbols-outlined">search</span> Tìm xe
                    </button>
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
                    <a class="text-primary font-label-md text-label-md flex items-center gap-2 hover:underline" href="#">
                        Xem tất cả <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    <!-- Bike Card 1 -->
                    <div class="bg-white rounded-[16px] overflow-hidden border border-outline-variant/30 hover-lift group">
                        <div class="h-56 relative overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A side view of a high-end white 2026 Honda SH160i scooter, parked against a minimalist urban concrete wall. The lighting is soft and neutral, highlighting the glossy finish and premium leather seat. The image is clean, modern, and perfectly suited for a premium rental listing, showing every detail of the bike's design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI8uQG2rHFBowsfOHeqrR_vOARPaBZQPneRzU4d5dXSBxcIVHTw633XO4BBXzBXsqq-eUo-B2UhUM51azW2ZsDIxnb7EShoxJEhP7GtYhZnHomMtmyJhmbzwC-IcXO8PFq1jFfCe678D-WypqRJlb9RXzw0q99zNBAmfNOXME2oBiKkkrUmT76mfsTVJrX7929fzB274QVpQePcvg41RaQF_egNbfqPD_Tuf746jpFZ_BiGdKTw1etZvAlrsmiawmk7KJdXOXF2Yj2"/>
                            <div class="absolute top-4 left-4 px-3 py-1 bg-green-100 text-green-700 text-label-sm font-label-sm rounded-full flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-green-500">
                                </span> Available
                            </div>
                        </div>
                        <div class="p-lg space-y-4">
                            <div>
                                <h3 class="text-title-lg font-title-lg text-on-surface">Honda SH 160i 2026</h3>
                                <p class="text-label-sm font-label-sm text-on-surface-variant">Tay ga | 160cc</p>
                            </div>
                            <div class="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                                <div>
                                    <span class="text-primary font-bold text-title-lg">250.000đ</span>
                                    <span class="text-label-sm font-label-sm text-on-surface-variant">/ngày</span>
                                </div>
                            </div>
                            <button class="w-full py-3 bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-200">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                    <!-- Bike Card 2 -->
                    <div class="bg-white rounded-[16px] overflow-hidden border border-outline-variant/30 hover-lift group">
                        <div class="h-56 relative overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A sleek navy blue Yamaha Exciter 155 VVA under-bone motorbike, captured in a dynamic 3/4 front view. Set in a modern city street at night with soft neon light reflections on the pavement. The bike is clean, polished, and represents high performance for city travelers. High-quality photography with shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8RwVgFzFg4YWGG1udhosyYtRMzjGR7kihj2MHYaWxZbVno3IAapgrRk8j1pTCWU46QotAfd4qNg8s9aGMmN1MUBJFGYc4ZnSAo2dUJI6tWFNhd1TivCvDndvze26YUCALhmP08Aj9T81Io7ioSBbH_SpKIJaJMKF1a4tnIR7iQUflCwhLNLjnuYYS6kdkzHyqfAfN0A1dVds-GfhYxRvw_qPV4vazhYVaL83Wh2g6PBb9gIgU4M6mIj8Mkg3oE1b3mzbqyPAWOgqp"/>
                            <div class="absolute top-4 left-4 px-3 py-1 bg-green-100 text-green-700 text-label-sm font-label-sm rounded-full flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-green-500">
                                </span> Available
                            </div>
                        </div>
                        <div class="p-lg space-y-4">
                            <div>
                                <h3 class="text-title-lg font-title-lg text-on-surface">Yamaha Exciter 155</h3>
                                <p class="text-label-sm font-label-sm text-on-surface-variant">Xe côn | 155cc</p>
                            </div>
                            <div class="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                                <div>
                                    <span class="text-primary font-bold text-title-lg">180.000đ</span>
                                    <span class="text-label-sm font-label-sm text-on-surface-variant">/ngày</span>
                                </div>
                            </div>
                            <button class="w-full py-3 bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-200">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                    <!-- Bike Card 3 -->
                    <div class="bg-white rounded-[16px] overflow-hidden border border-outline-variant/30 hover-lift group">
                        <div class="h-56 relative overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A modern VinFast Evo200 Lite electric scooter in bright orange, parked in a lush green park setting with natural morning sunlight filtering through trees. The image highlights the eco-friendly and stylish nature of the vehicle. The overall mood is fresh, energetic, and clean-mode friendly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5GlcNNDIxqZo1M0AnHKS4xNNr6-Y1Roq0JIjcy55j4-DW-PsZacgReZcylba9fRoH18IifIsZPEkQooXfzcH4yGGece3Yq1GRALQFhIp1z5AM4GoFafVRWzQ0MrV5oIXNSnZ4aUjhebZg6RhdVWuE9ikR5G4zy6B0tx5RAD9_MgOYcvSv4SlhnD97aozP5LBgCCoZhPO9NNnjkXtbZ31LAoKidhejAYzYP5i2bAPjPsoYvOUG7V8dOk7QGfnSP_kzE5QyBPnCqFIy"/>
                            <div class="absolute top-4 left-4 px-3 py-1 bg-green-100 text-green-700 text-label-sm font-label-sm rounded-full flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-green-500">
                                </span> Available
                            </div>
                        </div>
                        <div class="p-lg space-y-4">
                            <div>
                                <h3 class="text-title-lg font-title-lg text-on-surface">VinFast Evo200</h3>
                                <p class="text-label-sm font-label-sm text-on-surface-variant">Xe điện | 70km/h</p>
                            </div>
                            <div class="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                                <div>
                                    <span class="text-primary font-bold text-title-lg">120.000đ</span>
                                    <span class="text-label-sm font-label-sm text-on-surface-variant">/ngày</span>
                                </div>
                            </div>
                            <button class="w-full py-3 bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-200">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                    <!-- Bike Card 4 -->
                    <div class="bg-white rounded-[16px] overflow-hidden border border-outline-variant/30 hover-lift group">
                        <div class="h-56 relative overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A vintage-style Honda Super Cub C125 in pearl blue and cream, showcased in a trendy urban cafe district. The image emphasizes nostalgia combined with modern technology. The lighting is bright and airy, with soft shadows and a high-end commercial photography feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwOy_5Ch0WH-nUitPgPsd68WMxESQcVDiVt6LC3fTG9xj5oWWbMYl4E1yOmsPny5j8ITyT4SpXzmvdohnkVs1ZNIzfjBWcyrDdBP3m4ZC5mfD5jyO-G2uHNNC_cti3OOeqIFr5h_AJPXa5mX7mlgJEITva66NfiZNpkY8JToW_jIwGFMUvZekIsBjhcgyVNGRd8sENlAPdnTE64GUj-3VSzFW71nt9dsqA7M6T9qyLpXsUws0de6KNVrLCgMUwf_3N4KGGyLcQOMD_"/>
                            <div class="absolute top-4 left-4 px-3 py-1 bg-green-100 text-green-700 text-label-sm font-label-sm rounded-full flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-green-500">
                                </span> Available
                            </div>
                        </div>
                        <div class="p-lg space-y-4">
                            <div>
                                <h3 class="text-title-lg font-title-lg text-on-surface">Honda Super Cub C125</h3>
                                <p class="text-label-sm font-label-sm text-on-surface-variant">Xe số | 125cc</p>
                            </div>
                            <div class="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                                <div>
                                    <span class="text-primary font-bold text-title-lg">200.000đ</span>
                                    <span class="text-label-sm font-label-sm text-on-surface-variant">/ngày</span>
                                </div>
                            </div>
                            <button class="w-full py-3 bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-200">
                                Xem chi tiết
                            </button>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LandingPage'
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
