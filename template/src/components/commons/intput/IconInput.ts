import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';
import { colorStyles } from '../../../styles/ColorStyles';
import { constantStyles } from '../../../styles/ConstantStyles';

@customElement('app-icon-input')
export class IconIntput extends LitElement {
    @property({type:String})
    type!: "text";

    @property({type:String})
    placeholder = "" ;

    static styles = [
        colorStyles,
        constantStyles,
        css`
            :host {
                display: flex;
                min-height: 30px; 
                width: 100%;              
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
                border: 1px solid transparent;
                background-color: var(--button-default-color);
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
            button:hover{
                background-color:var(--button-default-hover-color);
                box-shadow: 0 0 5px #fa0000;
                border:var(--border-green);
            }
            button:active{
                background-color:var(--button-default-active-color);
                box-shadow: 0 0 20px #fa0000;
                border:var(--border);
                transform: scale(.98);
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
