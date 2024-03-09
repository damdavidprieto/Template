import { LitElement, html, css} from 'lit';
import { customElement, property  } from 'lit/decorators.js'

@customElement('app-panel')
export class Panel extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                border: 2px solid #d20101;
                border-radius: 5px;
                width:max-content;
            }
            app-title {
                background-color:#9200007a;
                border: 2px solid #d20101;
                padding: 5px;
            }
            :host(.row) app-container {
                flex-direction: row;
            }
        `
    ];

    @property()
    titlePanel: string = '';
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 3;

    render() {
        return html`
            <app-title level="${this.level}">${this.titlePanel}</app-title>
            <app-container>
                <slot></slot>
            </app-container>
        `;
    }
}
