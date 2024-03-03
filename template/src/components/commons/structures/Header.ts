import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-header')
export class Header extends LitElement {
    static styles = [
        css`
            :host {
                background-color: #920000bf;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                z-index: 1030;
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
