<template>
    <section class="pages__page pages__page_main layout2" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes"
             v-bind:style="$sectionData.mainStyle.styles">
        <div class="pages__bg p-bg">
            <div class="p-bg__cont">

            </div>
        </div>
        <div class="pages__wrap flex flex_columns flex_center ie-height-fix">
            <div class="flex__item">
                <uploader class="panel__logo-img" path="$sectionData.logos[0].path" :title="$sectionData.logos[0].alt" :alt="$sectionData.logos[0].alt"></uploader>
            </div>
            <div class="flex__item flex__item_full slogan">
                <div class="slogan__wrap">
                    <h2 class="slogan__h2" v-styler:title="$sectionData.slogan[0].title" v-text="$sectionData.slogan[0].text"></h2>
                    <div class="slogan__h3 h3" v-styler:title="$sectionData.slogan[1].title" v-text="$sectionData.slogan[1].text"></div>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-layout2-btn">
                    <a class="b-layout2-btn" target="_blank"
                       v-styler:button="$sectionData.button"
                       v-html="$sectionData.button.text"
                       :href="$sectionData.button.href"
                       v-bind:style="$sectionData.button.styles"
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
        name: 'Layout2',
        cover: 'img/covers/page-1-bg-alt.jpg',
        group: 'hero',
        $schema: {
            mainStyle: types.StyleObject,
            title: types.Title,
            content: types.Text,
            images: [types.Image],
            button: types.Button,
            slogan: [
                {
                    text: 'Drivers Shooter',
                    title: types.Title,
                },
                {
                    text: 'Bounty heroes',
                    title: types.Title,
                },
            ],
            logos: [
                {
                    path: 'https://gn839.cdn.gamenet.ru/TY0Xv2riHu/6nOU5/o_21POBx.png',
                    alt: 'Default Logo',
                    logo: types.Logo,
                }
            ],
            width: 0,
            height: 0,
            top: 0,
            left: 0
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