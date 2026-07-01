<template>
    <div class="bg-[#F8FAFC] text-on-surface min-h-screen">
        <AdminSidebar />
        <div class="ml-[280px]">
            <AdminHeader />
            <div class="mt-[72px] p-margin-desktop bg-[#F1F3F9] min-h-[calc(100vh-72px)]">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '../components/Menu/AdminSidebar.vue';
import AdminHeader from '../components/Header/AdminHeader.vue';

export default {
    name: 'AdminLayout',
    components: {
        AdminSidebar,
        AdminHeader
    }
}
</script>
