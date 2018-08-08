<template>
    <div>
        <div class="b-page__content" id="gjs">
            На этой странице должен распологаться непосредственно билдер
        </div>
    </div>
</template>

<script>

    import grapesjs from 'grapesjs';

    export default {
        componets: {
            grapesjs
        },
        name: 'storefrontEditor',
        data () {
            return {

            }
        },
        mounted () {
            var editor = grapesjs.init({
                container : '#gjs',
                components: '<div class="txt">Hello in Storefront P1!</div>',
                style: '.txt{color: #000, font-size: 4rem; padding: 4rem;}'
            });
        }
    }
</script>

<style>

    @import '../../../../node_modules/grapesjs/dist/css/grapes.min.css';

</style>