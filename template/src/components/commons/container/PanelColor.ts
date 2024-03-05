import { LitElement, html, css} from 'lit';
import { customElement, property  } from 'lit/decorators.js'

@customElement('app-panel-color')
export class PanelColor extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                border: 2px solid #d20101;
                border-radius: 5px;
            }
            div {
                display: flex;
                flex-direction: row;
                background-color:#9200007a;
                border: 2px solid #d20101;
                padding: 5px;
                gap: 1rem;
            }
            :host(.row) app-container {
                flex-direction: row;
            }
            app-input{
                margin-left:auto;
            }
        `
    ];

    @property()
    titlePanel: string = '';
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 3;

    render() {
        return html`
            <div>
                <app-title level="${this.level}">${this.titlePanel}</app-title>
                <app-input class="w-auto" type="color"></app-input>
            </div>
            <app-container>
                <slot></slot>
            </app-container>
        `;
    }
}
