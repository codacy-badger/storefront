export const
    css2 = `

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
        }

        #iuejo {
            height: 21.9%;
        }

        #i86rc {
            flex-basis: 28.5%;
            text-align: center;
        }

        #i8xxg {
            text-align: right;
        }

        #i8sng {
            height: 8.9%;
        }

        #idhwh {
            text-align: center;
        }

        #ivwx7 {
            padding: 0 0 0 0;
        }

        html {
            height: 100%;
            font-size: 10px;
        }

        .b-lp-video-video {
            display: block;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            overflow-x: hidden;
            overflow-y: hidden;
            z-index: -3;
        }

        .b-lp-video-video::after {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGklEQVQImWNgYGBYZmJiMoXBxMRkCgMDwzIAHgwDrawJG44AAAAASUVORK5CYII=");
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: repeat;
            background-repeat-y: repeat;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: initial;
            content: "";
            backface-visibility: hidden;
        }

        .b-lp-video-video__video {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .b-block-background {
            width: 100%;
            height: 100vh;
            background-image: none;
            background-position-x: center;
            background-position-y: center;
            background-repeat-x: no-repeat;
            background-repeat-y: no-repeat;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: transparent;
            background-size: cover;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }

        .b-blocks-flexbox {
            min-width: 5rem;
            min-height: 1%;
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            flex-wrap: nowrap;
            padding-top: 1rem;
            padding-right: 1rem;
            padding-bottom: 1rem;
            padding-left: 1rem;
            height: 7rem;
            position: relative;
            width: 100%;
        }

        .b-blocks-flexbox_cell {
            min-height: 1rem;
            height: 100%;
            flex-grow: 1;
            flex-basis: 100%;
            position: relative;
        }

        .gjs-logo {
            width: 18rem;
            height: auto;
            min-width: 4rem;
            min-height: 2rem;
            max-height: 100%;
            margin-top: 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
            margin-left: 1rem;
        }

        .b-lp-footer {
            position: absolute;
            left: 0px;
            bottom: 0px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            padding-top: 0.5rem;
            padding-right: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            z-index: 510;
            display: flex;
            align-items: stretch;
            justify-content: center;
        }

        .b-lp-footer, .b-lp-footer a {
            color: rgb(255, 255, 255);
        }

        .b-lp-footer__container {
            display: flex;
            align-items: stretch;
            min-height: 5rem;
            width: 100%;
            flex-direction: row;
        }

        .b-lp-footer__footer__item {
            flex-grow: 1;
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .b-lp-footer__links a {
            white-space: nowrap;
            text-decoration-line: none;
            text-decoration-style: initial;
            text-decoration-color: initial;
            font-size: 1.2rem;
            margin-right: 0.7rem;
        }

        .b-lp-footer__links_underline a:hover {
            text-decoration-line: underline;
            text-decoration-style: initial;
            text-decoration-color: initial;
        }

        .b-lp-footer__links:first-child {
            margin-right: 0px;
        }

        .b-lp-footer__logo img {
            max-width: 93%;
        }

        .c3388 {
            padding: 10px;
            font-family: Georgia, serif;
            font-size: 3rem;
            color: #ff9400;
        }

        .b-lp-button {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-content: center;
            width: 24rem;
            height: 7rem;
            color: rgb(0, 0, 0);
            font-size: 2rem;
            line-height: 7rem;
            text-decoration-line: none;
            text-decoration-style: initial;
            text-decoration-color: initial;
            cursor: pointer;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
        }

        .b-lp-button__button {
            display: inline-flex;
            align-content: normal;
            color: rgb(0, 0, 0);
            font-size: 3rem;
            width: 100%;
            height: 100%;
            justify-content: center;
            cursor: pointer;
            font-family: Georgia, serif;
            background-color: #ff9400;
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

        @media (max-width: 768px) {
        .b-block-background {
                background-position-x: 60%;
                background-position-y: center;
            }

        .b-block-background {
                background-position-x: 60%;
                background-position-y: center;
            }

        .b-blocks-flexbox {
                flex-wrap: wrap;
                min-height: 0px;
            }

        .b-blocks-flexbox_cell {
                min-height: 0px;
            }

        .b-blocks-flexbox {
                flex-wrap: wrap;
                min-height: 0px;
            }

        .b-blocks-flexbox_cell {
                min-height: 0px;
            }

        .b-blocks-flexbox {
                flex-wrap: wrap;
                min-height: 0px;
            }

        .b-blocks-flexbox_cell {
                min-height: 0px;
            }

        .b-blocks-flexbox {
                flex-wrap: wrap;
                min-height: 0px;
            }

        .b-blocks-flexbox_cell {
                min-height: 0px;
            }

        .b-blocks-flexbox {
                flex-wrap: wrap;
                min-height: 0px;
            }

        .b-blocks-flexbox_cell {
                min-height: 0px;
            }

        .b-blocks-flexbox {
                flex-wrap: wrap;
                min-height: 0px;
            }

        .b-blocks-flexbox_cell {
                min-height: 0px;
            }
        }

        @media (max-width: 576px) {
        .b-block-background {
                background-position-x: 52%;
                background-position-y: center;
            }

        .b-block-background {
                background-position-x: 52%;
                background-position-y: center;
            }
        }

        @media (max-height: 4840px) {
        .b-block-background {
                height: 150vh;
            }

        .b-block-background {
                height: 150vh;
            }
        }

        @media screen and (max-width: 768px) {
        .b-lp-footer {
                position: relative;
            }

        .b-lp-footer {
                position: relative;
            }
        }

        @media screen and (max-width: 576px) {
        .b-lp-footer__container {
                flex-direction: column;
            }

        .b-lp-footer__footer__item {
                min-height: 5rem;
                width: 100%;
            }

        .b-lp-footer__container {
                flex-direction: column;
            }

        .b-lp-footer__footer__item {
                min-height: 5rem;
                width: 100%;
            }
        }


`;