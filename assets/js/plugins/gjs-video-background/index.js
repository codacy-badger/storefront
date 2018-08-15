import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import { cVideoBgRef } from './consts';

export default grapesjs.plugins.add('gjs-video-background', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: [cVideoBgRef],
        defaultStyle: 1,
        videoBgClsPfx: 'b-lp-video-video',
        labelVideoBgBlock: 'Video background',
        labelVideoBgCategory: 'Extra'
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadBlocks(editor, c);
    loadComponents(editor, c);
});