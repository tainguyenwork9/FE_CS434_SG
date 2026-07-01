<template>
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop h-[72px] bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-sm transition-all duration-200">
            <div class="flex items-center gap-2">
                <router-link to="/" class="text-title-lg font-title-lg font-bold text-primary text-decoration-none">MotoRent Pro</router-link>
            </div>
            <nav class="hidden md:flex items-center gap-8">
                <router-link class="text-primary font-bold border-b-2 border-primary text-label-md font-label-md text-decoration-none" to="/">Home</router-link>
                <router-link class="text-on-surface-variant hover:text-primary transition-all duration-200 text-label-md font-label-md text-decoration-none" to="/danh-sach-xe">Categories</router-link>
                <router-link class="text-on-surface-variant hover:text-primary transition-all duration-200 text-label-md font-label-md text-decoration-none" to="/profile">Profile</router-link>
            </nav>
            <div class="flex items-center gap-4">
                <router-link to="/login" class="px-4 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 rounded-lg text-label-md font-label-md scale-95 active:scale-90 text-decoration-none">Login</router-link>
                <router-link to="/register" class="px-6 py-2.5 bg-primary text-on-primary rounded-xl hover:bg-primary-container transition-all duration-200 text-label-md font-label-md shadow-sm scale-95 active:scale-90 text-decoration-none">Register</router-link>
            </div>
        </header>
</template>

<script>
export default {
    name: 'CustomerHeader'
}
</script>
