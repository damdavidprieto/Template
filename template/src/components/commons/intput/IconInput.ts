import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-icon-input')
export class IconIntput extends LitElement {
    @property({type:String})
    type!: "text";

    @property({type:String})
    placeholder = "" ;

    static styles = [
        css`
            :host {
                display: flex;
                min-height: 30px;               
            }
            :host(.w-auto) input{
                width: auto;              
            }
            input {
                border-radius: 5px;
                border: 1px solid #d20101;
                width: 100%;
                border-top-right-radius: 0px;
                border-bottom-right-radius: 0px;
            }
            input:hover{
                border: 1px solid #fa0000;
            }
            input:focus{
                outline: none;
                border: 1px solid #fa0000;
                box-shadow: 0 0 10px #fa0000;
            }
            button{
                border: 0px none;
                background-color: #9b9b9b;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        `,
        classStyles
    ];

    render() {
        return html`
            <input type="${this.type}" placeholder="${this.placeholder}">
            <button>
                <slot></slot>
            </button>
        `;
    }
}
