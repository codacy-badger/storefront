import { cVideoBgRef, videoBgRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const videoBgPfx = c['videoBgClsPfx'] || videoBgRef;
    const style = c.defaultStyle ? `
  <style type="text/css">
    .${videoBgPfx} { position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto; z-index: -1; }
    @media (min-aspect-ratio: 16/9) {
        .${videoBgPfx} { height: 300%; top: -100%; }
    }
    @media (max-aspect-ratio: 16/9) {
        .${videoBgPfx} { width: 300%; left: -100%; }
    }
    @supports (object-fit: cover) {
        #trailer > video {
            top: 0; left: 0;
            width: 100%; height: 100%;
            object-fit: cover;
        }
    }
  </style>
  ` : '';

    if (c.blocks.indexOf(cVideoBgRef) >= 0) {
        bm.add(cVideoBgRef, {
            label: c['labelVideoBgBlock'],
            category: c['labelVideoBgCategory'],
            content: `${style}
        <video class="${videoBgRef}" loop="loop" autoplay="autoplay" poster="https://gn524.cdn.gamenet.ru/TY0Xv7cuq8/3Bke0/o_SFsW8.jpg" muted="muted"><source src="https://gn392.cdn.gamenet.ru/TY0Xv7cuq8/3Bkcg/o_1UNmgX.mp4" type="video/mp4"></video>
      `,
        });
    }
}