export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const pfx = c.footerClsPfx;

    const FOOTER_TYPE = 'gjs-footer';

    domc.addType(FOOTER_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    droppable: 1,
                    resizable: 1,
                    linkUnderline: false,
                    traits: [
                        {
                            label: '"U" link',
                            name: 'linkUnderline',
                            changeProp: 1,
                            type: 'checkbox'
                        }
                    ],
                    script () {
                        const linkUnderline = '{[ linkUnderline ]}';

                        let linksContainerEl = this.querySelector('[data-js=footer-links-container]');

                        if (linksContainerEl) {
                            if (linkUnderline) {
                                linksContainerEl.classList.add('b-lp-footer__links_underline');
                            } else {
                                linksContainerEl.classList.remove('b-lp-footer__links_underline');
                            }
                        }
                    }
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === FOOTER_TYPE) {
                        return { type: FOOTER_TYPE };
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                this.listenTo(this.model, 'change:linkUnderline', this.updateScript);
                const comps = this.model.get('components');

                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <div class="${pfx}__container">
                            <div class="${pfx}__footer__item ${pfx}__logo">
                                <div>
                                    <a target="_blank" href="#">
                                        <img alt="Logo" src="https://gn571.cdn.stg.gamenet.ru/0/6hazL/o_14AxJK.png" />
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="#">
                                        <img alt="Logo" src="https://gn571.cdn.stg.gamenet.ru/0/6hazL/o_14AxJK.png" />
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="#">
                                        <img alt="Logo" src="https://gn571.cdn.stg.gamenet.ru/0/6hazL/o_14AxJK.png" />
                                    </a>
                                </div>
                            </div>
                            <div class="${pfx}__footer__item">
                                <span class="js-copyright-year">©&nbsp;2018&nbsp;</span>ProtocolOne
                            </div>
                            <div data-js="footer-links-container" class="${pfx}__footer__item ${pfx}__links">
                                <a target="_blank" class="${pfx}__el_link" href="#">Link 1</a>
                                <a target="_blank" class="${pfx}__el_link" href="#">Link 2</a>
                                <a target="_blank" class="${pfx}__el_link" href="#">Link 3</a>
                            </div>
                            <div class="${pfx}__footer__item ${pfx}__links">
                                <a href="#" target="_blank" class="fab fa-vk"></a>    
                                <a href="#" target="_blank" class="fab fa-odnoklassniki"></a>
                                <a href="#" target="_blank" class="fab fa-facebook"></a>
                                <a href="#" target="_blank" class="fab fa-twitter"></a>    
                                <a href="#" target="_blank" class="fab fa-instagram"></a>    
                            </div>
                        </div>
                    `);
                }
            }
        })
    });
}
