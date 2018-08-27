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


}