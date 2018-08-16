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
                components: '<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="stylesheet" href="./css/style.css"></head><body><header class="header-banner"><div class="container-width"><div class="logo-container"><div class="logo">GrapesJS</div></div><nav class="menu"><div class="menu-item">BUILDER</div><div class="menu-item">TEMPLATE</div><div class="menu-item">WEB</div></nav><div class="clearfix"></div><div class="lead-title">Build your templates without coding</div><div class="sub-lead-title">All text blocks could be edited easily with double clicking on it. You can create new text blocks with the command from the left panel</div><div class="lead-btn">Hover me</div></div></header><section class="flex-sect"><div class="container-width"><div class="flex-title">Flex is the new black</div><div class="flex-desc">With flexbox system you\'re able to build complex layouts easily and with free responsivity</div><div class="cards"><div class="card"><div class="card-header"></div><div class="card-body"><div class="card-title">Title one</div><div class="card-sub-title">Subtitle one</div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div></div></div><div class="card"><div class="card-header ch2"></div><div class="card-body"><div class="card-title">Title two</div><div class="card-sub-title">Subtitle two</div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div></div></div><div class="card"><div class="card-header ch3"></div><div class="card-body"><div class="card-title">Title three</div><div class="card-sub-title">Subtitle three</div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div></div></div><div class="card"><div class="card-header ch4"></div><div class="card-body"><div class="card-title">Title four</div><div class="card-sub-title">Subtitle four</div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div></div></div><div class="card"><div class="card-header ch5"></div><div class="card-body"><div class="card-title">Title five</div><div class="card-sub-title">Subtitle five</div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div></div></div><div class="card"><div class="card-header ch6"></div><div class="card-body"><div class="card-title">Title six</div><div class="card-sub-title">Subtitle six</div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div></div></div></div></div></section><section class="am-sect"><div class="container-width"><div class="am-container"><img src="./img/phone-app.png" class="img-phone"/><div class="am-content"><div class="am-pre">ASSET MANAGER</div><div class="am-title">Manage your images with Asset Manager</div><div class="am-desc">You can create image blocks with the command from the left panel and edit them with double click</div><div class="am-post">Image uploading is not allowed in this demo</div></div></div></div></section><section class="blk-sect"><div class="container-width"><div class="blk-title">Blocks</div><div class="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style</div><div class="price-cards"><div class="price-card-cont"><div class="price-card"><div class="pc-title">Starter</div><div class="pc-desc">Some random list</div><div class="pc-feature odd-feat">+ Starter feature 1</div><div class="pc-feature">+ Starter feature 2</div><div class="pc-feature odd-feat">+ Starter feature 3</div><div class="pc-feature">+ Starter feature 4</div><div class="pc-amount odd-feat">$ 9,90/mo</div></div></div><div class="price-card-cont"><div class="price-card pc-regular"><div class="pc-title">Regular</div><div class="pc-desc">Some random list</div><div class="pc-feature odd-feat">+ Regular feature 1</div><div class="pc-feature">+ Regular feature 2</div><div class="pc-feature odd-feat">+ Regular feature 3</div><div class="pc-feature">+ Regular feature 4</div><div class="pc-amount odd-feat">$ 19,90/mo</div></div></div><div class="price-card-cont"><div class="price-card pc-enterprise"><div class="pc-title">Enterprise</div><div class="pc-desc">Some random list</div><div class="pc-feature odd-feat">+ Enterprise feature 1</div><div class="pc-feature">+ Enterprise feature 2</div><div class="pc-feature odd-feat">+ Enterprise feature 3</div><div class="pc-feature">+ Enterprise feature 4</div><div class="pc-amount odd-feat">$ 29,90/mo</div></div></div></div></div></section><section class="bdg-sect"><div class="container-width"><h1 class="bdg-title">The team</h1><div class="badges"><div class="badge"><div class="badge-header"></div><img src="img/team1.jpg" class="badge-avatar"/><div class="badge-body"><div class="badge-name">Adam Smith</div><div class="badge-role">CEO</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div></div><div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div></div><div class="badge"><div class="badge-header"></div><img src="img/team2.jpg" class="badge-avatar"/><div class="badge-body"><div class="badge-name">John Black</div><div class="badge-role">Software Engineer</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div></div><div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div></div><div class="badge"><div class="badge-header"></div><img src="img/team3.jpg" class="badge-avatar"/><div class="badge-body"><div class="badge-name">Jessica White</div><div class="badge-role">Web Designer</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div></div><div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div></div></div></div></section><footer class="footer-under"><div class="container-width"><div class="footer-container"><div class="foot-lists"><div class="foot-list"><div class="foot-list-title">About us</div><div class="foot-list-item">Contact</div><div class="foot-list-item">Events</div><div class="foot-list-item">Company</div><div class="foot-list-item">Jobs</div><div class="foot-list-item">Blog</div></div><div class="foot-list"><div class="foot-list-title">Services</div><div class="foot-list-item">Education</div><div class="foot-list-item">Partner</div><div class="foot-list-item">Community</div><div class="foot-list-item">Forum</div><div class="foot-list-item">Download</div><div class="foot-list-item">Upgrade</div></div><div class="clearfix"></div></div><div class="form-sub"><div class="foot-form-cont"><div class="foot-form-title">Subscribe</div><div class="foot-form-desc">Subscribe to our newsletter to receive exclusive offers and the latest news</div><input name="name" placeholder="Name" class="sub-input"/><input name="email" placeholder="Email" class="sub-input"/><button type="button" class="sub-btn">Submit</button></div></div></div></div><div class="copyright"><div class="container-width"><div class="made-with">made with GrapesJS</div><div class="foot-social-btns">facebook twitter linkedin mail</div><div class="clearfix"></div></div></div></footer></body><html>',
                style: '* { box-sizing: border-box; } body {margin: 0;}.clearfix{clear:both;}.header-banner{padding-top:35px;padding-bottom:100px;color:rgb(255, 255, 255);font-family:Helvetica, serif;font-weight:100;background-image:url("//grapesjs.com/img/bg-gr-v.png"), url("//grapesjs.com/img/work-desk.jpg");background-attachment:scroll, scroll;background-position-x:left, center;background-position-y:top, center;background-repeat-x:no-repeat, no-repeat;background-repeat-y:repeat, no-repeat;background-size:contain, cover;}.container-width{width:90%;max-width:1150px;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;}.logo-container{float:left;width:50%;}.logo{background-color:rgb(255, 255, 255);border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;width:130px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;min-height:30px;text-align:center;line-height:30px;color:rgb(77, 17, 79);font-size:23px;}.menu{float:right;width:50%;}.menu-item{float:right;font-size:15px;color:rgb(238, 238, 238);width:130px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;min-height:50px;text-align:center;line-height:30px;font-weight:400;}.lead-title{margin-top:150px;margin-right:0px;margin-bottom:30px;margin-left:0px;font-size:40px;}.sub-lead-title{max-width:650px;line-height:30px;margin-bottom:30px;color:rgb(198, 198, 198);}.lead-btn{margin-top:15px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:190px;min-height:30px;font-size:20px;text-align:center;letter-spacing:3px;line-height:30px;background-color:rgb(217, 131, 166);border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;transition-duration:0.5s;transition-timing-function:ease;transition-delay:initial;transition-property:all;cursor:pointer;}.lead-btn:hover{background-color:rgb(255, 255, 255);color:rgb(76, 17, 78);}.lead-btn:active{background-color:rgb(77, 17, 79);color:rgb(255, 255, 255);}.flex-sect{background-color:rgb(250, 250, 250);padding-top:100px;padding-right:0px;padding-bottom:100px;padding-left:0px;font-family:Helvetica, serif;}.flex-title{margin-bottom:15px;font-size:2em;text-align:center;font-weight:700;color:rgb(85, 85, 85);padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;}.flex-desc{margin-bottom:55px;font-size:1em;color:rgba(0, 0, 0, 0.5);text-align:center;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;}.cards{padding-top:20px;padding-right:0px;padding-bottom:20px;padding-left:0px;display:flex;justify-content:space-around;flex-direction:initial;flex-wrap:wrap;}.card{background-color:white;height:300px;width:300px;margin-bottom:30px;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;transition-duration:0.5s;transition-timing-function:ease;transition-delay:initial;transition-property:all;font-weight:100;overflow-x:hidden;overflow-y:hidden;}.card:hover{margin-top:-5px;box-shadow:rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;}.card-header{height:155px;background-image:url("//placehold.it/350x250/78c5d6/fff/image1.jpg");background-size:cover;background-position-x:center;background-position-y:center;}.card-header.ch2{background-image:url("//placehold.it/350x250/459ba8/fff/image2.jpg");}.card-header.ch3{background-image:url("//placehold.it/350x250/79c267/fff/image3.jpg");}.card-header.ch4{background-image:url("//placehold.it/350x250/c5d647/fff/image4.jpg");}.card-header.ch5{background-image:url("//placehold.it/350x250/f28c33/fff/image5.jpg");}.card-header.ch6{background-image:url("//placehold.it/350x250/e868a2/fff/image6.jpg");}.card-body{padding-top:15px;padding-right:15px;padding-bottom:5px;padding-left:15px;color:rgb(85, 85, 85);}.card-title{font-size:1.4em;margin-bottom:5px;}.card-sub-title{color:rgb(179, 179, 179);font-size:1em;margin-bottom:15px;}.card-desc{font-size:0.85rem;line-height:17px;}.am-sect{padding-top:100px;padding-bottom:100px;font-family:Helvetica, serif;}.img-phone{float:left;}.am-container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around;}.am-content{float:left;padding-top:7px;padding-right:7px;padding-bottom:7px;padding-left:7px;width:490px;color:rgb(68, 68, 68);font-weight:100;margin-top:50px;}.am-pre{padding-top:7px;padding-right:7px;padding-bottom:7px;padding-left:7px;color:rgb(177, 177, 177);font-size:15px;}.am-title{padding-top:7px;padding-right:7px;padding-bottom:7px;padding-left:7px;font-size:25px;font-weight:400;}.am-desc{padding-top:7px;padding-right:7px;padding-bottom:7px;padding-left:7px;font-size:17px;line-height:25px;}.am-post{padding-top:7px;padding-right:7px;padding-bottom:7px;padding-left:7px;line-height:25px;font-size:13px;}.blk-sect{padding-top:100px;padding-bottom:100px;background-color:rgb(34, 34, 34);font-family:Helvetica, serif;}.blk-title{color:rgb(255, 255, 255);font-size:25px;text-align:center;margin-bottom:15px;}.blk-desc{color:rgb(177, 177, 177);font-size:15px;text-align:center;max-width:700px;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;font-weight:100;}.price-cards{margin-top:70px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around;}.price-card-cont{width:300px;padding-top:7px;padding-right:7px;padding-bottom:7px;padding-left:7px;float:left;}.price-card{margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;min-height:350px;background-color:rgb(217, 131, 166);border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;font-weight:100;color:rgb(255, 255, 255);width:90%;}.pc-title{font-weight:100;letter-spacing:3px;text-align:center;font-size:25px;background-color:rgba(0, 0, 0, 0.1);padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}.pc-desc{padding-top:75px;padding-right:0px;padding-bottom:75px;padding-left:0px;text-align:center;}.pc-feature{color:rgba(255, 255, 255, 0.5);background-color:rgba(0, 0, 0, 0.1);letter-spacing:2px;font-size:15px;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;}.pc-feature:nth-of-type(2n){background-color:transparent;}.pc-amount{background-color:rgba(0, 0, 0, 0.1);font-size:35px;text-align:center;padding-top:35px;padding-right:0px;padding-bottom:35px;padding-left:0px;}.pc-regular{background-color:rgb(218, 120, 160);}.pc-enterprise{background-color:rgb(214, 106, 150);}.footer-under{background-color:rgb(49, 40, 51);padding-bottom:100px;padding-top:100px;min-height:500px;color:rgb(238, 238, 238);position:relative;font-weight:100;font-family:Helvetica, serif;}.copyright{background-color:rgba(0, 0, 0, 0.15);color:rgba(238, 238, 238, 0.5);bottom:0px;padding-top:1em;padding-right:0px;padding-bottom:1em;padding-left:0px;position:absolute;width:100%;font-size:0.75em;}.made-with{float:left;width:50%;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}.foot-social-btns{display:none;float:right;width:50%;text-align:right;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}.footer-container{display:flex;flex-wrap:wrap;align-items:stretch;justify-content:space-around;}.foot-list{float:left;width:200px;}.foot-list-title{font-weight:400;margin-bottom:10px;padding-top:0.5em;padding-right:0px;padding-bottom:0.5em;padding-left:0px;}.foot-list-item{color:rgba(238, 238, 238, 0.8);font-size:0.8em;padding-top:0.5em;padding-right:0px;padding-bottom:0.5em;padding-left:0px;}.foot-list-item:hover{color:rgb(238, 238, 238);}.foot-form-cont{width:300px;float:right;}.foot-form-title{color:rgba(255, 255, 255, 0.75);font-weight:400;margin-bottom:10px;padding-top:0.5em;padding-right:0px;padding-bottom:0.5em;padding-left:0px;text-align:right;font-size:2em;}.foot-form-desc{font-size:0.8em;color:rgba(255, 255, 255, 0.55);line-height:20px;text-align:right;margin-bottom:15px;}.sub-input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(255, 255, 255);background-color:rgb(85, 76, 87);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;}.sub-btn{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(120, 85, 128);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;}.sub-btn:hover{background-color:rgb(145, 105, 154);}.sub-btn:active{background-color:rgb(87, 63, 92);}.bdg-sect{padding-top:100px;padding-bottom:100px;font-family:Helvetica, serif;background-color:rgb(250, 250, 250);}.bdg-title{text-align:center;font-size:2em;margin-bottom:55px;color:rgb(85, 85, 85);}.badges{padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;display:flex;justify-content:space-around;align-items:flex-start;flex-wrap:wrap;}.badge{width:290px;font-family:Helvetica, serif;background-color:white;margin-bottom:30px;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;font-weight:100;overflow-x:hidden;overflow-y:hidden;text-align:center;}.badge-header{height:115px;background-image:url("//grapesjs.com/img/bg-gr-v.png"), url("//grapesjs.com/img/work-desk.jpg");background-position-x:left, center;background-position-y:top, center;background-attachment:scroll, fixed;overflow-x:hidden;overflow-y:hidden;}.badge-name{font-size:1.4em;margin-bottom:5px;}.badge-role{color:rgb(119, 119, 119);font-size:1em;margin-bottom:25px;}.badge-desc{font-size:0.85rem;line-height:20px;}.badge-avatar{width:100px;height:100px;border-top-left-radius:100%;border-top-right-radius:100%;border-bottom-right-radius:100%;border-bottom-left-radius:100%;border-top-width:5px;border-right-width:5px;border-bottom-width:5px;border-left-width:5px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(255, 255, 255);border-right-color:rgb(255, 255, 255);border-bottom-color:rgb(255, 255, 255);border-left-color:rgb(255, 255, 255);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;margin-top:-75px;position:relative;}.badge-body{margin-top:35px;margin-right:10px;margin-bottom:35px;margin-left:10px;}.badge-foot{color:rgb(255, 255, 255);background-color:rgb(162, 144, 165);padding-top:13px;padding-bottom:13px;display:flex;justify-content:center;}.badge-link{height:35px;width:35px;line-height:35px;font-weight:700;background-color:rgb(255, 255, 255);color:rgb(162, 144, 165);display:block;border-top-left-radius:100%;border-top-right-radius:100%;border-bottom-right-radius:100%;border-bottom-left-radius:100%;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:10px;}@media (max-width: 768px){.foot-form-cont{width:400px;}}@media (max-width: 480px){.foot-lists{display:none;}} b__header: {top: 10px; left: 20px; border: 1px solid blue; height: 100px;}',
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
                if (i === 0) {
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