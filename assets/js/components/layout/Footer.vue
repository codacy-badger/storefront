<template>
    <footer class="b-page__footer" v-if="this.isStorefrontPreview == false">
        Это футер
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'FooterComponent',
        data() {
            return {
                isStorefrontPreview: false
            }
        },
        watch: {
            storefrontPreview: {
                handler: function (status, old) {
                    this.isStorefrontPreview = status;
                    console.log(status);
                },
                deep: true
            }
        },
        computed: {
            ...mapGetters(['storefrontPreview'])
        }
    }
</script>