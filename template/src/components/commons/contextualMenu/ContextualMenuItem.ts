import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../Components';

@customElement('app-contextual-menu-item')
export class ContextualMenuItem extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
