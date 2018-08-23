export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('link');
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
                    traits: []
                }
            }
        ),
        view: defaultView.extend({
            init() {
                const comps = this.model.get('components');

                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <a data-js="button-link" class="${pfx}__button">
                            Играть!
                        </a>`);
                }
            }
        })
    });
}
