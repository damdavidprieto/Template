import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../Components';
import { colorStyles } from '../../../styles/ColorStyles';
import { constantStyles } from '../../../styles/ConstantStyles';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-contextual-menu-item')
export class ContextualMenuItem extends LitElement {
    static styles = [
        colorStyles,
        constantStyles,
        css`
            :host {
                display: block;
                color:white;
                border: 1px solid green;
                padding: 5px;
            }
            `,
        classStyles
    ];

    render() {
        return html`<a><slot></slot></a>`;
    }
}
