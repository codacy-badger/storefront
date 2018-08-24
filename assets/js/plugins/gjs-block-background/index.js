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
        labelBlockBg: 'Block',
        labelBlockBgCategory: 'Landing Constructor',
        bgUrl: ''
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadBlocks(editor, c);
    loadComponents(editor, c);
});