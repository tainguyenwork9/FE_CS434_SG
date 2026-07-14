<template>
    <div class="p-margin-desktop">
        <div class="flex items-center gap-sm mb-lg">
            <button @click="$router.push('/admin/quan-ly-xe')" class="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">Thêm phương tiện mới</h2>
        </div>

        <form @submit.prevent="submitForm" class="glass-card max-w-[800px] p-xl rounded-2xl space-y-lg">
            <div class="space-y-sm">
                <label class="font-label-md text-label-md text-on-surface-variant">URL Ảnh phương tiện</label>
                <input v-model="form.hinh_anh" type="text" placeholder="https://example.com/image.jpg" class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                <div v-if="form.hinh_anh" class="mt-4 w-32 h-32 rounded-xl overflow-hidden border border-outline-variant">
                    <img :src="form.hinh_anh" class="w-full h-full object-cover" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant">Tên phương tiện</label>
                    <input v-model="form.ten_xe" required type="text" placeholder="Ví dụ: Honda SH 150i 2024" class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                
                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant">Biển số xe</label>
                    <input v-model="form.bien_so_xe" required type="text" placeholder="Ví dụ: 29A1-123.45" class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>

                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant">Màu sắc</label>
                    <input v-model="form.mau_sac" required type="text" placeholder="Ví dụ: Đỏ Đen" class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>

                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant">Giá thuê / ngày (VNĐ)</label>
                    <input v-model="form.gia_thue_ngay" required type="number" placeholder="500000" class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>

                <div class="space-y-xs">
                    <label class="font-label-md text-label-md text-on-surface-variant">Danh mục xe</label>
                    <select v-model="form.ma_danh_muc" required class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none">
                        <option value="" disabled>Chọn danh mục</option>
                        <option v-for="dm in danhMucList" :key="dm.ma_danh_muc" :value="dm.ma_danh_muc">
                            {{ dm.ten_danh_muc }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="flex items-center justify-between p-md bg-surface-container-low rounded-xl border border-outline-variant/30">
                <div class="flex items-center gap-md">
                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary">check_circle</span>
                    </div>
                    <div>
                        <p class="font-label-md text-label-md text-on-surface">Trạng thái xe</p>
                        <p class="text-[12px] text-on-surface-variant">Sẵn sàng để cho thuê</p>
                    </div>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="isReady" class="sr-only peer">
                    <div class="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
            </div>

            <div class="flex justify-end gap-md pt-lg">
                <button type="button" @click="$router.push('/admin/quan-ly-xe')" class="px-xl h-12 rounded-xl font-label-md text-on-surface-variant bg-surface-container-low hover:bg-surface-container-high transition-colors">
                    Hủy
                </button>
                <button type="submit" :disabled="saving" class="px-xl h-12 rounded-xl font-label-md bg-primary text-white hover:bg-surface-tint transition-colors disabled:opacity-50">
                    {{ saving ? 'Đang lưu...' : 'Thêm mới' }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'ThemXeMoi',
    data() {
        return {
            form: {
                ten_xe: '',
                bien_so_xe: '',
                mau_sac: '',
                gia_thue_ngay: '',
                ma_danh_muc: '',
                hinh_anh: ''
            },
            isReady: true,
            danhMucList: [],
            saving: false
        }
    },
    methods: {
        async fetchDanhMuc() {
            try {
                this.danhMucList = await api.get('/danh-muc-xe');
            } catch (error) {
                console.error("Failed to fetch danh muc", error);
            }
        },
        async submitForm() {
            this.saving = true;
            try {
                const payload = {
                    ...this.form,
                    tinh_trang_xe: this.isReady ? 'SanSang' : 'BaoTri'
                };
                await api.post('/admin/xe-may', payload);
                alert("Thêm xe thành công!");
                this.$router.push('/admin/quan-ly-xe');
            } catch (error) {
                alert("Lỗi khi thêm xe: " + (error.message || 'Check console'));
                console.error(error);
            } finally {
                this.saving = false;
            }
        }
    },
    mounted() {
        this.fetchDanhMuc();
    }
}
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
</style>
