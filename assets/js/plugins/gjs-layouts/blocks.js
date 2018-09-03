import { css1 } from './blocks/l1/css';
import { html1 } from './blocks/l1/html';

import { css2 } from './blocks/l2/css';
import { html2 } from './blocks/l2/html';

import { css3 } from './blocks/l3/css';
import { html3 } from './blocks/l3/html';

import { css4 } from './blocks/l4/css';
import { html4 } from './blocks/l4/html';

import { css5 } from './blocks/l5/css';
import { html5 } from './blocks/l5/html';

import { css6 } from './blocks/l6/css';
import { html6 } from './blocks/l6/html';

import { css7 } from './blocks/l7/css';
import { html7 } from './blocks/l7/html';

import { css8 } from './blocks/l8/css';
import { html8 } from './blocks/l8/html';

import { css9 } from './blocks/l9/css';
import { html9 } from './blocks/l9/html';

import { css10 } from './blocks/l10/css';
import { html10 } from './blocks/l10/html';

import { css11 } from './blocks/l11/css';
import { html11 } from './blocks/l11/html';


export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;

        bm.add('gjs-layout-1', {
            label: 'Layout 1',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html1}
                <style>
                    ${css1}
                </style>
            `,
        });

        bm.add('gjs-layout-2', {
            label: 'Layout 2',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html2}
                <style>
                    ${css2}
                </style>
             `,
        });

        bm.add('gjs-layout-3', {
            label: 'Layout 3',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html3}
                <style>
                    ${css3}
                </style>
            `,
        });

        bm.add('gjs-layout-4', {
            label: 'Layout 4',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html4}
                <style>
                    ${css4}
                </style>
            `,
        });

        bm.add('gjs-layout-5', {
            label: 'Layout 5',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html5}
                <style>
                    ${css5}
                </style>
            `,
        });

        bm.add('gjs-layout-6', {
            label: 'Layout 6',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html6}
                <style>
                    ${css6}
                </style>
        `,
        });

        bm.add('gjs-layout-7', {
            label: 'Layout 7',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html7}
                <style>
                    ${css7}
                </style>
            `,
        });

        bm.add('gjs-layout-8', {
            label: 'Layout 8',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html8}
                <style>
                    ${css8}
                </style>
            `,
        });

        bm.add('gjs-layout-9', {
            label: 'Layout 9',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html9}
                <style>
                    ${css9}
                </style>
            `,
        });

        bm.add('gjs-layout-10', {
            label: 'Layout 10',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html10}
                <style>
                    ${css10}
                </style>
            `,
        });

        bm.add('gjs-layout-11', {
            label: 'Layout 11',
            category: 'Layouts',
            attributes: { class: 'fa fa-object-ungroup' },
            content: `
                ${html11}
                <style>
                    ${css11}
                </style>
            `,
        });


}