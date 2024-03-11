import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-info')
export class Info extends LitElement {
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
                <g  fill-rule="nonzero" stroke="none" 
                    stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
                    stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" 
                    font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(16,16)"><path d="M7.5,0.5c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z" 
                    fill="${this.fillColor}" >
                </path>
                <path d="M7.5,1c3.584,0 6.5,2.916 6.5,6.5c0,3.584 -2.916,6.5 -6.5,6.5c-3.584,0 -6.5,-2.916 -6.5,-6.5c0,-3.584 2.916,-6.5 6.5,-6.5M7.5,0c-4.142,0 -7.5,3.358 -7.5,7.5c0,4.142 3.358,7.5 7.5,7.5c4.142,0 7.5,-3.358 7.5,-7.5c0,-4.142 -3.358,-7.5 -7.5,-7.5z" fill="#ffffff"></path><path d="M7.5,3.83c-0.37003,0 -0.67,0.29997 -0.67,0.67c0,0.37003 0.29997,0.67 0.67,0.67c0.37003,0 0.67,-0.29997 0.67,-0.67c0,-0.37003 -0.29997,-0.67 -0.67,-0.67zM8,10v-4h-1.671v1h0.671v3h-1v1h3v-1z" fill="#ffffff"></path></g></g>
            </svg>
        `;
    }
}
