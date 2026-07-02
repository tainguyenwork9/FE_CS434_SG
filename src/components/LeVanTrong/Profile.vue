<template>
    <div>
        <!-- Top Navigation Anchor (Shared Component) -->
        <main class="pt-24 pb-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row gap-lg">
            <!-- Sidebar Navigation -->
            <!-- Main Content Area -->
            <section class="flex-grow space-y-lg">
                <!-- Profile Header -->
                <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-xl md:p-3xl card-lift">
                    <div class="flex flex-col md:flex-row items-center gap-xl">
                        <div class="relative">
                            <img class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface shadow-lg object-cover" data-alt="A high-quality circular avatar image showing a confident male user in his late 20s. He is wearing a sleek professional leather jacket, suggesting a passion for motorbikes. The lighting is crisp and natural, set against a modern architectural background in soft focus with cool blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdHHrsEpm0mA4MsP8UQFMPZkMvJ1HhZVm1dVwXrEaJDji3MCJ9C60E_NlWgZanBJ0pd86rQVgar14vch5AK-TIWpFU6LJ09010HDtENqd45XqUu0PrvkOtzEgOywdc2IMTGhaTI3ct8rkEWtXIrl74srgETZSOzbtHtrtjKfibmm3_VbyJ48FHZYlsaIQLmU9BTg9lX-q2jC05EtOOSGSqdx0H-oBuOlG20s8rhS-N38kLXcndToWFM8PVDBeGHBzaD-IIHp7ArhNy"/>
                            <button class="absolute bottom-2 right-2 bg-primary text-on-primary p-xs rounded-full shadow-md hover:scale-110 transition-transform flex items-center justify-center">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'opsz' 20;">edit</span>
                            </button>
                        </div>
                        <div class="text-center md:text-left">
                            <h1 class="font-display-sm text-display-sm text-on-surface">Alex Nguyen</h1>
                            <p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">Power User • Member since June 2024</p>
                            <button class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold px-xl py-md rounded-xl transition-all font-label-md text-label-md flex items-center gap-sm">
                                <span class="material-symbols-outlined">photo_camera</span>
                                Update Photo
                            </button>
                        </div>
                    </div>
                </div>
                <!-- User Details Form (Bento Grid Style) -->
                <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-xl md:p-2xl">
                    <div class="flex items-center justify-between mb-xl">
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Personal Info</h2>
                        <span class="bg-secondary-container text-on-secondary-container px-md py-xs rounded-full font-label-sm text-label-sm">Verified Profile</span>
                    </div>
                    <form class="grid grid-cols-1 md:grid-cols-2 gap-lg" onsubmit="return false;">
                        <!-- Full Name -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Full Name</label>
                            <input class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="text" value="Alex Nguyen"/>
                        </div>
                        <!-- Email -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Email Address</label>
                            <input class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="email" value="alex.nguyen@example.com"/>
                        </div>
                        <!-- Phone -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Phone Number</label>
                            <input class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="tel" value="+84 901 234 567"/>
                        </div>
                        <!-- ID/Passport -->
                        <div class="space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">ID/Passport (CCCD)</label>
                            <input class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="text" value="079092000123"/>
                        </div>
                        <!-- Address -->
                        <div class="md:col-span-2 space-y-sm">
                            <label class="font-label-md text-label-md text-on-surface-variant ml-xs">Address</label>
                            <input class="w-full h-12 rounded-xl border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md" type="text" value="123 Vo Van Kiet, District 1, Ho Chi Minh City"/>
                        </div>
                        <!-- Action Buttons -->
                        <div class="md:col-span-2 flex flex-col md:flex-row gap-md pt-xl">
                            <button class="flex-grow bg-primary hover:bg-surface-tint text-on-primary font-bold h-12 rounded-xl transition-all shadow-md active:scale-95 font-label-md text-label-md">
                                Lưu (Save Changes)
                            </button>
                            <button class="flex-grow bg-surface-container-low hover:bg-surface-container-high text-primary border border-primary/20 font-semibold h-12 rounded-xl transition-all active:scale-95 font-label-md text-label-md">
                                Đổi mật khẩu (Change Password)
                            </button>
                        </div>
                    </form>
                </div>
                <!-- Recent Activity / Info Cards (Asymmetric Layout) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
                    <div class="md:col-span-2 bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 shadow-sm flex items-center justify-between card-lift">
                        <div class="flex items-center gap-md">
                            <div class="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                                <span class="material-symbols-outlined" data-icon="motorcycle" style="font-variation-settings: 'FILL' 1;">motorcycle</span>
                            </div>
                            <div>
                                <p class="font-label-sm text-label-sm text-on-surface-variant">Last Rental</p>
                                <h4 class="font-title-lg text-title-lg text-on-surface">Ducati Panigale V4</h4>
                            </div>
                        </div>
                        <span class="material-symbols-outlined text-outline">chevron_right</span>
                    </div>
                    <div class="bg-primary text-on-primary p-xl rounded-xl shadow-md card-lift">
                        <p class="font-label-sm text-label-sm opacity-80 uppercase tracking-wider mb-xs">Reward Points</p>
                        <h3 class="font-display-sm text-display-sm">2,450</h3>
                        <p class="font-body-md text-body-md opacity-90 mt-xs">Silver Tier Status</p>
                    </div>
                </div>
            </section>
        </main>
        <!-- Footer (Shared Component) -->
        <footer class="mt-3xl w-full bg-surface-container-low dark:bg-surface-dim border-t border-outline-variant/20 rounded-t-xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg px-margin-mobile md:px-margin-desktop py-2xl max-w-container-max mx-auto">
                <div class="space-y-md">
                    <span class="font-title-lg text-title-lg font-black text-on-surface dark:text-inverse-on-surface">MotoRent Pro</span>
                    <p class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">© 2026 MotoRent Pro. All rights reserved. Premium mobility management simplified.</p>
                </div>
                <div class="space-y-md">
                    <h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed uppercase tracking-widest">Platform</h5>
                    <nav class="flex flex-col gap-sm">
                        <a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed underline decoration-2 underline-offset-4 transition-all" href="#">Fleet Management</a>
                        <a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed underline decoration-2 underline-offset-4 transition-all" href="#">Partner Program</a>
                    </nav>
                </div>
                <div class="space-y-md">
                    <h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed uppercase tracking-widest">Legal</h5>
                    <nav class="flex flex-col gap-sm">
                        <a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed underline decoration-2 underline-offset-4 transition-all" href="#">Terms of Service</a>
                        <a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed underline decoration-2 underline-offset-4 transition-all" href="#">Privacy Policy</a>
                    </nav>
                </div>
                <div class="space-y-md">
                    <h5 class="font-label-md text-label-md text-primary dark:text-primary-fixed uppercase tracking-widest">Support</h5>
                    <nav class="flex flex-col gap-sm">
                        <a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed underline decoration-2 underline-offset-4 transition-all" href="#">Contact Support</a>
                        <div class="flex gap-md pt-sm">
                            <span class="material-symbols-outlined text-outline">language</span>
                            <span class="material-symbols-outlined text-outline">alternate_email</span>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    mounted() {
        // Micro-interactions for input focus effects
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('scale-[1.01]');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('scale-[1.01]');
            });
        });
        
        // Simple tab active state logic (Simulation)
        const sidebarLinks = document.querySelectorAll('aside nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                sidebarLinks.forEach(l => {
                    l.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold');
                    l.classList.add('text-on-surface-variant', 'hover:bg-surface-container');
                });
                link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container');
                link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold');
            });
        });
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-panel {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.sidebar-item-active {
    @apply bg-primary-container/10 text-primary font-bold;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.card-lift {
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
}
.card-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
</style>
