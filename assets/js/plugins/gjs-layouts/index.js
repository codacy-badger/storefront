import grapesjs from 'grapesjs';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('gjs-layouts', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: 'gjs-layout',
        buttonClsPfx: 'b-layout',
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadBlocks(editor, c);
});