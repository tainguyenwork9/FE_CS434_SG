<template>
    <header class="fixed top-0 right-0 left-[280px] h-[72px] bg-surface/80 backdrop-blur-md shadow-sm flex justify-between items-center px-margin-desktop z-40">
            <div class="flex items-center w-1/3">
                <div class="relative w-full max-w-sm">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
                    <input class="w-full pl-10 pr-md py-2 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md outline-none" placeholder="Tìm kiếm hệ thống..." type="text"/>
                </div>
            </div>
            <div class="flex items-center gap-xl">
                <div class="flex gap-md">
                    <button class="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-transform active:scale-95">
                        <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
                    </button>
                    <button class="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-transform active:scale-95">
                        <span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
                    </button>
                    <button class="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-transform active:scale-95">
                        <span class="material-symbols-outlined" data-icon="settings">settings</span>
                    </button>
                </div>
                <div class="flex items-center gap-md pl-xl border-l border-outline-variant">
                    <div class="text-right">
                        <p class="font-label-md text-label-md text-on-surface">Quản trị viên</p>
                        <p class="text-[10px] text-outline-variant font-bold uppercase tracking-widest">Quản trị</p>
                    </div>
                    <div class="w-10 h-10 rounded-full border-2 border-primary/20 bg-surface-container-highest flex items-center justify-center overflow-hidden">
                        <img class="w-full h-full object-cover" data-alt="Professional studio headshot of a young male administrator in business casual attire with a clean, blurred office background. The lighting is soft and corporate, perfectly matching a high-end dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1iW2957LGCZcRIPWZVHuvd8DjoosN8-l-i-zVrIZi60hUdbIgoCJnqz7XhbAYjZuh0EWdxkhpWvh_1vzhL-7zPpF-nDccJnXKOZmBYLl2lo4cOpHQcE21WIhxm-XrhAyIgf5feKQ__zg361iL4NkifQYX1EYlXwycsfIq1A-qu7wLAXlBfFVlJsSZqcYt8EMVwxyZ6pw7CL-xvyvyXnE5GBn1eAF05Uj1CzQCn1mOW93gjqJ7hGy2xBzcsANKU-QPx1Nn-gs9_tH-"/>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'AdminHeader'
}
</script>
