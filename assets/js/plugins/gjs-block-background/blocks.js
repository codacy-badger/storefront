import { cBlockBgRef, blockBgRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const blockBgPfx = c['blockBgClsPfx'] || 'b-block-background';
    const style = c.defaultStyle ? `
      <style>
        .${blockBgPfx} {
            display: inline-block;
            border: 1px soild red;
            width: 100%;
            height: 100%;
        }
      </style>
  ` : '';

    if (c.blocks.indexOf(cBlockBgRef) >= 0) {
        bm.add(cBlockBgRef, {
            label: c['labelBlockBg'],
            category: c['labelBlockBgCategory'],
            content: `
                <div class=\"${blockBgPfx}\" data-gjs-type=\"${blockBgRef}\" data-gjs-droppable=\"true\" data-gjs-custom-name=\"${c.labelBlockBg}\" data-gjs=\"${blockBgRef}\"></div>
                ${style}
            `,
        });
    }
}