import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../label/Label';
import { classStyles } from '../../../styles/ClassStyles';
import { btnClases } from '../../../styles/BtnClassStyles';
import { colorStyles } from '../../../styles/ColorStyles';
import { constantStyles } from '../../../styles/ConstantStyles';

@customElement('app-button')
export class Button extends LitElement {
    static styles = [
        colorStyles,
        constantStyles,
        css`
            :host {
                display: flex;
                width: 100%;
            }
            :host(.bold) app-label {
                font-weight: bold;
            }
            button {
                background-color:var(--button-default-color);
                box-shadow: var(--box-shadow-light-min);
                border-radius: var(--border-radius-min);
                padding: var(--padding);
                //width: fit-content;
                width: 100%;
                cursor: pointer;
                border:1px solid transparent;
                justify-content: center;
                align-items: center;
                display: flex;
            }
            button:hover {
                background-color:var(--button-default-hover-color);
                box-shadow:var(--box-shadow-min);
                border:var(--border-green);
                //transform: scale(1.05); no me gusta el escalado arriba para el boton
            }
            button:active {
                background-color:var(--button-default-active-color);
                box-shadow:var(--box-shadow-min);
                border:var(--border);
                transform: scale(.98);
            }
        `,
        classStyles,
        btnClases
    ];

    render() {
        return html`
            <button>
                <app-label>
                    <slot></slot>
                </app-label>
            </button>
        `;
    }
}
