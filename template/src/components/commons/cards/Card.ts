import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';
import { constantStyles } from '../../../styles/ConstantStyles';
import { colorStyles } from '../../../styles/ColorStyles';

@customElement('app-card')
export class Card extends LitElement {
    static styles = [
        colorStyles,
        constantStyles,
        css`
            :host {
                border-radius: 20px;
                padding: 15px 30px 30px 30px;
                background-color: var(--primary-color);
                box-shadow: var(--box-shadow);
                width:fit-content;
                gap:1rem;
                display:flex;
                flex-direction:column;
                min-width:30%;
            }
        `,
        classStyles
    ];

    @property()
    titleCard: string = '';
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 3;

    render() {
        return html`
            <app-title class="center f" level="${this.level}">${this.titleCard}</app-title>
            <app-container class="f column">
                <slot></slot>
            </app-container>
        `;
    }
}
