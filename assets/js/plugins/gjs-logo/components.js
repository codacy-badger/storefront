export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('image');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const pfx = c.logoClsPfx;

    const LOGO_TYPE = 'gjs-logo';

    domc.addType(LOGO_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    droppable: 1,
                    draggable: 1,
                    removable: 1,
                    copyable: 0,
                    resizable: 1,
                    stylable: [
                        'width',
                        'margin',
                        'margin-top',
                        'margin-bottom',
                        'margin-left',
                        'margin-right',
                    ],
                    traits: [
                        'alt',
                        'title',
                    ]
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === LOGO_TYPE) {
                        return { type: LOGO_TYPE };
                    }
                }
            }
        ),
        view: defaultView
    });
}
