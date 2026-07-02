<template>
    <div>
        <!-- SideNavBar (Authority: JSON) -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- TopNavBar (Authority: JSON) -->
            <!-- Page Canvas -->
            <div class="mt-16 p-margin-desktop flex-1">
                <!-- Header Section -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
                    <div>
                        <nav class="flex items-center gap-xs text-xs text-secondary mb-2">
                            <span>Hệ thống</span>
                            <span class="material-symbols-outlined text-[12px]">chevron_right</span>
                            <span>Quản lý xe</span>
                            <span class="material-symbols-outlined text-[12px]">chevron_right</span>
                            <span class="text-primary font-bold">Danh mục</span>
                        </nav>
                        <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Quản lý Danh mục</h1>
                        <p class="text-secondary font-body-md mt-1">Phân loại các dòng xe máy trong hệ thống cho thuê chuyên nghiệp.</p>
                    </div>
                    <div class="flex gap-sm">
                        <router-link to="/admin/them-danh-muc" class="bg-primary text-white h-12 px-lg rounded-xl font-label-md flex items-center gap-sm hover:bg-primary-container shadow-md transition-all active:scale-95 text-decoration-none">
                            <span class="material-symbols-outlined">add</span>
                            <span>Thêm danh mục mới</span>
                        </router-link>
                    </div>
                </div>
                <!-- Bento Stats Grid (Atmospheric) -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
                    <div class="glass-card p-md rounded-2xl flex items-center gap-md hover-lift">
                        <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-[28px]">category</span>
                        </div>
                        <div>
                            <p class="text-secondary text-xs font-bold uppercase tracking-wide">Tổng danh mục</p>
                            <p class="font-headline-lg text-headline-lg text-on-surface leading-tight">12</p>
                        </div>
                    </div>
                    <div class="glass-card p-md rounded-2xl flex items-center gap-md hover-lift">
                        <div class="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                            <span class="material-symbols-outlined text-[28px]">electric_bolt</span>
                        </div>
                        <div>
                            <p class="text-secondary text-xs font-bold uppercase tracking-wide">Danh mục Hot</p>
                            <p class="font-headline-lg text-headline-lg text-on-surface leading-tight">Scooter</p>
                        </div>
                    </div>
                    <div class="glass-card p-md rounded-2xl flex items-center gap-md hover-lift">
                        <div class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                            <span class="material-symbols-outlined text-[28px]">directions_bike</span>
                        </div>
                        <div>
                            <p class="text-secondary text-xs font-bold uppercase tracking-wide">Tổng số xe</p>
                            <p class="font-headline-lg text-headline-lg text-on-surface leading-tight">148</p>
                        </div>
                    </div>
                    <div class="glass-card p-md rounded-2xl flex items-center gap-md hover-lift">
                        <div class="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                            <span class="material-symbols-outlined text-[28px]">build</span>
                        </div>
                        <div>
                            <p class="text-secondary text-xs font-bold uppercase tracking-wide">Bảo trì</p>
                            <p class="font-headline-lg text-headline-lg text-on-surface leading-tight">05</p>
                        </div>
                    </div>
                </div>
                <!-- Main Table Container -->
                <div class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
                    <!-- Table Controls -->
                    <div class="px-lg py-md border-b border-outline-variant flex items-center justify-between bg-surface-container-low/50">
                        <div class="flex items-center gap-md">
                            <div class="relative">
                                <input class="bg-white border border-outline-variant rounded-xl py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tìm theo tên danh mục..." type="text"/>
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">filter_alt</span>
                            </div>
                            <select class="bg-white border border-outline-variant rounded-xl py-2 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                                <option>Tất cả trạng thái</option>
                                <option>Hoạt động</option>
                                <option>Ngừng hoạt động</option>
                            </select>
                        </div>
                        <div class="flex items-center gap-sm">
                            <button class="p-2 hover:bg-surface-container rounded-lg text-secondary">
                                <span class="material-symbols-outlined">print</span>
                            </button>
                            <button class="p-2 hover:bg-surface-container rounded-lg text-secondary">
                                <span class="material-symbols-outlined">download</span>
                            </button>
                        </div>
                    </div>
                    <!-- Modern Data Table -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-surface-container-low/30 border-b border-outline-variant">
                                    <th class="px-lg py-4 font-label-md text-secondary uppercase text-[11px] tracking-wider">ID</th>
                                    <th class="px-lg py-4 font-label-md text-secondary uppercase text-[11px] tracking-wider">Icon</th>
                                    <th class="px-lg py-4 font-label-md text-secondary uppercase text-[11px] tracking-wider">Tên danh mục</th>
                                    <th class="px-lg py-4 font-label-md text-secondary uppercase text-[11px] tracking-wider text-center">Số lượng xe</th>
                                    <th class="px-lg py-4 font-label-md text-secondary uppercase text-[11px] tracking-wider">Trạng thái</th>
                                    <th class="px-lg py-4 font-label-md text-secondary uppercase text-[11px] tracking-wider text-right">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/50">
                                <!-- Category Row 1 -->
                                <tr class="hover:bg-surface transition-colors">
                                    <td class="px-lg py-5 font-mono text-xs text-secondary">CAT-001</td>
                                    <td class="px-lg py-5">
                                        <div class="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                                            <span class="material-symbols-outlined">electric_moped</span>
                                        </div>
                                    </td>
                                    <td class="px-lg py-5">
                                        <p class="font-bold text-on-surface">Xe tay ga (Scooter)</p>
                                        <p class="text-xs text-secondary">Phổ biến cho di chuyển đô thị</p>
                                    </td>
                                    <td class="px-lg py-5 text-center">
                                        <span class="font-bold text-on-surface">56</span>
                                    </td>
                                    <td class="px-lg py-5">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                            <span class="w-1.5 h-1.5 rounded-full bg-green-700 mr-1.5">
                                            </span>
                                            Hoạt động
                                        </span>
                                    </td>
                                    <td class="px-lg py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <router-link to="/admin/sua-danh-muc" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-primary transition-all text-decoration-none">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </router-link>
                                            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error transition-all">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Category Row 2 -->
                                <tr class="hover:bg-surface transition-colors">
                                    <td class="px-lg py-5 font-mono text-xs text-secondary">CAT-002</td>
                                    <td class="px-lg py-5">
                                        <div class="w-10 h-10 rounded-lg bg-secondary-container/10 flex items-center justify-center text-secondary">
                                            <span class="material-symbols-outlined">two_wheeler</span>
                                        </div>
                                    </td>
                                    <td class="px-lg py-5">
                                        <p class="font-bold text-on-surface">Xe côn tay (Sportbike)</p>
                                        <p class="text-xs text-secondary">Dành cho đam mê tốc độ và tour</p>
                                    </td>
                                    <td class="px-lg py-5 text-center">
                                        <span class="font-bold text-on-surface">24</span>
                                    </td>
                                    <td class="px-lg py-5">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                            <span class="w-1.5 h-1.5 rounded-full bg-green-700 mr-1.5">
                                            </span>
                                            Hoạt động
                                        </span>
                                    </td>
                                    <td class="px-lg py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <router-link to="/admin/sua-danh-muc" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-primary transition-all text-decoration-none">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </router-link>
                                            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error transition-all">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Category Row 3 -->
                                <tr class="hover:bg-surface transition-colors">
                                    <td class="px-lg py-5 font-mono text-xs text-secondary">CAT-003</td>
                                    <td class="px-lg py-5">
                                        <div class="w-10 h-10 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                                            <span class="material-symbols-outlined">motorcycle</span>
                                        </div>
                                    </td>
                                    <td class="px-lg py-5">
                                        <p class="font-bold text-on-surface">Xe số (Manual)</p>
                                        <p class="text-xs text-secondary">Bền bỉ, tiết kiệm nhiên liệu</p>
                                    </td>
                                    <td class="px-lg py-5 text-center">
                                        <span class="font-bold text-on-surface">42</span>
                                    </td>
                                    <td class="px-lg py-5">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                            <span class="w-1.5 h-1.5 rounded-full bg-green-700 mr-1.5">
                                            </span>
                                            Hoạt động
                                        </span>
                                    </td>
                                    <td class="px-lg py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <router-link to="/admin/sua-danh-muc" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-primary transition-all text-decoration-none">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </router-link>
                                            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error transition-all">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Category Row 4 -->
                                <tr class="hover:bg-surface transition-colors opacity-70 grayscale-[0.5]">
                                    <td class="px-lg py-5 font-mono text-xs text-secondary">CAT-004</td>
                                    <td class="px-lg py-5">
                                        <div class="w-10 h-10 rounded-lg bg-outline-variant/20 flex items-center justify-center text-secondary">
                                            <span class="material-symbols-outlined">pedal_bike</span>
                                        </div>
                                    </td>
                                    <td class="px-lg py-5">
                                        <p class="font-bold text-on-surface">Xe điện (EV)</p>
                                        <p class="text-xs text-secondary">Đang bảo trì hệ thống sạc</p>
                                    </td>
                                    <td class="px-lg py-5 text-center">
                                        <span class="font-bold text-on-surface">26</span>
                                    </td>
                                    <td class="px-lg py-5">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
                                            <span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5">
                                            </span>
                                            Tạm ngưng
                                        </span>
                                    </td>
                                    <td class="px-lg py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <router-link to="/admin/sua-danh-muc" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-primary transition-all text-decoration-none">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </router-link>
                                            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error/10 text-error transition-all">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Table Footer / Pagination -->
                    <div class="px-lg py-md border-t border-outline-variant flex items-center justify-between bg-surface-container-low/30">
                        <p class="text-sm text-secondary">Hiển thị 1 - 4 trong tổng số 12 danh mục</p>
                        <div class="flex items-center gap-xs">
                            <button class="p-2 border border-outline-variant rounded-lg hover:bg-white text-secondary opacity-50 cursor-not-allowed">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button class="w-9 h-9 bg-primary text-white rounded-lg font-bold flex items-center justify-center">1</button>
                            <button class="w-9 h-9 hover:bg-white text-on-surface rounded-lg flex items-center justify-center transition-colors">2</button>
                            <button class="w-9 h-9 hover:bg-white text-on-surface rounded-lg flex items-center justify-center transition-colors">3</button>
                            <button class="p-2 border border-outline-variant rounded-lg hover:bg-white text-secondary">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Contextual Help / Tips (Modern Pattern) -->
                <div class="mt-xl grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div class="glass-card p-lg rounded-2xl border-l-4 border-l-primary flex gap-md">
                        <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
                        <div>
                            <h4 class="font-bold text-on-surface">Mẹo quản lý</h4>
                            <p class="text-sm text-on-surface-variant mt-1 leading-relaxed">Sắp xếp danh mục theo xe bán chạy nhất để hiển thị ưu tiên trên ứng dụng di động của khách hàng. Việc này tăng tỷ lệ chuyển đổi booking lên đến 15%.</p>
                        </div>
                    </div>
                    <div class="glass-card p-lg rounded-2xl border-l-4 border-l-tertiary flex gap-md">
                        <span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">analytics</span>
                        <div>
                            <h4 class="font-bold text-on-surface">Phân tích hiệu suất</h4>
                            <p class="text-sm text-on-surface-variant mt-1 leading-relaxed">Danh mục "Scooter" đang có hiệu suất cao nhất trong tháng này. Hãy cân nhắc bổ sung thêm xe Vision hoặc Air Blade vào đội xe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Info -->
            <footer class="p-margin-desktop text-center text-secondary text-xs opacity-60">
                © 2024 MotoRent Pro Management System. Phiên bản 2.4.1 (Stable Build)
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuanLyDanhMuc',
    mounted() {
        // Micro-interactions and interactions
        document.addEventListener('DOMContentLoaded', () => {
            // Hover effect on rows
            const rows = document.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.addEventListener('mouseenter', () => {
                    row.classList.add('scale-[1.002]', 'z-10', 'relative');
                });
                row.addEventListener('mouseleave', () => {
                    row.classList.remove('scale-[1.002]', 'z-10', 'relative');
                });
            });
        
            // Smooth search bar interaction
            const searchBar = document.querySelector('input[type="text"]');
            searchBar.addEventListener('focus', () => {
                searchBar.parentElement.classList.add('ring-2', 'ring-primary/20');
            });
            searchBar.addEventListener('blur', () => {
                searchBar.parentElement.classList.remove('ring-2', 'ring-primary/20');
            });
        });
    }
}
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.hover-lift {
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
}
.hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
.sidebar-transition {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 10px;
}
</style>
