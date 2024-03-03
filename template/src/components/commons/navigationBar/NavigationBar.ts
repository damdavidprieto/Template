import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-navigation-bar')
export class NavigationBar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <nav>
                <slot></slot>
            </nav>
        `;
    }
}
