import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-container')
export class Container extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                padding: 10px;
                gap: 5px;
                width: -webkit-fill-available;
            }
        `,
        classStyles
    ];
    render() {
        return html`
            <slot></slot>
        `;
    }
}
