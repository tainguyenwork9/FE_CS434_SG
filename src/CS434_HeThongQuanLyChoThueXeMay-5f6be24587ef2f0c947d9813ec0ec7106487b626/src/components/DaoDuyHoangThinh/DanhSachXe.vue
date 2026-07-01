<template>
    <div>
        <!-- TopNavBar -->
        <main class="pt-[96px] pb-3xl px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter">
            <!-- Left Sidebar Filter -->
            <!-- Right Content Area -->
            <section class="flex-grow">
                <!-- Search & Sort Bar -->
                <div class="flex flex-col md:flex-row gap-md mb-xl items-center">
                    <div class="relative flex-grow w-full">
                        <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input class="w-full h-12 pl-12 pr-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Tìm kiếm mẫu xe, hãng xe..." type="text"/>
                    </div>
                    <div class="flex items-center gap-md w-full md:w-auto">
                        <div class="relative w-full md:w-48">
                            <select class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl appearance-none outline-none focus:ring-2 focus:ring-primary cursor-pointer text-body-md">
                                <option>Sắp xếp theo</option>
                                <option>Giá: Thấp đến Cao</option>
                                <option>Giá: Cao đến Thấp</option>
                                <option>Phổ biến nhất</option>
                            </select>
                            <span class="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-outline">unfold_more</span>
                        </div>
                        <button class="h-12 w-12 flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-xl text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
                            <span class="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>
                <!-- Vehicle Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    <!-- Vehicle Card 1 -->
                    <div class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col">
                        <div class="relative h-56 w-full">
                            <img class="w-full h-full object-cover" data-alt="A side view of a sleek, black Honda SH 160i 2026 scooter parked in a modern, minimalist urban setting with clean architectural lines. High-end lighting accentuates the chrome details and premium finish of the motorcycle. The atmosphere is sophisticated and professional, reflecting the premium MotoRent Pro brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8nSd0E9Co0Bky7Mpd2C_Lv_OBpRpp5EEMxTSxHzxa23G9LZNZwkO7lAd2DuJsdrJASW10Zm_9wGiFACVGV9kt-SFF_gMEb91SbFNCmQOA58QaI1bKRe5jHi_v0gNhucfZUdYxVpi6kwKqK0WZhr5wQuI52emwHNxrDfkIAcGz8lTqRpV6dvxb4dyDKWcsCRRdqgFtvhiK71UIZef7kmoyH2D5PxhQhPvU650Z7zzxX-7IWNSmarjeqQ6wN8tJngVDxepZ_A_S-iI5"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">Xe ga</span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface">Honda SH 160i 2026</h3>
                                <span class="flex items-center gap-xs px-sm py-1 bg-green-100 text-green-700 rounded-full text-label-sm font-label-sm">
                                    <span class="w-2 h-2 rounded-full bg-green-500">
                                    </span>
                                    Available
                                </span>
                            </div>
                            <p class="text-primary font-bold text-headline-lg-mobile mb-xl">250.000đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant flex gap-md">
                                <button class="flex-grow py-md px-lg bg-primary-container text-on-primary-container rounded-xl font-bold text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-sm">
                                    Xem chi tiết
                                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Vehicle Card 2 -->
                    <div class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col">
                        <div class="relative h-56 w-full">
                            <img class="w-full h-full object-cover" data-alt="A powerful Yamaha Exciter 155 VVA in racing blue, captured in a dynamic low-angle shot on a clean asphalt road. The setting is a minimalist industrial area with soft morning light illuminating the bike's aggressive design. The image captures a sense of speed and high performance, consistent with a professional motorbike rental service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Yfz4M1DohNgfh2c0HfXLK_UIOrtUCLZa_MDm_0zK3nlxCUA-GmiXi-cuJe4705dUQD-wItlAx2BxMfr1TLtCciUkVUK7VYot1ZRbm0Na5p7HoPtAx6aYOYZj6a3-jwkpkeVuCDo6QaR4SMu3XLbhZZibkoFO2CjkZWKKT0LPuEt8qWWP0HOUW3Kp0sOboZTPGzzbU1dKjY2Lub8hYbp9B7sKmthwnX6DHrepZMXBrNnV3ULyfY9jzgYfc4Z1SLF3mgvq0wlbd4-7"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">Xe côn</span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface">Yamaha Exciter 155</h3>
                                <span class="flex items-center gap-xs px-sm py-1 bg-green-100 text-green-700 rounded-full text-label-sm font-label-sm">
                                    <span class="w-2 h-2 rounded-full bg-green-500">
                                    </span>
                                    Available
                                </span>
                            </div>
                            <p class="text-primary font-bold text-headline-lg-mobile mb-xl">180.000đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant">
                                <button class="w-full py-md px-lg bg-primary-container text-on-primary-container rounded-xl font-bold text-label-md hover:bg-primary transition-colors">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                    <!-- Vehicle Card 3 -->
                    <div class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col opacity-90">
                        <div class="relative h-56 w-full">
                            <img class="w-full h-full object-cover grayscale-[30%]" data-alt="A futuristic VinFast Evo200 electric scooter in a clean, high-tech white finish, presented in a minimalist studio environment with soft blue accent lighting. The image emphasizes the eco-friendly and modern nature of electric vehicles. The lighting is balanced and serene, creating a trustworthy and forward-looking aesthetic for MotoRent Pro." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7xXuZJVkCkMJXHh6kxoK53uzu_6v2soXacJc8jkpPKpJAvUBE3Ku3HEiGBHeqjcERQ-8y_N-q_oLVi4Fpth3zCdarxKUI5uUJ0wEHwHh2GJl2nZLHA-Ou8CDoMabKer3b-ZmcohlRWO2mqH75qj7tF2T9btwn6aRldAd65tnzwr343cUnmdLuoznselzhnYlIszZ4v3i2XtD01Oh2vhxulp4x1iKsCSv3yDLZo2uOGJzIItclQ-QNn2vna_l786OLtKQUQ9efnJGo"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">Xe điện</span>
                            </div>
                            <div class="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <span class="px-lg py-sm bg-surface/90 text-on-surface font-bold rounded-xl shadow-lg border border-outline-variant">Đã đặt</span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface-variant">VinFast Evo200</h3>
                                <span class="flex items-center gap-xs px-sm py-1 bg-orange-100 text-orange-700 rounded-full text-label-sm font-label-sm">
                                    <span class="w-2 h-2 rounded-full bg-orange-500">
                                    </span>
                                    Booked
                                </span>
                            </div>
                            <p class="text-on-surface-variant font-bold text-headline-lg-mobile mb-xl">120.000đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant">
                                <button class="w-full py-md px-lg bg-surface-container-highest text-on-surface-variant rounded-xl font-bold text-label-md cursor-not-allowed">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                    <!-- Vehicle Card 4 -->
                    <div class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col">
                        <div class="relative h-56 w-full">
                            <img class="w-full h-full object-cover" data-alt="A front-view portrait of a Honda Vision 2026 in pearl white, positioned in a bright, airy coastal setting. The minimalist background features soft shadows and clean light-mode tones. The scooter's elegant design is highlighted by high-key natural lighting, representing a reliable and modern rental choice for urban travelers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy6YfyVAMClojQW5i2Xh259gjIGj942gipF9cydL4l7A7EvcmrVAmSHQWlztmKdu53PZ2TeAZfIOVuOolMQSvSS7DC5fS7PWbsLf01xaGv0hAKJE2-US5UhOvV0p5_wycQaeDK72GegPK44O6Md58EEMwGVG3xXSSa8UF3FrGEeqYYYGvlBmx0obXEq4Ct8T1cp2MCnfdFdUXoO1GpsW03Ysbgq0PUg_p3HcEHz21CDUaDoyzTiGbY6M8Dm5wRJcRQkZKOYGh0na8E"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">Xe ga</span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface">Honda Vision 2026</h3>
                                <span class="flex items-center gap-xs px-sm py-1 bg-green-100 text-green-700 rounded-full text-label-sm font-label-sm">
                                    <span class="w-2 h-2 rounded-full bg-green-500">
                                    </span>
                                    Available
                                </span>
                            </div>
                            <p class="text-primary font-bold text-headline-lg-mobile mb-xl">150.000đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant">
                                <button class="w-full py-md px-lg bg-primary-container text-on-primary-container rounded-xl font-bold text-label-md hover:bg-primary transition-colors">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                    <!-- Vehicle Card 5 -->
                    <div class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col">
                        <div class="relative h-56 w-full">
                            <img class="w-full h-full object-cover" data-alt="A Honda Winner X in aggressive matte red and black colors, shown in a night-time urban setting with neon blue and violet reflections on the wet pavement. The bike is the focal point, illuminated by sharp studio-style lights that emphasize its sporty, geometric bodywork. The atmosphere is high-performance and edgy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr3xoU7CZno5zuAAJnC3ujinXDqFRI_QVc7uj0n6u4OHOSU-kDN4pdr-Usy2NlKsIqCpErvDYBm-c6qwYdtxoAAudkf9k2fq0XdALog_HoJ3uhFo8U05AhKhVX9UAhBI2eGMjgyRBjeZ-2WJBQ2_RIujfZzhnXlXnhDR8lm0xiS773_KTFaqdB1TfkpJPAy0hiFnHGwfMJkKBbYutRHPLBL5RCPFGMTbo9LyUoeLaBQRo5dDD9HgGchIVhJyANUWK7QTRMq3frZnS_"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">Xe côn</span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface">Honda Winner X</h3>
                                <span class="flex items-center gap-xs px-sm py-1 bg-green-100 text-green-700 rounded-full text-label-sm font-label-sm">
                                    <span class="w-2 h-2 rounded-full bg-green-500">
                                    </span>
                                    Available
                                </span>
                            </div>
                            <p class="text-primary font-bold text-headline-lg-mobile mb-xl">180.000đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant">
                                <button class="w-full py-md px-lg bg-primary-container text-on-primary-container rounded-xl font-bold text-label-md hover:bg-primary transition-colors">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                    <!-- Vehicle Card 6 -->
                    <div class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col">
                        <div class="relative h-56 w-full">
                            <img class="w-full h-full object-cover" data-alt="A vintage-style Honda Wave Alpha in a modern pastel green finish, parked against a clean, minimalist concrete wall. The image uses soft, diffused natural light and a shallow depth of field. The aesthetic is clean, accessible, and friendly, appealing to users looking for a simple and efficient daily commute option." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBePs2-jaiaAh-0A-wlM70UeCczN_jDYIz6h2uZoA7U786Ak1oWipgzpRV0kijVNOoQKeuvmY3EAHuakPL18rzIyim5PJrV_gqQiZHMb1JVXkdbnyNZTrk8P064KMKdNJxOHXGu5z0Z8ULQiJy4eU5pxuJXnK6k87zP3mTUKzCvmUOZK2_rS5Har_hK0nKKUvfdrHxlEGg0CA-aV7kfWEBjlvhFdIdhSrwLDj8P4OClS2ssQgCHMIq7227kPRR4IKeosBBxLBYHIWjd"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">Xe số</span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface">Honda Wave Alpha</h3>
                                <span class="flex items-center gap-xs px-sm py-1 bg-green-100 text-green-700 rounded-full text-label-sm font-label-sm">
                                    <span class="w-2 h-2 rounded-full bg-green-500">
                                    </span>
                                    Available
                                </span>
                            </div>
                            <p class="text-primary font-bold text-headline-lg-mobile mb-xl">80.000đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant">
                                <button class="w-full py-md px-lg bg-primary-container text-on-primary-container rounded-xl font-bold text-label-md hover:bg-primary transition-colors">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <div class="mt-3xl flex justify-center items-center gap-md">
                    <button class="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-all">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div class="flex items-center gap-sm">
                        <button class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold">1</button>
                        <button class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-all">2</button>
                        <button class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-all">3</button>
                        <span class="px-sm text-outline-variant">...</span>
                        <button class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-all">12</button>
                    </div>
                    <button class="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-all">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </section>
        </main>
        <!-- Footer -->
        <footer class="w-full py-xl px-margin-desktop border-t border-outline-variant bg-surface-container-lowest">
            <div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-xl">
                <div class="flex flex-col items-center md:items-start gap-sm">
                    <span class="text-title-lg font-title-lg text-primary">MotoRent Pro</span>
                    <p class="text-body-md font-body-md text-on-surface-variant">© 2026 MotoRent Pro. All rights reserved.</p>
                </div>
                <div class="flex gap-xl text-label-sm font-label-sm text-on-surface-variant">
                    <a class="hover:text-primary hover:underline transition-all" href="#">Terms of Service</a>
                    <a class="hover:text-primary hover:underline transition-all" href="#">Privacy Policy</a>
                    <a class="hover:text-primary hover:underline transition-all" href="#">Fleet Management</a>
                    <a class="hover:text-primary hover:underline transition-all" href="#">Partner Program</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'DanhSachXe',
    mounted() {
        // Simple Micro-interaction: Checkbox styling and ripple effect could go here
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'scale(1)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
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
    border: 1px solid rgba(229, 231, 235, 0.5);
}
.hover-lift {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
/* Custom range slider styling */
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #2563eb;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
</style>
