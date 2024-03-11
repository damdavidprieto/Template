import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-menu')
export class Menu extends LitElement {
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
                 <g  fill="${this.fillColor}" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" 
                        font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(16,16)"><path d="M0.5,5.5h15v2h-15z"></path>
                            <path d="M15,6v1h-14v-1h14M16,5h-16v3h16v-3z" fill="#ffffff"></path>
                            <path d="M0.5,0.5h15v2h-15z" fill="${this.fillColor}"></path><path d="M15,1v1h-14v-1h14M16,0h-16v3h16v-3z" fill="#ffffff"></path><g>
                            <path d="M0.5,10.5h15v2h-15z" fill="${this.fillColor}"></path><path d="M15,11v1h-14v-1h14M16,10h-16v3h16v-3z" fill="#ffffff"></path>
                        </g>
                    </g>
                </g>
            </svg>
        `;
    }
}
