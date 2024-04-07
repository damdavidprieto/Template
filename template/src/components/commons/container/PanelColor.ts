import { LitElement, html, css} from 'lit';
import { customElement, property  } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-panel-color')
export class PanelColor extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                border: 2px solid #006907b6;
                width:max-content;
                margin: 5px 5px 5px 5px;
            }
            div {
                display: flex;
                background-color:#006907b6;
                padding: 5px;
                gap: 1rem;
            }
            :host(.row) app-container {
                flex-direction: row;
            }
            app-input{
                margin-left:auto;
            }
        `,
        classStyles
    ];

    @property()
    titlePanel: string = '';
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 3;

    private containerElement!: HTMLElement;

    firstUpdated() {
        this.containerElement = this.shadowRoot!.querySelector('app-container') as HTMLElement;
        console.log(this.containerElement);
    }

    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        const appliedStyles = this.getAttribute('class');
        if (appliedStyles && this.containerElement) {
            this.containerElement.className = appliedStyles;
        }
    }

    handlerColorChange(e: CustomEvent){
        console.log(e.detail);
        this.dispatchEvent(new CustomEvent('panel-color-changed', { detail: e.detail }));
    }

    render() {
        return html`
            <div>
                <app-title level="${this.level}">${this.titlePanel}</app-title>
                <app-input @color-changed="${this.handlerColorChange}" type="color"></app-input>
            </div>
            <app-container class="p-2">
                <slot></slot>
            </app-container>
        `;
    }
}
