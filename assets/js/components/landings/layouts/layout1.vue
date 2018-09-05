<template>
  <section class="layout" v-styler:section="$sectionData.classes" :class="$sectionData.classes">

          <div class="layout__wrap">
              <div class="layout__content">
                  <div class="panel">
                      <div class="panel__wrap">
                          <div class="panel__section">
                              <uploader class="panel__logo-img" path="$sectionData.logos[0].path" :title="$sectionData.logos[0].alt" :alt="$sectionData.logos[0].alt"></uploader>
                          </div>
                          <div class="panel__section">
                              <div class="panel__title" v-styler="$sectionData.slogan[0].text" v-text="$sectionData.slogan[0].title"></div>
                              <div class="panel__title panel__title_big" v-styler="$sectionData.slogan[1].text" v-text="$sectionData.slogan[1].title"></div>
                          </div>
                          <div class="panel__section">
                              <ul class="panel__features">
                                  <div class="panel__feature" v-for="(item, index) in $sectionData.features">
                                      <span  v-text="item.title"  v-styler="item.text"></span>
                                  </div>
                              </ul>
                          </div>
                          <div class="panel__section panel__section_grow">
                            <span class="b-button" @click.prevent="onClick" :class="$sectionData.buttons[0].classes" :href="$sectionData.buttons[0].href" v-html="$sectionData.buttons[0].text" v-styler="$sectionData.buttons[0].button">

                            </span>
                          </div>
                          <div class="panel__section">
                              <footer class="footer">
                                  <div class="footer__group">
                                      <uploader class="footer__el footer__el_gamenet" path="$sectionData.logos[1].path" :title="$sectionData.logos[1].alt" :alt="$sectionData.logos[1].alt"></uploader>
                                      <span class="footer__el">
                                          <span v-text="$sectionData.copyright.title" v-styler="$sectionData.copyright.text">
                                              2018-2018 gamesite.com
                                          </span>
                                      </span>
                                  </div>
                                  <div class="footer__group footer__group_light">
                                      <span v-for="item in $sectionData.links">

                                          <a @click.prevent="openLink(item)" :class="item.classes"
                                                class="footer__el footer__el_link" :href="item.href" v-html="item.text"  v-styler="item">
                                          </a>
                                      </span>
                                  </div>
                              </footer>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="b-18plus" v-text="$sectionData.age.title" v-styler="$sectionData.age.text">
              18+
          </div>

    </section>


</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
      name: 'Layout1',
      cover: 'img/covers/layout1.png',
      group: 'Layouts',
      $schema: {
        classes: types.ClassList,
        age: {
            title: '18+',
            text: types.Text
        },
        copyright: {
            title: '2018-2018 gamesite.com',
            text: types.Text
        },
        buttons: [
           {
               text: 'Play Now',
               href: "#",
               button: types.Button,
           },
        ],
        features: [
            {
                title: 'Modern 3D graphics in the browser',
                text: types.Text,
            },
            {
                title: 'Create multiple characters on the server',
                text: types.Text,
            },
            {
                title: 'Wide opportunities for pumping the hero',
                text: types.Text,
            },
        ],
        slogan: [
                {
                    title: 'CaLL',
                    text: types.Title,
                },
                {
                    title: 'to action!',
                    text: types.Title,
                },
        ],
        logos: [
            {
                path: 'https://gn616.cdn.gamenet.ru/TY0Xv2riHu/6nOTs/o_1My2mo.png',
                alt: 'Default Logo',
                logo: types.Logo,
            },
            {
                path: 'https://gn839.cdn.gamenet.ru/TY0Xv2riHu/6nOU5/o_21POBx.png',
                alt: 'Default Logo',
                logo: types.Logo,
            },
        ],
        links: [
            {
                text: 'Catalog of games',
                href: '#',
                button: types.Button,
            },
            {
                text: 'Support',
                href: '#',
                button: types.Button,
            },
            {
                text: 'Rules',
                href: '#',
                button: types.Button,
            },
        ],
      },
      props: {
        id: {
          type: Number, required: true
        }
      },
      methods: {
          onClick () {
               if (this.$builder.isEditing) return;

               const endpoint = this.$sectionData.buttons[0].href;
          },
          openLink (el) {
              if (this.$builder.isEditing) return;

              if (!el) {
                  return;
              }

              const href = el.href;

              if (el && undefined !== href ) {
                  window.open(href);
              }

          }
        }
    };
</script>

