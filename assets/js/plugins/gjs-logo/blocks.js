import { cLogoRef, logoRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const logoPfx = c['logoClsPfx'] || cLogoRef;
    const style = c.defaultStyle ? `
      <style type="text/css">
        .${logoPfx} {
            width: 360px;
            height: auto;
            min-width: 80px;
            min-height: 40px;
            margin: 20px;
        }
      </style>
  ` : '';

    if (c.blocks.indexOf(cLogoRef) >= 0) {
        bm.add(cLogoRef, {
            label: c['labelLogoBlock'],
            category: c['labelLogoCategory'],
            attributes: { class: 'fa fa-square' },
            content: `<img class="${logoPfx}"  src="https://gn266.cdn.gamenet.ru/TY0Xv2riHu/6hxyU/o_1DNqc3.png" data-gjs-type="gjs-logo"></img>${style}`,
        });
    }
}