<template>
    <header class="b-page__header" v-if="this.isStorefrontPreview == false">
        Это хэдер

        <div style="margin: 1rem auto">
            <router-link to="/">Dashboard</router-link>
            <router-link to="editor">Editor</router-link>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'HeaderComponent',
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