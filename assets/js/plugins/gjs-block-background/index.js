import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import { cBlockBgRef } from './consts';

export default grapesjs.plugins.add('gjs-block-background', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: [cBlockBgRef],
        defaultStyle: 1,
        blockBgClsPfx: 'b-block-background',
        labelBlockBg: 'Block background',
        labelBlockBgCategory: 'Landing Constructor',
        bgUrl: 'https://gn415.cdn.gamenet.ru/TY0Xv2riHu/6Uv7G/o_aZ54z.png'
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadBlocks(editor, c);
    loadComponents(editor, c);
});