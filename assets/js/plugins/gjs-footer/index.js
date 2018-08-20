import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import loadTraits from './traits';
import { cFooterRef } from './consts';

export default grapesjs.plugins.add('gjs-footer', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: [cFooterRef],
        defaultStyle: 1,
        footerClsPfx: 'b-lp-footer',
        labelFooterBlock: 'Footer',
        labelFooterCategory: 'Basic'
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadTraits(editor, c);
    loadBlocks(editor, c);
    loadComponents(editor, c);
});