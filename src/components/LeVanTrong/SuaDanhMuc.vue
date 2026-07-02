<template>
    <div>
        <!-- Background Layer (Category Management Table) -->
        <div class="flex h-screen overflow-hidden filter blur-sm select-none">
            <!-- SideNavBar Component Implementation -->
            <!-- Main Content Area (Blurred) -->
            <div class="space-y-xl">
                <!-- TopNavBar Component Implementation -->
                <!-- Page Content (Table Layout) -->
                <div class="pt-24 px-margin-desktop pb-xl">
                    <div class="flex justify-between items-end mb-xl">
                        <div>
                            <h2 class="font-headline-lg text-headline-lg text-on-surface">Quản lý danh mục</h2>
                            <p class="font-body-md text-body-md text-secondary">Quản lý các loại xe trong hệ thống cho thuê</p>
                        </div>
                        <button class="bg-primary text-on-primary px-lg py-sm rounded-xl font-label-md text-label-md flex items-center gap-sm shadow-sm">
                            <span class="material-symbols-outlined text-[20px]">add</span>
                            Thêm mới
                        </button>
                    </div>
                    <div class="bg-surface rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="bg-surface-container-low border-b border-outline-variant/30">
                                    <th class="px-lg py-md font-label-md text-label-md text-secondary">ICON</th>
                                    <th class="px-lg py-md font-label-md text-label-md text-secondary">TÊN DANH MỤC</th>
                                    <th class="px-lg py-md font-label-md text-label-md text-secondary">MÔ TẢ</th>
                                    <th class="px-lg py-md font-label-md text-label-md text-secondary">TRẠNG THÁI</th>
                                    <th class="px-lg py-md font-label-md text-label-md text-secondary">HÀNH ĐỘNG</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/20">
                                <tr>
                                    <td class="px-lg py-lg">
                                        <span class="material-symbols-outlined text-primary">scooter</span>
                                    </td>
                                    <td class="px-lg py-lg font-label-md text-label-md text-on-surface">Xe tay ga</td>
                                    <td class="px-lg py-lg font-body-md text-body-md text-secondary">Các dòng xe ga hiện đại, dễ sử dụng</td>
                                    <td class="px-lg py-lg">
                                        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">Hoạt động</span>
                                    </td>
                                    <td class="px-lg py-lg">
                                        <button class="text-secondary hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">edit</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-lg py-lg">
                                        <span class="material-symbols-outlined text-primary">motorcycle</span>
                                    </td>
                                    <td class="px-lg py-lg font-label-md text-label-md text-on-surface">Xe côn tay</td>
                                    <td class="px-lg py-lg font-body-md text-body-md text-secondary">Xe phân khối lớn dành cho phượt thủ</td>
                                    <td class="px-lg py-lg">
                                        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">Hoạt động</span>
                                    </td>
                                    <td class="px-lg py-lg">
                                        <button class="text-secondary hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">edit</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Overlay / Popup Modal Layer -->
        <div class="fixed inset-0 z-50 flex items-center justify-center p-md">
            <!-- Backdrop Blur -->
            <div class="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300">
            </div>
            <!-- Modal Container -->
            <div class="relative w-full max-w-[560px] glass-panel rounded-2xl shadow-2xl overflow-hidden scale-100 transition-transform duration-300 transform translate-y-0 flex flex-col">
                <!-- Modal Header -->
                <div class="px-xl py-lg flex justify-between items-center border-b border-outline-variant/30">
                    <h3 class="font-headline-lg text-headline-lg text-on-surface">Chỉnh sửa danh mục</h3>
                    <button class="p-2 rounded-full hover:bg-surface-container transition-colors text-secondary" onclick="window.history.back()">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <!-- Modal Content (Form) -->
                <div class="p-xl space-y-lg">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        <!-- Category Name -->
                        <div class="space-y-sm md:col-span-2">
                            <label class="font-label-md text-label-md text-secondary px-1">Tên danh mục</label>
                            <input class="w-full h-12 px-md bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body-lg text-body-lg" placeholder="Nhập tên danh mục" type="text" value="Xe tay ga"/>
                        </div>
                        <!-- Description -->
                        <div class="space-y-sm md:col-span-2">
                            <label class="font-label-md text-label-md text-secondary px-1">Mô tả</label>
                            <textarea class="w-full p-md bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body-md text-body-md min-h-[100px]" placeholder="Nhập mô tả chi tiết cho danh mục">Các dòng xe ga hiện đại, dễ sử dụng, phù hợp đi lại trong phố.</textarea>
                        </div>
                        <!-- Icon Selection -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-secondary px-1">Biểu tượng (Icon)</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                                    <span class="material-symbols-outlined text-primary">scooter</span>
                                </div>
                                <select class="w-full h-12 pl-[48px] pr-md bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body-md text-body-md appearance-none">
                                    <option selected="">scooter</option>
                                    <option>motorcycle</option>
                                    <option>electric_scooter</option>
                                    <option>moped</option>
                                </select>
                                <div class="absolute inset-y-0 right-0 pr-md flex items-center pointer-events-none text-secondary">
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <!-- Status -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-secondary px-1">Trạng thái</label>
                            <div class="flex items-center gap-md h-12">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input checked="" class="sr-only peer" type="checkbox"/>
                                    <div class="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                                    </div>
                                    <span class="ml-3 font-body-md text-body-md text-on-surface">Hoạt động</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- Preview Area -->
                    <div class="bg-surface-container-low p-md rounded-xl border border-dashed border-outline-variant flex items-center gap-md">
                        <div class="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center">
                            <span class="material-symbols-outlined text-on-primary-container text-2xl" style="font-variation-settings: 'FILL' 1;">scooter</span>
                        </div>
                        <div>
                            <p class="font-label-md text-label-md text-on-surface">Bản xem trước</p>
                            <p class="text-xs text-secondary">Icon sẽ hiển thị trên ứng dụng của khách hàng</p>
                        </div>
                    </div>
                </div>
                <!-- Modal Footer -->
                <div class="px-xl py-lg bg-surface-container-lowest/50 border-t border-outline-variant/30 flex justify-end items-center gap-md">
                    <button class="px-xl py-2 font-label-md text-label-md text-secondary hover:text-primary transition-all duration-200">
                        Hủy
                    </button>
                    <button class="px-xl py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md shadow-sm hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200 active:scale-95">
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
        <!-- Small Micro-interactions script -->
    </div>
</template>

<script>
export default {
    name: 'SuaDanhMuc',
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // In a real app, this would close the modal
                console.log('Close modal trigger');
            }
        });
        
        // Add subtle interaction effect to inputs
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('scale-[1.01]');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('scale-[1.01]');
            });
        });
    }
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-panel {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 231, 235, 0.5);
}
</style>
