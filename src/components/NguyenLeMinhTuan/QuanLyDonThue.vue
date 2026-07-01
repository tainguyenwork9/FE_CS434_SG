<template>
    <div>
        <!-- SideNavBar Shell -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- TopAppBar Shell -->
            <!-- Content Canvas -->
            <section class="mt-16 p-margin-desktop space-y-lg">
                <!-- Page Header -->
                <div class="flex justify-between items-end">
                    <div class="space-y-1">
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Quản lý Đơn thuê xe</h2>
                        <p class="text-body-md text-on-surface-variant">Theo dõi, kiểm tra và phê duyệt các yêu cầu đặt xe từ khách hàng doanh nghiệp.</p>
                    </div>
                    <div class="flex gap-md">
                        <button class="px-lg py-md rounded-xl border border-outline-variant hover:bg-surface-container transition-all flex items-center gap-sm font-label-md text-on-surface">
                            <span class="material-symbols-outlined">download</span>
                            Xuất báo cáo
                        </button>
                        <button class="px-lg py-md rounded-xl bg-primary text-on-primary hover:brightness-110 transition-all flex items-center gap-sm font-label-md shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined">person_add</span>
                            Thêm khách hàng
                        </button>
                    </div>
                </div>
                <!-- Dashboard Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                    <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                        <div class="flex justify-between items-start mb-md">
                            <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">receipt_long</span>
                            <span class="text-xs font-bold text-success flex items-center text-[#10b981]">+12% <span class="material-symbols-outlined text-xs">trending_up</span>
                        </span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Tổng đơn hàng</p>
                    <p class="text-headline-lg font-bold">1,284</p>
                </div>
                <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <span class="material-symbols-outlined text-[#f59e0b] p-2 bg-yellow-100 rounded-lg">pending_actions</span>
                        <span class="text-xs font-bold text-[#ba1a1a]">8 mới</span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Chờ duyệt</p>
                    <p class="text-headline-lg font-bold">42</p>
                </div>
                <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <span class="material-symbols-outlined text-[#8b5cf6] p-2 bg-purple-100 rounded-lg">key</span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Đang thuê</p>
                    <p class="text-headline-lg font-bold">156</p>
                </div>
                <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <span class="material-symbols-outlined text-[#10b981] p-2 bg-green-100 rounded-lg">task_alt</span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Hoàn thành</p>
                    <p class="text-headline-lg font-bold">1,086</p>
                </div>
            </div>
            <div class="flex gap-gutter items-start">
                <!-- Sidebar Filter Panel -->
                <!-- Order Table Panel -->
                <div class="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
                    <div class="p-lg border-b border-outline-variant flex justify-between items-center">
                        <h3 class="font-title-lg text-on-surface">Danh sách đơn hàng</h3>
                        <div class="flex gap-md">
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                                <input class="bg-surface-container-low border-none rounded-lg pl-9 pr-4 py-1.5 text-label-md w-64 focus:ring-1 focus:ring-primary" placeholder="Tìm ID, tên khách..." type="text"/>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto custom-scrollbar">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="bg-surface-container-low border-b border-outline-variant">
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Mã đơn</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Khách hàng</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Xe</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Ngày đặt</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Tổng tiền</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Trạng thái</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline text-right">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant">
                                <!-- Row 1: Pending -->
                                <tr class="hover:bg-surface-container transition-colors group">
                                    <td class="px-lg py-md font-label-md text-primary font-bold">#ORD-9021</td>
                                    <td class="px-lg py-md">
                                        <div class="flex items-center gap-md">
                                            <img class="w-8 h-8 rounded-full object-cover" data-alt="Close up profile photo of a smiling professional woman in a tech office setting. High contrast, clean modern look, primary blue corporate colors reflected in her accessories. Elegant minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy7QvPjIr-NDH7uVy0wguoHqA3M13monWwmXohaqPooeKKZy76cX7vaeFprGeNpSPpTMOOToVF_B1nLdxbN6lLOuGIxQkwaIH1ALl8WTPPPzB4JuwTeSbOsXcDil6EWK8_uUX7grivNcaUKdZ97qLVao5TSEn8iKAR9LM5qvAVQgEUqR4Ledd-KpmwDHD5bpfqie3o9dwoVvB3lErYZUOP--aq3ZKBYE-GshUtHwH5SedvLvZahoSMBekKzmcisX_HNdu2NVHl-Iac"/>
                                            <div>
                                                <p class="font-label-md text-on-surface">Trần Anh Thư</p>
                                                <p class="text-xs text-on-surface-variant">090 123 45xx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md">
                                        <p class="font-label-md text-on-surface">Honda SH 150i</p>
                                        <p class="text-xs text-on-surface-variant">Biển: 29A-123.45</p>
                                    </td>
                                    <td class="px-lg py-md text-body-md text-on-surface-variant">24/10/2025</td>
                                    <td class="px-lg py-md font-bold text-on-surface">1,200,000 đ</td>
                                    <td class="px-lg py-md">
                                        <span class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-yellow-100 text-yellow-700">Chờ duyệt</span>
                                    </td>
                                    <td class="px-lg py-md text-right space-x-2">
                                        <button class="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-on-primary transition-all" title="Duyệt">
                                            <span class="material-symbols-outlined text-[20px]">check_circle</span>
                                        </button>
                                        <button class="p-1.5 rounded-lg bg-error/10 text-error hover:bg-error hover:text-on-primary transition-all" title="Từ chối">
                                            <span class="material-symbols-outlined text-[20px]">cancel</span>
                                        </button>
                                    </td>
                                </tr>
                                <!-- Row 2: Approved -->
                                <tr class="hover:bg-surface-container transition-colors group">
                                    <td class="px-lg py-md font-label-md text-primary font-bold">#ORD-9018</td>
                                    <td class="px-lg py-md">
                                        <div class="flex items-center gap-md">
                                            <img class="w-8 h-8 rounded-full object-cover" data-alt="Portrait of a male entrepreneur in his late 30s, sharp features, wearing a blue shirt. The background is a blurred high-end office lobby. Professional corporate lighting, sharp focus, clean blue color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjeXGcg-XnmyvqkW8SLhHdXEy-ioTVWJRt2pWixMpO9FFviD1ENetoWjxq3Q3X-m91fMX771ucbaEEwxyZKQsqHgCUq4_kgD71H0nI0uxYI922463CzkZwDk9pIyTSEnwxRAut9hKB5S9U04DFbuJh5TVcmd4tbmyllACALgaZWaN13y74t5H4czx6SmAOruoRSSz6h4Fut6F96akvPMauHILE1eZwsdvPDGTPMfuLXsOpp8HlL2JYJtFOdce7m4s-eFM1jq6fAtPL"/>
                                            <div>
                                                <p class="font-label-md text-on-surface">Lê Văn Nam</p>
                                                <p class="text-xs text-on-surface-variant">091 555 12xx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md">
                                        <p class="font-label-md text-on-surface">Yamaha Exciter 155</p>
                                        <p class="text-xs text-on-surface-variant">Biển: 59G-567.89</p>
                                    </td>
                                    <td class="px-lg py-md text-body-md text-on-surface-variant">23/10/2025</td>
                                    <td class="px-lg py-md font-bold text-on-surface">850,000 đ</td>
                                    <td class="px-lg py-md">
                                        <span class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">Đã duyệt</span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <button class="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm hover:brightness-110 transition-all">Giao xe</button>
                                    </td>
                                </tr>
                                <!-- Row 3: Active -->
                                <tr class="hover:bg-surface-container transition-colors group">
                                    <td class="px-lg py-md font-label-md text-primary font-bold">#ORD-8995</td>
                                    <td class="px-lg py-md">
                                        <div class="flex items-center gap-md">
                                            <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xs">KD</div>
                                            <div>
                                                <p class="font-label-md text-on-surface">Kim Da-in</p>
                                                <p class="text-xs text-on-surface-variant">034 888 77xx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md">
                                        <p class="font-label-md text-on-surface">Vespa Primavera</p>
                                        <p class="text-xs text-on-surface-variant">Biển: 29A-111.11</p>
                                    </td>
                                    <td class="px-lg py-md text-body-md text-on-surface-variant">20/10/2025</td>
                                    <td class="px-lg py-md font-bold text-on-surface">2,400,000 đ</td>
                                    <td class="px-lg py-md">
                                        <span class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700">Đang thuê</span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <button class="px-4 py-1.5 rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-50 font-label-sm transition-all">Nhận xe</button>
                                    </td>
                                </tr>
                                <!-- Row 4: Completed -->
                                <tr class="hover:bg-surface-container transition-colors group">
                                    <td class="px-lg py-md font-label-md text-primary font-bold">#ORD-8950</td>
                                    <td class="px-lg py-md">
                                        <div class="flex items-center gap-md">
                                            <img class="w-8 h-8 rounded-full object-cover" data-alt="A photo of a diverse group of modern business people in a collaborative workspace. Focused on a young Asian man in the foreground with a warm smile. High-resolution commercial photography, bright and airy light-mode feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFgqdw1-__aRY9FZ8HKCgongSEWtzY9sAJWViZCuTqRxx4CV0MWFci7FbcyPxuy9lljqogKAwyVmjsnyspdg1Jr7tCKAsulIOtksZWEEPL7bPNctFhtAISXtD9M6NkoKok4y8PoXjBAN-cQJZGOiriYRcNOqYI0bIiwNqN4-325JmZgbac_JhQ0vGmOxGaQyk_LSh5fFxs0TWYSIdS4C1GNjCsbFxpY_FRIH3CG7bDI_ZtUd4nbtTdzhxDNfqA4TgF8eBjYK985-Y8"/>
                                            <div>
                                                <p class="font-label-md text-on-surface">Phạm Minh Hoàng</p>
                                                <p class="text-xs text-on-surface-variant">098 765 43xx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md">
                                        <p class="font-label-md text-on-surface">BMW R 1250 GS</p>
                                        <p class="text-xs text-on-surface-variant">Biển: 30A-999.99</p>
                                    </td>
                                    <td class="px-lg py-md text-body-md text-on-surface-variant">15/10/2025</td>
                                    <td class="px-lg py-md font-bold text-on-surface">4,500,000 đ</td>
                                    <td class="px-lg py-md">
                                        <span class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-green-100 text-green-700">Hoàn thành</span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <button class="p-2 text-on-surface-variant hover:text-primary transition-colors">
                                            <span class="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination -->
                    <div class="px-lg py-md border-t border-outline-variant flex items-center justify-between">
                        <p class="text-label-sm text-on-surface-variant">Hiển thị 1 - 10 trên 1,284 đơn hàng</p>
                        <div class="flex gap-2">
                            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all">
                                <span class="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-xs">1</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
export default {
    name: 'QuanLyDonThue'
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
    background-color: #faf8ff;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}
.glass-panel {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #e7e7f3;
}
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c3c6d7;
    border-radius: 10px;
}
.active-nav-item {
    color: #004ac6;
    font-weight: 700;
}
</style>
