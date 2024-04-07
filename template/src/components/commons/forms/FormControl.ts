import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

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
        `
    ];

    render() {
        return html`
            <app-label><slot></slot></app-label>
            <app-input type="${this.type}" placeholder="${this.placeholder}"></app-input>
        `;
    }
}
