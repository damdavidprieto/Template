import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-label')
export class Label extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                align-items: center;
                white-space: nowrap;
                font-size: unset;
            }
            @media (max-width: 366px) {
                :host {
                    font-size: small
                }
            }
        `,
        classStyles
    ];

    render() {
        return html`
            <label>
                <slot></slot>
            </label>
        `;
    }
}
