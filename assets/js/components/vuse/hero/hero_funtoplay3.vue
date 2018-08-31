<template>
    <section class="pages__page pages__page_main" v-styler="$sectionData.classes" :class="$sectionData.classes">
        <div class="pages__bg p-bg">
            <div class="p-bg__cont">
                <div class="p-bg__heros" data-waitimg="../../../../img/funtoplay3/page-1-bg-heros.png"></div>
            </div>
            <div class="p-bg__low" data-onloadimg="../../../../img/funtoplay3/page-1-bg-heros.png">
                <div class="p-bg__low-img"></div>
            </div>
        </div>
        <div class="pages__wrap flex flex_columns flex_center ie-height-fix">
            <div class="flex__item">
                <img class="logoimg" src="../../../../img/funtoplay3/logo.png" alt="Battle Carnival"/>
            </div>
            <div class="flex__item flex__item_full slogan">
                <div class="slogan__wrap">
                    <h2 class="slogan__h2">Драйвовый шутер</h2>
                    <div class="slogan__h3 h3">Бунтарские герои</div>
                </div>
            </div>
            <div class="flex__item">
                <div class="play-btn"></div>
            </div>
        </div>

        <!--<div class="container">
            <div class="grid">
                <div class="column is-desktop-6 add-center-vertical">
                    <h3 class="header-title" v-html="$sectionData.title" v-styler="$sectionData.title"></h3>
                    <p class="header-content" v-html="$sectionData.content" v-styler="$sectionData.content"></p>
                    <a class="button" :class="$sectionData.button.classes" :href="$sectionData.button.href" v-html="$sectionData.button.text" v-styler="$sectionData.button"></a>
                </div>
                <div class="column is-desktop-6">
                    <uploader class="header-image" path="$sectionData.images[0]"></uploader>
                </div>
            </div>
        </div>-->
    </section>
</template>

<script>
    import { types } from 'vuse';

    export default {
        name: 'HeroFunToPlay3',
        cover: 'img/covers/page-1-bg-alt.jpg',
        group: 'hero',
        $schema: {
            title: types.Title,
            content: types.Text,
            images: [types.Image],
            button: types.Button,
            classes: types.ClassList
        },
        props: {
            id: {
                type: Number,
                required: true
            }
        }
    };
</script>
