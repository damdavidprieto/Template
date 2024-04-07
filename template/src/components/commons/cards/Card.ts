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
                padding: 10px 10px 10px 10px;
                background-color: var(--primary-color);
                box-shadow: var(--box-shadow);
                width:fit-content;
                gap:1rem;
                display:flex;
                flex-direction:column;
                min-width:50%;
            }
            app-title{
                border-radius: 10px;
                background-color: #006907b6;
            }
            @media (min-width: 700px) {
                :host {
                    min-width: 40%;
                }
            }
            @media (min-width: 1200px) {
                :host {
                    min-width: 30%;
                }
            }
            @media (min-width: 1600px) {
                :host {
                    min-width: 20%;
                }
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
