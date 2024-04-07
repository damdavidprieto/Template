import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-form-info')
export class FormInfo extends LitElement {
    @property()
    public infoLabel: string = '';

    static styles = [
        css`
            :host {
              display: flex;
              flex-direction: row;
            }
        `,
        classStyles
    ];

    render() {
        return html`
            ${this.infoLabel !== '' 
                ? html`<app-label>${this.infoLabel}:</app-label>`
                : html``}
            <app-label><slot></slot></app-label>
        `;
      }
}
