export default function (editor = {}) {
    const trm = editor.TraitManager;
    const modal = editor.Modal;

    trm.addType('button', {
        events:{
            'click': 'openAssetManager',
        },
        getInputEl() {
            if(this.inputEl) {
                return this.inputEl;
            }

            this.inputEl = document.createElement('button');
            this.inputEl.className = 'b-landing-constructor__button';
            this.inputEl.innerHTML = 'Add';

            return this.inputEl;
        },
        openAssetManager() {
            let self = this;

            if (!editor) {
                return;
            }

            editor.runCommand('open-assets', {
                types: ['image', 'video'],
                accept: 'image/*,video/mp4,video/x-m4v,video/*',
                target: this.model,
                onClick() {},
                onDblClick() {},
                onSelect(asset) {
                    modal.close();
                    self.spreadUrl(asset.get('src'));
                }
            });
        },
        spreadUrl(url) {
            this.model.set('value', url);
        }
    });
}