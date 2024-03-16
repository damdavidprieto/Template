import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-navigation-bar-menu')
export class NavigationBarMenu extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                background-color: transparent;
                padding:var(--padding);
            }
            nav {
                gap: 1rem;
                display: flex;
                flex-direction: column;
            }
            @media (min-width: 1280px) {
                
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
