import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-form')
export class Form extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap:1rem;
            }
        `,
        classStyles
    ];

    render() {
        return html`<slot></slot>`;
    }
}