<style>
    /*integration*/
    body {
    }

    .l_main {
        width: 100%;
        height: 100%;
    }

    .l_main__body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .b_footer, .b_header {
        display: none;
    }
    /**/

    img {
        border: 0;
        max-width: 100%;
        height: auto; }

    legend {
        border: 0;
        padding: 0; }

    td, th {
        padding: 0; }

    article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
        display: block; }

    b, optgroup, strong {
        font-weight: 700; }

    dfn {
        font-style: italic; }

    sub {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
        bottom: -.25em; }

    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
        top: -.5em; }

    figure {
        margin: 1em 4rem; }

    pre, textarea {
        overflow: auto; }

    code, kbd, pre, samp {
        font-family: monospace, monospace;
        font-size: 1em; }

    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0; }
    button:focus, input:focus, optgroup:focus, select:focus, textarea:focus {
        outline: 0; }

    button {
        overflow: visible;
        text-transform: none; }

    select {
        text-transform: none; }

    button {
        -webkit-appearance: button;
        cursor: pointer; }

    button::-moz-focus-inner {
        border: 0;
        padding: 0; }

    input {
        line-height: normal; }
    input::-moz-focus-inner {
        border: 0;
        padding: 0; }
    input[type=checkbox], input[type=radio] {
        padding: 0; }
    input[type=search]::-webkit-search-cancel-button, input::-webkit-search-decoration {
        -webkit-appearance: none; }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%; }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer; }
    a:hover {
        color: inherit; }

    img {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none; }

    *, *:before, *:after {
        box-sizing: border-box; }

    ::-moz-selection {
        background: #ffe421;
        color: #fff; }

    ::selection {
        background: #ffe421;
        color: #fff; }

    ::-moz-selection {
        background: #ffe421;
        color: #fff; }

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
    @media only screen and (max-width: 768px) {
        .g-hidden-tab {
            display: none;
        }
    }
    @media only screen and (max-width: 540px) {
        .g-hidden-mobile {
            display: none;
        }
    }

    body {
        line-height: 1;
        color: #000;
        background-color: #a9bdd4;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADBAMAAABCL2PIAAAAMFBMVEUVFyCdiLlxfKR0dpxWXYBrZn5XT3ZoWXM4RGIuNUlKN0UmLD0lKDMdISsNEBUNDxU4lcc8AAAAFElEQVQI12PgVPNg4DWMZvh3fAEADOMDdia39r0AAAAASUVORK5CYII=") no-repeat center;
        background-size: cover;
        font-size: 1rem;
        margin: 0;
        font-family: Georgia, serif;
        font-weight: normal;
        font-style: normal;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto; }

    .layout {
        position: relative;
        min-height: 100vh;
        background: center url(https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png) no-repeat;
        background-size: cover; }
    .layout__wrap {
        position: relative;
        width: 100%;
        max-width: 106rem;
        max-width: calc(106rem + 4rem);
        padding: 0 2rem;
        margin: 0 auto;
        min-height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column; }
    .layout__content {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1; }

    h1, h2, h3, h4 {
        padding: 0;
        margin: 0;
        font-weight: normal; }

    .b-button {
        position: relative;
        display: block;
        font-size: 2.4rem;
        line-height: 2.4rem;
        color: #442a10;
        text-align: center;
        background-color: #ffe421;
        border: 1px solid #ffe663;
        border-radius: 0.2rem;
        box-shadow: inset 0 0 2.5rem #ffba21, 0 0 2.5rem #e45b00;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        padding:  2rem 3rem;
        user-select: none; }
    .b-button:hover {
        background-color: #ffef7c;
        box-shadow: inset 0 0 2.5rem #ffba21, 0 0 3.5rem #e45b00; }

    .footer {
        font-family: Arial, sans-serif;
        font-size: 1.1rem;
        color: #000; }
    .footer__group {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 0.35rem; }
    .footer__group:last-child {
        margin-bottom: 0; }
    .footer__el {
        margin-right: 1rem;
        margin-bottom: 0.5rem;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0; }
    .footer__el_gamenet {
        width:11.6rem;
        margin-bottom: 0; }
    .footer__el_link {
        line-height: 1.15;
        border-bottom: 1px solid;
        margin: 0 0.5rem;
        white-space: nowrap; }
    .footer__el_link:hover {
        border-bottom: 1px solid transparent; }
    .footer__el_age {
        font-size: 1.4rem; }
    .footer__el:last-child {
        margin-right: 0; }
    @media only screen and (max-width: 1600px) {
        .footer__el_gamenet {
            margin-bottom: 0.5rem; } }

    .bg-canvas {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden; }

    .panel {
        height: 100vh;
        background-color: rgba(96, 125, 139, 0.75);
        width: 40%;
        padding: 0 0.3rem;
        color: #fff;
        line-height: 1; }
    @media only screen and (max-width: 540px) {
        .panel {
            width: 100%;
        }
    }
    .panel__wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 3rem 4.5rem;
        height: 100%;
        border-left: 1px dotted rgba(162, 143, 123, 0.5);
        border-right: 1px dotted rgba(162, 143, 123, 0.5); }
    .panel__section {
        margin-bottom: 3rem; }
    .panel__section_grow {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1; }
    .panel__section:last-child {
        margin-bottom: 0; }
    .panel__logo-img {
        display: block;
        margin: 2rem auto 0 auto; }
    .panel__title {
        font-size: 2.4rem;
        text-align: center; }
    .panel__title_big {
        font-size: 3.5rem;
        text-transform: uppercase; }
    .panel__features {
        font-size: 1.9rem;
        list-style: none;
        padding-left: 3.5rem;
        margin: 0 0 1rem 0; }
    .panel__feature {
        margin-bottom: 0.5em;
        position: relative; }
    .panel__feature:before {
        content: '';
        position: absolute;
        display: block;
        left: -3.5rem;
        top: 0.4em;
        width: 2.3rem;
        height: 1.2rem;
        margin-top: -0.6rem;
        background: url("https://gn818.cdn.gamenet.ru/TY0Xv7cuq8/40uC7/o_27kZ5F.png"); }

    /* иконка 18+ */
    .b-18plus {
        position: absolute;
        display: block;
        bottom: 2rem;
        left: 5rem;
        font-size: 3.6rem;
        line-height: 3.6rem;
        color: #000;
    }
</style>
