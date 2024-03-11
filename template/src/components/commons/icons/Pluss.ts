import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-pluss')
export class Pluss extends LitElement {
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
                <g fill="${this.fillColor}" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,3c-4.97056,0 -9,4.02944 -9,9c0,4.97056 4.02944,9 9,9c4.97056,0 9,-4.02944 9,-9c0,-4.97056 -4.02944,-9 -9,-9z" opacity="0.3"></path><path d="M12,22c-5.5,0 -10,-4.5 -10,-10c0,-5.5 4.5,-10 10,-10c5.5,0 10,4.5 10,10c0,5.5 -4.5,10 -10,10zM12,4c-4.4,0 -8,3.6 -8,8c0,4.4 3.6,8 8,8c4.4,0 8,-3.6 8,-8c0,-4.4 -3.6,-8 -8,-8z"></path><path d="M11,7h2v10h-2z"></path><path d="M7,11h10v2h-10z"></path></g></g>
            </svg>
        `;
    }
}
