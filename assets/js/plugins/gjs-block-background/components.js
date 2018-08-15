export default (editor, opt = {}) => {
    const c = opt;
    const dc = editor.DomComponents;
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const blockBgType = 'block-background';

    var inputTypes = [
        {value: '100%', name: 'heigth: 100%'},
        {value: 'auto', name: 'heigth: auto'},
        {value: '', name: 'heigth: value'},
    ];

    dc.addType(blockBgType, {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                // Can be dropped only inside `form` elements
                //draggable: 'form, form *',
                // Can't drop other elements inside it
                droppable: false,
                // Traits (Settings)
                traits: ['name', 'placeholder', {
                    // Change the type of the input (text, password, email, etc.)
                    type: 'select',
                    label: 'Type',
                    name: 'type',
                    options: inputTypes,
                },{
                    // Can make it required for the form
                    type: 'checkbox',
                    label: 'Required',
                    name: 'required',
                }],
            }),
        }, {
            isComponent(el) {
                if(el.getAttribute &&
                    el.getAttribute('data-gjs-type') == blockBgType) {
                    return {type: blockBgType};
                }
            },
        }),
        view: defaultType.view,
    });
}