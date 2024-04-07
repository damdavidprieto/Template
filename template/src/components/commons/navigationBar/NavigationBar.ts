import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-navigation-bar')
export class NavigationBar extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                padding:var(--padding);
                max-width: 100vw;
                width: -webkit-fill-available;
            }
            nav {
                //display:inline-flex;
                width: 100%;
                gap: 1rem;
                display: flex;
                flex-direction: row;
            }
            @media (min-width: 1280px) {
                nav {
                    flex-direction: row;
                }
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
