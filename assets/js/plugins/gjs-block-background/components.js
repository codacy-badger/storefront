export default (editor, opt = {}) => {
    const c = opt;
    const dc = editor.DomComponents;
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const BLOCK_BG_TYPE = 'block-background';
    const blockBgPfx = c['blockBgClsPfx'] || 'b-block-background';

    var blockBgHeightTypes = [
        {value: 'auto', name: 'auto'},
        {value: '100vh', name: 'full screen'},
        {value: '50vh', name: 'half screen'},
    ];

    var flexDirectionObj = [
        {value: 'row', name: 'row'},
        {value: 'column', name: 'column'},
    ];

    var justifyContentObj = [
        {value: 'space-between', name: 'space-between'},
        {value: 'space-around', name: 'space-around'},
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

    dc.addType(BLOCK_BG_TYPE, {
        model: defaultModel.extend({
            defaults:
                Object.assign({}, defaultModel.prototype.defaults, {
                droppable: true,
                bgUrl: c.bgUrl,
                heightType: '100vh',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                stylable: [],
                traits: [
                    {
                        type: 'button',
                        label: 'Background image',
                        name: 'bgUrl',
                        placeholder: 'path to background image',
                        changeProp: 1
                    },
                    {
                        type: 'select',
                        label: 'Heigth block',
                        name: 'heightType',
                        options: blockBgHeightTypes,
                        changeProp: 1
                    },
                    {
                        type: 'select',
                        label: 'Direction',
                        name: 'flexDirection',
                        options: flexDirectionObj,
                        changeProp: 1
                    },
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
                script: function () {
                    var bg = '{[ bgUrl ]}';
                    var heightType = '{[ heightType ]}';
                    var flexDirection = '{[ flexDirection ]}';
                    var justifyContent = '{[ justifyContent ]}';
                    var alignItems = '{[ alignItems ]}';
                    var blockBgEl = this;

                    blockBgEl.setAttribute("style","background-image: url("+bg+"); height:" +  heightType + "; flex-direction: " + flexDirection + "; justify-content: " + justifyContent + "; align-items: " + alignItems + ";");
                }
            }),
        }, {
            isComponent(el) {
                if(el.getAttribute &&
                    el.getAttribute('data-gjs-type') == BLOCK_BG_TYPE) {
                    return {type: BLOCK_BG_TYPE};
                }
            },
        }),
        view: defaultView.extend({
            init() {
                const model = this.model;

                this.listenTo(model, 'change:heightType change:bgUrl change:flexDirection change:justifyContent change:alignItems', this.updateScript);
            },
        })
    });
}