import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import { cBlocksFlexboxRef } from './consts';

export default grapesjs.plugins.add('gjs-blocks-flexbox', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: [cBlocksFlexboxRef],
        defaultStyle: 1,
        stylePrefix: 'b-blocks-flexbox',
        labelRow: 'Row',
        labelColumn: 'Column',
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

  loadBlocks(editor, c);
  loadComponents(editor, c);
});
