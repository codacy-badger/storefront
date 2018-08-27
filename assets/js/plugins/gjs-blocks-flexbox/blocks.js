import { cBlocksFlexboxRef, blocksFlexboxRef } from './consts';

export default (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;
  const blocks = c.blocks || [];
  const stylePrefix = c.stylePrefix;
  const clsRow = `${stylePrefix}`;
  const clsCell = `${stylePrefix}_cell`;
  const labelRow = c['labelRow'];
  const labelCell = c['labelColumn'];

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

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  const keyWidth = 'flex-basis';
  const keyHeight = 'height';
  const unitHeight =  '%';
  const step = 0.1;
  const minDim = 0.1;
  const currentUnit = 0;
  const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr:0, bl:0, br: 0, unitHeight, keyHeight, currentUnit, minDim, step };
  const resizerRight = { tl: 0, tc: 0, tr: 0, cl: 0, cr:1, cl: 1,  bl:0, br: 0, bc: 0, keyWidth, currentUnit: 1 , minDim, step };
  const rowAttr = {
    class: clsRow,
    'data-gjs-type': cBlocksFlexboxRef,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-custom-name': labelRow,
  };

  const colAttr = {
    class: clsCell,
    'data-gjs-type': 'gjs-block',
    /*'data-gjs-draggable': `.${clsRow}`,*/
    'data-gjs-resizable': resizerRight,
    'data-gjs-custom-name': labelCell,
    /*'data-gjs-unstylable': ['width'],*/
    'data-gjs-stylable-require': ['flex-basis'],
  };

  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on('selector:add', selector =>
    privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1))

  const category = 'Landing Constructor';
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);
  const styleRow = `
    .${clsRow} {
        min-width: 5rem;
        min-height: 1%;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: nowrap;
        padding: 1rem;
        height: 5rem;
        position: relative;
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
        min-height: 0;
      }
    }
  `;

  const styleClm = `
    .${clsCell} {
        min-height: 1rem;
        height: 100%;
        flex-grow: 1;
        flex-basis: 100%;
        position: relative;
    }
    @media (max-width: 768px) {
        .${clsCell} {
            min-height: 0;
            height: auto;
        }
    }
  `;

  if (c.blocks.indexOf(cBlocksFlexboxRef) >= 0) {
      bm.add(cBlocksFlexboxRef, {
        label:labelRow,
        category,
        attributes: { class: 'fa fa-object-group' },
        content: `
            <div ${attrsRow}>
              <div ${attrsCell}></div>
              <div ${attrsCell}></div>
            </div>
            <style>
              ${styleRow}
              ${styleClm}
            </style>
            `,
      });
  }

        bm.add('gjs-block', {
            label: labelCell,
            category,
            attributes: { class: 'fa fa-object-group' },
            content: `
                <div ${attrsCell}></div>
                <style>
                    ${styleClm}
                </style>
            `,
        });


}
