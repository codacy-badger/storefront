<template>
    <section class="pages__page pages__page_main layout2" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes"
             v-bind:style="$sectionData.mainStyle.styles">
        <div class="pages__bg p-bg">
            <div class="p-bg__cont">

            </div>
        </div>
        <div class="pages__wrap flex flex_columns flex_center ie-height-fix">
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp1">
                    <a class="b-btn-lp1" target="_blank"
                       v-styler="$sectionData.buttons[0].button"
                       v-html="$sectionData.buttons[0].button.text"
                       :href="$sectionData.buttons[0].button.href"
                       v-bind:style="$sectionData.buttons[0].button.styles"
                       >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp2">
                    <a class="b-btn-lp2" target="_blank"
                       v-styler="$sectionData.buttons[1].button"
                       v-html="$sectionData.buttons[1].text"
                       :href="$sectionData.buttons[1].button.href"
                       v-bind:style="$sectionData.buttons[1].button.styles"
                       >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp1">
                    <a class="b-btn-lp1 b-btn-lp1_circle" target="_blank"
                       v-styler="$sectionData.buttons[2].button"
                       v-html="$sectionData.buttons[2].text"
                       :href="$sectionData.buttons[2].button.href"
                       v-bind:style="$sectionData.buttons[2].button.styles"
                       >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp2">
                    <a class="b-btn-lp2 b-btn-lp2_bg-girls" target="_blank"
                       v-styler="$sectionData.buttons[3].button"
                       v-html="$sectionData.buttons[3].text"
                       :href="$sectionData.buttons[3].button.href"
                       v-bind:style="$sectionData.buttons[3].button.styles"
                            >
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
        name: 'Buttons',
        cover: 'img/covers/social1.png',
        group: 'buttons',
        $schema: {
            mainStyle: types.StyleObject,
            title: types.Title,
            content: types.Text,
            images: [types.Image],
            buttons: [
                {
                    text: 'Play Now',
                    button: types.Button,
                },
                {
                    text: 'DOWNLOAD',
                    button: types.Button,
                },
                {
                    text: 'Play Now',
                    button: types.Button,
                },
                {
                    text: 'Play Free',
                    button: types.Button,
                },
            ]
        },
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        methods: {

        },
    };
</script>

<style scoped>

</style>