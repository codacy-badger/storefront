import { cButtonRef, buttonRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const buttonPfx = c['buttonClsPfx'] || cButtonRef;
    const style = c.defaultStyle ? `
  <style type="text/css">
    .${buttonPfx} {
        width: 37.4rem;
        height: 7.6rem;
    }
  </style>
  ` : '';

    if (c.blocks.indexOf(cButtonRef) >= 0) {
        bm.add(cButtonRef, {
            label: c['labelButtonBlock'],
            category: c['labelButtonCategory'],
            attributes: { class: 'fa fa-hand' },
            content: `<div class="${buttonPfx}" data-gjs-type="gjs-button"></div>${style}`,
        });
    }
}