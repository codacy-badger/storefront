<template>
    <div class="b-page__content" :class="{'b-page__content_padd-bott-0': isPreview}">
        <div id="gjs">
        </div>
    </div>
</template>

<script>
    import grapesjs from 'grapesjs';
    import gjspresetwebpage from 'grapesjs-preset-webpage';
    import gjsVideoBg from './../../plugins/gjs-video-background';
    import gjsBlockBg from './../../plugins/gjs-block-background';
    import {mapMutations} from 'vuex';

    export default {
        components: {
            grapesjs
        },
        name: 'StorefrontEditor',
        data () {
            return {
                isPreview: false
            }
        },
        methods: {
            ...mapMutations(['storefrontPreview']),
            runPreview() {
                this.isPreview = true;
                this.storefrontPreview(true);
            },
            stopPreview() {
                this.isPreview = false;
                this.storefrontPreview(false);
            }
        },
        mounted () {
            let editor = grapesjs.init({
                container : '#gjs',
                components: '',
                style: '',
                plugins: ['gjs-preset-webpage', 'gjs-video-background','gjs-block-background'],
                pluginsOpts: {
                    'gjs-preset-webpage': {
                        // options
                    },
                    'gjs-video-background': {
                        // options
                    },
                    'gjs-block-background': {
                        // options
                    },
                },
                storageManager: { type: null },
                assetManager: {
                    upload: 'http://images.stg.gamenet.ru/restapi',
                    uploadName: 'file',
                    params: { method: 'storefront.upload', format: 'json' },
                    addBtnText: 'Add',
                    modalTitle: 'Select image or video',
                    inputPlaceholder: 'Enter url to image or video file here',
                    uploadFile(e)  {
                        let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                        let formData = new FormData();

                        for(let i = 0; i < files.length; i++){
                            formData.append('file[]', files[i])
                        }

                        formData.append('method', 'storefront.upload');
                        formData.append('format', 'json');

                        window.axios.post(
                            'http://images.stg.gamenet.ru/restapi',
                            formData,
                            { headers: { 'Content-Type': 'multipart/form-data' }}
                        ).then(function (response) {
                            if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response')
                                || !response['data']['response'].hasOwnProperty('data')) {
                                return;
                            }

                            editor.AssetManager.add(response['data']['response']['data']);
                        }).catch(function (response) {
                            console.log(response);
                        });
                    }
                }
            }),
            blockManager = editor.BlockManager,
            categories = blockManager.getCategories();

            // потом удалить
            console.log(editor);
            //

            categories.models.forEach(function(item, i) {
                if (i === 3) {
                    return;
                }

                item['attributes']['open'] = false;
            });

            editor.on('run:preview', () => this.runPreview() );
            editor.on('stop:preview', () => this.stopPreview() );

            let am = editor.AssetManager;

            am.addType('video', {
                view: {
                    getPreview() {
                        const name = this.model.get('name');

                        return `
                            <div class="b-landing-constructor__video_type">
		                        <span class="fa fa-play fa-2x">
	                        </div>
                            <div class="gjs-am-meta"><div class="gjs-am-name">${name}</div></div>
                            <div class="gjs-am-close" data-toggle="asset-remove">&Cross;</div>`
                    }
                },
                isType(value) {
                    let extension = (/[.]/.exec(value)) ? /[^.]+$/.exec(value).pop() : undefined;
                    let name = value.split('/');

                    if (extension === 'mp4' || extension === 'webm') {
                        return { type: 'video', name: name[name.length - 1] };
                    }
                }
            });
        }
    }
</script>

<style scoped>
    @import '../../../../node_modules/grapesjs/dist/css/grapes.min.css';
    @import '../../../../node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';

    .b-page__content {
        overflow: hidden;
        padding: 0 0 5rem;
    }

    .b-page__content_padd-bott-0 {
        padding: 0;
    }

    #gjs >>> .gjs-pn-options {
        right: 20%;
    }

    #gjs >>> .gjs-pn-views,
    #gjs >>> .gjs-pn-views-container {
        width: 20%;
    }

    #gjs >>> .gjs-block {
        width: 28%;
    }

    #gjs >>> .gjs-cv-canvas {
        width: 80%;
    }

</style>