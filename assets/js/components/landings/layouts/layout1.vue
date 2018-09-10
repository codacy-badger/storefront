<template>
    <section class="b-layout-1" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes"
             v-bind:style="$sectionData.mainStyle.styles">
        <div class="b-layout-1__wrap">
            <div class="b-layout-1__content">
                <div class="b-layout-1__panel">
                    <div class="b-layout-1__panel__wrap">
                        <div class="b-layout-1__panel__section">
                            <uploader class="b-layout-1__panel__logo-img" path="$sectionData.logos[0].path"
                                      :title="$sectionData.logos[0].alt" :alt="$sectionData.logos[0].alt"></uploader>
                        </div>
                        <div class="b-layout-1__panel__section">
                            <div class="b-layout-1__panel__title" v-styler="$sectionData.slogan[0].text"
                                 v-text="$sectionData.slogan[0].title"></div>
                            <div class="b-layout-1__panel__title panel__title_big" v-styler="$sectionData.slogan[1].text"
                                 v-text="$sectionData.slogan[1].title"></div>
                        </div>

                        <div class="b-layout-1__panel__section">
                            <ul class="b-layout-1__panel__features">
                                <btitle class="b-layout-1__panel__feature" v-for="(item, index) in $sectionData.titles" v-styler="$sectionData.titles[index]">
                                    {{ item.text }}
                                </btitle>
                            </ul>
                        </div>
                        <div class="b-layout-1__panel__section b-layout-1__panel__section_grow">
                            <span class="b-layout-1__b-button" @click.prevent="onClick"
                                  :class="$sectionData.buttons[0].classes" :href="$sectionData.buttons[0].href"
                                  v-html="$sectionData.buttons[0].text" v-styler="$sectionData.buttons[0].button"
                                    v-bind:style="$sectionData.buttons[0].button.styles">

                            </span>
                        </div>
                        <div class="b-layout-1__panel__section">
                            <footer class="b-layout-1__footer">
                                <div class="b-layout-1__footer__group">
                                    <uploader class="b-layout-1__footer__el b-layout-1__footer__el_logo"
                                              path="$sectionData.logos[1].path" :title="$sectionData.logos[1].alt"
                                              :alt="$sectionData.logos[1].alt"></uploader>
                                    <span class="b-layout-1__footer__el">
                                          <span v-text="$sectionData.copyright.title"
                                                v-styler="$sectionData.copyright.text">
                                              2018-2018 gamesite.com
                                          </span>
                                      </span>
                                </div>
                                <div class="b-layout-1__footer__group b-layout-1__footer__group_light">
                                      <span v-for="item in $sectionData.links">

                                          <a @click.prevent="openLink(item)" :class="item.classes"
                                             class="b-layout-1__footer__el b-layout-1__footer__el_link"
                                             :href="item.href" v-html="item.text" v-styler="item">
                                          </a>
                                      </span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="b-layout-1__b-18plus" v-text="$sectionData.age.title" v-styler="$sectionData.age.text">
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
            mainStyle: types.StyleObject,
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
            titles: [
                {
                    text: 'Modern 3D graphics in the browser',
                    title: types.Title,
                },
                {
                    text: 'Create multiple characters on the server',
                    title: types.Title,
                },
                {
                    text: 'Wide opportunities for pumping the hero',
                    title: types.Title,
                },
            ],
            slogan: [
                {
                    title: 'CaLL',
                    text: types.Text,
                },
                {
                    title: 'to action!',
                    text: types.Text,
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
            onClick() {
                if (this.$builder.isEditing) return;

                const endpoint = this.$sectionData.buttons[0].href;
            },
            openLink(el) {
                if (this.$builder.isEditing) return;

                if (!el) {
                    return;
                }

                const href = el.href;

                if (el && undefined !== href) {
                    window.open(href);
                }

            }
        }
    };
</script>
