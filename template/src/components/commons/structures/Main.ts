import { LitElement, html, css } from 'lit';
import { customElement,property } from 'lit/decorators.js'

@customElement('app-main')
export class Main extends LitElement {
    @property()
    maxHeight : string = '';

    static styles = [
        css`
            :host {
                display: block;              
            }
            main{
                overflow: auto;
                padding-inline: 5px;
                max-height: 80vh;
            }
        `
    ];

    updated(changedProperties: Map<PropertyKey | string | number, unknown>): void {
        super.updated(changedProperties);
        const main = this.shadowRoot?.querySelector('main') as HTMLElement;
        if (changedProperties.has('maxheight') && main) {
            console.log('maxheight', this.maxHeight);
            console.log('main', main.style);
            main.style.maxHeight = this.maxHeight;
        }
    }

    render() {
        return html`
            <main>
                <slot></slot>
            </main>
        `;
    }
}
