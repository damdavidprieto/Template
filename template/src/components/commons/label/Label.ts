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
