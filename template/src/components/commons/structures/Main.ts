import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-main')
export class Main extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                overflow: auto;
                max-height: 75vh;
                padding-inline: 5px;
            }
        `
    ];
    //TODO: Ajustar el max-height en el update para tener en cuenta el tamaño del footer
    render() {
        return html`
            <main>
                <slot></slot>
            </main>
        `;
    }
}
