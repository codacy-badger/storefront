export default function (editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const pfx = c.galleryClsPfx;

    const GALLERY_TYPE = 'gjs-gallery-1';

    domc.addType(GALLERY_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    droppable: 1,
                    draggable: 1,
                    removable: 1,
                    copyable: 1,
                    resizable: 1
                },
                script: function () {

                }
            },
            {
                isComponent(el) {
                    if (el.getAttribute && el.getAttribute('data-gjs-type') === GALLERY_TYPE) {
                        return {type: GALLERY_TYPE};
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                //this.listenTo(this.model, 'change:sourceMp4 change:sourceWebm change:poster change:autoPlay change:loop change:muted', this.updateScript);
                const comps = this.model.get('components');

                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <li class="${pfx}__item">
                            <a data-js="js-video-fancybox" title="Уникальный редактор персонажей" rel="girls3-video" href="//www.youtube.com/embed/tQCKbNVB81A?rel=0&autoplay=1&wmode=transparent" class="${pfx}__item-video">
                                <span class="${pfx}__item-img ${pfx}__item-img_1"/>
                            </a>
                            <span class="${pfx}__item-chapter">
                                Уникальный редактор персонажей
                            </span>
                            <span class="${pfx}__item-text">
                                Более 40 изменяемых зон на лице и теле позволят создать уникального и неповторимого героя
                            </span>
                        </li>
                        <li class="${pfx}__item">
                            <a title="Реалистичная графика" rel="girls3-video" href="//www.youtube.com/embed/zWUDSDGTfEg?rel=0&autoplay=1&wmode=transparent" class="${pfx}__item-video js-video-fancybox">
                                <span class="${pfx}__item-img ${pfx}__item-img_2"/>
                            </a>
                            <span class="${pfx}__item-chapter">
                                Реалистичная графика
                            </span>
                            <span class="${pfx}__item-text">
                                Единственная MMORPG c потрясающей графикой и атмосферой настоящего средневековья!
                            </span>
                        </li>
                        <li class="${pfx}__item">
                             <a title="Масштабные сражения" rel="girls3-video" href="//www.youtube.com/embed/GXUdvF4JWD4?rel=0&autoplay=1&wmode=transparent" class="${pfx}__item-video js-video-fancybox">
                                <span class="${pfx}__item-img ${pfx}__item-img_3"/>
                            </a>
                            <span class="${pfx}__item-chapter">
                                Масштабные сражения
                            </span>
                            <span class="${pfx}__item-text">
                                Участвуй в масштабных осадах, грандиозных PvP-сражениях и незабываемых схватках
                            </span>
                        </li> 
                    `);
                }
            }
        })
    });
}
