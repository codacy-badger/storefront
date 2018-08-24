<template>
    <div class="b-page__content" :class="{'b-page__content_padd-bott-0': isPreview}">
        <div id="gjs">
        </div>
    </div>
</template>

<script>
    import grapesjs from 'grapesjs';
    import gjspresetwebpage from 'grapesjs-preset-webpage';
    import gjsExport from 'grapesjs-plugin-export';
    import gjsVideoBg from './../../plugins/gjs-video-background';
    import gjsBlockBg from './../../plugins/gjs-block-background';
    import gjsButton from './../../plugins/gjs-button';
    import gjsFooter from './../../plugins/gjs-footer';
    import gjsLogo from './../../plugins/gjs-logo';
    import gjsBlocksFlexbox from './../../plugins/gjs-blocks-flexbox';
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
                style: `
                    html {
                        height: 100%;
                        font-size: 10px;
                    }
                    @media only screen and (max-width: 1200px) {
                        html {
                            font-size: 8px !important;
                        }
                    }
                    @media only screen and (max-width: 768px) {
                        html {
                            font-size: 10px !important;
                        }
                    }
                `,
                body: '<meta name="viewport" content="width=device-width,initial-scale=1.0">',
                canvas: {
                    styles: [
                        'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
                    ]
                },
                plugins: ['gjs-preset-webpage','gjs-plugin-export','gjs-video-background', 'gjs-block-background', 'gjs-footer', 'gjs-button', 'gjs-logo','gjs-blocks-flexbox'],
                pluginsOpts: {
                    'gjs-plugin-export': {
                        preHtml: `<!doctype>
                            <html>
                                <head>
                                    <link rel="stylesheet" href="./css/style.css" />
                                    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                                </head>
                            <body>`
                    },
                    'gjs-preset-webpage': {
                        // options
                    },
                    'gjs-video-background': {
                        // options
                    },
                    'gjs-block-background': {
                        // options
                    },
                    'gjs-button': {
                        // options
                    },
                    'gjs-footer': {
                        // options
                    },
                    'gjs-logo': {
                        // options
                    },
                    'gjs-blocks-flexbox': {
                        // options
                    }
                },
                storageManager: { type: null },
                //
                assetManager: {
                    assets: [
                            // backgrounds
                            'https://gn856.cdn.gamenet.ru/TY0Xv2riHu/6j39g/o_1P7PuY.jpg',
                            'https://gn74.cdn.gamenet.ru/TY0Xv2riHu/6j39u/o_QOw5c.jpg',
                            'https://gn667.cdn.gamenet.ru/TY0Xv2riHu/6j3AJ/o_zOeMp.jpg',
                            'https://gn8.cdn.gamenet.ru/TY0Xv2riHu/6j3BV/o_6MYBt.jpg',
                            'https://gn490.cdn.gamenet.ru/TY0Xv2riHu/6j3Bx/o_7HItq.jpg',
                            'https://gn968.cdn.gamenet.ru/TY0Xv2riHu/6j3C9/o_H2UqZ.jpg',
                            'https://gn781.cdn.gamenet.ru/TY0Xv2riHu/6j3CJ/o_FqCvl.jpg',
                            // logos
                            'https://gn18.cdn.gamenet.ru/TY0Xv2riHu/6j3Ce/o_2Fqi4r.png',
                            'https://gn790.cdn.gamenet.ru/TY0Xv2riHu/6j3Ct/o_1ASG20.png',
                            'https://gn191.cdn.gamenet.ru/TY0Xv2riHu/6j3D4/o_nSzgK.png',
                            'https://gn890.cdn.gamenet.ru/TY0Xv2riHu/6j3DF/o_1Jc38z.png',
                            'https://gn293.cdn.gamenet.ru/TY0Xv2riHu/6j3DR/o_5iiIG.png',
                            'https://gn607.cdn.gamenet.ru/TY0Xv2riHu/6j3Db/o_hfRRC.png',
                            'https://gn865.cdn.gamenet.ru/TY0Xv2riHu/6j3Dn/o_1oge9w.png',
                            'https://gn748.cdn.gamenet.ru/TY0Xv2riHu/6j3E2/o_2BayVq.png',
                            'https://gn458.cdn.gamenet.ru/TY0Xv2riHu/6j3ED/o_1tIWYQ.png',
                            'https://gn210.cdn.gamenet.ru/TY0Xv2riHu/6j3EP/o_fJMlf.png',
                            'https://gn965.cdn.gamenet.ru/TY0Xv2riHu/6j3Ec/o_1HQuWI.png',
                            'https://gn975.cdn.gamenet.ru/TY0Xv2riHu/6j3Eq/o_1vpGDi.png',
                            'https://gn771.cdn.gamenet.ru/TY0Xv2riHu/6j3F5/o_15kPtV.png',
                            'https://gn328.cdn.gamenet.ru/TY0Xv2riHu/6j3FH/o_2A6sHr.png',
                            'https://gn771.cdn.gamenet.ru/TY0Xv2riHu/6j3FS/o_1uYPPw.png',
                            'https://gn899.cdn.gamenet.ru/TY0Xv2riHu/6j3Fc/o_2L8T8T.png',
                            'https://gn265.cdn.gamenet.ru/TY0Xv2riHu/6j3Fo/o_1qdZ4t.png',
                            'https://gn239.cdn.gamenet.ru/TY0Xv2riHu/6j3G1/o_14nUlQ.png',
                            'https://gn885.cdn.gamenet.ru/TY0Xv2riHu/6j3GD/o_xZ7s5.png',
                            'https://gn63.cdn.gamenet.ru/TY0Xv2riHu/6j3GN/o_1FiR94.png',
                            // images
                            'https://gn368.cdn.gamenet.ru/TY0Xv2riHu/6j3Ga/o_74JNg.png',
                            'https://gn879.cdn.gamenet.ru/TY0Xv2riHu/6j3Gx/o_1UaHQ9.png',
                            'https://gn642.cdn.gamenet.ru/TY0Xv2riHu/6j3HF/o_RG5rm.png',
                            'https://gn48.cdn.gamenet.ru/TY0Xv2riHu/6j3HV/o_1swG9k.png',
                            'https://gn770.cdn.gamenet.ru/TY0Xv2riHu/6j3KC/o_1FEi10.png',
                            'https://gn416.cdn.gamenet.ru/TY0Xv2riHu/6j3KV/o_gMbBg.png',
                            'https://gn556.cdn.gamenet.ru/TY0Xv2riHu/6j3Kf/o_iv0k2.png',
                            // video
                            'https://gn268.cdn.gamenet.ru/TY0Xv2riHu/1qjS2/o_1cRTGy.mp4',
                            'https://gn268.cdn.gamenet.ru/TY0Xv2riHu/1qjS2/o_1cRTGy.mp4',
                            'https://gn392.cdn.gamenet.ru/TY0Xv7cuq8/3Bkcg/o_1UNmgX.mp4'

                    ],
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
            //
            blockManager = editor.BlockManager,
            categories = blockManager.getCategories();

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
                            `
                    }
                },
                isType(value) {
                    let extension = (/[.]/.exec(value)) ? /[^.]+$/.exec(value).pop() : undefined;
                    let name = value.split('/');

                    if (extension === 'mp4' || extension === 'webm') {
                        return { type: 'video', name: name[name.length - 1], src: value };
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