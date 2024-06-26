import { LitElement, html} from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { iconStyles } from '../../../styles/IconStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-preferences')
export class Preferences extends LitElement {
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
            <svg version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" width="${this.size}" height="${this.size}"
                viewBox="0 0 129 129" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                enable-background="new 0 0 129 129">
            <g>
                <g fill="${this.fillColor}" >
                <path d="m17.7,118.3c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-81.2c6.6-1.8 11.5-7.8 11.5-15 0-8.5-6.9-15.5-15.5-15.5s-15.4,7-15.4,15.5c0,7.1 4.8,13.1 11.3,14.9v81.3zm-3.2-96.2c0-4 3.3-7.3 7.3-7.3s7.3,3.3 7.3,7.3-3.3,7.3-7.3,7.3-7.3-3.3-7.3-7.3z"/>
                <path d="m64.4,6.6c-2.3,0-4.1,1.8-4.1,4.1v42.2c-6.5,1.8-11.3,7.8-11.3,14.9s4.8,13.1 11.3,14.9v35.7c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-35.7c6.6-1.8 11.5-7.8 11.5-15s-4.9-13.2-11.5-15v-42c1.42109e-14-2.3-1.8-4.1-4.1-4.1zm7.5,61.2c0,4-3.3,7.3-7.3,7.3s-7.3-3.3-7.3-7.3 3.3-7.3 7.3-7.3 7.3,3.2 7.3,7.3z"/>
                <path d="m111.1,92v-81.3c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v81.3c-6.6,1.8-11.4,7.8-11.4,14.9 0,8.5 6.9,15.5 15.5,15.5s15.5-6.9 15.5-15.5c0.1-7.1-4.8-13.1-11.4-14.9zm-4,22.2c-4,0-7.3-3.3-7.3-7.3 0-4 3.3-7.3 7.3-7.3s7.3,3.3 7.3,7.3c1.42109e-14,4-3.3,7.3-7.3,7.3z"/>
                </g>
            </g>
            </svg>
        `;
    }
}
