import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-open-lock')
export class OpenLock extends LitElement {
    @property({type:String})
    title = "";
    @property({type:String})
    fillColor ="#2ebe02";

    static styles = [
        iconStyles,
        classStyles
    ];

    render() {
        return html`
            <svg title="${this.title}"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style="fill:#000000;">
            <g fill="${this.fillColor}" fill-rule="nonzero" stroke="none" stroke-width="none" 
                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" 
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" 
                style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)">
            <path d="M14.071,21h-11.142c-0.513,0 -0.929,-0.448 -0.929,-1v-10c0,-0.552 0.416,-1 0.929,-1h11.143c0.512,0 0.928,0.448 0.928,1v10c0,0.552 -0.416,1 -0.929,1z" fill="none" 
                stroke="${this.fillColor}" stroke-width="2"></path>
            <path d="M14.071,21h-11.142c-0.513,0 -0.929,-0.448 -0.929,-1v-10c0,-0.552 0.416,-1 0.929,-1h11.143c0.512,0 0.928,0.448 0.928,1v10c0,0.552 -0.416,1 -0.929,1z" 
                fill="${this.fillColor}" stroke="none" stroke-width="1" opacity="0.3"></path>
            <path d="M10.508,15c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2c1.1,0 2,0.9 2,2z" 
                stroke="none" stroke-width="1"></path>
            <path d="M23,9c0,0 0,-1.6 0,-2c0,-2.8 -2.2,-5 -5,-5c-2.8,0 -5,2.2 -5,5c0,0.4 0,2 0,2" fill="none" 
                stroke="${this.fillColor}" stroke-width="2"></path></g></g>
            </svg>
        `;
    }
}
