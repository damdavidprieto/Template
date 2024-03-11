import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-lock')
export class Lock extends LitElement {
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
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256"
                style="fill:#000000;">
                <g  fill="${this.fillColor}" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M18,21h-12c-0.6,0 -1,-0.4 -1,-1v-10c0,-0.6 0.4,-1 1,-1h12c0.6,0 1,0.4 1,1v10c0,0.6 -0.4,1 -1,1z" opacity="0.3"></path><path d="M14,15c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2c1.1,0 2,0.9 2,2zM18,9h-2v-2c0,-2.2 -1.8,-4 -4,-4c-2.2,0 -4,1.8 -4,4v2h-2v-2c0,-3.4 2.6,-6 6,-6c3.4,0 6,2.6 6,6z"></path><path d="M18,22h-12c-1.1,0 -2,-0.9 -2,-2v-10c0,-1.1 0.9,-2 2,-2h12c1.1,0 2,0.9 2,2v10c0,1.1 -0.9,2 -2,2zM6,10v10h12v-10z"></path></g></g>
            </svg>
        `;
    }
}
