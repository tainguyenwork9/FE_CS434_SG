<template>
    <aside class="fixed left-0 top-0 h-full w-[280px] flex flex-col bg-surface shadow-sm border-r border-outline-variant z-50">
            <div class="p-lg">
                <h1 class="font-display-sm text-display-sm font-bold text-primary">MotoRent Pro</h1>
                <p class="font-body-md text-body-md text-on-surface-variant">Admin Dashboard</p>
            </div>
            <nav class="flex-1 px-md space-y-xs mt-md">
                <!-- Dashboard (Active) -->
                <router-link class="flex items-center gap-md p-md rounded-xl transition-all duration-200 bg-surface-container-high text-primary font-bold translate-x-1" to="/admin/dashboard">
                    <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    <span class="font-label-md text-label-md">Dashboard</span>
                </router-link>
                <!-- Fleet -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" to="/admin/quan-ly-xe">
                    <span class="material-symbols-outlined" data-icon="motorcycle">motorcycle</span>
                    <span class="font-label-md text-label-md">Fleet</span>
                </router-link>
                <!-- Bookings -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" to="/admin/quan-ly-don-thue">
                    <span class="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                    <span class="font-label-md text-label-md">Bookings</span>
                </router-link>
                <!-- Customers -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" to="/admin/quan-ly-khach-hang">
                    <span class="material-symbols-outlined" data-icon="group">group</span>
                    <span class="font-label-md text-label-md">Customers</span>
                </router-link>
                <!-- Settings -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" to="/admin/quan-ly-danh-muc">
                    <span class="material-symbols-outlined" data-icon="category">settings</span>
                    <span class="font-label-md text-label-md">Categories</span>
                </router-link>
            </nav>
            <div class="px-md mb-xl">
                <router-link to="/admin/them-xe" class="w-full btn bg-primary text-white py-md rounded-xl font-label-md text-label-md shadow-md hover:shadow-lg transition-all active:scale-[0.98] d-block text-center text-decoration-none">
                    Add New Vehicle
                </router-link>
            </div>
            <footer class="p-md border-t border-outline-variant">
                <router-link class="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface transition-all" to="/admin/quan-ly-danh-gia">
                    <span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                    <span class="font-label-md text-label-md">Reviews</span>
                </router-link>
                <router-link class="flex items-center gap-md p-md text-error hover:opacity-80 transition-all" to="/login">
                    <span class="material-symbols-outlined" data-icon="logout">logout</span>
                    <span class="font-label-md text-label-md">Logout</span>
                </router-link>
            </footer>
        </aside>
</template>

<script>
export default {
    name: 'AdminSidebar'
}
</script>
