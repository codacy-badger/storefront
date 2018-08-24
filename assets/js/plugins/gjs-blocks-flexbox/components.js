export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const BLOCK_TYPE = 'gjs-block';
    const BLOCKS_FLEXBOX_TYPE = 'gjs-blocks-flexbox';

    var justifyContentObj = [
        {value: 'flex-start', name: 'left'},
        {value: 'center', name: 'center'},
        {value: 'flex-end', name: 'right'},
        {value: 'space-between', name: 'space-between'},
        {value: 'space-around', name: 'space-around'},
    ];

    var alignItemsObj = [
        {value: 'stretch', name: 'stretch'},
        {value: 'flex-start', name: 'left'},
        {value: 'center', name: 'center'},
        {value: 'flex-end', name: 'right'},
    ];

    domc.addType(BLOCK_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    stylable: [
                        'padding','padding-top','padding-right','padding-bottom','padding-left',
                    ],
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === BLOCK_TYPE) {
                        return { type: BLOCK_TYPE };
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                this.listenTo(this.model, '', this.updateScript);
            }
        })
    });

    domc.addType(BLOCKS_FLEXBOX_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    justifyContent: 'center',
                    alignItems: 'center',
                    stylable: [
                        'padding','padding-top','padding-right','padding-bottom','padding-left',
                        'height'
                    ],
                    traits: [
                        {
                            type: 'select',
                            label: 'Horizontal Align',
                            name: 'justifyContent',
                            options: justifyContentObj,
                            changeProp: 1
                        },
                        {
                            type: 'select',
                            label: 'Vertical Align',
                            name: 'alignItems',
                            options: alignItemsObj,
                            changeProp: 1
                        }
                    ],
                    script () {
                       var justifyContent = '{[ justifyContent ]}';
                       var alignItems = '{[ alignItems ]}';
                       var style = this.getAttribute('style');

                       this.setAttribute("style","justify-content: " + justifyContent + "; align-items: " + alignItems + ";" + style );
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
