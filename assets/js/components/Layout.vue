<template>
    <div class="b-page">
        <header-component></header-component>
        <div>
            <router-view></router-view>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import HeaderComponent from './layout/Header.vue';
    import FooterComponent from './layout/Footer.vue';

    export default {
        name: 'AppLayout',
        components: {
            HeaderComponent,
            FooterComponent
        }
    }
</script>