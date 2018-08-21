import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import { cButtonRef } from './consts';

export default grapesjs.plugins.add('gjs-button', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: [cButtonRef],
        defaultStyle: 1,
        buttonClsPfx: 'b-lp-buttons',
        labelButtonBlock: 'Button',
        labelButtonCategory: 'Landing Constructor'
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadBlocks(editor, c);
    loadComponents(editor, c);
});