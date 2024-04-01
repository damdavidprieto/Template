import { LitElement, html, css} from 'lit';
import { customElement, property  } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-panel')
export class Panel extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                border: 2px solid #006907;
                border-radius: 0px;
                width:max-content;
                margin: auto;
            }
            app-title {
                background-color:#006907b6;
                border: 2px solid #006907;
                padding: 5px;
            }
            div {
                display: flex;
                flex-direction: column;
                padding: 10px;
                gap: 5px;
                width: -webkit-fill-available;
            }
            :host(.row) div{
                flex-direction: row;
            }
            @media (min-width: 1280px) {
                :host {
                    margin:unset;
                }
            }
        `,
        classStyles
    ];

    @property()
    titlePanel: string = '';
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 3;

    render() {
        return html`
            <app-title level="${this.level}">${this.titlePanel}</app-title>
            <div>
                <slot></slot>
            </div>
        `;
    }
}
