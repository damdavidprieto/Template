import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-navigation-bar')
export class NavigationBar extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                background-color: #920000bf;
                padding: 0.5rem 1rem;
                box-shadow: 0px 0px 5px 0px #000000c5;
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
