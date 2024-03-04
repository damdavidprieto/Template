import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-intput')
export class Intput extends LitElement {
    @property({type:String})
    type!: "text";

    @property({type:String})
    placeholder = "" ;

    static styles = [
        css`
            :host {
                display: flex;
            }
            input {
                border-radius: 5px;
                border: 1px solid #d20101;
            }
            input:hover{
                border: 1px solid #fa0000;
            }
            input:focus{
                outline: none;
                border: 1px solid #fa0000;
                box-shadow: 0 0 10px #fa0000;
            }
        `
    ];

    render() {
        return html`
            <input type="${this.type}" placeholder="${this.placeholder}">
        `;
    }
}
