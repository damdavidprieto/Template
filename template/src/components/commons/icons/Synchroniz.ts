import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-synchroniz')
export class Synchroniz extends LitElement {
    @property({type:String})
    title = "";
    @property({type:String})
    fillColor ="#2ebe02";
    @property({type:Number})
    size = 24;

    static styles = [
        iconStyles,
        classStyles
    ];

    render() {
        return html`
            <svg title="${this.title}"
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style="fill:#000000;">
                <g fill="${this.fillColor}" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M9.504,5.468c0.777,-0.298 1.616,-0.468 2.496,-0.468c3.859,0 7,3.14 7,7c0,0.88 -0.17,1.72 -0.468,2.496l1.514,1.514c0.605,-1.209 0.954,-2.568 0.954,-4.01c0,-4.962 -4.037,-9 -9,-9c-1.24,0 -2.418,0.258 -3.492,0.715zM14.496,18.532c-0.777,0.298 -1.616,0.468 -2.496,0.468c-3.859,0 -7,-3.14 -7,-7c0,-0.88 0.17,-1.72 0.468,-2.496l-1.514,-1.514c-0.605,1.209 -0.954,2.568 -0.954,4.01c0,4.962 4.037,9 9,9c1.276,0 2.486,-0.273 3.586,-0.755z"></path><path d="M16,20l-4,4v-8zM8,4l4,-4v8z"></path></g></g>
            </svg>
        `;
    }
}
