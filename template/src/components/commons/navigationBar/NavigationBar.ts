import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-navigation-bar')
export class NavigationBar extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                background-color: var(--primary-color);
                padding:var(--padding);
                box-shadow: var(--box-shadow);
            }
            nav {
                display:inline-flex;
                width: 100%;
                gap: 1rem;
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
