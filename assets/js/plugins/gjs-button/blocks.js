import { cButtonRef, buttonRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const buttonPfx = c['buttonClsPfx'] || cButtonRef;
    const style = c.defaultStyle ? `
        <style type="text/css">
        .${buttonPfx} {
            display: inline-block;        
            min-width: 100px;
            min-height: 20px;
            width: 100px;
            height: 70px;
        }
        </style>
        ` : '';

    if (c.blocks.indexOf(cButtonRef) >= 0) {
        bm.add(cButtonRef, {
            label: c['labelButtonBlock'],
            category: c['labelButtonCategory'],
            attributes: { class: 'fa fa-hand-pointer-o' },
            content: `<span class="${buttonPfx}" data-gjs-type="gjs-button"></span>${style}`,
        });
    }
}