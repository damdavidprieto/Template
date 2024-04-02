import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-drawer-bar')
export class DrawerBar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color: green;
                flex-direction:row;
                padding: 20px;
            }
            nav{
                display:flex;
                flex-direction:row;
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
