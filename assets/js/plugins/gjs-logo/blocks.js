import { cLogoRef, logoRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const logoPfx = c['logoClsPfx'] || cLogoRef;
    const style = c.defaultStyle ? `
        .${logoPfx} {
            width: 18rem;
            height: auto;
            min-width: 4rem;
            min-height: 2rem;
            margin: 1rem;
        }
  ` : '';

    const attrsToString = attrs => {
        const result = [];

        for (let key in attrs) {
            let value = attrs[key];
            const toParse = value instanceof Array || value instanceof Object;
            value = toParse ? JSON.stringify(value) : value;
            result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
        }

        return result.length ? ` ${result.join(' ')}` : '';
    }


    const keyWidth = 'width';
    const step = 0.2;
    const minDim = 1;
    const currentUnit = 1;
    const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr:0, bl:0, br: 0, minDim };
    const resizerRight = { ...resizerBtm, cr: 1, bc: 0, keyWidth, currentUnit, minDim, step };

    const logoAttr = {
        class: logoPfx,
        'data-gjs-type': 'gjs-logo',
        'data-gjs-resizable': resizerRight,
        'data-gjs-custom-name': logoRef,
        'data-gjs-unstylable': ['width'],
        'src': 'https://gn266.cdn.gamenet.ru/TY0Xv2riHu/6hxyU/o_1DNqc3.png'
    };
    const attrsLogo = attrsToString(logoAttr);


    if (c.blocks.indexOf(cLogoRef) >= 0) {
        bm.add(cLogoRef, {
            label: c['labelLogoBlock'],
            category: c['labelLogoCategory'],
            attributes: { class: 'fa fa-square' },
            content: `
                <img ${attrsLogo} ></img>
                <style>
                    ${style}
                </style>
            `,
        });
    }
}