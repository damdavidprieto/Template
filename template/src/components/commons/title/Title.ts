import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-title')
export class Title extends LitElement {
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 1;

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    private getHeaderElement() {
        switch (this.level) {
            case 1:
                return html`<h1><slot></slot></h1>`;
            case 2:
                return html`<h2><slot></slot></h2>`;
            case 3:
                return html`<h3><slot></slot></h3>`;
            case 4:
                return html`<h4><slot></slot></h4>`;
            case 5:
                return html`<h5><slot></slot></h5>`;
            default:
                return html`<h1><slot></slot></h1>`;
        }
    }

    render() {
        return this.getHeaderElement();
    }
}
