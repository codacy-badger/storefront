import { cBlockBgRef, blockBgRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const blockBgPfx = c['blockBgClsPfx'] || 'b-block-background';
    const style = c.defaultStyle ? `
      <style>
        .${blockBgPfx} {
            display: block;
            width: 100%;
            height: 100vh;
            background: transparent none center center no-repeat ;
            background-size: cover;
            display: flex;
        }
        @media (max-width: 768px) {
            .${blockBgPfx} {
                flex-wrap: wrap;
            }
        }
      </style>
    ` : '';

    if (c.blocks.indexOf(cBlockBgRef) >= 0) {
        bm.add(cBlockBgRef, {
            label: c['labelBlockBg'],
            category: c['labelBlockBgCategory'],
            attributes: {class:'fa fa-picture-o'},
            content: `
                <div class=\"${blockBgPfx}\" data-gjs-type=\"${blockBgRef}\" data-gjs-droppable=\"true\" data-gjs-custom-name=\"${c.labelBlockBg}\" data-gjs=\"${blockBgRef}\">
                </div>
                ${style}
            `,
        });
    }
}