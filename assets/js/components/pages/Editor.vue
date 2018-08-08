<template>
    <div>
        <div class="b-page__content" id="gjs">
        </div>
    </div>
</template>

<script>

    import grapesjs from 'grapesjs';
    import gjspresetwebpage from 'grapesjs-preset-webpage';

    export default {
        componets: {
            grapesjs
        },
        name: 'StorefrontEditor',
        data () {
            return {

            }
        },
        mounted () {
            var editor = grapesjs.init({
                container : '#gjs',
                components: '<div class="txt">Hello in Storefront P1!</div>',
                style: '.txt{color: #000; font-size: 4rem; padding: 4rem;}',
                fromElement: true,
                plugins: ['gjs-preset-webpage'],
                pluginsOpts: {
                    'gjs-preset-webpage': {
                        // options
                    }
                }
            });
        }
    }
</script>

<style scoped>
    @import '../../../../node_modules/grapesjs/dist/css/grapes.min.css';
    @import '../../../../node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';

    /*#gjs >>> .gjs-editor,
    #gjs >>> .gjs-layer,
    #gjs >>> .gjs-clm-tags,
    #gjs >>> .gjs-trt-traits,
    #gjs >>> .gjs-sm-properties,
    #gjs >>> .gjs-toolbar-item {
         font-size: 1.4rem;
    }*/

</style>