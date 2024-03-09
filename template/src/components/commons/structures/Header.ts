import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-header')
export class Header extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
            }
            header{
                width: -webkit-fill-available;
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
