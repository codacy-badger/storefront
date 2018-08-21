import { cLogoRef, logoRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const logoPfx = c['logoClsPfx'] || cLogoRef;
    const style = c.defaultStyle ? `
      <style type="text/css">
        .${logoPfx} {
            width: 37.4rem;
            height: auto;
        }
      </style>
  ` : '';

    if (c.blocks.indexOf(cLogoRef) >= 0) {
        bm.add(cLogoRef, {
            label: c['labelLogoBlock'],
            category: c['labelLogoCategory'],
            attributes: { class: 'fa fa-square' },
            content: `<div class="${logoPfx}" data-gjs-type="gjs-logo"></div>${style}`,
        });
    }
}