import { LitElement, html, css} from 'lit';
import { customElement, property  } from 'lit/decorators.js'

@customElement('app-panel')
export class Panel extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                padding: 0px 0px 5px 0px;
                gap: 5px;
                border: 2px solid #000;
                border-radius: 5px;
            }
            app-title {
                border: 2px solid #000;
                padding: 5px;
            }
        `
    ];

    @property()
    title: string = '';
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 3;

    render() {
        return html`
            <app-title level="${this.level}">${this.title}</app-title>
            <app-container>
                <slot></slot>
            </app-container>
        `;
    }
}
