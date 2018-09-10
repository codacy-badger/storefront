<template>
    <div class="styler" ref="styler" id="styler" v-if="$builder.isEditing" :class="{ 'is-visible': isVisible }"
         @click.stop="">
        <ul class="styler-list">
            <li v-if="type === 'button' || type === 'link' || type === 'section'">
                <button class="styler-button" @click="updateOption('colorer')">
                    <VuseIcon name="palettes"></VuseIcon>
                </button>
            </li>
            <li v-if="type === 'button' || type === 'link'">
                <button class="styler-button" @click="updateOption('link')">
                    <VuseIcon name="link"></VuseIcon>
                </button>
            </li>
            <li v-if="type === 'header' || type === 'section'">
                <button class="styler-button" @click="removeSection">
                    <VuseIcon name="trash"></VuseIcon>
                </button>
            </li>
            <template v-if="type === 'link'">
                <li>
                    <button class="styler-button" @click="removeLink">
                        <VuseIcon name="trash"></VuseIcon>
                    </button>
                <li>
                    <button class="styler-button" @click="copyLink">
                        <VuseIcon name="plus"></VuseIcon>
                    </button>
                </li>
            </template>
            <template v-if="type === 'gallery-item'">
                <div>
                    <div>
                        <li>
                            <button class="styler-button" @click="removeItemGallery">
                                <VuseIcon name="trash"></VuseIcon>
                            </button>
                        <li>
                            <button class="styler-button" @click="copyItemGallery">
                                <VuseIcon name="plus"></VuseIcon>
                            </button>
                        </li>
                    </div>
                    <div>
                        <div class="input-group is-rounded has-itemAfter is-primary">
                            <input class="input" type="text" placeholder="enter title" v-model="title"/>
                            <button class="button" @click="addTitle">
                                <VuseIcon name="plus"></VuseIcon>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div class="input-group is-rounded has-itemAfter is-primary">
                            <input class="input" type="text" placeholder="enter text" v-model="text"/>
                            <button class="button" @click="addText">
                                <VuseIcon name="plus"></VuseIcon>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div style="display: none;">
                            <form>
                                <input
                                        type="file"
                                        accept="image/*,video/mp4,video/x-m4v,video/*"
                                        v-bind:ref="'choseGalleryItemPreviewInput'"
                                        @change="onChooseGalleryItemPreview"/>
                            </form>
                        </div>

                        <button class="styler-button" @click="choseGalleryItemPreview">
                            <VuseIcon name="upload"></VuseIcon>
                        </button>
                    </div>
                    <div>
                        <div style="display: none;">
                            <form>
                                <input
                                        type="file"
                                        accept="image/*,video/mp4,video/x-m4v,video/*"
                                        v-bind:ref="'choseGalleryItemImageInput'"
                                        @change="onChooseGalleryItemImage"/>
                            </form>
                        </div>

                        <button class="styler-button" @click="choseGalleryItemImage">
                            <VuseIcon name="upload"></VuseIcon>
                        </button>
                    </div>
                </div>
            </template>
            <template v-if="type === 'title'">
                <li>
                    <button class="styler-button" @click="updateOption('textColor')">
                        <VuseIcon name="palettes"></VuseIcon>
                    </button>
                </li>
                <li>
                    <button class="styler-button" @click="updateOption('align')">
                        <VuseIcon name="align"></VuseIcon>
                    </button>
                </li>
                <li>
                    <button class="styler-button" @click="updateOption('textStyle')">
                        <VuseIcon name="textStyle"></VuseIcon>
                    </button>
                </li>
                <li>
                    <button class="styler-button" @click="removeTitle">
                        <VuseIcon name="trash"></VuseIcon>
                    </button>
                <li>
                    <button class="styler-button" @click="copyTitle">
                        <VuseIcon name="plus"></VuseIcon>
                    </button>
                </li>
            </template>
            <template v-if="type === 'text'">
                <li>
                    <button class="styler-button" @click="updateOption('textColor')">
                        <VuseIcon name="palettes"></VuseIcon>
                    </button>
                </li>
                <li>
                    <button class="styler-button" @click="updateOption('align')">
                        <VuseIcon name="align"></VuseIcon>
                    </button>
                </li>
                <li>
                    <button class="styler-button" @click="updateOption('textStyle')">
                        <VuseIcon name="textStyle"></VuseIcon>
                    </button>
                </li>
            </template>
            <template v-if="type === 'grid'">
                <li>
                    <button class="styler-button" @click="selectDevice('mobile')">
                        <VuseIcon name="mobile"></VuseIcon>
                    </button>
                </li>
                <li>
                    <button class="styler-button" @click="selectDevice('desktop')">
                        <VuseIcon name="laptop"></VuseIcon>
                    </button>
                </li>
            </template>
        </ul>
        <ul class="styler-list">
            <li v-if="currentOption === 'colorer'">
                <ul class="colorer">
                    <li>
                        <button class="styler-button" @click="bgChoiceType = 0">
                            <VuseIcon name="link"></VuseIcon>
                        </button>
                    </li>
                    <li>
                        <div style="display: none">
                            <form>
                                <input
                                        type="file"
                                        accept="image/*,video/mp4,video/x-m4v,video/*"
                                        v-bind:ref="'choseBackgroundContentInput'"
                                        @change="onChooseBackground"/>
                            </form>
                        </div>

                        <button class="styler-button" @click="choseBackground">
                            <VuseIcon name="upload"></VuseIcon>
                        </button>
                    </li>

                    <li v-for="color in colors">
                        <input type="radio" :id="`color${color.charAt(0).toUpperCase() + color.slice(1)}`"
                               name="colorer" :value="color" v-model="colorerColor"/>
                    </li>
                </ul>

                <div v-if="bgChoiceType === 0">
                    <div class="input-group is-rounded has-itemAfter is-primary">
                        <input class="input" type="text" placeholder="type your link" v-model="url"/>
                        <button class="button" @click="addLink">
                            <VuseIcon name="link"></VuseIcon>
                        </button>
                    </div>
                </div>
            </li>
            <li v-if="currentOption === 'textColor'">
                <ul class="colorer">
                    <li v-for="(color, index) in colors">
                        <input type="radio" :id="`color${color.charAt(0).toUpperCase() + color.slice(1)}`"
                               name="colorer" :value="textColors[index]" v-model="textColor"/>
                    </li>
                </ul>
            </li>
            <li v-if="currentOption === 'link'">
                <div class="input-group is-rounded has-itemAfter is-primary">
                    <input class="input" type="text" placeholder="type your link" v-model="url"/>
                    <button class="button" @click="addLink">
                        <VuseIcon name="link"></VuseIcon>
                    </button>
                </div>
            </li>
            <li v-if="currentOption === 'align'">
                <ul class="align">
                    <li>
                        <button class="styler-button" @click="execute('justifyleft')">
                            <VuseIcon name="left"></VuseIcon>
                        </button>
                    </li>
                    <li>
                        <button class="styler-button" @click="execute('justifycenter')">
                            <VuseIcon name="center"></VuseIcon>
                        </button>
                    </li>
                    <li>
                        <button class="styler-button" @click="execute('justifyright')">
                            <VuseIcon name="right"></VuseIcon>
                        </button>
                    </li>
                </ul>
            </li>
            <li v-if="currentOption === 'textStyle'">
                <ul class="align">
                    <li>
                        <button class="styler-button" @click="execute('bold')">
                            <VuseIcon name="bold"></VuseIcon>
                        </button>
                    </li>
                    <li>
                        <button class="styler-button" @click="execute('italic')">
                            <VuseIcon name="italic"></VuseIcon>
                        </button>
                    </li>
                    <li>
                        <button class="styler-button" @click="execute('underline')">
                            <VuseIcon name="underline"></VuseIcon>
                        </button>
                    </li>
                </ul>
            </li>
            <li v-if="currentOption === 'columnWidth'">
                <ul class="align">
                    <li>
                        <button class="styler-button" @click="gridValue--">
                            <VuseIcon name="arrowLeft"></VuseIcon>
                        </button>
                    </li>
                    <li>
                        <input class="styler-input" type="number" min="0" max="12" v-model="gridValue"/>
                    </li>
                    <li>
                        <button class="styler-button" @click="gridValue++">
                            <VuseIcon name="arrowRight"></VuseIcon>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import Popper from 'popper.js';
    import VuseIcon from './VuseIcon';
    import {isParentTo} from './../util';
    import _clone from 'lodash-es/clone';

    export default {
        name: 'Styler',
        components: {
            VuseIcon
        },
        props: {
            el: {
                type: Object,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            section: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            colors: ['blue', 'green', 'red', 'black', 'white'],
            textColors: ['#4da1ff', '#38E4B7', '#EA4F52', '#000000', '#FFFFFF'],
            textColor: '',
            oldColorerColor: '',
            colorerColor: '',
            mouseTarget: '',
            currentOption: '',
            url: '',
            title: '',
            text: '',
            preview: '',
            image: '',
            gridValue: 0,
            isVisible: false,
            bgChoiceType: null
        }),
        watch: {
            colorerColor: function () {
                this.changeColor();
            },
            textColor: function () {
                this.execute('forecolor', this.textColor)
            },
            gridValue: function () {
                this.gridValue = Math.min(Math.max(this.gridValue, 0), 12);
                this.section.set(this.name, (grid) => {
                    grid[this.device] = this.gridValue;
                });
            }
        },
        created() {
            if (this.type === 'button') {
                this.url = this.section.get(`${this.name}.href`);
                this.el.contentEditable = 'true';
            }
            if (this.type === 'text') {
                this.el.contentEditable = 'true';
            }
            if (this.type === 'title') {
                this.el.contentEditable = 'true';
            }
            if (this.type === 'link') {
                this.el.contentEditable = 'true';
            }
        },
        mounted() {
            if (!this.$builder.isEditing) return;

            // add listeners to show/hide styler
            this.el.addEventListener('click', this.showStyler);
        },
        beforeDestroy() {
            this.hideStyler();
            this.$refs.styler.remove();
            this.el.classList.remove('is-editable');
            this.el.removeEventListener('click', this.showStyler);
            document.removeEventListener('click', this.hideStyler, true);
        },
        methods: {
            updateOption(option) {
                this.currentOption = option;
                this.$nextTick(() => {
                    this.popper.update();
                })
            },
            addLink() {
                this.section.set(`${this.name}.href`, this.url);
            },
            changeColor() {
                this.removeClass(`is-${this.oldColorerColor}`);
                this.oldColorerColor = this.colorerColor;
                this.addClass(`is-${this.colorerColor}`);
            },
            addClass(className) {
                this.section.set(this.name, (value) => {
                    if (value && value.classes && Array.isArray(value.classes)) {
                        value = value.classes;
                    }
                    value.push(className);
                });
            },
            selectDevice(device) {
                const gridValue = this.section.get(this.name)[device];
                this.updateOption('columnWidth');
                this.device = device;
                this.gridValue = gridValue;
            },
            removeClass(className) {
                if (Array.isArray(className)) {
                    return className.forEach(c => {
                        this.removeClass(c);
                    });
                }
                this.section.set(this.name, value => {
                    if (value && value.classes && Array.isArray(value.classes)) {
                        value = value.classes;
                    }
                    const idx = value.indexOf(className);
                    value.splice(idx, 1);
                });
            },
            addStyle: function(style, sValue) {
                this.section.set(this.name, (value) => {
                    //console.log(value);
                    //if (value && value.hasOwnProperty('styles') && typeof value.styles === 'object') {
                        //value = value.styles;
                    //}

                    value[style] = sValue;
                });
            },
            removeSection() {
                this.$builder.remove(this.section);
            },
            insertAfter(elem, refElem) {
                return refElem.parentNode.parentNode.insertBefore(elem, refElem.nextSibling);
            },
            copyLink() {
                let l = Object.assign({}, this.section.data.links[0]);
                this.section.data.links.push(l);
            },
            removeLink() {
                this.el.remove();
                this.$refs.styler.remove();
            },
            copyItemGallery() {
                let l = Object.assign({}, this.section.data.images[0]);
                this.section.data.images.push(l);
            },
            removeItemGallery() {
                this.el.remove();
                this.$refs.styler.remove();
            },
            copyTitle() {
                let s = Object.assign({}, this.section.data.titles[0]);
                this.section.data.titles.push(s);
            },
            removeTitle() {
                this.el.remove();
                this.$refs.styler.remove();
            },
            addTitle() {
                let index = this.el.getAttribute('data-index');

                this.section.data.images[index].title = this.title;
            },
            addText() {
                let index = this.el.getAttribute('data-index');

                this.section.data.images[index].text = this.text;
            },
            execute(command, value = null) {
                this.el.focus();
                document.execCommand(command, false, value);
            },
            showStyler(event) {
                event.stopPropagation();

                if (this.isVisible) {
                    return;
                }

                this.isVisible = true;

                if (!this.popper) {
                    const position = this.$props.type === 'section' ? 'left-start' : 'top';
                    this.popper = new Popper(this.el, this.$refs.styler, {placement: position});
                }

                document.addEventListener('click', this.hideStyler, true);
                this.currentOption = '';
            },
            hideStyler(event) {
                if ((event && isParentTo(event.target, this.$el)) || (event && isParentTo(event.target, this.el))) {
                    return;
                }

                this.isVisible = false;

                if (this.popper) {
                    this.popper.destroy();
                    this.popper = null;
                }

                document.removeEventListener('click', this.hideStyler, true);

                if (this.type === 'section' || this.type === 'grid') {
                    return;
                }

                if (this.type === 'button') {
                    this.section.set(`${this.name}.text`, this.el.innerHTML);
                    return;
                }

                this.section.set(this.name, this.el.innerHTML);
            },
            choseBackground: function () {
                this.bgChoiceType = null;
                this['$refs']['choseBackgroundContentInput'].click();
            },
            onChooseBackground: function (event) {
                let self = this;
                let file = event.target.files || event.dataTransfer.files;

                if (!file.length) {
                    return;
                }

                let request = new FormData();
                let $form = window.$(event.target).parent();

                request.append('file[]', file[0]);
                request.append('method', 'storefront.upload');
                request.append('format', 'json');

                $form[0].reset();

                window.axios.post('http://images.stg.gamenet.ru/restapi', request)
                    .then(function (response) {
                        if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response')
                            || !response['data']['response'].hasOwnProperty('data')
                            || !Array.isArray(response['data']['response']['data'])) {
                            return;
                        }

                        const data = response['data']['response']['data'][0];

                        self.addStyle('background-image', data['src']);
                    }).catch(function (e) {
                        console.warn(e);
                    });
            },
            choseGalleryItemPreview: function () {
                this.bgChoiceType = null;
                this['$refs']['choseGalleryItemPreviewInput'].click();
            },
            choseGalleryItemImage: function () {
                this.bgChoiceType = null;
                this['$refs']['choseGalleryItemImageInput'].click();
            },
            onChooseGalleryItemPreview: function (event) {
                let self = this;
                let file = event.target.files || event.dataTransfer.files;
                let index = this.el.getAttribute('data-index');

                if (!file.length) {
                    return;
                }

                let request = new FormData();
                let $form = window.$(event.target).parent();

                request.append('file[]', file[0]);
                request.append('method', 'storefront.upload');
                request.append('format', 'json');

                $form[0].reset();

                window.axios.post('http://images.stg.gamenet.ru/restapi', request)
                        .then(function (response) {
                            if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response')
                                    || !response['data']['response'].hasOwnProperty('data')
                                    || !Array.isArray(response['data']['response']['data'])) {
                                return;
                            }

                            const data = response['data']['response']['data'][0];

                            self.section.data.images[index].preview = data['src'];

                        }).catch(function (e) {
                            console.warn(e);
                        });
            },
            onChooseGalleryItemImage: function (event) {
                let self = this;
                let file = event.target.files || event.dataTransfer.files;
                let index = this.el.getAttribute('data-index');

                if (!file.length) {
                    return;
                }

                let request = new FormData();
                let $form = window.$(event.target).parent();

                request.append('file[]', file[0]);
                request.append('method', 'storefront.upload');
                request.append('format', 'json');

                $form[0].reset();

                window.axios.post('http://images.stg.gamenet.ru/restapi', request)
                        .then(function (response) {
                            if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response')
                                    || !response['data']['response'].hasOwnProperty('data')
                                    || !Array.isArray(response['data']['response']['data'])) {
                                return;
                            }

                            const data = response['data']['response']['data'][0];

                            self.section.data.images[index].image = data['src'];

                        }).catch(function (e) {
                            console.warn(e);
                        });
            }
        }
    };
