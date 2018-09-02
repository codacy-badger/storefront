export const
    css9= `

/**/

::-moz-selection {
    background: #bc2825;
    color: #3c0300;
}

::selection {
    background: #bc2825;
    color: #3c0300;
}

body {
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.b-lp-fantasys1-content {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://gn650.cdn.gamenet.ru/TY0Xv7cuq8/4Dquk/o_nL8Xk.jpg") center center no-repeat;
    background-size: cover;
}

.b-lp-fantasys1-logo {
    position: absolute;
    left: 15%;
    top: 3.6%;
    margin-left: -23px;
    width: 255px;
    height: 270px;
    background: url("https://gn892.cdn.gamenet.ru/TY0Xv7cuq8/4Dquw/o_1V2iJY.png") center center no-repeat;
    background-size: contain;
}

.b-lp-fantasys1-center {
    position: absolute;
    left: 26%;
    top: 23%;
    font-family: "museo-cyrl", Georgia, serif;
    font-size: 56px;
}

.b-lp-fantasys1-center__subtitle {
    display: block;
    text-align: left;
    color: #bc2825;
}

.b-lp-fantasys1-center__subtitle_sm {
    font-size: 60%;
    color: #3c0300;
}

.b-lp-fantasys1-center__subtitle_note {
    font-size: 60%;
    color: #562925;
    position: relative;
    top: -.6em;
    right: -4px;
}

.b-lp-fantasys1-center__button-wrap {
    position: relative;
    display: inline-block;
    background: -webkit-linear-gradient(top, #66727e 50%, #aab2b8 50%);
    background: linear-gradient(to bottom, #66727e 50%, #aab2b8 50%);
    padding: 2px;
    margin: 24px 0 0 -32px;
    overflow: hidden;
    border-radius: 30px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.b-lp-fantasys1-center__button {
    display: block;
    font-family: "IdealistSC", Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding: 15px 32px;
    color: #e5ecd9;
    background: linear-gradient(#d01d10, #911700);
    border-radius: 30px;
    cursor: pointer;
    letter-spacing: 1px;
}

.b-lp-fantasys1-center__button-wrap:hover {
    filter: brightness(108%);
}

.b-lp-fantasys1-center__button-wrap:active .b-lp-fantasys1-center__button {
    background: linear-gradient(#911700, #d01d10);
}

.b-lp-fantasys1-description {
    position: absolute;
    left: 15%;
    top: 65%;
    white-space: nowrap;
    vertical-align: top;
}

.b-lp-fantasys1-description__p {
    display: inline-block;
    font: 20px "IdealistSC", Arial, Helvetica, sans-serif;
    color: #3c0300;
    margin-right: 60px;
}

.b-lp-fantasys1-description__p_short {
    position: relative;
    top: -20px;
}

.b-lp-fantasys1-description__p span {
    display: block;
    white-space: nowrap;
}

.b-lp-fantasys1-char {
    position: absolute;
    display: none;
    left: 50.5%;
    user-select: none;
    width: auto;
}

.b-lp-fantasys1-char_m {
    max-height: 97%;
}

.b-lp-fantasys1-char_f {
    margin-top: 20px;
    max-height: 92%;
}

.b-lp-fantasys1-char_active {
    display: block;
}

/*footer*/
.b-lp-fantasys1-footer {
    position: absolute;
    bottom: 30px;
    left: 15%;
    font-family: "CharterC", Georgia, serif;
    font-size: 14px;
    font-weight: 100;
    color: #e5ecd9;
    white-space: nowrap;
}

.b-lp-fantasys1-footer__logo {
    width: auto;
    position: relative;
    top: 4px;
    opacity: .9;
}

.b-lp-fantasys1-footer__copy {
    margin: 0 15px;
    opacity: .9;
}

.b-lp-fantasys1-footer__link {
    color: #e5ecd9;
    text-decoration: underline;
    margin-right: 10px;
    opacity: .9;
}

.b-lp-fantasys1-footer__link:hover {
    text-decoration: none;
}

.b-lp-fantasys1-footer__footnote {
    margin-left: 30%;
}
/**/

.b-lp-fantasys1-18plus {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #bc2825;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

@media (max-width: 1700px) {
.b-lp-fantasys1-logo {
        left: 12%;
    }
.b-lp-fantasys1-center {
        left: 24%;
    }
.b-lp-fantasys1-description {
        left: 12%;
    }
.b-lp-fantasys1-description__p {
        margin-right: 50px;
    }
.b-lp-fantasys1-footer {
        left: 12%;
    }
}

@media (max-width: 1620px) {
.b-lp-fantasys1-logo {
        left: 11%;
    }

.b-lp-fantasys1-center {
        left: 24%;
        top: 25%;
        font-size: 52px;
    }

.b-lp-fantasys1-description {
        left: 11%;
    }

.b-lp-fantasys1-description__p {
        margin-right: 50px;
        font-size: 18px;
    }

.b-lp-fantasys1-footer {
        left: 11%;
    }

.b-lp-fantasys1-footer__footnote {
        margin-left: 25%;
    }
}

@media (max-width: 1480px) {
.b-lp-fantasys1-logo {
        left: 10%;
    }
.b-lp-fantasys1-center {
        left: 24%;
        top: 26%;
        font-size: 48px;
    }
.b-lp-fantasys1-description {
        left: 10%;
    }
.b-lp-fantasys1-description__p {
        margin-right: 45px;
        font-size: 17px;
    }
.b-lp-fantasys1-footer {
        left: 10%;
    }
.b-lp-fantasys1-footer__footnote {
        margin-left: 20%;
    }
}

@media (max-width: 1480px) {
.b-lp-fantasys1-logo {
        top: 3%;
        left: 9%;
        width: 230px;
        height: 250px;
    }
.b-lp-fantasys1-center {
        left: 24%;
        top: 26%;
        font-size: 42px;
    }
.b-lp-fantasys1-description {
        left: 9%;
    }
.b-lp-fantasys1-description__p {
        margin-right: 40px;
        font-size: 16px;
    }
.b-lp-fantasys1-footer {
        left: 9%;
        font-size: 12px;
    }
.b-lp-fantasys1-footer__footnote {
        margin-left: 20%;
    }
.b-lp-fantasys1-char_f {
        max-height: 89%;
    }
}

@media (max-width: 1300px) {
.b-lp-fantasys1-logo {
        top: 2%;
        left: 8%;
        width: 200px;
        height: 215px;
    }
.b-lp-fantasys1-center {
        left: 24%;
        top: 26%;
        font-size: 38px;
    }
.b-lp-fantasys1-description {
        left: 8%;
    }
.b-lp-fantasys1-description__p {
        margin-right: 35px;
        font-size: 15px;
    }
.b-lp-fantasys1-footer {
        left: 8%;
        font-size: 11px;
    }
.b-lp-fantasys1-char_f {
        max-height: 89%;
    }
.b-lp-fantasys1-center__button {
        font-size: 18px;
        padding: 13px 30px;
        color: #e5ecd9;
        background: linear-gradient(#d01d10, #911700);
        border-radius: 30px;
        cursor: pointer;
        letter-spacing: 1px;
    }
.b-lp-fantasys1-center__button-wrap {
        margin: 24px 0 0 -26px;
    }
}

@media (max-width: 1300px) {
.b-lp-fantasys1-logo {
        left: 6%;
    }
.b-lp-fantasys1-center {
        left: 22%;
        top: 26%;
        font-size: 38px;
    }
.b-lp-fantasys1-description {
        left: 6%;
    }
.b-lp-fantasys1-description__p {
        margin-right: 30px;
        font-size: 14px;
    }
.b-lp-fantasys1-footer {
        left: 6%;
        font-size: 10px;
    }
}

`;