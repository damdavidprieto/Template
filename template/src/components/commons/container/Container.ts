import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-container')
export class Container extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                overflow: auto;
                max-height: 75vh;
            }
        `
    ];
    //Ajustar el max-height en el update para tener en cuenta el tamaño del footer
    render() {
        return html`
            <slot></slot>
        `;
    }
}