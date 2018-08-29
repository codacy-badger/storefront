import { cGalleryRef, galleryRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const galleryPfx = c['galleryClsPfx'] || galleryRef;
    const style = c.defaultStyle ? `
        <style>
            .${galleryPfx} {
                margin: 30px auto 0;
            }
            .${galleryPfx}__item {
                width: 249px;
                display: inline-block;
                color:#fff;
                font-family: PTSerif, Arial, Helvetica, sans-serif;
                margin-left: 10px;
                vertical-align: top;
                letter-spacing: -0.5px;
                background: transparent url(https://blackdesert.ru/images/girls3/bg-list-item.png);
                background-size: 100% 100%;
            }
            .${galleryPfx}__item:first-child {
                margin-left: 0;
            }
            .${galleryPfx}__item-chapter {
                font-size: 30px;
                line-height: 30px;
                display: block;
                padding: 15px 15px 9px 15px;
            }
            .${galleryPfx}__item-text {
                font-size: 16px;
                line-height: 18px;
                display: block;
                padding: 0 0 30px 15px;
            }
            .${galleryPfx}__item-video {
                width: 249px;
                height: 139px;
                display: block;
                overflow: hidden;
                position: relative;
            }
            .${galleryPfx}__item-video:after {
                content: "";
                border: 20px solid transparent;
                border-left: 30px solid #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -15px;
                margin-top: -15px;
                cursor: pointer;
            }
            .${galleryPfx}__item-img {
                width: 320px;
                height: 180px;
                display: block;
                position: relative;
                cursor: pointer;
                -webkit-transition: all 300ms linear;
                -moz-transition: all 300ms linear;
                transition: all 300ms linear;
            }
            .${galleryPfx}__item-img_1 {
                background: transparent url(https://gn713.cdn.gamenet.ru/TY0Xv2riHu/1vpQL/o_2LIvOj.jpg) 0 0 no-repeat;
            }
            .${galleryPfx}__item-img_2 {
                background: transparent url(https://gn586.cdn.gamenet.ru/TY0Xv2riHu/1vpQx/o_1R0eQw.jpg) 0 0 no-repeat;
            }
            .${galleryPfx}__item-img_3 {
                background: transparent url(https://gn833.cdn.gamenet.ru/TY0Xv2riHu/1vpRC/o_1qjJZJ.jpg) 0 0 no-repeat;
            }
            
            .${galleryPfx}__item-video:hover .${galleryPfx}__item-img {
                -webkit-animation: hover 1s infinite linear;
                -moz-animation: hover 1s infinite linear;
                -o-animation: hover 1s infinite linear;
                animation: hover 1s infinite linear;
            }
            @-webkit-keyframes hover {
                0% {
                    -webkit-transform: translate(0,-5px) scale(1.1);
                    -moz-transform: translate(0,-5px) scale(1.1);
                    -o-transform: translate(0,-5px) scale(1.1);
                    transform: translate(0,-5px) scale(1.1);
                }
                25% {
                    -webkit-transform: translate(5px,0) scale(1.1);
                    -moz-transform: translate(5px,0) scale(1.1);
                    -o-transform: translate(5px,0) scale(1.1);
                    transform: translate(5px,0) scale(1.1);
                }
                50% {
                    -webkit-transform: translate(0,5px) scale(1.1);
                    -moz-transform: translate(0,5px) scale(1.1);
                    -o-transform: translate(0,5px) scale(1.1);
                    transform: translate(0,5px) scale(1.1);
                }
                75% {
                    -webkit-transform: translate(-5px,0) scale(1.1);
                    -moz-transform: translate(-5px,0) scale(1.1);
                    -o-transform: translate(-5px,0) scale(1.1);
                    transform: translate(-5px,0) scale(1.1);
                }
                100% {
                    -webkit-transform: translate(0,-5px) scale(1.1);
                    -moz-transform: translate(0,-5px) scale(1.1);
                    -o-transform: translate(0,-5px) scale(1.1);
                    transform: translate(0,-5px) scale(1.1);
                }
            }
            @keyframes hover {
                0% {
                    -webkit-transform: translate(0,-5px) scale(1.1);
                    -moz-transform: translate(0,-5px) scale(1.1);
                    -o-transform: translate(0,-5px) scale(1.1);
                    transform: translate(0,-5px) scale(1.1);
                }
                25% {
                    -webkit-transform: translate(5px,0) scale(1.1);
                    -moz-transform: translate(5px,0) scale(1.1);
                    -o-transform: translate(5px,0) scale(1.1);
                    transform: translate(5px,0) scale(1.1);
                }
                50% {
                    -webkit-transform: translate(0,5px) scale(1.1);
                    -moz-transform: translate(0,5px) scale(1.1);
                    -o-transform: translate(0,5px) scale(1.1);
                    transform: translate(0,5px) scale(1.1);
                }
                75% {
                    -webkit-transform: translate(-5px,0) scale(1.1);
                    -moz-transform: translate(-5px,0) scale(1.1);
                    -o-transform: translate(-5px,0) scale(1.1);
                    transform: translate(-5px,0) scale(1.1);
                }
                100% {
                    -webkit-transform: translate(0,-5px) scale(1.1);
                    -moz-transform: translate(0,-5px) scale(1.1);
                    -o-transform: translate(0,-5px) scale(1.1);
                    transform: translate(0,-5px) scale(1.1);
                }
            }
        </style>
        ` : '';

    if (c.blocks.indexOf(cGalleryRef) >= 0) {
        bm.add(cGalleryRef, {
            label: c['labelGalleryBlock'],
            category: c['labelGalleryCategory'],
            attributes: { class: 'fa fa-hand-pointer-o' },
            content: `
                <ul class="${galleryPfx}" data-gjs-type="gjs-gallery-1"></ul>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.7/css/jquery.fancybox.min.css">
                ${style} 
            `
        });
    }
}