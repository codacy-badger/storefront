<template>
    <div class="styler" ref="styler" id="styler" v-if="$builder.isEditing" :class="{ 'is-visible': isVisible }"
         @click.stop="">
        <ul class="styler-list">
            <li v-if="type === 'button' || type === 'link' || type === 'section'">
                <button class="styler-button" @click="updateOption('colorer')">
                    <VuseIcon name="bar"></VuseIcon>
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
                        <button class="styler-button" @click="showBackgroundSettingsSection('link')">
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

                    <li v-if="imageBgSelected === true || videoBgSelected === true">
                        <button class="styler-button" @click="identifyBackgroundSettingsSection">
                            <VuseIcon name="cog"></VuseIcon>
                        </button>
                    </li>

                    <li>
                        <button class="styler-button" @click="showColorPeckerSection">
                            <VuseIcon name="palettes"></VuseIcon>
                        </button>
                    </li>
                </ul>

                <div v-if="backgroundSettingsShow.color === true" class="b-styler__bg_options_container">
                    <div class="b-styler__bg_options__item">
                        <sketch-color-pecker v-model="backgroundColor"></sketch-color-pecker>
                    </div>
                    <div style="text-align: center;">
                        <button class="button" style="width: 120px;" @click="setBackgroundColor">
                            <VuseIcon name="check"></VuseIcon>&nbsp;&nbsp;Set color
                        </button>
                    </div>
                </div>

                <div v-if="backgroundSettingsShow.link === true" class="b-styler__bg_options_container">
                    <div class="b-styler__bg_options__item">
                        <div class="input-group is-rounded has-itemAfter is-primary b-styler__bg_options__item">
                            <input class="input" type="text" placeholder="Link to image or video" v-model="backgroundUrl"/>
                            <button class="button" @click="addBackgroundAsLink">
                                <VuseIcon name="link"></VuseIcon>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="imageBgSelected === true && backgroundSettingsShow.image === true" class="b-styler__bg_options_container">
                    <div class="b-styler__bg_options__item">
                        <label>Repeat</label>
                        <select class="form-control" v-model="backgroundSelectedOptions.repeat" title="backgroundRepeatOption">
                            <option v-for="option in backgroundOptions.repeat" v-bind:value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>

                    <div class="b-styler__bg_options__item">
                        <label>Position</label>
                        <select class="form-control" v-model="backgroundSelectedOptions.position" title="backgroundPositionOption">
                            <option v-for="option in backgroundOptions.positions" v-bind:value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>

                    <div class="b-styler__bg_options__item">
                        <label>Size</label>
                        <select class="form-control" v-model="backgroundSelectedOptions.size" title="backgroundSizeOption">
                            <option v-for="option in backgroundOptions.sizes" v-bind:value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>

                <div v-if="videoBgSelected === true && backgroundSettingsShow.video === true" class="b-styler__bg_options_container">
                    <div class="b-styler__bg_options__item">
                        <label>Upload video at other format</label>
                        <div>
                            <button class="button" @click="choseBackground" style="width: 100%;">
                                <VuseIcon name="upload"></VuseIcon>
                            </button>
                        </div>
                    </div>

                    <div class="b-styler__bg_options__item">
                        <label>Upload poster image</label>
                        <div>
                            <button class="button" @click="choseVideoBackgroundPoster" style="width: 100%;">
                                <VuseIcon name="upload"></VuseIcon>
                            </button>
                        </div>
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
    import { Sketch } from 'vue-color'

    const DEFAULT_BACKGROUND_REPEAT = 'no-repeat';
    const DEFAULT_BACKGROUND_POSITION = 'center center';
    const DEFAULT_BACKGROUND_SIZE = 'cover';

    const VIDEO_BACKGROUND_MP4_EXTENSION = 'mp4';
    const VIDEO_BACKGROUND_WEBM_EXTENSION = 'webm';

    export default {
        name: 'Styler',
        components: {
            VuseIcon,
            SketchColorPecker: Sketch
        },
        props: {
            el: {
                required: true,
                validator: function (value) {
                    return (
                        typeof HTMLElement === 'object' ? value instanceof HTMLElement :
                            value && typeof value === 'object' && value !== null && value.nodeType === 1
                            && typeof value.nodeName === 'string'
                    );
                }
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
            imageBgSelected: false,
            videoBgSelected: false,
            videoBackgroundSources: [],
            backgroundUrl: '',
            backgroundColor: '#ffffff',
            backgroundOptions: {
                repeat: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y'],
                positions: [
                    'left top',
                    'left center',
                    'left bottom',
                    'right top',
                    'right center',
                    'right bottom',
                    'center top',
                    'center center',
                    'center bottom'
                ],
                sizes: ['auto', 'cover', 'contain']
            },
            backgroundSelectedOptions: {
                repeat: DEFAULT_BACKGROUND_REPEAT,
                position: DEFAULT_BACKGROUND_POSITION,
                size: DEFAULT_BACKGROUND_SIZE
            },
            backgroundSettingsShow: {video: false, image: false, link: false, color: false},
            isVideoBackgroundPoster: false,
            videoBackgroundPosterSource: ''
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
            },
            'backgroundSelectedOptions.repeat': function(value) {
                this.addStyle('background-repeat', value);
            },
            'backgroundSelectedOptions.position': function(value) {
                this.addStyle('background-position', value);
            },
            'backgroundSelectedOptions.size': function(value) {
                this.addStyle('background-size', value);
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
                let self = this;

                this.section.set(this.name, (value) => {
                    if (!value || !value.hasOwnProperty('styles') || typeof value.styles !== 'object'
                        || !value.styles.hasOwnProperty(style)) {
                        return;
                    }

                    value.styles[style] = sValue;

                    $(self.el).find('div.b-video-bg').remove();
                });
            },
            addVideoBackground: function() {
                let el = $(this.el);
                let content = '<div class="b-video-bg">' +
                    '<video preload="auto" autoplay="autoplay" loop="loop" muted="muted"';

                if (this.isVideoBackgroundPoster === true) {
                    content += ' poster="' + this.videoBackgroundPosterSource + '">'
                } else {
                    content += '>';
                }

                for (let i = 0; i < this.videoBackgroundSources.length; i++) {
                    content += '<source src="' + this.videoBackgroundSources[i]['source'] + '" type="' + this.videoBackgroundSources[i]['type'] + '" />'
                }

                content += '</video></div>';

                el.append(content);

                this.section.set(this.name, (value) => {
                    if (!value || !value.hasOwnProperty('styles') || typeof value.styles !== 'object'
                        || !value.styles.hasOwnProperty('background-image')) {
                        return;
                    }

                    value.styles['background-image'] = 'none';
                    value.styles['background-color'] = 'transparent';
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
                if (event && isParentTo(event.target, this.$el)) {
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
                this.backgroundUrl = '';
                this['$refs']['choseBackgroundContentInput'].click();
            },
            choseVideoBackgroundPoster: function() {
                this.isVideoBackgroundPoster = true;
                this.choseBackground();
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

                        self.showBackground(response['data']['response']['data'][0]);
                    }).catch(function (e) {
                        console.warn(e);
                    });
            },
            setBackgroundColor: function() {
                this.addStyle('background-image', 'none');
                this.addStyle('background-position', 'inherit');
                this.addStyle('background-repeat', 'inherit');
                this.addStyle('background-size', 'inherit');

                this.imageBgSelected = false;
                this.videoBgSelected = false;

                this.addStyle('background-color', this.backgroundColor.hex8);
            },
            identifyBackgroundSettingsSection: function() {
                if (true === this.imageBgSelected) {
                    this.showBackgroundSettingsSection('image');
                }

                if (true === this.videoBgSelected) {
                    this.showBackgroundSettingsSection('video');
                }
            },
            showBackground: function(data) {
                if (data['type'] === 'video') {
                    this.addStyle('background-image', 'none');
                    this.addStyle('background-position', 'inherit');
                    this.addStyle('background-repeat', 'inherit');
                    this.addStyle('background-size', 'inherit');
                    this.addStyle('background-color', 'none');

                    this.videoBackgroundSources.push({source: data['src'], type: data['mime']});
                    this.addVideoBackground();

                    this.imageBgSelected = false;
                    this.videoBgSelected = true;
                    this.backgroundColor = '#ffffff';
                    this.isVideoBackgroundPoster = false;

                    this.showBackgroundSettingsSection('video');
                } else if (this.isVideoBackgroundPoster === true) {
                    this.addStyle('background-image', 'none');
                    this.addStyle('background-position', 'inherit');
                    this.addStyle('background-repeat', 'inherit');
                    this.addStyle('background-size', 'inherit');
                    this.addStyle('background-color', 'none');

                    this.videoBackgroundPosterSource = data['src'];

                    this.addVideoBackground();

                    this.imageBgSelected = false;
                    this.videoBgSelected = true;
                    this.backgroundColor = '#ffffff';
                    this.isVideoBackgroundPoster = false;

                    this.showBackgroundSettingsSection('video');
                } else {
                    this.videoBackgroundSources = [];

                    this.addStyle('background-image', 'url(' + data['src'] + ')');
                    this.addStyle('background-position', DEFAULT_BACKGROUND_POSITION);
                    this.addStyle('background-repeat', DEFAULT_BACKGROUND_REPEAT);
                    this.addStyle('background-size', DEFAULT_BACKGROUND_SIZE);
                    this.addStyle('background-color', 'none');

                    this.imageBgSelected = true;
                    this.videoBgSelected = false;
                    this.backgroundColor = '#ffffff';
                    this.isVideoBackgroundPoster = false;
                    this.videoBackgroundPosterSource = '';

                    this.showBackgroundSettingsSection('image');
                }
            },
            addBackgroundAsLink: function() {
                const extension = (/[.]/.exec(this.backgroundUrl)) ? /[^.]+$/.exec(this.backgroundUrl).pop() : undefined;

                if (extension === VIDEO_BACKGROUND_MP4_EXTENSION || extension === VIDEO_BACKGROUND_WEBM_EXTENSION) {
                    this.showBackground({type: 'video', mime: 'video/' + extension, src: this.backgroundUrl});
                } else {
                    this.showBackground({src: this.backgroundUrl});
                }
            },
            showColorPeckerSection: function() {
                $(this.$refs['styler']).css('transform', 'translate3d(1020px, 5px, 0px)');
                this.showBackgroundSettingsSection('color');
            },
            showBackgroundSettingsSection: function (type) {
                for (let key in this.backgroundSettingsShow) {
                    if (!this.backgroundSettingsShow.hasOwnProperty(key)) {
                        continue;
                    }

                    this.backgroundSettingsShow[key] = false;
                }

                if (!this.backgroundSettingsShow.hasOwnProperty(type)) {
                    return;
                }

                let position = '899px';

                if (type === 'link') {
                    position = '969px';
                }

                $(this.$refs['styler']).css('transform', 'translate3d(' + position + ', 5px, 0px)');

                this.backgroundSettingsShow[type] = true;
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
    @import '~@baianat/base.framework/src/stylus/util/colors';

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

    label
        display: inline-block
        max-width: 100%
        margin-bottom: 5px
        font-weight: 400

    .form-control
        display: block
        width: 100%
        height: 34px
        //padding: 6px 12px
        font-size: 14px
        line-height: 1.42857143
        color: #555
        background-color: #fff
        background-image: none
        border: 1px solid #ccc
        border-radius: 4px
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s

    .b-styler__bg_options_container
        margin-top: 10px
        padding: 15px 5px
        border-top: 1px solid #ffffff
        display: flex
        flex-direction: column

    .b-styler__bg_options__item
        margin-bottom: 10px
</style>
