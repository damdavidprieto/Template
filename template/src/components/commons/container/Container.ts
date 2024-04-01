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
                gap: 10px;
                width: -webkit-fill-available;
            }
            @media (max-width: 366px) {
                :host {
                    flex-direction: column!important;
                }
            }
            @media (min-width: 768px) {
                :host {
                    flex-direction: row;
                }
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
