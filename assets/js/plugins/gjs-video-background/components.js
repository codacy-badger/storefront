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
                    ],
                    script () {
                        const sourceMp4 = '{[ sourceMp4 ]}';
                        const sourceWebm = '{[ sourceWebm ]}';
                        const poster = '{[ poster ]}';

                        let videoEl = this.querySelector('[data-js=video-bg-video]');
                        let sourceMp4El = this.querySelector('[data-js=video-bg-source-mp4]');
                        let sourceWebmEl = this.querySelector('[data-js=video-bg-source-webm]');

                        if (sourceMp4El) {
                            sourceMp4El.src = sourceMp4;
                        }

                        if (sourceWebmEl) {
                            sourceWebmEl.src = sourceWebm;
                        }

                        if (videoEl) {
                            videoEl.poster = poster;

                            if (sourceMp4 || sourceWebm) {
                                videoEl.load();
                                videoEl.play();
                            }
                        }
                    }
                }
            },
            {
                isComponent(el) {
                    if(el.getAttribute && el.getAttribute('data-gjs-type') === VIDEO_BACKGROUND_TYPE) {
                        return { type: VIDEO_BACKGROUND_TYPE };
                    }

                    if (el.tagName && el.tagName === 'VIDEO') {
                        return {};
                    }
                }
            }
        ),
        view: defaultView.extend({
            init() {
                this.listenTo(this.model, 'change:sourceMp4 change:sourceWebm change:poster change:autoPlay change:loop change:muted', this.updateScript);
                const comps = this.model.get('components');

                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <video data-js="video-bg-video" class="${pfx}__video" autoplay="autoplay" loop="loop" muted="muted" width="100%" height="auto" preload="auto">
                            <source data-js="video-bg-source-mp4" />
                            <source data-js="video-bg-source-webm" type='video/webm; codecs="vp8, vorbis"' />
                        </video>
                  `);
                }
            }
        })
    });
}
