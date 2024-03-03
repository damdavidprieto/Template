import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-header')
export class Header extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <header>
                <slot></slot>
            </header>`;
    }
}