</script>

<style lang="stylus">
    @import '~@baianat/base.framework/src/stylus/util/colors'

    .styler
        position: absolute
        top: 0
        z-index: 200
        visibility: hidden
        opacity: 0
        margin: 10px 0
        padding: 5px
        background: $dark
        border-radius: 26px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        &-list
            display: flex
            justify-content: center
            align-items: center
            list-style: none
            margin: 0
            padding: 0
        &-input
            background: $white
            color: $dark
            border: 0
            outline: 0
            width: 40px
            height: 40px
            border-radius: 42px
            margin: 0 5px 0 0
            text-align: center
            -webkit-appearance: none
            -moz-appearance: textfield
            appearance: none
        &-button
            display: flex
            justify-content: center
            align-items: center
            outline: 0
            background: $dark
            border: 0
            fill: $white
            color: $white
            width: 42px
            height: 42px
            border-radius: 42px
            margin: 0 5px 0 0
            &:hover
                background: darken($dark, 20%)
            &:first-child
                margin-left: 5px
        &-selector
            margin: 0 5px
        &.is-visible
            visibility: visible
            opacity: 1
        .input-group
            margin: 5px

    .align
        @extend .styler-list
        height: 42px

    .colorer
        @extend .styler-list
        height: 42px
        li > input
            -webkit-appearance: none
            -moz-appearance: textfield
            appearance: none
            width: 30px
            height: 30px
            border-radius: 40px
            border: 4px solid darken($dark, 20%)
            margin: 0 5px
            outline: none
            &:checked
                border-color: lighten($dark, 20%)
            &:hover
                border-color: lighten($dark, 20%)
            &#colorRed
                background $red
            &#colorBlue
                background $blue
            &#colorGreen
                background $green
            &#colorBlack
                background $black
            &#colorWhite
                background $white

    .is-hidden
        display: none

    input[type=number]::-webkit-inner-spin-button
    input[type=number]::-webkit-outer-spin-button
        -webkit-appearance: none
        margin: 0
</style>
