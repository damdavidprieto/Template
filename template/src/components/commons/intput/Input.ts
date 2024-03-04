import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-input')
export class Intput extends LitElement {
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
            }
            input:hover{
                border: 1px solid #fa0000;
            }
            input:focus{
                outline: none;
                border: 1px solid #fa0000;
                box-shadow: 0 0 10px #fa0000;
            }
        `,
        classStyles
    ];

    render() {
        return html`
            <input type="${this.type}" placeholder="${this.placeholder}">
        `;
    }
}
