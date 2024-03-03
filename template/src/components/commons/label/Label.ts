import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-label')
export class Label extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                white-space: nowrap;
            }
        `
    ];

    render() {
        return html`
            <label>
                <slot></slot>
            </label>
        `;
    }
}
