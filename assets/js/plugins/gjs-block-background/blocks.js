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
            background-position: center center;
            background-repeat: no-repeat ;
            background-size: cover;
            display: flex;
            flex-wrap: no-wrap;
            justify-content: space-between;
            flex-direction: column;
        }
        @media (max-width: 768px) {
            .${blockBgPfx} {
                background-position: 60% center;
            }
        }
        @media (max-width: 576px) {
            .${blockBgPfx} {
                background-position: 52% center;
            }
        }
        @media (max-height: 480px) {
            .${blockBgPfx} {
                height: 150vh;
            }
        }
        @media (max-width: 768px) {
            .${blockBgPfx} {
                height: 150vh;
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
                <div class=\"${blockBgPfx}\" data-gjs-type=\"${cBlockBgRef}\" data-gjs-droppable=\"true\" data-gjs-custom-name=\"${c.labelBlockBg}\" data-gjs=\"${blockBgRef}\">
                </div>
                ${style}
            `,
        });
    }
}