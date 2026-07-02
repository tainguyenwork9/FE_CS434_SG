<template>
    <div>
        <!-- Side Navigation Shell -->
        <!-- Top Navigation Bar -->
        <!-- Main Content Canvas -->
        <div class="space-y-xl">
            <!-- Header Section -->
            <div class="mb-xl">
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Quản lý Đánh giá</h2>
                <p class="font-body-lg text-on-surface-variant">Theo dõi và phản hồi ý kiến từ khách hàng để cải thiện chất lượng dịch vụ.</p>
            </div>
            <!-- Statistics Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-2xl">reviews</span>
                        </div>
                        <span class="text-primary font-label-sm">+12% tháng này</span>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Tổng đánh giá</p>
                    <h3 class="font-display-sm text-display-sm text-on-surface mt-xs">1,284</h3>
                </div>
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
                            <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Điểm trung bình</p>
                    <div class="flex items-baseline gap-xs mt-xs">
                        <h3 class="font-display-sm text-display-sm text-on-surface">4.8</h3>
                        <span class="text-outline font-body-md">/ 5.0</span>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                            <span class="material-symbols-outlined text-2xl">sentiment_very_satisfied</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Đánh giá 5 sao</p>
                    <h3 class="font-display-sm text-display-sm text-on-surface mt-xs">1,056</h3>
                </div>
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center text-error">
                            <span class="material-symbols-outlined text-2xl">pending_actions</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Đánh giá cần xử lý</p>
                    <h3 class="font-display-sm text-display-sm text-error mt-xs">14</h3>
                </div>
            </div>
            <!-- Filters Section -->
            <div class="glass-card p-md rounded-2xl mb-lg flex flex-wrap items-center gap-lg">
                <div class="flex items-center gap-md border-r border-outline-variant/30 pr-lg">
                    <span class="font-label-md text-on-surface-variant whitespace-nowrap">Lọc theo:</span>
                    <select class="bg-surface border-none focus:ring-0 font-body-md text-on-surface cursor-pointer p-0">
                        <option>Tất cả sao</option>
                        <option>5 sao</option>
                        <option>4 sao</option>
                        <option>3 sao</option>
                        <option>2 sao</option>
                        <option>1 sao</option>
                    </select>
                </div>
                <div class="flex items-center gap-md border-r border-outline-variant/30 pr-lg">
                    <select class="bg-surface border-none focus:ring-0 font-body-md text-on-surface cursor-pointer p-0">
                        <option>Tất cả loại xe</option>
                        <option>PKL (Sport)</option>
                        <option>Scooter</option>
                        <option>Touring</option>
                        <option>Underbone</option>
                    </select>
                </div>
                <div class="flex items-center gap-md">
                    <span class="material-symbols-outlined text-outline">calendar_today</span>
                    <input class="bg-surface border-none focus:ring-0 font-body-md text-on-surface w-48 p-0 cursor-pointer" type="text" value="01/10/2023 - 31/10/2023"/>
                </div>
                <div class="ml-auto flex gap-md">
                    <button class="flex items-center gap-sm px-lg py-md text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors font-label-md">
                        <span class="material-symbols-outlined text-md">download</span>
                        Xuất báo cáo
                    </button>
                </div>
            </div>
            <!-- Management Table -->
            <div class="glass-card rounded-2xl overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-surface-container-low border-b border-outline-variant/30">
                            <th class="px-lg py-lg font-label-md text-on-surface-variant">Khách hàng</th>
                            <th class="px-lg py-lg font-label-md text-on-surface-variant">Xe đã thuê</th>
                            <th class="px-lg py-lg font-label-md text-on-surface-variant">Đánh giá</th>
                            <th class="px-lg py-lg font-label-md text-on-surface-variant w-1/4">Nội dung</th>
                            <th class="px-lg py-lg font-label-md text-on-surface-variant">Ngày gửi</th>
                            <th class="px-lg py-lg font-label-md text-on-surface-variant">Trạng thái</th>
                            <th class="px-lg py-lg font-label-md text-on-surface-variant text-right">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-outline-variant/20">
                        <!-- Row 1 -->
                        <tr class="hover:bg-surface-container-lowest transition-colors group">
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-md">
                                    <img class="w-10 h-10 rounded-full object-cover" data-alt="A portrait of a young Vietnamese professional male in his 30s, friendly smile, urban outdoor background with soft bokeh, high quality digital photography, natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTIasTc-enaoahesbngAyikvrnOlJLdQMV9zjoiBdt1TJCHvYuzm8VaNzOidX9WsHnf2JtdhDYkzARx04cuLZqyGU9bxloC-UK4YHdUDEIFA-mowN46ba76a7JZ_ItIrr1_vG0gpsjnnh2eT0wXnFqYTqbj7gpZapr1N2gdkq9drCG8q9x6te4YKb6w-sQwnfYaXGtduZAcMpRhBYyX621Vuyr2j1ja-t4MzaRyITLOpctQfjTW4A22ZXfrgVq6TUnEXsdZJhDVfCv"/>
                                    <div>
                                        <p class="font-label-md text-on-surface">Nguyễn Minh Quân</p>
                                        <p class="font-label-sm text-outline">ID: #4582</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface">Kawasaki Z1000</p>
                                <p class="font-label-sm text-outline">Sport-bike</p>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface truncate-2-lines">Xe rất mới, bảo trì tốt. Nhân viên hỗ trợ nhiệt tình, thủ tục nhanh gọn. Chắc chắn sẽ quay lại ủng hộ lần sau khi ra Hà Nội.</p>
                            </td>
                            <td class="px-lg py-lg font-body-md text-on-surface">15/10/2023</td>
                            <td class="px-lg py-lg">
                                <span class="px-sm py-1 bg-green-100 text-green-700 rounded-full font-label-sm">Hiển thị</span>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex justify-end gap-sm">
                                    <button class="p-sm text-primary hover:bg-primary-container/10 rounded-lg transition-colors" title="Xem chi tiết">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button class="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" title="Ẩn/Hiện">
                                        <span class="material-symbols-outlined">visibility_off</span>
                                    </button>
                                    <button class="p-sm text-error hover:bg-error-container/10 rounded-lg transition-colors" title="Xóa">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Row 2 -->
                        <tr class="hover:bg-surface-container-lowest transition-colors group">
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-md">
                                    <img class="w-10 h-10 rounded-full object-cover" data-alt="Close-up portrait of a stylish female traveler with sunglasses on her head, vibrant street background in Ho Chi Minh City, modern casual attire, energetic and bright mood, high fidelity photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfuSZrhVuxusceSP75n5icWoIjfQ53k9gEnAJbqTv82DRWOUFOdDt5QRiGF2Olpv_mFqRIVhQ8wrqPX2GlhDRij5xylk9_Fex7jaSiYfHy6hEAFx9ix63hPIEe2eU3SzOIJ_3NvQGQEeH1fjSj3vq0-5veRtrjG5W3lIm1QK8HdPNoM6hHajRKTy39HWiVDU2Xr2CJluDhJcFai1KOL5wdLCVLewZJ3J87171rMHXGbh2fJY2nehOJZiXGkiNyj7rd6FqLToePV50o"/>
                                    <div>
                                        <p class="font-label-md text-on-surface">Lê Thị Thu Thảo</p>
                                        <p class="font-label-sm text-outline">ID: #3921</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface">Honda SH 150i</p>
                                <p class="font-label-sm text-outline">Scooter</p>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md text-outline-variant">star</span>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface truncate-2-lines">Xe ổn định, đi êm. Chỉ có điều là lúc nhận xe hơi trễ 10 phút so với hẹn. Còn lại mọi thứ đều tốt.</p>
                            </td>
                            <td class="px-lg py-lg font-body-md text-on-surface">14/10/2023</td>
                            <td class="px-lg py-lg">
                                <span class="px-sm py-1 bg-green-100 text-green-700 rounded-full font-label-sm">Hiển thị</span>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex justify-end gap-sm">
                                    <button class="p-sm text-primary hover:bg-primary-container/10 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button class="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">visibility_off</span>
                                    </button>
                                    <button class="p-sm text-error hover:bg-error-container/10 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Row 3 (Hidden/Pending) -->
                        <tr class="hover:bg-surface-container-lowest transition-colors group">
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-md">
                                    <img class="w-10 h-10 rounded-full object-cover" data-alt="A portrait of an older man with glasses, sophisticated attire, indoor setting with warm lighting, gentle and calm expression, highly detailed skin textures, premium portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaZ4-wWUI-0Z_Nr3AwPWW-uuUn8_n102s80JFLh5cLPIUT8s9HX0XHdB0MMazj0_9_Tv71Bcy0ouduqkkPVjaxNN2sspqeBwC-rqQ6xuB8pUX0dNDnJzGqbuvHdnQe9hz92PIXY9cNXtBfpvx-j7NxeHZq0o8RR06-1fWEjWanx1schaHesbRi6W4SYhQBhi-ClJovhZ-TI8fSwRR2weexh7Uk4fV85zqGwxdr_rZOxTWQyXu4ggLpX_5vejXVJ8f5-AvXM2nnIxV5"/>
                                    <div>
                                        <p class="font-label-md text-on-surface">Trần Hoàng Nam</p>
                                        <p class="font-label-sm text-outline">ID: #5102</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface">BMW R1250 GS</p>
                                <p class="font-label-sm text-outline">Touring</p>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md text-outline-variant">star</span>
                                    <span class="material-symbols-outlined text-md text-outline-variant">star</span>
                                    <span class="material-symbols-outlined text-md text-outline-variant">star</span>
                                    <span class="material-symbols-outlined text-md text-outline-variant">star</span>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface truncate-2-lines italic text-on-surface-variant">Đánh giá này chứa ngôn từ không phù hợp và đang được xem xét bởi quản trị viên hệ thống...</p>
                            </td>
                            <td class="px-lg py-lg font-body-md text-on-surface">12/10/2023</td>
                            <td class="px-lg py-lg">
                                <span class="px-sm py-1 bg-surface-container-highest text-on-surface-variant rounded-full font-label-sm">Đã ẩn</span>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex justify-end gap-sm">
                                    <button class="p-sm text-primary hover:bg-primary-container/10 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button class="p-sm text-primary hover:bg-primary-container/10 rounded-lg transition-colors" title="Hiện đánh giá">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button class="p-sm text-error hover:bg-error-container/10 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Row 4 -->
                        <tr class="hover:bg-surface-container-lowest transition-colors group">
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-md">
                                    <img class="w-10 h-10 rounded-full object-cover" data-alt="A portrait of a young male student in a library setting, holding a bike helmet, modern casual outfit, soft focus books in background, natural window light, cinematic quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwXIBgnnGC4BUc3OvFA7h4jB2dcTwwjEr2PMM9JWv74-UuilEB0FF6wiIZYQrsFIsRbJlG4_LVFWkSGegzdsb4320YMNpPa8nF0-nCNj189OyhPsTDBObN9ZdTNkJtkCT5Bml9D9j9ZiX0v1LkN8erwWwoVJeZkRlqhSqE8ddPmeFx2kQF9NWLYsEk6DsAKXYReGpqpZZETLOg7Xsma08_Oxb1hycXa2bUATP4yrAkPJ7ICQNujYe927JCRUexiy2d2CW9sPVCzWGI"/>
                                    <div>
                                        <p class="font-label-md text-on-surface">Phạm Đức Anh</p>
                                        <p class="font-label-sm text-outline">ID: #4420</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface">Yamaha Exciter 155</p>
                                <p class="font-label-sm text-outline">Underbone</p>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex items-center gap-xs">
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                    <span class="material-symbols-outlined text-md star-fill">star</span>
                                </div>
                            </td>
                            <td class="px-lg py-lg">
                                <p class="font-body-md text-on-surface truncate-2-lines">Giá thuê hợp lý nhất khu vực, xe khỏe, chạy đường đèo rất bốc. Sẽ quay lại thuê thêm nhiều lần nữa.</p>
                            </td>
                            <td class="px-lg py-lg font-body-md text-on-surface">10/10/2023</td>
                            <td class="px-lg py-lg">
                                <span class="px-sm py-1 bg-green-100 text-green-700 rounded-full font-label-sm">Hiển thị</span>
                            </td>
                            <td class="px-lg py-lg">
                                <div class="flex justify-end gap-sm">
                                    <button class="p-sm text-primary hover:bg-primary-container/10 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button class="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">visibility_off</span>
                                    </button>
                                    <button class="p-sm text-error hover:bg-error-container/10 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Pagination -->
                <div class="flex justify-between items-center px-lg py-lg border-t border-outline-variant/30 bg-surface/50">
                    <p class="font-label-md text-on-surface-variant">Hiển thị 1-10 trên 1,284 đánh giá</p>
                    <div class="flex items-center gap-sm">
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container-high transition-colors">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-label-md">1</button>
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-colors font-label-md">2</button>
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-colors font-label-md">3</button>
                        <span class="px-sm text-outline">...</span>
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-colors font-label-md">129</button>
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container-high transition-colors">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Floating Action Button (FAB) - Contextual -->
        <button class="fixed bottom-lg right-lg w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group">
            <span class="material-symbols-outlined text-3xl">add</span>
            <span class="absolute right-full mr-md px-md py-sm bg-inverse-surface text-on-primary rounded-lg font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Phản hồi nhanh
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'QuanLyDanhGia',
    mounted() {
        // Micro-interactions and effects
        document.querySelectorAll('tr').forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.transform = 'scale(1.002)';
            });
            row.addEventListener('mouseleave', () => {
                row.style.transform = 'scale(1)';
            });
        });
        
        // Search bar focus effect
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('shadow-md');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('shadow-md');
        });
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; background-color: #faf8ff; }
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}
.star-fill {
    font-variation-settings: 'FILL' 1;
    color: #FFB596; /* Using tertiary related tone for stars */
}
.truncate-2-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
