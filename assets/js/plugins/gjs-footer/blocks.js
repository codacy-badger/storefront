import { cFooterRef, footerRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const footerPfx = c['footerClsPfx'] || footerRef;
    const style = c.defaultStyle ? `
  <style type="text/css">
    .${footerPfx} {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px;
        z-index: 510;
        display: flex;
        align-items: stretch;
        justify-content: center;
	}
	
	.${footerPfx}, 
	.${footerPfx} a {
	    color: #ffffff;
	}
	
	.${footerPfx}__container {
	    display: flex;
        align-items: stretch;
        min-height: 50px;
        width: 100%;
	}
    
    .${footerPfx}__footer__item {
        flex-grow: 1;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;    
    }
    
    @media (max-width: 576px) {
        .${footerPfx}__container {
            flex-direction: column;
        }
        
        .${footerPfx}__footer__item {
            min-height: 50px;
            width: 100%;
        }
    }
    
    .${footerPfx}__links a {
        white-space: nowrap;
        text-decoration: none;
        font-size: 16px;
        margin-right: 7px;
    }
    
    .${footerPfx}__links:first-child {
        margin-right: 0;
    }
    
    .${footerPfx}__logo img {
        max-width: 93%;
    }
  </style>
  ` : '';

    if (c.blocks.indexOf(cFooterRef) >= 0) {
        bm.add(cFooterRef, {
            label: c['labelFooterBlock'],
            category: c['labelFooterCategory'],
            attributes: { class: 'fa fa-arrow-down' },
            content: `
                <footer class="${footerPfx}" data-gjs-type="gjs-footer"></footer>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
                ${style}`,
        });
    }
}