export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const pfx = c.buttonClsPfx;

    const BUTTON_TYPE = 'gjs-button';

    domc.addType(BUTTON_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    droppable: 1,
                    draggable: 1,
                    removable: 1,
                    copyable: 1,
                    resizable: 1,
                    traits: [
                        {
                            label: 'Title',
                            name: 'title',
                            changeProp: 1
                        }
                    ],
                    script () {
                        const title = '{[ title ]}';

                        let buttonContainerEl = this.querySelector('[data-js=button-container]');

                        if (!buttonContainerEl) {
                            return;
                        }

                        if (title) {
                            buttonContainerEl.innerHTML = title + buttonContainerEl.innerHTML;
                        }
                    }
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === BUTTON_TYPE) {
                        return { type: BUTTON_TYPE };
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                this.listenTo(this.model, 'change:title', this.updateScript);
                const comps = this.model.get('components');

                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <span data-js="button-container" class="btn-container__button">        
                            <a class="b-bt-start-navi"></a>
                        </span>
                  `);
                }
            }
        })
    });
}
