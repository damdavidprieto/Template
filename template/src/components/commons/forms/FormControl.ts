import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-form-control')
export class FormControl extends LitElement {
    @property({type:String})
    type!: "text" | "radio" | "file" | "range" | "checkbox" | "password" | "email" | "number" | "date" | "datetime-local" | "month" | "week" | "color";

    @property({type:String})
    placeholder = "" ;
    static styles = [
        css`
            :host {
                display: block;
            }
            :host([type="checkbox"]) {
                display: flex;
                flex-direction: row;
            }
            :host([type="checkbox"]) app-input {
                width: auto;
            }
        `
        ,
        classStyles
    ];

    render() {
        if(this.type === "checkbox"){
            return html`
                <app-input class="w-auto" type="${this.type}" placeholder="${this.placeholder}"></app-input>
                <app-label><slot></slot></app-label>
            `;
        }else{
            return html`
                <app-label><slot></slot></app-label>
                <app-input type="${this.type}" placeholder="${this.placeholder}"></app-input>
            `;
        }
    }
}
