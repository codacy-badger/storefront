export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const BLOCKS_FLEXBOX_TYPE = 'gjs-blocks-flexbox';

    var justifyContentObj = [
        {value: 'flex-start', name: 'start'},
        {value: 'center', name: 'center'},
        {value: 'flex-end', name: 'end'},
    ];

    var alignItemsObj = [
        {value: 'stretch', name: 'stretch'},
        {value: 'flex-start', name: 'start'},
        {value: 'center', name: 'center'},
        {value: 'flex-end', name: 'end'},
    ];

    domc.addType(BLOCKS_FLEXBOX_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    stylable: [
                        'padding','padding-top','padding-right','padding-bottom','padding-left'
                    ],
                    traits: [
                        {
                            type: 'select',
                            label: 'Justify Content',
                            name: 'justifyContent',
                            options: justifyContentObj,
                            changeProp: 1
                        },
                        {
                            type: 'select',
                            label: 'Align Items',
                            name: 'alignItems',
                            options: alignItemsObj,
                            changeProp: 1
                        }
                    ],
                    script () {
                       var justifyContent = '{[ justifyContent ]}';
                       var alignItems = '{[ alignItems ]}';

                       this.setAttribute("style","justify-content: " + justifyContent + "; align-items: " + alignItems + ";");
                    }
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === BLOCKS_FLEXBOX_TYPE) {
                        return { type: BLOCK_FLEXBOX_TYPE };
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                this.listenTo(this.model, 'change:justifyContent change:alignItems', this.updateScript);
            }
        })
    });
}
