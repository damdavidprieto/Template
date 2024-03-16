import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-legend')
export class Legend extends LitElement {
    @property()
    legend: string = '';
    
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <fieldset>
                <legend>${this.legend}</legend>
                <slot></slot>
            </fieldset>
        `;
    }
}
