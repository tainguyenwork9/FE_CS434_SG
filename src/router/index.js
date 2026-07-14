import { createRouter, createWebHistory } from "vue-router";

// NguyenVanTai components
import LandingPage from '../components/NguyenVanTai/LandingPage.vue';
import Login from '../components/NguyenVanTai/Login.vue';
import Registration from '../components/NguyenVanTai/Registration.vue';
import Forbidden403 from '../components/NguyenVanTai/Forbidden403.vue';
import Error404 from '../components/NguyenVanTai/Error404.vue';

// DaoDuyHoangThinh components
import DanhSachXe from '../components/DaoDuyHoangThinh/DanhSachXe.vue';
import ChiTietXe from '../components/DaoDuyHoangThinh/ChiTietXe.vue';
import DatThuXe from '../components/DaoDuyHoangThinh/DatThueXe.vue';
import PopupDanhGia from '../components/DaoDuyHoangThinh/PopupDanhGia.vue';
import QuanLyDanhGia from '../components/DaoDuyHoangThinh/QuanLyDanhGia.vue';

// LeVanTrong components
import Profile from '../components/LeVanTrong/Profile.vue';
import DoiMatKhau from '../components/LeVanTrong/DoiMatKhau.vue';
import QuanLyDanhMuc from '../components/LeVanTrong/QuanLyDanhMuc.vue';
import ThemDanhMuc from '../components/LeVanTrong/ThemDanhMuc.vue';
import SuaDanhMuc from '../components/LeVanTrong/SuaDanhMuc.vue';

// NguyenLeMinhTuan components
import LichSuThuXe from '../components/NguyenLeMinhTuan/LichSuThueXe.vue';
import QuanLyDonThue from '../components/NguyenLeMinhTuan/QuanLyDonThue.vue';
import ChiTietDonThue from '../components/NguyenLeMinhTuan/ChiTietDonThue.vue';
import GiaoXe from '../components/NguyenLeMinhTuan/GiaoXe.vue';
import NhanXe from '../components/NguyenLeMinhTuan/NhanXe.vue';

// PhanThiPhuocHien components
import Dashboard from '../components/PhanThiPhuocHien/Dashboard.vue';
import QuanLyKhachHang from '../components/PhanThiPhuocHien/QuanLyKhachHang.vue';
import QuanLyXe from '../components/PhanThiPhuocHien/QuanLyXe.vue';
import ThemXeMoi from '../components/PhanThiPhuocHien/ThemXeMoi.vue';
import SuaXe from '../components/PhanThiPhuocHien/SuaXe.vue';

const routes = [
    // --- Khách Vãng Lai & Khách Hàng (Default layout) ---
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
        meta: { layout: 'default' }
    },
    {
        path: '/danh-sach-xe',
        name: 'DanhSachXe',
        component: DanhSachXe,
        meta: { layout: 'default' }
    },
    {
        path: '/chi-tiet-xe',
        name: 'ChiTietXe',
        component: ChiTietXe,
        meta: { layout: 'default' }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { layout: 'none' }
    },
    {
        path: '/register',
        name: 'Registration',
        component: Registration,
        meta: { layout: 'none' }
    },
    {
        path: '/403',
        name: 'Forbidden403',
        component: Forbidden403,
        meta: { layout: 'default' }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { layout: 'default' }
    },
    {
        path: '/doi-mat-khau',
        name: 'DoiMatKhau',
        component: DoiMatKhau,
        meta: { layout: 'default' }
    },
    {
        path: '/lich-su-thu-xe',
        name: 'LichSuThuXe',
        component: LichSuThuXe,
        meta: { layout: 'default' }
    },
    {
        path: '/dat-thu-xe',
        name: 'DatThuXe',
        component: DatThuXe,
        meta: { layout: 'default' }
    },
    {
        path: '/danh-gia',
        name: 'PopupDanhGia',
        component: PopupDanhGia,
        meta: { layout: 'default' }
    },

    // --- Admin (Admin layout) ---
    {
        path: '/admin',
        redirect: '/admin/dashboard'
    },
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: Dashboard,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-danh-muc',
        name: 'QuanLyDanhMuc',
        component: QuanLyDanhMuc,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/them-danh-muc',
        name: 'ThemDanhMuc',
        component: ThemDanhMuc,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/sua-danh-muc',
        name: 'SuaDanhMuc',
        component: SuaDanhMuc,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-khach-hang',
        name: 'QuanLyKhachHang',
        component: QuanLyKhachHang,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-don-thue',
        name: 'QuanLyDonThue',
        component: QuanLyDonThue,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-danh-gia',
        name: 'QuanLyDanhGia',
        component: QuanLyDanhGia,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-xe',
        name: 'QuanLyXe',
        component: QuanLyXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/them-xe',
        name: 'ThemXeMoi',
        component: ThemXeMoi,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/sua-xe/:id',
        name: 'SuaXe',
        component: SuaXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/giao-xe',
        name: 'GiaoXe',
        component: GiaoXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/nhan-xe',
        name: 'NhanXe',
        component: NhanXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/chi-tiet-don-thue',
        name: 'ChiTietDonThue',
        component: ChiTietDonThue,
        meta: { layout: 'admin' }
    },

    // 404 Fallback route
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: Error404,
        meta: { layout: 'default' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;