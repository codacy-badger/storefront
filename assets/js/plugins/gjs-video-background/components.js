export default (editor = {}) => {
    const dc = editor.DomComponents;
    const videoType = dc.getType('video');

    const videoModel = videoType.model;
    const videoView = videoType.view;

    let model = videoModel.extend(
        {
            defaults: Object.assign({}, videoModel.prototype.defaults, {
                traits: [
                    'name',
                    'placeholder',
                    {
                        type: 'select',
                        label: 'Type',
                        name: 'type',
                        options: [
                            {value: 'text', name: 'Text'},
                            {value: 'email', name: 'Email'},
                            {value: 'password', name: 'Password'},
                            {value: 'number', name: 'Number'},
                        ]
                    }, {
                        type: 'checkbox',
                        label: 'Required',
                        name: 'required',
                    }],
                }
            ),
            init: function () {
                this.listenTo(this, 'change:model-prop-name', this.doStuff);
            },
            doStuff: function () {
                console.log('ololo');
            }
        },
        {
            isComponent(el) {
                if(el.tagName && el.tagName === 'video') {
                    return { type: 'video' };
                }
            },
        }
    );

    dc.addType('video', { model: model, view: videoView });
}