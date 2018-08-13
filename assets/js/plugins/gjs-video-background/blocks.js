import { cVideoBgRef, videoBgRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const videoBgPfx = c['videoBgClsPfx'] || videoBgRef;
    const style = c.defaultStyle ? `
  <style>
    .${videoBgPfx} {
        display: inline-block;
        float: right;
    }
    
    video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        background: 0 0;
    }
  </style>
  ` : '';

    if (c.blocks.indexOf(cVideoBgRef) >= 0) {
        bm.add(cVideoBgRef, {
            label: c['labelVideoBgBlock'],
            category: c['labelVideoBgCategory'],
            content: `
        <video class="${videoBgRef}" loop="loop" autoplay="autoplay" poster="https://gn524.cdn.gamenet.ru/TY0Xv7cuq8/3Bke0/o_SFsW8.jpg" muted="muted"><source src="https://gn392.cdn.gamenet.ru/TY0Xv7cuq8/3Bkcg/o_1UNmgX.mp4" type="video/mp4"></video>
        ${style}
      `,
        });
    }
}