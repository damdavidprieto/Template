import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-footer')
export class Footer extends LitElement {
    static styles = [
        css`
            :host {
                position: fixed;
                bottom: 0;
                width: 100%;
            }
        `
    ];

    render() {
        return html`
            <footer>
                <slot></slot>
            </footer>
        `;
    }
}
