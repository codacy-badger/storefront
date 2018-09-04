<template>
    <section class="pages__page pages__page_main funtoplay" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
        <div class="pages__bg p-bg">
            <div class="p-bg__cont">
                <div class="p-bg__heros"></div>
            </div>
            <div class="p-bg__low">
                <div class="p-bg__low-img"></div>
            </div>
        </div>
        <div class="pages__wrap flex flex_columns flex_center ie-height-fix">
            <div class="flex__item">
                <uploader class="panel__logo-img" path="$sectionData.logos[0].path" :title="$sectionData.logos[0].alt" :alt="$sectionData.logos[0].alt"></uploader>
            </div>
            <div class="flex__item flex__item_full slogan">
                <div class="slogan__wrap">
                    <h2 class="slogan__h2" v-styler="$sectionData.slogan[0].text" v-text="$sectionData.slogan[0].title"></h2>
                    <div class="slogan__h3 h3" v-styler="$sectionData.slogan[1].text" v-text="$sectionData.slogan[1].title"></div>
                </div>
            </div>
            <div class="flex__item">
                <div class="play-btn"></div>
            </div>
        </div>
    </section>
</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
        name: 'HeroFunToPlay3',
        cover: 'img/covers/page-1-bg-alt.jpg',
        group: 'hero',
        $schema: {
            title: types.Title,
            content: types.Text,
            images: [types.Image],
            button: types.Button,
            classes: types.ClassList,
            slogan: [
                {
                    title: 'Драйвовый шутер',
                    text: types.Title,
                },
                {
                    title: 'Бунтарские герои',
                    text: types.Title,
                },
            ],
            logos: [
                {
                    path: '../../../../img/funtoplay3/logo.png',
                    alt: 'Battle Carnival',
                    logo: types.Logo,
                }
            ]
        },
        props: {
            id: {
                type: Number,
                required: true
            }
        }
    };
</script>
