import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-button')
export class Button extends LitElement {

    @property()
    text: string = '';

    static styles = [
        css`
            :host {
                display: block;
            }
            button {
                background-color:#979797;
                border-radius: 5px;
                padding: 5px 10px;
                width: fit-content;
                border:0px;
                cursor: pointer;
                box-shadow: 0px 0px 5px 0px #0000003c;
            }
            button:hover {
                background-color:#6b6b6b;
                box-shadow: 0px 0px 5px 0px #000000c5;
                transform: scale(1.05);
            }
            button:active {
                background-color:#414141;
                box-shadow: 0px 0px 5px 0px #000000c5;
                transform: scale(.95);
            }
            :host(.success) button {
                background-color:#2ebe02;
            }
            :host(.success:hover) button {
                background-color:#249501;
            }
            :host(.success:active ) button {
                background-color:#196901;
            }
            :host(.info) button {
                background-color:#021bbe;
            }
            :host(.info:hover) button {
                background-color:#021591;
            }
            :host(.info:active ) button {
                background-color:#02106b;
            }
            :host(.warning) button {
                background-color:#abbe02;
            }
            :host(.warning:hover) button {
                background-color:#899801;
            }
            :host(.warning:active ) button {
                background-color:#626d01;
            }
            :host(.error) button {
                background-color:#be0202;
            }
            :host(.error:hover) button {
                background-color:#9d0202;
            }
            :host(.error:active ) button {
                background-color:#7b0202;
            }
        `
    ];

    render() {
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }
}
