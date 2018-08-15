export default function(editor, opt = {}) {
    const c = opt;
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const pfx = c.videoBgClsPfx;

    const VIDEO_BACKGROUND_TYPE = 'video-background';

    domc.addType(VIDEO_BACKGROUND_TYPE, {
        model: defaultModel.extend(
            {
                defaults: {
                    ...defaultModel.prototype.defaults,
                    source: c.source,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    droppable: false,
                    traits: [
                        {
                            label: 'Source mp4',
                            name: 'sourceMp4',
                            placeholder: 'eg. path to mp4 movie',
                            changeProp: 1
                        },
                        {
                            label: 'Source webm',
                            name: 'sourceWebm',
                            placeholder: 'eg. path to webm movie',
                            changeProp: 1
                        },
                        {
                            label: 'Poster',
                            name: 'poster',
                            placeholder: 'eg. path to static image',
                            changeProp: 1
                        }
                    ]
                },
                init() {
                    this.listenTo(this, 'change:sourceMp4', this.updateSourceMp4());
                },
                updateSourceMp4: function () {
                    console.log('updateSourceMp4');
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === VIDEO_BACKGROUND_TYPE) {
                        return { type: VIDEO_BACKGROUND_TYPE };
                    }

                    if (el.tagName && el.tagName === 'VIDEO') {
                        return { type: VIDEO_BACKGROUND_TYPE };
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                this.listenTo(this.model, 'change:sourceWebm change:poster change:autoPlay change:loop change:muted', this.updateScript);
                const comps = this.model.get('components');

                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <video class="${pfx}__video" autoplay="autoplay" loop="loop" muted="muted" width="100%" height="auto" preload="auto">
                            <source />
                            <source data-js="video-bg-source-webm" type='video/webm; codecs="vp8, vorbis"' />
                        </video>
                  `);
                }
            },
            renderComponent () {
                let el = document.createElement('video');
                el.src = this.model.get('src');
                el.className = this.pfx + 'no-pointer';
                el.style.height = '100%';
                el.style.width = '100%';


                return el;
            },
            render(...args) {
                ComponentView.prototype.render.apply(this, args);
                this.updateClasses();
                let prov = this.model.get('provider');
                this.el.appendChild(this.renderByProvider(prov));

                console.log('render');

                return this;
            }
        })
    });
}
