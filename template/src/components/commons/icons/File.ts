import { LitElement, html} from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-file')
export class File extends LitElement {
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
                    <g fill="${this.fillColor}" 
                        fill-rule="nonzero" stroke="none" stroke-width="1" 
                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" 
                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" 
                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <g transform="scale(10.66667,10.66667)">
                    <path d="M21,18c0,0.6 -0.4,1 -1,1h-16c-0.6,0 -1,-0.4 -1,-1v-12c0,-0.6 0.4,-1 1,-1h5.6l2,2h8.4c0.6,0 1,0.4 1,1z" opacity="0.3"></path>
                    <path d="M20,20h-16c-1.1,0 -2,-0.9 -2,-2v-12c0,-1.1 0.9,-2 2,-2h6l2,2h8c1.1,0 2,0.9 2,2v10c0,1.1 -0.9,2 -2,2zM4,6v12h16v-10h-8.8l-2,-2z"></path>
                    </g>
                </g>
            </svg>
        `;
    }
}
