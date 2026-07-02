<template>
    <div>
        <!-- Background: Blurred Category Management Screen -->
        <div class="fixed inset-0 flex">
            <!-- Predicted SideNavBar -->
            <!-- Main Content Area (Blurred) -->
            <div class="space-y-xl">
                <!-- TopNavBar Mockup -->
                <!-- Table Mockup -->
                <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
                    <div class="p-lg border-b border-outline-variant flex justify-between items-center">
                        <div class="relative w-72">
                            <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-secondary" data-icon="search">search</span>
                            <input class="w-full pl-3xl pr-md py-sm bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary" placeholder="Tìm kiếm danh mục..." type="text"/>
                        </div>
                    </div>
                    <table class="w-full text-left">
                        <thead class="bg-surface-container-low text-on-surface-variant font-label-md">
                            <tr>
                                <th class="px-lg py-md">Tên danh mục</th>
                                <th class="px-lg py-md">Mô tả</th>
                                <th class="px-lg py-md">Icon</th>
                                <th class="px-lg py-md">Trạng thái</th>
                                <th class="px-lg py-md text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant">
                            <tr class="hover:bg-surface-container-low transition-colors">
                                <td class="px-lg py-lg font-bold">Sport Bikes</td>
                                <td class="px-lg py-lg text-secondary">Các dòng xe phân khối lớn hiệu suất cao.</td>
                                <td class="px-lg py-lg">
                                    <span class="material-symbols-outlined" data-icon="speed">speed</span>
                                </td>
                                <td class="px-lg py-lg">
                                    <span class="px-sm py-xs bg-green-100 text-green-700 rounded-full text-xs font-bold">Hoạt động</span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <span class="material-symbols-outlined cursor-pointer" data-icon="more_vert">more_vert</span>
                                </td>
                            </tr>
                            <tr class="hover:bg-surface-container-low transition-colors">
                                <td class="px-lg py-lg font-bold">Scooters</td>
                                <td class="px-lg py-lg text-secondary">Xe ga tiện lợi cho di chuyển đô thị.</td>
                                <td class="px-lg py-lg">
                                    <span class="material-symbols-outlined" data-icon="moped">moped</span>
                                </td>
                                <td class="px-lg py-lg">
                                    <span class="px-sm py-xs bg-green-100 text-green-700 rounded-full text-xs font-bold">Hoạt động</span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <span class="material-symbols-outlined cursor-pointer" data-icon="more_vert">more_vert</span>
                                </td>
                            </tr>
                            <tr class="hover:bg-surface-container-low transition-colors">
                                <td class="px-lg py-lg font-bold">Cruisers</td>
                                <td class="px-lg py-lg text-secondary">Thoải mái cho những chuyến hành trình dài.</td>
                                <td class="px-lg py-lg">
                                    <span class="material-symbols-outlined" data-icon="two_wheeler">two_wheeler</span>
                                </td>
                                <td class="px-lg py-lg">
                                    <span class="px-sm py-xs bg-red-100 text-red-700 rounded-full text-xs font-bold">Tạm dừng</span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <span class="material-symbols-outlined cursor-pointer" data-icon="more_vert">more_vert</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Overlay & Modal -->
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/10 backdrop-blur-md animate-in fade-in duration-300">
            <!-- Modal Card -->
            <div class="glass-modal w-full max-w-[560px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                <!-- Header -->
                <div class="px-2xl py-xl border-b border-outline-variant/30 flex justify-between items-center">
                    <h3 class="font-headline-lg text-headline-lg text-on-surface">Thêm danh mục mới</h3>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant/50 transition-colors" onclick="window.history.back()">
                        <span class="material-symbols-outlined text-on-surface-variant" data-icon="close">close</span>
                    </button>
                </div>
                <!-- Content / Form -->
                <div class="px-2xl py-xl space-y-lg max-h-[716px] overflow-y-auto custom-scrollbar">
                    <!-- Category Name -->
                    <div class="space-y-sm">
                        <label class="font-label-md text-on-surface-variant px-1" for="category-name">Tên danh mục</label>
                        <input class="w-full h-12 px-md rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" id="category-name" placeholder="Ví dụ: Touring Bikes" type="text"/>
                    </div>
                    <!-- Description -->
                    <div class="space-y-sm">
                        <label class="font-label-md text-on-surface-variant px-1" for="category-desc">Mô tả</label>
                        <textarea class="w-full p-md rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none" id="category-desc" placeholder="Mô tả ngắn gọn về loại xe này..." rows="3">
                        </textarea>
                    </div>
                    <!-- Row: Icon Picker & Status -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        <!-- Icon Selection -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-on-surface-variant px-1">Biểu tượng</label>
                            <div class="relative group">
                                <button class="w-full h-12 px-md rounded-xl border border-outline-variant bg-surface-container-lowest flex items-center justify-between hover:border-primary/50 transition-colors">
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-primary" data-icon="pedal_bike">pedal_bike</span>
                                        <span class="font-body-md">Pedal Bike</span>
                                    </div>
                                    <span class="material-symbols-outlined text-secondary" data-icon="expand_more">expand_more</span>
                                </button>
                                <!-- Hidden Select for form logic -->
                                <select class="absolute inset-0 opacity-0 cursor-pointer">
                                    <option>Pedal Bike</option>
                                    <option>Motorcycle</option>
                                    <option>Moped</option>
                                    <option>Directions Bike</option>
                                </select>
                            </div>
                        </div>
                        <!-- Status Toggle -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-on-surface-variant px-1">Trạng thái hoạt động</label>
                            <div class="flex items-center h-12">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input checked="" class="sr-only toggle-switch" type="checkbox"/>
                                    <div class="w-14 h-8 bg-surface-container-highest rounded-full toggle-bg transition-colors duration-200">
                                        <div class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full toggle-dot shadow-sm transition-transform duration-200 flex items-center justify-center">
                                            <span class="material-symbols-outlined text-[16px] text-primary" data-icon="check" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check</span>
                                        </div>
                                    </div>
                                    <span class="ml-3 font-body-md text-on-surface">Đang bật</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- Decorative Asset -->
                    <div class="relative h-24 rounded-xl overflow-hidden mt-xl border border-outline-variant/30">
                        <div class="absolute inset-0 flex items-center justify-center text-secondary/40 pointer-events-none italic text-xs">
                            * Tên danh mục sẽ hiển thị trực tiếp trên ứng dụng của khách hàng.
                        </div>
                    </div>
                </div>
                <!-- Footer Buttons -->
                <div class="px-2xl py-xl border-t border-outline-variant/30 flex justify-end gap-md">
                    <button class="px-2xl h-12 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-variant transition-all" onclick="window.history.back()">
                        Hủy
                    </button>
                    <button class="px-2xl h-12 bg-primary text-on-primary rounded-xl font-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] hover:shadow-primary/30 active:scale-95 transition-all">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThemDanhMuc',
    mounted() {
        // Micro-interaction for the status toggle label
        const toggle = document.querySelector('.toggle-switch');
        const statusText = toggle.parentElement.querySelector('span');
        const checkIcon = toggle.parentElement.querySelector('.toggle-dot span');
        
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                statusText.innerText = 'Đang bật';
                statusText.classList.remove('text-secondary');
                statusText.classList.add('text-on-surface');
                checkIcon.style.opacity = '1';
            } else {
                statusText.innerText = 'Đã tắt';
                statusText.classList.remove('text-on-surface');
                statusText.classList.add('text-secondary');
                checkIcon.style.opacity = '0';
            }
        });
        
        // Add "active" state classes to side nav as per instructions
        // This is Customers/Categories view
        document.querySelectorAll('nav div').forEach(div => {
            const label = div.querySelector('span:last-child').textContent;
            if (label === 'Customers') {
                div.className = "flex items-center gap-md p-md rounded-lg text-primary dark:text-inverse-primary font-bold transition-all duration-200";
            } else {
                div.className = "flex items-center gap-md p-md rounded-lg text-secondary dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors duration-200 cursor-pointer";
            }
        });
    }
}
</script>

<style scoped>
.glass-modal {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #E5E7EB;
    border-radius: 10px;
}
.toggle-switch:checked + .toggle-bg {
    background-color: #004ac6;
}
.toggle-switch:checked + .toggle-bg .toggle-dot {
    transform: translateX(100%);
}
</style>
