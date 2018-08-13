export default (editor, opt = {}) => {
    const c = opt;
    const dc = editor.DomComponents;
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const burgerType = 'burger-menu';

    dc.addType(burgerType, {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                'custom-name': c.labelBurger,
                draggable: false,
                droppable: false,
                copyable: false,
                removable: false
            },
        }, {
            isComponent(el) {
                if(el.getAttribute &&
                    el.getAttribute('data-gjs-type') == burgerType) {
                    return {type: burgerType};
                }
            },
        }),
        view: defaultType.view,
    });
}