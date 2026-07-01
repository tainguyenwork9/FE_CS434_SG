<template>
    <div class="text-on-surface bg-background min-h-screen flex flex-col">
        <CustomerHeader />
        <div class="pt-[72px] flex-1">
            <router-view></router-view>
        </div>
        <CustomerFooter />
    </div>
</template>

<script>
import CustomerHeader from '../components/Header/CustomerHeader.vue';
import CustomerFooter from '../components/Footer/CustomerFooter.vue';

export default {
    name: 'DefaultLayout',
    components: {
        CustomerHeader,
        CustomerFooter
    }
}
</script>
