<template>
    <div>
        <!-- TopNavBar -->
        <!-- Main Content Area -->
        <main class="flex-grow pt-3xl pb-2xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full mt-16">
            <!-- Header Section -->
            <div class="mb-xl">
                <h1 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Lịch sử thuê xe</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant">Quản lý các đơn đặt xe và trạng thái thuê xe của bạn trong hệ thống MotoRent Pro.</p>
            </div>
            <!-- Central Container -->
            <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
                <!-- Utility Bar -->
                <div class="p-lg border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-md">
                    <div class="relative flex-grow max-w-md">
                        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input class="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl font-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-standard" placeholder="Tìm kiếm mã đơn, tên xe..." type="text"/>
                    </div>
                    <div class="flex items-center gap-md">
                        <div class="relative min-w-[200px]">
                            <select class="w-full appearance-none bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-standard cursor-pointer pr-10">
                                <option>Tất cả trạng thái</option>
                                <option>Đang chờ</option>
                                <option>Đang thuê</option>
                                <option>Đã trả</option>
                                <option>Đã hủy</option>
                            </select>
                            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                        </div>
                        <button class="p-3 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-standard flex items-center justify-center">
                            <span class="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>
                <!-- Data Table -->
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead class="bg-surface-container-low">
                            <tr>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Mã đơn</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Xe</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Ngày thuê</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Ngày trả</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Tổng tiền</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Trạng thái</th>
                                <th class="text-right px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/10">
                            <!-- Row 1: Active -->
                            <tr class="hover:bg-primary/5 transition-standard group">
                                <td class="px-lg py-lg font-body-md font-semibold text-primary">#MR-8821</td>
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                                            <img class="w-full h-full object-cover" data-alt="A sleek modern black sport motorcycle parked in a bright, minimalist studio environment with soft blue secondary lighting. Professional high-end photography style consistent with premium rental services, showcasing the bike's aerodynamic lines and polished chrome details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnpq8q-TEQheOaFv1-hp9X9hmSD1yWYaqk0DTUSfOnnGQGY3QBivk1teR46AjHcsDTesc4pkmqDKuJnEu5nO2VORuWt755hRj3Ki42Js03MpxxdyOmwLGfNGqX5NGSSIdZUCSas_CElcB-rPYxQEpI8nuL-X5NB80_08qyI6nzgGPuaErC_22CulNItpx66pZEZzKYG-3wGtVCEBw4sLHSRVaYztZqXcANGEV_1pETMzpFL3qoLUf7KP0IsMuQ6kCzoiYCwGk16l-Z"/>
                                        </div>
                                        <div>
                                            <div class="font-label-md text-on-surface">Honda CBR500R</div>
                                            <div class="font-label-sm text-outline">29-A1 888.88</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">20/05/2024</td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">23/05/2024</td>
                                <td class="px-lg py-lg font-body-md font-bold text-on-surface">750.000đ</td>
                                <td class="px-lg py-lg">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-label-sm bg-green-100 text-green-700 font-bold">
                                        <span class="w-2 h-2 rounded-full bg-green-600 mr-2">
                                        </span>
                                        Đang thuê
                                    </span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <div class="flex items-center justify-end gap-md">
                                        <button class="text-primary font-label-md hover:underline transition-standard">Xem chi tiết</button>
                                        <button class="text-outline hover:text-error transition-standard">
                                            <span class="material-symbols-outlined text-[20px]">cancel</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <!-- Row 2: Waiting -->
                            <tr class="hover:bg-primary/5 transition-standard group">
                                <td class="px-lg py-lg font-body-md font-semibold text-primary">#MR-9042</td>
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                                            <img class="w-full h-full object-cover" data-alt="A premium white Yamaha scooter captured in a bright urban daylight setting with a blurred modern architectural background. The image style is clean and high-contrast, emphasizing the vehicle's pristine finish and elegant design for a luxury rental experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxgiTeuHccxT7u0STWBGQYG5FdGfZyVURVnxFQoPRRJPpmROzdrZxKWGq0hiA9vXhpN3-WVUpalReP0jXRQqLU-YKXBLATMtbf6RH-WN96tS2GPeEWmgjb2A6dQidZC7hhdooL2PgjjEafRxakgkhbHaZEMPWuiZqxyn5i9zQ4DNCPf5u3Rz3sAckfkdbVjCUOgEQWy0A6pPZayblwZwLO-tE_erQBTFOo-dE1q0DpZNY0RPwMvihCA3m5v8w2z_z6IjtAMXqEwZL"/>
                                        </div>
                                        <div>
                                            <div class="font-label-md text-on-surface">Yamaha NVX 155</div>
                                            <div class="font-label-sm text-outline">30-K5 123.45</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">25/05/2024</td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">26/05/2024</td>
                                <td class="px-lg py-lg font-body-md font-bold text-on-surface">350.000đ</td>
                                <td class="px-lg py-lg">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-label-sm bg-primary-container/10 text-primary font-bold">
                                        <span class="w-2 h-2 rounded-full bg-primary mr-2">
                                        </span>
                                        Đang chờ
                                    </span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <div class="flex items-center justify-end gap-md">
                                        <button class="text-primary font-label-md hover:underline transition-standard">Xem chi tiết</button>
                                        <button class="text-error font-label-md hover:underline transition-standard">Hủy</button>
                                    </div>
                                </td>
                            </tr>
                            <!-- Row 3: Returned -->
                            <tr class="hover:bg-primary/5 transition-standard group">
                                <td class="px-lg py-lg font-body-md font-semibold text-primary">#MR-7731</td>
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                                            <img class="w-full h-full object-cover" data-alt="A vintage-style matte grey Vespa scooter presented in a soft-focus garden setting with warm evening sunlight. The photography conveys a sense of lifestyle and leisure travel, highlighting the sophisticated curves and leather seat texture of the classic motorbike." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzjEJWKqFQmXZaBEVHoALjtMokmb5IexZ9rRG9xibIlJyq_uMZw5ok4fwPwnLT0xwFlYYhVLMBwxjktAiaNk8WUkPSFRSlDKBRzb602AGqNm8V5qH8qkb4qCgcB6KC87LHUeIT9iQXMbsT27j91or_pPqfq9uW_3N3SqijhMkixFs8jPQ0iCPrYf9gYo1obt9s8fAnrUovI6IYNqMj6ZHB_nDUhh9-lo5fToojm0TlNJGv7wpFAo0mn9n14r195LgeMpQFPbyzimLO"/>
                                        </div>
                                        <div>
                                            <div class="font-label-md text-on-surface">Vespa Sprint 125</div>
                                            <div class="font-label-sm text-outline">29-F1 999.01</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">10/05/2024</td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">12/05/2024</td>
                                <td class="px-lg py-lg font-body-md font-bold text-on-surface">900.000đ</td>
                                <td class="px-lg py-lg">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-label-sm bg-surface-container-highest text-on-surface-variant font-bold">
                                        <span class="w-2 h-2 rounded-full bg-outline mr-2">
                                        </span>
                                        Đã trả
                                    </span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <div class="flex items-center justify-end gap-md">
                                        <button class="text-primary font-label-md hover:underline transition-standard">Xem chi tiết</button>
                                        <button class="text-outline cursor-not-allowed" disabled="">
                                            <span class="material-symbols-outlined text-[20px]">block</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <!-- Row 4: Cancelled -->
                            <tr class="hover:bg-primary/5 transition-standard group">
                                <td class="px-lg py-lg font-body-md font-semibold text-primary">#MR-6612</td>
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0 grayscale">
                                            <img class="w-full h-full object-cover" data-alt="A powerful touring motorcycle with side panniers shown in a rugged, mountain pass landscape during overcast weather. The lighting is moody and dramatic, with a focus on durability and adventure-ready design, using a professional automotive catalog aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXIRU0hQbN3htLeRJQCyKftmE9K9aY4ZMHkEuOcMCI-dqevGl1CzrcBDq76rl-gq8xWBiM3aFe8Gi5_f8dMfnetZqhnCgvsHZwM3x4u1onB0lCPz85uNp8P3N5CuIgsXFZIJals2rYvatfmpYQpZ1MJKezlsaxmV7Z4bt1uJYryrUzRSoa1ur3FS9iLUK0pTB9k4B4fTg1uKp75K62tnoFy25FrFD5ywkNsq1kCxbKWQ17ukMfZ8u5_6g_8bNdLXbC2ltTM46EtAI"/>
                                        </div>
                                        <div>
                                            <div class="font-label-md text-on-surface">BMW G310 GS</div>
                                            <div class="font-label-sm text-outline">59-X3 444.44</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">01/05/2024</td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">03/05/2024</td>
                                <td class="px-lg py-lg font-body-md font-bold text-on-surface">1.200.000đ</td>
                                <td class="px-lg py-lg">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-label-sm bg-error-container/20 text-error font-bold">
                                        <span class="w-2 h-2 rounded-full bg-error mr-2">
                                        </span>
                                        Đã hủy
                                    </span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <div class="flex items-center justify-end gap-md">
                                        <button class="text-primary font-label-md hover:underline transition-standard">Xem chi tiết</button>
                                        <button class="text-outline cursor-not-allowed" disabled="">
                                            <span class="material-symbols-outlined text-[20px]">block</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination Footer -->
                <div class="p-lg bg-surface-container-low border-t border-outline-variant/20 flex items-center justify-between">
                    <span class="font-body-md text-on-surface-variant">Hiển thị 1-4 trong số 12 đơn đặt xe</span>
                    <div class="flex items-center gap-sm">
                        <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-high transition-standard disabled:opacity-50" disabled="">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button class="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold">1</button>
                        <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-high transition-standard">2</button>
                        <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-high transition-standard">3</button>
                        <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-high transition-standard">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <!-- Footer -->
        <footer class="bg-surface-container dark:bg-surface-container-highest w-full rounded-t-xl mt-3xl">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-xl max-w-container-max mx-auto">
                <div class="md:col-span-1">
                    <span class="font-title-lg text-title-lg font-bold text-on-surface block mb-md">MotoRent Pro</span>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-lg">Hệ thống quản lý thuê xe máy chuyên nghiệp hàng đầu Việt Nam.</p>
                </div>
                <div>
                    <h4 class="font-label-md text-primary font-bold mb-md">Quick Links</h4>
                    <ul class="space-y-sm">
                        <li>
                            <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Fleet</a>
                        </li>
                        <li>
                            <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Locations</a>
                        </li>
                        <li>
                            <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-label-md text-primary font-bold mb-md">Legal</h4>
                    <ul class="space-y-sm">
                        <li>
                            <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-label-md text-primary font-bold mb-md">Contact</h4>
                    <p class="font-body-md text-on-surface-variant mb-sm">Hotline: 1900 1234</p>
                    <p class="font-body-md text-on-surface-variant">Email: support@motorent.pro</p>
                </div>
            </div>
            <div class="px-margin-desktop py-lg border-t border-outline-variant/10 text-center">
                <p class="font-body-md text-body-md text-on-surface-variant">© 2026 MotoRent Pro. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'LichSuThuXe',
    mounted() {
        // Simple search interaction placeholder
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('input', (e) => {
            console.log('Filtering records for:', e.target.value);
            // Dynamic filtering logic would go here
        });
        
        // Dropdown interaction placeholder
        const statusSelect = document.querySelector('select');
        statusSelect.addEventListener('change', (e) => {
            console.log('Selected status filter:', e.target.value);
            // Status filtering logic would go here
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
.active-nav-link {
    border-bottom: 2px solid #004ac6;
    color: #004ac6;
    font-weight: 600;
}
.transition-standard { transition: all 200ms ease-in-out; }
</style>
