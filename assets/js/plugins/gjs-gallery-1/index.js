import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import { cGalleryRef } from './consts';

export default grapesjs.plugins.add('gjs-gallery-1', (editor, opts = {}) => {
    let c = opts;

    let defaults = {
        blocks: [cGalleryRef],
        defaultStyle: 1,
        galleryClsPfx: 'b-content-list',
        labelGalleryBlock: 'Gallery 1',
        labelGalleryCategory: 'Landing Constructor'
    };

    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    loadBlocks(editor, c);
    loadComponents(editor, c);
});