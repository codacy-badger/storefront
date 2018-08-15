import { cVideoBgRef, videoBgRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const videoBgPfx = c['videoBgClsPfx'] || videoBgRef;
    const style = c.defaultStyle ? `
  <style type="text/css">
    .${videoBgPfx} {
        display: block;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        z-index: -1;
    }

    .${videoBgPfx}__video {
        position: absolute;
        height: 160%;
        top: -40%;
        width: 160%;
        left: -40%;
    }
  </style>
  ` : '';

    if (c.blocks.indexOf(cVideoBgRef) >= 0) {
        bm.add(cVideoBgRef, {
            label: c['labelVideoBgBlock'],
            category: c['labelVideoBgCategory'],
            attributes: { class: 'fa fa-youtube-play' },
            content: `<div class="${videoBgPfx}" data-gjs-type="video-background"></div>${style}`,
        });
    }
}