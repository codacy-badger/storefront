export const
    css11= `
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    background: url("https://gn524.cdn.gamenet.ru/TY0Xv7cuq8/3Bke0/o_SFsW8.jpg") center center no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url("https://gn292.cdn.gamenet.ru/TY0Xv2riHu/6mSMn/o_25st7v.png");
    z-index: 90;
}

.video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
}

.content {
    width: 69.15%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    z-index: 95;
}

.content__logo {
    position: absolute;
    top: 4.4%;
    left: 3.2%;
}

.content__slogan {
    position: absolute;
    top: 41.2%;
    left: 50%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    width: 42.85%;
    height: 26.12%;
    background: url("https://gn990.cdn.gamenet.ru/TY0Xv2riHu/6mSQg/o_1CxZIo.png") center center no-repeat;
    background-size: contain;
}

/*.content__button-wrapper {*/

/*}*/

.content__button {
    display: table;
    position: absolute;
    top: 72.96%;
    left: 50%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    width: 33.6%;
    height: 11.7%;
    text-align: center;
    outline: 2px solid #ffba00;
    outline-offset: 2px;
    background-size: cover;
    background: #ffba00 url("https://gn954.cdn.gamenet.ru/TY0Xv2riHu/6mSQR/o_1alJyb.png") no-repeat center center;
}

.content__button:hover {
    width: 35.12%;
    height: 13.8%;
    top: 71.94%;
}

.content__button-text {
    display: table-cell;
    vertical-align: middle;
    font-family: 'ristrettoslabprosemibold';
    font-size: 72px;
    text-transform: uppercase;
}

.content__desc {
    position: absolute;
    top: 88.4%;
    left: 50%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    font-family: 'opensans';
    font-size: 20px;
    color: #ffc000;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5.1%;
    background: #000;
    opacity: .8;
    z-index: 100;
    color: #fff;
}

.footer__content {
    width: 69.15%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
}

.footer__logo {
    height: 60%;
    width: auto;
    position: absolute;
    top: 47%;
    transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.footer__logo_gn {
    left: 2.2%;
}

.footer__logo_z {
    left: 12.9%;
    height: 55%;
    top: 44%;
}

.footer__copy {
    font-family: 'Arial';
    font-size: 14px;
    top: 50%;
    transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    position: absolute;
}

.footer__copy_1 {
    left: 23.3%;
}

.footer__copy_2 {
    padding-left: 10px;
}

.footer__18 {
    font-family: 'ristrettoslabprosemibold';
    font-size: 32px;
    color: #ffc000;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

@media only screen and (min-width: 2005px) {
.content__button-text {
        font-size: 82px;
    }
.content__desc {
        font-size: 26px;
    }
.footer__copy {
        font-size: 18px;
    }
.footer__18 {
        font-size: 48px;
    }
}

@media only screen and (max-width: 1605px) {
.content__button-text {
        font-size: 56px;
    }
.content__desc {
        font-size: 16px;
    }
.footer__copy {
        font-size: 12px;
    }
.footer__18 {
        font-size: 26px;
    }
}

@media only screen and (max-width: 1540px) {
.footer__logo {
        height: 50%;
    }
}

@media only screen and (max-width: 1400px) {
.footer__copy {
        font-size: 10px;
    }
}

@media only screen and (max-width: 1200px) {
.video {
        display: none;
    }
.content__button-text {
        font-size: 44px;
    }
.content__desc {
        font-size: 14px;
    }
.footer__18 {
        font-size: 22px;
    }
.footer__logo {
        top: 47%;
    }
}

@media only screen and (max-width: 1000px) {
.content__button-text {
        font-size: 36px;
    }

.footer__copy_1 {
        left: 33.3%;
    }

.footer__logo {
        top: 49%;
    }

.footer__logo_z {
        top: 46%;
        left: 16.4%;
    }
}

@media only screen and (max-width: 800px) {
.content__logo {
        left: 50%;
        transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        -moz-transform: translate(-50%, 0);
        -webkit-transform: translate(-50%, 0);
    }

.content__button {
        top: 50%;
    }

.content__button:hover {
        top: 48.98%;
    }

.content__desc {
        top: 65%
    }

.content__slogan {
        top: 65%;
    }
}

@media only screen and (max-width: 770px) {
.content__button-text {
        font-size: 28px;
    }
.content__desc {
        font-size: 12px;
    }
}

@media only screen and (max-width: 620px) {
.content__button-text {
        font-size: 32px;
    }

.content__desc {
        font-size: 11px;
    }
.content {
        width: 100%;
    }
.footer__content {
        width: 90%;
    }
}

@media only screen and (max-width: 580px) {
.content__desc {
        font-size: 10px;
    }
}

@media only screen and (max-width: 470px) {
.footer__content {
        width: 100%;
    }
}


`;